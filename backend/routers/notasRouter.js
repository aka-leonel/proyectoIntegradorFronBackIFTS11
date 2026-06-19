const express = require('express')
const notasRouter = express.Router()
const notasController = require('../controllers/notasController.js')

// GET all
// GET por id
// POST
// PUT por id
notasRouter.put('/:id', notasController.updateNotaController)
// DELETE por id

module.exports = notasRouter
