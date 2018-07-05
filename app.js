// app.js
const express = require("express");
const app = express();
const hbs = require("hbs");
var path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

//ROUTES
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/search", function(req, res) {
  res.send(req.query);
});

app.get("/users/:username", function(req, res) {
  res.send(req.params);
});

app.get("/get-user-info", (req, res) => {
  res.render("user-info-form");
});

app.get("/display-user-info", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  let superhero = req.query.superhero;

  res.send(`
    Your name is ${name}
    Your age is ${age}
    Your favorite superhero is ${superhero}
  `);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
