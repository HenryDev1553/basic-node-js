const express = require('express')

const app = express()
const port = 8080;
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/about', function (req, res) {
    res.send('Im henry')
  });

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})