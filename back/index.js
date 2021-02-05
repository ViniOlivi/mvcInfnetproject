const express = require("express");
const path = require("path");
const generatorController = require("./controllers/generator-controller");
const app = express();

const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// middleware
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const handleRaiz = (req, res, next) => {
  res.render("index");
};

app.get("/", handleRaiz);

app.get("/form", generatorController.get);
app.post("/form", generatorController.post);

app.listen(3001, () => {
  console.log("servidor rolando");
  console.log("fim do index");
});
