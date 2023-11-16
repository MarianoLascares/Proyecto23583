const mainControllers = {
    home: (req, res) => res.send('Ruta para la Vista de Home'),
    contact: (req, res) => res.send('Ruta para la Vista de Contact'),
    about: (req, res) => res.send('Ruta para la Vista de About'),
    faqs: (req, res) => res.send('Ruta para la Vista de Faqs')
}

module.exports = mainControllers