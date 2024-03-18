import pool from "./database.js";

async function insertZoneData(values){
    try {
        const sql = 'INSERT INTO zone (zone_id, zone_name, userinterface) VALUES ?';
        // Execute the query using the promise-based pool
        const result = await pool.query(sql, [values.map(row => [row[0], row[1], row[2]])]);
        console.log('Data inserted successfully:', result);
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

async function insertMemberData(values){
    try {
        const sql = 'INSERT INTO memberdetails (member_Id, member_name, zone_id, zone_name, emailid, mobile_no) VALUES ?';
        console.log(values);
        // Execute the query using the promise-based pool
        const result = await pool.query(sql, [values.map(row => [row[0], row[1], row[2], row[3], row[4], row[5]])]);
        console.log('Data inserted successfully:', result);
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}
export { insertZoneData, insertMemberData};