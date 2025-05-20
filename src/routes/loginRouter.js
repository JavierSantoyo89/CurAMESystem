import express from 'express'
// const express = require('express');
import loginController from '../controllers/loginController.js'

const loginRouter = express.Router()

// ---- Rutas dedicadas para navegacion general ---- //
loginRouter.get('/', loginController.index)

// module.exports = router
export default loginRouter
