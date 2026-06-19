const { conectarDB } = require('../database/conexion.js')
const Nota = require('./model/Nota.js')
conectarDB();

// exports.getNotasRepository = ...

// exports.getNotaByIdRepository = ...

// exports.createNotaRepository = ...

// exports.updateNotaRepository = ...
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

// exports.deleteNotaRepository = ...
