const Reserva = require("../models/reserva");

module.exports = {
  list: function (req, res, next) {
    Reserva.find({}, (err, reservar) => {
      res.render("reservar/index", { reservar: reservar });
    });
  },
};
