import mysql from 'mysql2';

// Create a pool to handle multiple connections
const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password: 'toor',
    database: 'jci_db'
}).promise();

// Export the pool
// module.exports = pool;
export default pool;