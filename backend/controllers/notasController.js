const notasService = require('../services/notasService.js')

// GET todas las notas
exports.getNotas = async (req, res) => {
  try {
    const notas = await Nota.find();
    res.json(notas);
  } catch (err) { res.status(500).json({ error: 'Error al obtener notas' }); }
};

// GET por id
exports.getNota = async (req, res) => {
  try {
    const nota = await Nota.findById(req.params.id);
    if (!nota) return res.status(404).json({ error: 'No encontrada' });
    res.json(nota);
  } catch (err) { res.status(500).json({ error: 'Error' }); }
};
