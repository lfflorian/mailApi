'use strict'

const Receptor = require('../models/Receptor')
const mailer = require('../services/mail')

function crearReceptor(req, res) {
    let receptor = new Receptor()
    receptor.nombre = req.body.nombre
    receptor.correo = req.body.correo

    receptor.save((err, receptorAlmacenado) => {
        if (err) res.status(500).send({ mensaje: 'No se pudo almacenar el receptor, el error es: ' + err})
        
        res.status(200).send({ receptor: receptorAlmacenado })
    })
}

function devolverReceptores(req, res) {
    Receptor.find({}, (err, receptores) => {
        if (err) res.status(500).send({ mensaje: 'No se pudo obtener los receptores, el error es: ' + err})
        
        res.status(200).send( receptores )
    })
}

function enviarCorreo(req, res) {
    let correo = req.body.correo
    let mensaje = req.body.mensaje
    let asunto = req.body.asunto

    mailer.enviarCorreo(correo, mensaje, asunto).then(response => {
        res.status(200).send(response)
    }).catch(response => {
        res.status(500).send(response)
    })
}


module.exports = {
    crearReceptor,
    devolverReceptores,
    enviarCorreo
}