const jwt = require("jsonwebtoken")
const {User, Order} = require("../storage/models")

class UserController {
    static async edit(req,res,next) {
        try {
            const {id, reason, status} = req.body
            await Order.update(
                { reason, status },
                {where: id }

            )     
        } catch (error) {
            console.log(error);
            res.json({status: 500, message: "Smth bad"}) 
       
        }
    }
    static async getAll(req,res,next) {
        try {
            const data = await User.findAll({
                include: [
                    {model: Order, as: 'orders'}
                ]
            })
            if (data) {
                res.json({status: 200, data})
            }
        } catch (error) {
            console.log(error);
            res.json({status: 500, message: "Smth bad"}) 
        }
    }
    static async signin (req,res,next) {
        try {
            const {login, pwd} = req.body
            if (!login || !pwd) {
                res.json({status: 500, message: "некорректное поле"})
                return
            }
              const user = await User.findOne({
                where: {login}
            })

            if (user && user.pwd == pwd) {
                    res.json({
                    status: 200, 
                    token: jwt.sign({login, id: user.id}, "secret", {expiresIn: '24h'})
                })
            } else {
                res.json({status: 500, message: "некорректные данные"})
                return
            }
        } catch (error) {
            console.log(error);
            res.json({status: 500, message: "Smth bad"}) 
        }
    }
    static async signup (req, res, next) {
        try {
            const {login, fio, pwd, email, phone} = req.body
            if (!login || !fio || !pwd || !email || !phone){
                  res.json({status: 500, message: "некорректное поле"})
                  return
            }
            const user = await User.findOne({
                where: {login}
            })
            if (user) {
                res.json({message: "login is busy", status: 501})
                return
            } else{
                const newuser = await User.create({
                    login, fio, pwd, email, phone
                })
                res.json({
                    status: 200, 
                    token: jwt.sign({login, id: newuser.id}, "secret", {expiresIn: '24h'})
                })
            }
        } catch (error) {
            console.log(error)
            res.json({status: 500, message: "Smth bad"})
        }
    }
    static async createOrder (req,res,next) {
        try {
            const {addres, contacts, time, licenseSerial, licenseNumber, licenseIssued, make, model, token} = req.body
            if (!addres || !contacts || !time || !licenseSerial || !licenseNumber || !licenseIssued || !make || !model || !token) {
                res.json({status: 500, message: "некорректное поле"})
            }
            await Order.create({
                addres, contacts, time, licenseSerial, licenseNumber, licenseIssued, make, model, userId: jwt.verify(token, "secret").id
            })
        } catch (error) {
            console.log(error)
            res.json({status: 500, message: "Smth bad"}) 
        }
    }
    static async getOrders (req, res, next) {
        try {
            const {token} = req.params
            const orders = await Order.findAll({where: {userId: jwt.verify(token, "secret").id}})
             res.json({status: 200, orders}) 
        } catch (error) {
             console.log(error)
            res.json({status: 500, message: "Smth bad"})            
        }
    }
}
module.exports = UserController