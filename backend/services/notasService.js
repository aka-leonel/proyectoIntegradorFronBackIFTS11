const notasRepository = require('../repositories/notasRepository.js')

// exports.getNotasService = ...

// exports.getNotaByIdService = ...

// exports.createNotaService = ...

// exports.updateNotaService = ...

exports.deleteNotaService = async (id) => {
    try {
        return await notasRepository.deleteNotaRepository(id)
    } catch (error) {
        console.log("Error en deleteNotaService: ", error)
    }
}
