// mysql 연결
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1476014181",
  port: "3306",
  database: "mydb",
});
// 정보 알려줬으니 연결해라
connection.connect();

module.exports = connection;
