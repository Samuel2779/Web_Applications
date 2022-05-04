var express = require("express");
var router = express.Router();
let reservaController = require("../controllers/reserva");

router.get("/", reservaController.list);

module.exports = router;
