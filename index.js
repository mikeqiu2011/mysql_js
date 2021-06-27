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

async function insert(name, ssn){
  try {
    const con = await pool.getConnection();
    con.beginTransaction()

    const resultInsert = await con.query(
      "INSERT INTO EMPLOYEES (NAME, SSN) VALUES (?,?)", 
      [name, ssn])

    const result = await con.query("SELECT * FROM EMPLOYEES")

    console.table(result[0]);

    con.commit();

    

  } catch (error) {
    console.error(error);
  }
}

const name = process.argv[2];
const ssn = process.argv[3];
insert(name, ssn);