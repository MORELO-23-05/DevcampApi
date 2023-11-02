//Dependencias del proyecto
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//Dependencia de conexion:
const conectarDB = require("./config/db")

//Dependencias de rutas
const bootcampsRoutes = require('./routes/bootcampRoutes')

//Configurar dotenv
dotenv.config({
    path: "./config/.env"
})

//Conectar a BD
conectarDB()

//Crear objeto express
const app = express()

//Habilitar express formato json
app.use(express.json())

//Establecer rutas del proyecto
app.use('/api/v1/bootcamps', 
        bootcampsRoutes
        )

//Crear el servidor de 
//aplicaciones express
app.listen(process.env.PUERTO, 
    () => {
        console.log(`!Servidor express ejecutando.¡ ${process.env.PUERTO}`.bgBlack.yellow.underline)
}
)