const modelos = require('../models/items.js')
const upload = require('./../config/multerConfig'); // Importa la configuración de Multer

const uploadFields = [
  { name: 'image_front', maxCount: 1 },
  { name: 'image_back', maxCount: 1 },
];

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

    postCreate: [
        upload.fields(uploadFields),
        async (req, res) => {
            const params = {
                product_name: req.body.product_name,
                product_description: req.body.product_description,
                price: parseFloat(req.body.price.replace(',', '.')),
                stock: req.body.stock,
                discount: req.body.discount,
                sku : req.body.sku,
                dues: req.body.dues,
                image_front: req.files['image_front'][0].filename, 
                image_back: req.files['image_back'][0].filename,
                licence_id: req.body.licence,
                category_id: req.body.category,
            };
            const agregado = await modelos.createFunko(params)
            res.redirect('/admin/list');
        }
    ],

    getEdit: async (req, res) => {
        const id = req.params.id;
        const funko = await modelos.getFunkoId(id)
        res.render('../views/pages/admin/edit.ejs', {
            title: 'Editar Producto',
            funko: funko
        })
    },
    postEdit: [
        upload.fields(uploadFields),
        async (req, res) => {
            let image_front
            let image_back
            if(req.files['image_front'] !== null){
                image_front = req.body.image_front_old
            }else{
                image_front = req.files['image_front'][0].filename
            }
            if(req.files['image_back'] !== null){
                image_back = req.body.image_back_old
            }else{
                image_back = req.files['image_back'][0].filename
            }
            const product_id = req.body.product_id
            const params = {
                product_name: req.body.product_name,
                product_description: req.body.product_description,
                price: parseFloat(req.body.price.replace(',', '.')),
                stock: req.body.stock,
                discount: req.body.discount,
                sku : req.body.sku,
                dues: req.body.dues,
                image_front: image_front, 
                image_back: image_back,
                licence_id: req.body.licence,
                category_id: req.body.category,
            };
            const modificado = await modelos.editFunko(params, product_id)
            res.redirect('/admin/list');
        }
    ], 

    delete: async (req, res) => {
        const id = req.params.id;
        const result = await modelos.deleteFunko(id);
        res.redirect('/admin/list');
    },
}

module.exports = mainControllers