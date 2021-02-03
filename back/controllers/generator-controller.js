const handleGetForm = (req, res, next) => {
  res.render("form");
};

const handlePostForm = (req, res, next) => {
  res.send({
    mensagem: "teste POST fromulario",
  });
};

module.exports = {
  get: handleGetForm,
  post: handlePostForm,
};
