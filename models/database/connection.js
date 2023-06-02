var mysql = require("mysql");
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'tender_system'
});
connection.connect();
module.exports = connection;
