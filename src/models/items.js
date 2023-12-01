const { conn } = require('./../config/conn');

const createFunko = async (params) => {
    try {
        console.log(params)
        const [creado] = await conn.query(`INSERT INTO product SET ?;`, params);
        return creado;
        } catch (error) {
        throw error;
        } finally {
        conn.releaseConnection();
        }
}

const editFunko = async (params, product_id) => {
    try {
        const { product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id } = params;
        const updateFields = {};

        if (product_name.trim() !== '') updateFields.product_name = product_name;
        if (product_description.trim() !== '') updateFields.product_description = product_description;
        if (!isNaN(price)) updateFields.price = price;
        if (!isNaN(stock)) updateFields.stock = stock;
        if (discount.trim() !== '') updateFields.discount = discount;
        if (sku.trim() !== '') updateFields.sku = sku;
        if (dues.trim() !== '') updateFields.dues = dues;
        if (image_front !== undefined) updateFields.image_front = image_front;
        if (image_back !== undefined) updateFields.image_back = image_back;
        if (!isNaN(licence_id)) updateFields.licence_id = licence_id;
        if (!isNaN(category_id)) updateFields.category_id = category_id;
        
        console.log(product_id)
        console.log(params)
        console.log(updateFields)

        const [modificado] = await conn.query(`UPDATE product SET ? 
                                            WHERE product_id = ?;`, 
                                            [updateFields, product_id]);
        return modificado;
        } catch (error) {
        throw error;
        } finally {
        conn.releaseConnection();
        }
}

const deleteFunko = async (id) => {
    try {
        console.log(id)
        const [deletedRows] = await conn.query(
            'DELETE FROM product WHERE product_id = ?;', 
            [id]
        );
    } catch (error) {
    throw error;
    } finally {
    conn.releaseConnection();
    }
}

const getAllCollections = async () => {
    try {
        const [rows] = await conn.query(`
        SELECT * FROM (
            SELECT p.product_id, p.product_name, p.image_front, l.licence_id,l.licence_name, l.licence_description,
            ROW_NUMBER() OVER (PARTITION BY p.licence_id ORDER BY p.product_id DESC) as row_num
            FROM product p
            INNER JOIN licence l ON p.licence_id = l.licence_id
        ) AS ranked
        WHERE row_num = 1;
    `);
    console.log(rows)
    return rows;
    } catch (error) {
    throw error;
    } finally {
    conn.releaseConnection();
    }
}

const getAllFunkos = async () => {
    try {
    const [rows] = await conn.query(`SELECT * FROM product p 
                                    INNER JOIN licence l ON p.licence_id = l.licence_id 
                                    INNER JOIN category c ON p.category_id = c.category_id
                                    ORDER BY p.product_id ASC;`);
    return rows;
    } catch (error) {
    throw error;
    } finally {
    conn.releaseConnection();
    }
}

const getSliderFunkos = async () => {
    try {
    const [rows] = await conn.query(`SELECT * FROM product p 
                                    INNER JOIN licence l ON p.licence_id = l.licence_id 
                                    INNER JOIN category c ON p.category_id = c.category_id
                                    ORDER BY p.product_id DESC LIMIT 6;`);
    return rows;
    } catch (error) {
    throw error;
    } finally {
    conn.releaseConnection();
    }
}

const getFunkoId = async (id) => {
    try {
        const [rows] = await conn.query(`SELECT * FROM product p 
                                        INNER JOIN licence l ON p.licence_id = l.licence_id 
                                        INNER JOIN category c ON p.category_id = c.category_id
                                        WHERE p.product_id = '${id}';`);
                                        
        return rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

const getSliderFunkosRelacionados = async (id) => {
    try {
        const [funko] = await conn.execute(
            'SELECT * FROM product WHERE product_id = ?', [id]);

        const [rows] = await conn.execute(
            `SELECT * FROM product p 
            INNER JOIN licence l ON p.licence_id = l.licence_id 
            INNER JOIN category c ON p.category_id = c.category_id
            WHERE p.licence_id = ?
            ORDER BY p.licence_id DESC LIMIT 6;`,
            [funko[0].licence_id]
    );

    return rows;
    } catch (error) {
    throw error;
    } finally {
    conn.releaseConnection();
    }
}

module.exports = {
    createFunko,
    editFunko,
    deleteFunko,
    getAllFunkos,
    getSliderFunkos,
    getFunkoId,
    getSliderFunkosRelacionados,
    getAllCollections,
}