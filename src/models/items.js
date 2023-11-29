const { conn } = require('./../config/conn');

const getItems = async () => {
    try {
    const [rows] = await conn.query('SELECT * FROM product p INNER JOIN licence l ON p.licence_id = l.licence_id INNER JOIN category c ON p.category_id = c.category_id;');
    return rows;
    } catch (error) {
    throw error;
    } finally {
    conn.releaseConnection();
    }
}

module.exports = {
    getItems
}