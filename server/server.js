const express = require("express");
const port = process.env.PORT || 8100;
const routes = require("./src/app");

(function () {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routes.setFor(app);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, function () {
    console.log(`server listning on port::${port}`);
  });
})();
