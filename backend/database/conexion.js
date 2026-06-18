const mongoose = require('mongoose');
const { configDB } = require('./config.js')

exports.conectarDB = async () => {
    try {
        await mongoose.connect(configDB.uri)
        console.log("MongoDB conectado correctamente.")
    } catch (error) {
        console.log("Error de conexión: ", error)
        process.exit(1)
    }
}
