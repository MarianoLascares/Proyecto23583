const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const validacion = require('../../src/middlewares/validacion')

const {body} =require('express-validator')
const validarRegistro = [
    body('password')
    .custom((value, {req}) => value === req.body.password2)
]

router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/register', authController.getRegister)
router.post('/register', validarRegistro, validacion, authController.postRegister)
router.get('/logout', authController.logout)

module.exports = router