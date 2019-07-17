// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const mongoose = require("mongoose");
// const User = mongoose.model("users");
// const keys = require("../config/keys");
// const opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = keys.secretOrKey;
// module.exports = passport => {
//   passport.use(
//     new JwtStrategy(opts, (jwt_payload, done) => {
//       User.findById(jwt_payload.id)
//         .then(user => {
//           if (user) {
//             console.log("authorised email");
//             return done(null, user);
//           }
//           return done(null, false);
//         })
//         .catch(err => console.log(err));
//     })
//   );
// };

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
// separate models for separate login methods
const emailUser = mongoose.model("users");
const oAuthUser = mongoose.model("oAuthusers");

const keys = require("../config/keys");
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  console.log("passport");
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log("jwt_payload", jwt_payload);
      emailUser
        .findById(jwt_payload.id)
        .then(user => {
          if (user) {
            console.log("authorised email");
            return done(null, user);
          } else {
            passport.use(
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
