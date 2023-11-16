const mainControllers = {
    shop: (req, res) => res.send('Ruta para la Vista de shop'),
    searchItem: (req, res) => res.send(`buscar, encontrar y recibir de item id ${req.params.id}`),
    addToCart: (req, res) => (req, res) => res.send(`agrega el item id ${req.params.id} al carrito`),
    cart: (req, res) => res.send('Ruta para la Vista de Carrito'),
    checkout: (req, res) => res.send('Ir a la pagina Checkout')
}

module.exports = mainControllers