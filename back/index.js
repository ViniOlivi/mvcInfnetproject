// Libs
const express = require("express"); //server http
const path = require("path");
const generatorController = require("./controllers/generator-controller");
const Joi = require("joi");
const app = express();

// middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

// Validation Joi
const validate = (req, res, next) => {
  // schema
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  });

  const validateReturn = schema.validate(req.body);

  console.log(validateReturn.error);

  res.render("form", {
    errors: validateReturn.error ? validateReturn.error.details : [],
    body: req.body,
  });
};

const handleRaiz = (req, res, next) => {
  res.render("index");
};

// Routes
app.get("/", handleRaiz);
app.get("/form", generatorController.get); //envia algo, expor uma url para acesso

app.post("/form", validate, generatorController.post); //recebe algo, acessar uma url para acesso

//call server
app.listen(3001, () => {
  console.log("servidor rolando");
  console.log("fim do index");
});
