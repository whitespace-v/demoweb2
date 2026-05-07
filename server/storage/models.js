const { INTEGER, STRING } = require('sequelize')
const sequelize = require('./database')

// const Product = sequelize.define('product', {
//     id: {type: INTEGER, primaryKey: true, autoIncrement: true},
//     name: {type: STRING},
//     price: {type: INTEGER}
// })

// const ApparelSize = sequelize.define('apparel_size', {
//     id: {type: INTEGER, primaryKey: true, autoIncrement: true},
//     code: {type: INTEGER},
//     order: {type: INTEGER}
// })

// const ProductCategory = sequelize.define('product_category', {
//     id: {type: INTEGER, primaryKey: true, autoIncrement: true},
// })

// const ProductColor = sequelize.define('product_color', {
//     id: {type: INTEGER, primaryKey: true, autoIncrement: true},
// })

// const Color = sequelize.define('color', {
//     id: {type: INTEGER, primaryKey: true, autoIncrement: true},
//     code: {type: INTEGER},
//     order: {type: INTEGER}
// })

// const Category = sequelize.define('category', {
//     id: {type: INTEGER, primaryKey: true, autoIncrement: true},
//     code: {type: INTEGER},
//     order: {type: INTEGER}
// })

// // связи

// Product.hasMany(ApparelSize)
// ApparelSize.belongsTo(Product)

// Product.hasMany(ProductCategory)
// ProductCategory.belongsTo(Product)

// ProductCategory.hasOne(Category)
// Category.belongsTo(ProductCategory)

// Product.hasMany(ProductColor)
// ProductColor.belongsToMany(Product)

// ProductColor.hasMany(Color)
// Color.belongsTo(ProductColor)



// 
const User = sequelize.define('user', {
     id: {type: INTEGER, primaryKey: true, autoIncrement: true},
     login: {type: STRING, unique: true},
     pwd: {type: STRING},
     fio: {type: STRING},
     email: {type: STRING},
     phone: {type: STRING}
})

const Order = sequelize.define('order', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: INTEGER},
    addres: {type: STRING},
    contacts: {type: STRING},
    time: {type: STRING},
    licenseSerial: {type: STRING},
    licenseNumber: {type: STRING},
    licenseIssued: {type: STRING},
    make: {type: STRING}, 
    model: {type: STRING}
})

User.hasMany(Order, {as: "orders"})
Order.belongsTo(User)

module.exports = {
    User, Order
}