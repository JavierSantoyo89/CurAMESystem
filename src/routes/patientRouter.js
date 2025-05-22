import express from 'express'
// const express = require('express');

// const mainController = require('../controllers//mainController');
import patientController from '../controllers/patientController.js'
const patientRouter = express.Router();

// ---- Rutas dedicadas para navegacion general ---- //
patientRouter.get('/v1/', patientController.index);
patientRouter.put('/v1/:id', patientController.index);
patientRouter.delete('/v1/:id', patientController.index);

// module.exports = router
export default patientRouter