import express from 'express'
import ongController from '../controllers/ongController.js'
// const express = require('express');

// const mainController = require('../controllers//mainController');

const ongRouter = express.Router();

// ---- Rutas dedicadas para navegacion general ---- //
ongRouter.get('/', ongController.index);

// module.exports = router
export default ongRouter