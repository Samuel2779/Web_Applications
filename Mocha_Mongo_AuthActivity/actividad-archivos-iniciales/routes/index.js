var express = require("express");
const passport = require("passport");
var router = express.Router();
const usuariosModel = require("../models/usuario");
const bcrypt = require("bcrypt");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/login", function (req, res, next) {
  res.render("session/login");
});

router.post("/login", async function (req, res, next) {
  let user = await usuariosModel.findOne({ email: req.body.email });
  let pwd = await bcrypt.compare(req.body.password, user.password);
  if (!user) res.render("session/login");
  if (!pwd) res.render("session/login");
  else res.redirect("/");
});

module.exports = router;
