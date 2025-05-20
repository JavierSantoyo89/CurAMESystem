import dotenv from 'dotenv'
import express from 'express'
import cors from './middleware/cors.js'
import mainRoutes from './routes/main.js'
const dateActual = new Date()
dotenv.config()

const app = express()


// ------- Global Middlewares ------- //
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.disable('x-powered-by') // ------ Deshabilita el mostrar express ----- //
app.use(express.urlencoded({ extended: false})); // convierte el form a objeto literal
app.use(express.json()); // convierte a JSON
// ------- Ruta para hacer publica la carpeta "public" ------- //
app.use(express.static("./src/public"));



// ------- Direcciones raises de los proyectos ------- //
app.use("/", mainRoutes);
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