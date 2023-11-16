const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.get('/loguin', authController.getLoguin)
router.post('/loguin', authController.postLoguin)
router.get('/register', authController.getRegister)
router.post('/register', authController.postRegister)
router.get('/logout', authController.logout)

module.exports = router