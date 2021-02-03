const express = require("express");
const path = require("path");
const app = express();

// teste
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const generatorController = require("./controllers/generator-controller");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const handleRaiz = (req, res, next) => {
  res.render("index");
};

app.get("/", handleRaiz);

app.get("/form", generatorController.get);
app.post("/form", generatorController.post);

app.listen(3001, () => {
  console.log("servidor rolando");
});
