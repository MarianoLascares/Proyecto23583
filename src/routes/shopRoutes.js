const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shopController')

router.get('/', shopController.shop)
router.get('/item', shopController.searchItem) //se reemplaza despues con el de abajo
//router.get('/item/:id', shopController.searchItem)
router.post('/item/:id/add', shopController.addToCart)
router.get('/cart', shopController.cart)
router.post('/cart', shopController.checkout)

module.exports = router