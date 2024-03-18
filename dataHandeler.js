import pool from "./database.js";

async function insertData(values){
    try {
        const sql = 'INSERT INTO zone (zone_id, zone_name, userinterface) VALUES ?';
        // console.log(values);
        // Execute the query using the promise-based pool
        const result = await pool.query(sql, [values.map(row => [row[0], row[1], row[2]])]);
        console.log('Data inserted successfully:', result);
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

export { insertData};