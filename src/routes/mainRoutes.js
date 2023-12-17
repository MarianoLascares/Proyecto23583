const express = require('express')
const router = express.Router()
const mainControllers = require('../controllers/mainController')

router.get('/', mainControllers.home)
router.get('/contact', mainControllers.contact)
router.get('/about', mainControllers.about)
router.get('/faqs', mainControllers.faqs)
router.get('/error404', mainControllers.error404)

module.exports = router