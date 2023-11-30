const modelos = require('../models/items.js')

const mainControllers = {
    shop: async (req, res) => {
        const funkos = await modelos.getAllFunkos()
        res.render('../views/pages/shop/shop.ejs', {
            title: 'Shop',
            objetos: funkos
        })
    },
    searchItem: async (req, res) => {
        const id = req.params.id;
        const funkosSlide = await modelos.getSliderFunkosRelacionados(id)
        const funko = await modelos.getFunkoId(id)
        console.log(funko)
        res.render('../views/pages/shop/item.ejs', {
            title: 'Item',
            funko: funko,
            slider: funkosSlide
        })
    },
    addToCart: (req, res) => (req, res) => res.send(`agrega el item id ${req.params.id} al carrito`),
    cart: (req, res) => {
        res.render('../views/pages/shop/cart.ejs', {
            title: 'Cart'
        })
    },
    checkout: (req, res) => res.send('Ir a la pagina Checkout')
}

module.exports = mainControllers