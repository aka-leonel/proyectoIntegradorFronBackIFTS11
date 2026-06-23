const { conectarDB } = require('../database/conexion.js')
const Nota = require('./model/Nota.js')
conectarDB();

exports.getNotasRepository = async () => {
    try {
        const notasEncontradas = await Nota.find()
        if(!notasEncontradas) {
            return []
        }
        return notasEncontradas
    } catch (error) {
        console.log('Error en getNotasRepository: ', error)
    }
}

exports.getNotaByIdRepository = async (id) => {
    try {
        const notaEncontrada = await Nota.findById(id).lean()
        return notaEncontrada
    } catch (error) {
        console.log('Error en getNotaByIdRepository: ', error)
    }
}

// exports.createNotaRepository = ...

exports.updateNotaRepository = async (id, datos) => {
    try {
        const notaActualizada = await Nota.findByIdAndUpdate(id, datos, { new: true })
        if(!notaActualizada) {
            return []
        }
        return notaActualizada
    } catch (error) {
        console.log("Error en updateNotaRepository: ", error)
    }
}

exports.deleteNotaRepository = async (id) => {
    try {
        const notaEncontrada = await Nota.findByIdAndDelete(id)
        if(!notaEncontrada) {
            return []
        }
        return notaEncontrada
    } catch (error) {
        console.log("Error en deleteNotaRepository: ", error)
    }
}
