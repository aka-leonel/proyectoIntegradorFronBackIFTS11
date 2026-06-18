const { conectarDB } = require('../database/conexion.js')
const Nota = require('./model/Nota.js')
conectarDB();

// exports.getNotasRepository = ...

// exports.getNotaByIdRepository = ...

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
