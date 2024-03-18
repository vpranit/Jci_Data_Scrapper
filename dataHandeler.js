import pool from "./database.js";

async function insertData(values){
    try {
        // Prepare the SQL query
        const sql = 'INSERT INTO zone (zone_id, zone_name) VALUES ?';

        // Execute the query using the promise-based pool
        const result = await pool.query(sql, [values.map(row => [row[0], row[1]])]);

        console.log('Data inserted successfully:', result);
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

export { insertData};