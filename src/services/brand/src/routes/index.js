const SuKienRouter = require("./sukien.r");

function route(app) {
  app.use("/api/v1/sukien",SuKienRouter);
}

module.exports = route;
