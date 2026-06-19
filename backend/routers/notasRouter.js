const express = require('express')
const notasRouter = express.Router()
const notasController = require('../controllers/notasController.js')

// GET all
router.get('/', controller.getNotas);

// GET por id
router.get('/:id', controller.getNota);

// POST
// PUT por id
// DELETE por id

module.exports = notasRouter
