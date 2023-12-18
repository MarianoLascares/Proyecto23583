const modelos = require('../models/users.js')
const crypt = require('bcryptjs')

const mainControllers = {
    getLogin: (req, res) => {
        res.render('../views/pages/auth/login.ejs', {
            title: 'Login'
        })
    },
    postLogin: async (req, res) => {
        const {email, password} = req.body
        const valido = await modelos.verificarUser(email, password)
        if(valido !== undefined){
            req.session.userid = valido.user_id
            res.redirect(`/?user=${valido.user_id}`)
        } else {
            res.redirect('/auth/login')
        }
    },
    
    getRegister: (req, res) => {
        res.render('../views/pages/auth/register.ejs', {
            title: 'Register'
        })
    },
    postRegister: async (req, res) => {
        const params = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        };
        console.log(params)
        const agregado = await modelos.createUser(params)
        res.redirect('/auth/login')
    },

    getEdit: (req, res) => {
        res.render('../views/pages/auth/editUser.ejs', {
            title: 'Register'
        })
    },
    postEdit: async (req, res) => {
        const product_id = req.body.user_id
        const params = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        };
        const modificado = await modelos.createUser(params, product_id)
        res.redirect('/auth/loguin')
    },

    logout: (req, res) => {
        req.session.userid = undefined; 
        res.redirect('/')
    }
}

module.exports = mainControllers