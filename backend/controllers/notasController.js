const notasService = require('../services/notasService.js')

exports.getNotasController = async (req, res) => {
  try {
    const notas = await notasService.getNotasService();
    if(notas.length === 0) {
      return res.status(404).send({
        message: "No se encontraron notas"
      })
    }
    res.status(200).send(notas);
  } catch (err) { res.status(500).json({ error: 'Error al obtener notas' }); }
};

exports.getNotaByIdController = async (req, res) => {
  try {
    const id = req.params.id
    const nota = await notasService.getNotaByIdService(id);
    if (nota.length === 0) {
      return res.status(404).json(
        { message: 'No se encontró la nota' }
      )
    };
    res.status(200).send(nota);
  } catch (err) { res.status(500).json({ error: 'Error' }); }
};

// exports.createNotaController = ...

// exports.updateNotaController = ...

// exports.deleteNotaController = ...
