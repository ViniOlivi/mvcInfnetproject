// Libs
const express = require("express"); //server http
const path = require("path");
const generatorController = require("./controllers/generator-controller");
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

const handleRaiz = (req, res, next) => {
  res.render("index");
};

// Routes
app.get("/", handleRaiz);

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/form", generatorController.get); //envia algo, expor uma url para acesso

// Post
app.post("/form", generatorController.post); //recebe algo, acessar uma url para acesso ,validate,

//call server
app.listen(PORT, () => {
  console.log("servidor rolando");
  console.log("fim do index");
});
