const Router = require("express")
const UserController = require("../controllers/userController")

const router = new Router()

router.post("/signup", UserController.signup)
router.post("/create-order", UserController.createOrder)
router.get('/get-orders/:token', UserController.getOrders)
// router.post("/signin", UserController.signin)

module.exports = router