const mainControllers = {
    getLoguin: (req, res) => (req, res) => res.send(`Ruta para la vista Loguin`),
    postLoguin: (req, res) => res.send(`Loguear el usuario con id ${req.params.id}`),
    getRegister: (req, res) => res.send('Vista para la vista Registrar'),
    postRegister: (req, res) => res.send(`crear usuario con id ${req.params.id}`),
    logout: (req, res) => res.send('Vista para la vista Logout')
}

module.exports = mainControllers