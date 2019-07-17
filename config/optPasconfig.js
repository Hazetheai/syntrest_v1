const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
// separate models for seoarate login methods
const emailUser = mongoose.model("users");
const oAuthUser = mongoose.model("oAuthusers");

const keys = require("./keys");
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

const passCheck = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      emailUser
        .findById(jwt_payload.id)
        .then(user => {
          if (user) {
            console.log("authorised email");
            return done(null, user);
          } else {
            return passport.use(
              new JwtStrategy(opts, (jwt_payload, done) => {
                oAuthUser
                  .findById(jwt_payload.id)
                  .then(oAuser => {
                    if (oAuser) {
                      console.log("authorised oauth");
                      return done(null, oAuser);
                    }
                    return done(null, false);
                  })
                  .catch(err => console.log("failed on oauth strategy", err));
              })
            );
          }
        })
        .catch(err => console.log("failed on local/email strategy", err));
    })
  );
};

module.exports = { passCheck };
