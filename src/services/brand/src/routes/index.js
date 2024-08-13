const VoucherRouter=require("./voucher.r")
const SuKienRouter = require("./sukien.r");
const VoucherSuKienRouter=require("./voucher_sukien.r")

function route(app) {
  app.use("/api/v1/voucher",VoucherRouter)
  app.use("/api/v1/event",SuKienRouter);
  app.use("/api/v1/voucher-event", VoucherSuKienRouter);
}

module.exports = route;
