const mysql = require("mysql2/promise")

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "test",
  // waitForConnections: true,
  connectionLimit: 10,
});

async function query(query){
  try {
    

    const result = await pool.query(query)

    console.table(result);

  } catch (error) {
    console.error(error);
  }
}

query('SELECT * FROM EMPLOYEES');