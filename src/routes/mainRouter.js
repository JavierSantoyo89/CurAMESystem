import express from 'express'
// const express = require('express');

// const mainController = require('../controllers//mainController');
import mainController from '../controllers/mainController.js'

const mainRouter = express.Router();

// ---- Rutas dedicadas para navegacion general ---- //
mainRouter.get('/', mainController.index);

// module.exports = router
export default mainRouter