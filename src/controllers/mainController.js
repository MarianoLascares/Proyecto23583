const fs = require('fs')

const mainControllers = {
    //home: (req, res) => res.send('Ruta para la Vista de Home'),
    home: (req, res) => {
        res.render('index', {
            title: 'Tienda Funko'
        })
    },
    //contact: (req, res) => res.send('Ruta para la Vista de Contact'),
    contact: (req, res) => {
        res.render('../views/pages/shop/contact')
    },
    about: (req, res) => res.send('Ruta para la Vista de About'),
    faqs: (req, res) => res.send('Ruta para la Vista de Faqs')
}

module.exports = mainControllers