const { conn } = require('./../config/conn');

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



const deleteFunko = async (id) => {
    try {
    
        const [selectedRow] = await conn.query(
            'SELECT * FROM product WHERE product_id = ?;', 
            [id]
        );
        const [deletedRows] = await conn.query(
            'DELETE FROM product WHERE product_id = ?;', 
            [id]
        );

        return {
            deletedRows: deletedRows.affectedRows,
            deletedFunko: selectedRow[0] || null
        }
    } catch (error) {
    throw error;
    } finally {
    conn.releaseConnection();
    }
}


module.exports = {
    getAllFunkos,
    getSliderFunkos,
    getFunkoId,
    getSliderFunkosRelacionados,
    getAllCollections,
    deleteFunko
}