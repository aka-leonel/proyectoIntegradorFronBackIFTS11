const express = require('express')
const notasRouter = express.Router()
const notasController = require('../controllers/notasController.js')

notasRouter.get('/', notasController.getNotasController);
notasRouter.get('/:id', notasController.getNotaByIdController);
// POST
// PUT por id
// DELETE por id

module.exports = notasRouter
