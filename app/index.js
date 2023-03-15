const express = require('express');
const people = require('../app/db/people')

const app = express()
const port = 3000


app.get('/', async (req, res) => {
  let html = '<h1>Full Cycle!!!</h1><br>'
  const name = req.query.name 
  people.create(name);
  peopleList = await people.all();
  html += '<ol>'
  peopleList.forEach( person => {
    html += `<li>${person.name}</li>`  
  });
  html += '<ol>'
  res.send(html)
})


app.listen(port, () => {
  console.log("server up");
  people.createTable();
})