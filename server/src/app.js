function setFor(app) {
  app.use(apiRoute("user"), require("./routes/user/user.controller"));
}

function apiRoute(path) {
  return `/api/${path}`;
}

module.exports = {
  setFor,
};
