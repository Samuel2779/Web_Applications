const passport = require("passport");
const usuario = require("../models/usuario");
const LocalStrategy = require("passport-local").Strategy;
const Usuario = require("../models/usuario");

passport.use(
  new LocalStrategy(function (email, password, done) {
    Usuario.findOne({ email: email }, function (err, usuario) {
      if (err) return done(err);
      if (!usuario)
        return done(null, false, { message: "Email no exsistente o malo" });
      if (!usuario.validPassword(password))
        return done(null, false, "Password Malo");

      return done(null, usuario);
    });
  })
);

passport.serializeUser(function (err, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  Usuario.findById(id, function (er, cb) {
    if (err) console.log(err);
    cb(err, isiarop);
    cb(err, usuario);
  });
});

module.exports = passport;
