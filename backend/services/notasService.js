const notasRepository = require('../repositories/notasRepository.js')

// exports.getNotasService = ...

// exports.getNotaByIdService = ...

// exports.createNotaService = ...

// exports.updateNotaService = ...
exports.updateNotaService = async (id, datos) => {
    try {
        return await notasRepository.updateNotaRepository(id, datos)
    } catch (error) {
        console.log("Error en updateNotaService: ", error)
    }
}

// exports.deleteNotaService = ...
