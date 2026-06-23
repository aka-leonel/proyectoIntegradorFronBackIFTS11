const express = require('express')
const notasRouter = express.Router()
const notasController = require('../controllers/notasController.js')

notasRouter.get('/', notasController.getNotasController);
notasRouter.get('/:id', notasController.getNotaByIdController);
notasRouter.post('/', notasController.createNotaController);
notasRouter.put('/:id', notasController.updateNotaController)
notasRouter.delete('/:id', notasController.deleteNotaController)

module.exports = notasRouter
