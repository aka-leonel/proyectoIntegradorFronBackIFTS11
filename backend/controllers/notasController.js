const notasService = require('../services/notasService.js')

// exports.getNotasController = ...

// exports.getNotaByIdController = ...

// exports.createNotaController = ...

// exports.updateNotaController = ...

exports.deleteNotaController = async (req, res) => {
    try {
        const id = req.params.id
        const nota = await notasService.deleteNotaService(id)
        if(nota.length === 0) {
            return res.status(404).send({
                message: "La nota a eliminar no fue encontrada"
            })
        }
        res.status(200).send(nota)
    } catch (error) {
        console.log("Error en deleteNotaController: ", error)
        res.status(500).send({
            code: 500,
            message: "Error al eliminar la nota"
        })
    }
}
