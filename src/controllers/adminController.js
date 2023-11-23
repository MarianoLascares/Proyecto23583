const mainControllers = {
    admin: (req, res) => res.send('Ruta para la Vista de Admin'),
    getCreate: (req, res) => (req, res) => res.send(`buscar, encontrar y recibir de usuario id ${req.params.id}`),
    postCreate: (req, res) => (req, res) => res.send(`agrega el Usuario`),
    getEdit: (req, res) => res.send('Ruta para la Vista de Carrito'),
    postEdit: (req, res) => res.send(`Modifica el usuario con id ${req.params.id}`),
    delete: (req, res) => res.send(`Elimina el usuario con el id ${req.params.id}`)
}

module.exports = mainControllers