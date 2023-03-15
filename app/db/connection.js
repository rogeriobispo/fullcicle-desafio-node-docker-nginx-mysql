const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);


module.exports = connection;