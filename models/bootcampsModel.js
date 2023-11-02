const mongoose = require('mongoose')

//Definir el esquema plano
//de todos los bootcamps
const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Nombre requerido"],
        unique: [true, "Nombre repetido"]
    },
    phone:{
        type: Number,
        required:[true, "Telefono requerido"],
        maxlength:[10, "Telefono muy largo"]
    },
    address:{
        type: String,
        required:[true, "Direccion requerido" ],
        maxlength:[50, "Direccion muy largo"],
        minlength:[10, "Direccion muy corta"]
    },
    topics:{
        type: [String],
        enum: [
        "AI", 
        "Backend",
        "Frontend", 
        "Devops"
    ]
    },
    createAt:{
        type: Date
    }
})

//Exportar el modelo
const bootcampModel = mongoose.model("Bootcamp",
                    bootcampSchema)

 module.exports = bootcampModel