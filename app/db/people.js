const connection = require('./connection');
const util = require('util');
const query = util.promisify(connection.query).bind(connection)

async function create(name) {
  if(!name) return;
  const sql = `INSERT INTO PEOPLE(NAME) VALUE('${name}')`;
  await query(sql);
}

async function all() {
  const sql = 'select * from people';
  
  const rows = await query(sql)
     
  return rows
}

function createTable(){
  const sql = `CREATE TABLE IF NOT EXISTS people(
    id int NOT NULL AUTO_INCREMENT, 
    name varchar(40),
    PRIMARY KEY (id)) `;
  connection.query(sql);
}

module.exports = {
  create,
  all,
  createTable
}