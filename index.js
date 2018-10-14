'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, { useNewUrlParser: true }, (err, res) => {
    if (err) {
        console.log('Hubo un error en la conexión a la base de datos: ' + err)
    }
})

app.listen(config.port, () => {
    console.log('Aplicación en puerto: ' + config.port)
})