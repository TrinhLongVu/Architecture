const VoucherRouter=require("./voucher.r")
const SuKienRouter = require("./sukien.r");
const VoucherSuKienRouter=require("./voucher_sukien.r")
const ThuongHieuRouter=require("./thuonghieu.r")

function route(app) {
  app.use("/api/v1/voucher",VoucherRouter)
  app.use("/api/v1/event",SuKienRouter);
  app.use("/api/v1/voucher-event", VoucherSuKienRouter);
  app.use("/api/v1/brand",ThuongHieuRouter);
}

module.exports = route;
