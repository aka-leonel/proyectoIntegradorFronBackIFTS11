const express = require('express')
const notasRouter = express.Router()
const notasController = require('../controllers/notasController.js')

// GET all
router.get('/', controller.getNotas);
// GET por id
// POST
// PUT por id
// DELETE por id

module.exports = notasRouter
