'use strict'

const express = require('express')
const ReceptorCt = require('../controllers/Receptor')
const api = express.Router()


api.get('/receptores', ReceptorCt.devolverReceptores)
api.post('/receptor', ReceptorCt.crearReceptor)
api.post('/enviar', ReceptorCt.enviarCorreo)

module.exports = api