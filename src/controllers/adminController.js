const modelos = require('../models/items.js')

const mainControllers = {
    admin: (req, res) => res.send('Ruta para la Vista de Admin'),
    list: async (req, res) =>{
        const funkos = await modelos.getAllFunkos()
        
        res.render('../views/pages/admin/listado.ejs', {
            title: 'Listado',
            funkos: funkos
        })
    },
    getCreate: (req, res) => {
        res.render('../views/pages/admin/create.ejs', {
            title: 'Cargar Producto'
        })
    },
    postCreate: (req, res) => res.send(`agrega el Producto`),

    getEdit: async (req, res) => {
        const id = req.params.id;
        const funko = await modelos.getFunkoId(id)
        res.render('../views/pages/admin/edit.ejs', {
            title: 'Editar Producto',
            funko: funko
        })
    },
    postEdit: (req, res) => res.send(`Modifica el producto con id ${req.params.id}`),

    /*delete: async (req, res) => {
        const id = req.params.id;
        console.log(id)
        const funko = await modelos.deleteFunko(id)
        res.render('../views/pages/admin/list.ejs', {
            title: 'Listado',
            funko: funko
        })
    },*/

    delete: async (req, res) => {
        const id = req.params.id;
    
        try {
            const confirmation = req.body.confirm;
            console.log(confirmation);
    
            if (confirmation === 'true') {
                const result = await modelos.deleteFunko(id);
    
                if (result.deletedRows > 0) res.redirect('/admin/list');
            } else {
                res.redirect('/admin/list');
            }
        } catch (error) {
            // Manejar errores
            res.status(500).send('Error en la solicitud.');
        }
    },
}

module.exports = mainControllers