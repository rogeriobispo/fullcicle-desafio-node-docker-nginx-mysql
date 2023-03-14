const express = require('express');

const app = express()
const port = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

app.get('/', (req, res) => {
  let html = '<h1>Full Cycle!!!</h1><br>'
  const name = req.query.name 
  const mysql = require('mysql');
  const connection = mysql.createConnection(config)
  const sql = `INSERT INTO PEOPLE(NAME) VALUE('${name}')`
  const consult = 'select * from people'
  if(name) connection.query(sql)
  connection.query(consult, (error, result, _) => {
    html += '<ol>'
    result.forEach(e => {
       html += `<li>${e.name}</li>`
    });
    html += '</ol>'
    
    connection.end()
  
    res.send(html)
  })
})


app.listen(port, () => {
  console.log("server up");
})