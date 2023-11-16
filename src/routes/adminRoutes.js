const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')

router.get('/', adminController.admin)
router.get('/create', adminController.getCreate)
router.post('/create', adminController.postCreate)
router.get('/edit/:id', adminController.getEdit)
router.post('/edit/:id', adminController.postEdit)
router.delete('/delete/:id', adminController.delete)

module.exports = router