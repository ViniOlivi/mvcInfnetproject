const fs = require("fs");
const ejs = require("ejs");
const html_to_pdf = require("html-pdf-node");
// Models Import
const genderModel = require("../models/gender");
const sectionModel = require("../models/sections");

// GET METHOD
const handleGetForm = (req, res, next) => {
  // Gender
  const resultModel = genderModel.getAllGender();

  const genderItemsViewModel = resultModel.map((item) => {
    return {
      value: item.id,
      label: item.description,
    };
  });

  // Sections (Places)
  const sectionResult = sectionModel.getAllSections();

  const sectionsItemsView = sectionResult.map((item) => {
    return {
      value: item.id,
      label: `${item.id} - ${item.description}`,
    };
  });

  const getViewModel = {
    gender: genderItemsViewModel,
    selection: sectionsItemsView,
  };
  res.render("form", getViewModel);
};

// POST METHOD
const handlePostForm = (req, res, next) => {
  // ToDo: Validar os dados
  // ToDo: buscar descricoes dos valores do formulario
  const body = req.body;

  // view renderizando form

  const genderResult = genderModel.getGenderById(body.gender);
  const sectionResult = sectionModel.getSectionsById(body.selection);

  const viewModel = {
    name: body.name,
    email: body.email,
    birth: body.age,
    gender: genderResult.description,
    selection: sectionResult.description,
  };
  // Template

  // Criar HTML
  var htmlText = fs.readFileSync("./views/template.ejs", "utf8");

  // console.log(htmlText);

  var htmlPronto = ejs.render(htmlText, viewModel);
  console.log(htmlPronto);

  // Transformar em PDF

  let file = { content: htmlPronto };
  let options = { format: "A4" };

  html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
    res.contentType("application/pdf");
    res.send(pdfBuffer);
  });
};

module.exports = {
  get: handleGetForm,
  post: handlePostForm,
};
