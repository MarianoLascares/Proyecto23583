const modelos = require('../models/users.js')

const mainControllers = {
    //getLogin: (req, res) => res.send(`Ruta para la vista Login`),
    getLogin: (req, res) => {
        res.render('../views/pages/admin/login.ejs', {
            title: 'Login'
        })
    },
    postLogin: async (req, res) => {
        const {email, password} = req.body
        const valido = await modelos.verificarUser(email, password)
        console.log(valido)
        if(valido.length === 1){
            res.redirect('/')
        } else {
            res.redirect('/auth/login')
        }
    },
    //getRegister: (req, res) => res.send('Vista para la vista Registrar'),
    
    getRegister: (req, res) => {
        res.render('../views/pages/admin/register.ejs', {
            title: 'Register'
        })
    },
    postRegister: (req, res) => res.send(`crear usuario con id ${req.params.id}`),
    logout: (req, res) => res.send('Vista para la vista Logout')
}

module.exports = mainControllers