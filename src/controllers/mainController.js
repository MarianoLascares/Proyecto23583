const fs = require('fs')
const modelos = require('../models/items.js')

const mainControllers = {
    home: async (req, res) => {
        const licences = await modelos.getAllCollections()
        const funkosSlide = await modelos.getSliderFunkos()
        res.render('index', {
            title: 'Tienda Funko',
            licences: licences,
            slider: funkosSlide
        })
    },
    contact: (req, res) => {
        res.render('../views/pages/shop/contact',{
            title: "Contacto"
        })
    },
    about: (req, res) => res.send('Ruta para la Vista de About'),
    faqs: (req, res) => res.send('Ruta para la Vista de Faqs')
}

module.exports = mainControllers