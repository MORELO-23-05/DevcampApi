const mongoose = require('mongoose')

const conectarDB = async () => {
   const conn = await mongoose.connect(
    'mongodb://127.0.0.1:27017/devcamp_ptech'
    )
    console.log("!MongoDB conectado.¡".bgCyan.white.underline)
}

module.exports = conectarDB