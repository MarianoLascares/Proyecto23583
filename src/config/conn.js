const mysql =require('mysql2')

/*const connection = mysql.createConnection({
    host: 'localhost',
    user: 'DESKTOP-LVVS1OI\SQLEXPRESS',
    password: '',
    database: 'funko_test'
})

connection.connect()
module.exports = connection*/

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'funko_test',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = {
    conn: pool.promise()
}