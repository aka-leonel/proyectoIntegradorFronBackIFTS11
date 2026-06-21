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
        if(!notaEncontrada) {
            return []
        }
        return [notaEncontrada]
    } catch (error) {
        console.log('Error en getNotaByIdRepository: ', error)
    }
}

// exports.createNotaRepository = ...

// exports.updateNotaRepository = ...

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
