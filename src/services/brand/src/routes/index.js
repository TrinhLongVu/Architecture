const SuKienRouter = require("./sukien.r");

function route(app) {
  app.use("/api/v1/event",SuKienRouter);
}

module.exports = route;
