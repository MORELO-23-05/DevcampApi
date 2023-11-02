const express = require('express')
const bootcampModel = require('../models/bootcampsModel')

//Definir ruteador
const router = express.Router()

//Definir rutas de bootcamps
//con el ruteador
//Estas son para traer todos los bootcamps
router.get('/', async (req, res) => {
    
    //Seleccionar todos los
    //bootcamps en la collection
    const bootcamps = await bootcampModel.find()
    res.json({
        success: true,
        result: bootcamps
    })
}
)

//Seleccionar bootcamp por id
router.get('/:id', async(req , res) =>{
    //Recoger el parametro id por la url
    bootcampid = req.params.id
    //Seleccionar el bootcamp por id 
    select_bootcamp = await bootcampModel.findById(bootcampid)
    //Enviar respuesta
    res.json({
        success: true,
        result: select_bootcamp
    })
})

//Crear bootcamp
router.post('/', async (req, res) => {
    const new_bootcamp = await bootcampModel.create(req.body)
    res.json({
        success: true,
        result: new_bootcamp
    })
})

//Expotar ruteador
module.exports = router