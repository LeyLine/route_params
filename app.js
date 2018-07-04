// app.js
const express = require('express');
const app = express();
const hbs = require('hbs');
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  console.log(req);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));