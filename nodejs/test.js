var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'api2009'
});
 
connection.connect();  //建立连接
 
let sql = "select * from p_goods limit 10"
connection.query(sql, function (error, results, fields) {
  console.log(results);
});
 
connection.end();