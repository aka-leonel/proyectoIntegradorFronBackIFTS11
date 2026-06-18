const express = require('express')
const notasRouter = express.Router()
const notasController = require('../controllers/notasController.js')

// GET all
// GET por id
// POST
// PUT por id
notasRouter.delete('/:id', notasController.deleteNotaController)

module.exports = notasRouter
