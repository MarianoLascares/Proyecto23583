const modeelos = require('../models/items.js')

const mainControllers = {
    //shop: (req, res) => res.send('Ruta para la Vista de shop'),
    /*shop: (req, res) => {
        res.render('../views/pages/shop/shop.ejs', {
            title: 'Shop',
            objetos: [
                {
                "product_id": 1,
                "licence_name": "Pokemon",
                "category_name": "Figuras coleccionables",
                "product_name": "Pidgeotto",
                "product_description": "Figura coleccionable pokemon",
                "product_price": 1799.99,
                "dues": 10,
                "product_sku": "PKM001001",
                "img_front": "/img/pokemon/pidgeotto-1.webp",
                "img_back": "/img/pokemon/pidgeotto-box.webp"
                },
                {
                "product_id": 2,
                "licence_name": "Star Wars",
                "category_name": "Figuras coleccionables",
                "product_name": "StormTrooper",
                "product_description": "Figura coleccionable Star Wars",
                "product_price": 1799.99,
                "dues": 10,
                "product_sku": "STW001001",
                "img_front": "/img/star-wars/trooper-1.webp",
                "img_back": "/img/star-wars/trooper-box.webp"
                },
                {
                "product_id": 3,
                "licence_name": "Harry Potter",
                "category_name": "Figuras coleccionables",
                "product_name": "Luna",
                "product_description": "Figura coleccionable Harry Potter",
                "product_price": 1799.99,
                "dues": 10,
                "product_sku": "HPT001001",
                "img_front": "/img/harry-potter/luna-1.webp",
                "img_back": "/img/harry-potter/luna-box.webp"
                }
            ]
        })
    },*/
    shop: async (req, res) => {
        const funkos = await modeelos.getItems()
        res.render('../views/pages/shop/shop.ejs', {
            title: 'Shop',
            objetos: funkos
        })
    },
    //searchItem: (req, res) => res.send(`buscar, encontrar y recibir de item id ${req.params.id}`),
    searchItem: (req, res) => {
        res.render('../views/pages/shop/item.ejs', {
            title: 'Item'
        })
    },
    addToCart: (req, res) => (req, res) => res.send(`agrega el item id ${req.params.id} al carrito`),
    //cart: (req, res) => res.send('Ruta para la Vista de Carrito'),
    cart: (req, res) => {
        res.render('../views/pages/shop/cart.ejs', {
            title: 'Cart'
        })
    },
    checkout: (req, res) => res.send('Ir a la pagina Checkout')
}

module.exports = mainControllers