const express = require('express')
const notasRouter = express.Router()
const notasController = require('../controllers/notasController.js')

// GET all
notasRouter.get('/', notasController.getNotas);

// GET por id
notasRouter.get('/:id', notasController.getNota);

// POST
// PUT por id
// DELETE por id

module.exports = notasRouter
