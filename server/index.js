const express = require('express')
const cors = require('cors')
const sequelize = require('./storage/database')
const router = require('./routers/index')

const start = async () => {
    try {
        const app = express()
        app.use(cors())
        app.use(express.json())
        await sequelize.authenticate()
        await sequelize.sync()

        app.use('/', router)

        app.listen(5000, () => console.log("Server running"))
    } catch (e) {
        console.log(e);
    }
}

start()