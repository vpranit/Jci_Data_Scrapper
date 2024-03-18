import mysql from 'mysql2';

// Create a pool to handle multiple connections
const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'****',          //Replace it with your username   
    password: '******',   //Replace it with your password 
    database: 'jci_db'    //Replace it with your db 
}).promise();

// Export the pool
// module.exports = pool;
export default pool;



/*
Create Table in db 

create table memberDetails(
member_Id int,
member_name varchar(225),
zone_id int,
zone_name varchar(225),
emailid varchar(225),
mobile_no varchar(13)
);

*/