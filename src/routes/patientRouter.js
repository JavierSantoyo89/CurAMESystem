import express from 'express'
// const express = require('express');

// const mainController = require('../controllers//mainController');
import patientController from '../controllers/patientController.js'
const patientRouter = express.Router();

// ---- Rutas dedicadas para navegacion general ---- //
patientRouter.get('/', patientController.index);

// module.exports = router
export default patientRouter