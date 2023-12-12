const { conn } = require('./../config/conn');
const crypt = require('bcryptjs')

const verificarUser = async (email, password) => {
    try {
        const [verificado] = await conn.query(`SELECT * FROM user 
                                            WHERE email = ?`, [email]);
        
        if (!verificado || verificado.length === 0) {
            return verificado[0];
        }

        const hashedPassword = verificado[0].password;
        const passwordMatch = await crypt.compare(password, hashedPassword);

        if (passwordMatch) {
            return verificado[0];
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

const createUser = async (params) => {
    const hash = await crypt.hash(params.password, 1)
    params.password = hash
    try {
        const [creado] = await conn.query(`INSERT INTO user SET ?;`, params);
        return creado;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

const editUser = async (params, user_id) => {
    try {
        const { name, lastname, email, password } = params;
        const updateFields = {};

        if (name.trim() !== '') updateFields.name = name;
        if (lastname.trim() !== '') updateFields.lastname = lastname;
        if (email.trim() !== '') updateFields.email = email;
        if (password.trim() !== '') updateFields.password = password;
        
        const [modificado] = await conn.query(`UPDATE user SET ? 
                                            WHERE user_id = ?;`, 
                                            [updateFields, user_id]);
        return modificado;
        } catch (error) {
        throw error;
        } finally {
        conn.releaseConnection();
        }
}

const deleteUser = async (id) => {
    try {
        const [deletedRows] = await conn.query(
            'DELETE FROM user WHERE user_id = ?;', 
            [id]
        );
    } catch (error) {
    throw error;
    } finally {
    conn.releaseConnection();
    }
}

module.exports = {
    verificarUser,
    createUser,
    editUser,
    deleteUser
}