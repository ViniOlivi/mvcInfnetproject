const fs = require("fs");
const ejs = require("ejs");
const html_to_pdf = require("html-pdf-node");

const handleGetForm = (req, res, next) => {
  res.render("form");
};

const handlePostForm = (req, res, next) => {
  console.log(req.body);

  const body = req.body;
  // view renderizando form
  const viewModel = {
    name: body.name,
    email: body.email,
    birth: body.age,
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
