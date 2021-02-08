// Libs
const express = require("express"); //server http
const path = require("path");
const generatorController = require("./controllers/generator-controller");
const app = express();

// middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

const handleRaiz = (req, res, next) => {
  res.render("index");
};

// Routes
app.get("/", handleRaiz);
app.get("/form", generatorController.get); //envia algo, expor uma url para acesso
app.post("/form", generatorController.post); //recebe algo, acessar uma url para acesso

app.listen(3001, () => {
  console.log("servidor rolando");
  console.log("fim do index");
});
