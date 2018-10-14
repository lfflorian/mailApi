var mailer = require('nodemailer')
var config = require('../config')


function enviarCorreo(correo, asunto, mensaje) {

    const mail = new Promise((resolve, reject) => {
        var transporte = mailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.mailUser,
                pass: config.mailPass
            }
        })
    
        const OpcionMail = {
            from: config.mailUser,
            to: correo,
            subject: asunto,
            text: mensaje
        }
    
        transporte.sendMail(OpcionMail, function(err, info) {
            if (err) {
                reject({
                    mensaje: 'No se pudo enviar el correo, el error es: ' + err 
                })
            }
            resolve({
                mensaje : 'correo enviado'
            })
        })
    })
    
    return mail;
}

module.exports = {
    enviarCorreo
}