import express from 'express'
// const express = require('express');
import stadisticController from '../controllers/stadisticController.js'

const stadisticRouter = express.Router()

// ---- Rutas dedicadas para navegacion general ---- //
stadisticRouter.get('/', stadisticController.index)

// module.exports = router
export default stadisticRouter
