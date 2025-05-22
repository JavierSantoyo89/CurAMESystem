import dotenv from 'dotenv'
import express from 'express'
import mainRouter from './routes/mainRouter.js'
import loginRouter from './routes/loginRouter.js'
import ongRouter from './routes/ongRouter.js'
import patientRouter from './routes/patientRouter.js'
import stadisticRouter from './routes/stadisticRouter.js'
import corsMiddleware from './middleware/cors.js'
import rateLimit from './middleware/rateLimit.js'

const dateActual = new Date()
dotenv.config()
const app = express()

// ------- Global Middlewares ------- //
app.use(corsMiddleware())
app.use(rateLimit()) // limited ip calls
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.disable('x-powered-by') // ------ Deshabilita el mostrar express ----- //
app.use(express.urlencoded({ extended: false})); // convierte el form a objeto literal
app.use(express.json()); // convierte a JSON

// ------- Ruta para hacer publica la carpeta "public" ------- //
app.use(express.static("./src/public"));

// ------- Direcciones raises de los proyectos ------- //
app.use("/", mainRouter);
app.use("/login",loginRouter)
app.use("/patient", patientRouter);
app.use("/ong", ongRouter);
app.use('stadistic', stadisticRouter);

app.use((req, res) => {
  res.status(404).send("Endpoint wrong, sorry can't find that!")
})


// ------- levantar servidor ------- //
const PORT = process.env.PORT || 1689
app.listen(PORT, () => {
	console.log(`server online http://localhost:${PORT}/`)
	console.log(`Hora: ${new Date().toLocaleTimeString()} Fecha: ${new Date().toLocaleDateString()}`)
	console.log(`Hora del sistema: ${dateActual}`)
})