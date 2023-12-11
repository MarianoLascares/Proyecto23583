const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')


const isLogged = (req, res, next) => {
    if(!req.session.userid){
        return res.redirect('/auth/login')
    }
    next()
}
router.get('/', adminController.admin)
router.get('/list', isLogged, adminController.list)
router.get('/create', isLogged, adminController.getCreate)
router.post('/create', isLogged, adminController.postCreate)
router.get('/edit/:id', isLogged, adminController.getEdit)
router.post('/edit/:id', isLogged, adminController.postEdit)
router.post('/delete/:id', isLogged, adminController.delete)

module.exports = router