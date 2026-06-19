const notasService = require('../services/notasService.js')

// GET todas las notas
exports.getNotas = async (req, res) => {
  try {
    const notas = await Nota.find();
    res.json(notas);
  } catch (err) { res.status(500).json({ error: 'Error al obtener notas' }); }
};

