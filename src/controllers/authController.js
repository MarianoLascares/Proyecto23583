const mainControllers = {
    //getLogin: (req, res) => res.send(`Ruta para la vista Login`),
    getLogin: (req, res) => {
        res.render('../views/pages/admin/login.ejs', {
            title: 'Login'
        })
    },
    postLogin: (req, res) => res.send(`Loguear el usuario con id ${req.params.id}`),
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