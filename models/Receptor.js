'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReceptorSchema = Schema({
    nombre: String,
    correo: { type: String, unique: true, lowercase: true }
})


module.exports = mongoose.model('Usuario', ReceptorSchema)