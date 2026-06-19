const notasService = require('../services/notasService.js')

// exports.getNotasController = ...

// exports.getNotaByIdController = ...

// exports.createNotaController = ...

// exports.updateNotaController = ...
exports.updateNotaController = async (req, res) => {
    try {
        const id = req.params.id
        const datos = req.body
        const nota = await notasService.updateNotaService(id, datos)
        if(nota.length === 0) {
            return res.status(404).send({
                message: "La nota a actualizar no fue encontrada"
            })
        }
        res.status(200).send(nota)
    } catch (error) {
        console.log("Error en updateNotaController: ", error)
        res.status(500).send({
            code: 500,
            message: "Error al actualizar la nota"
        })
    }
}
// exports.deleteNotaController = ...
