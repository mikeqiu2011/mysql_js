const mysql = require("mysql2/promise")

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "test",
  waitForConnections: true,
  connectionLimit: 10,
});

async function queryByName(name){
  try {
    const result = await pool.query("SELECT * FROM EMPLOYEES WHERE NAME = ?" , [name])

    console.table(result[0]);

  } catch (error) {
    console.error(error);
  }
}

const name = process.argv[2];
queryByName(name);