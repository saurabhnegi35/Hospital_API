const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt; //extracting the jwt token
const Doctor = require('../models/doctor');

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'idontknow',
};

passport.use(
  new JWTStrategy(opts, function (jwtPayLoad, done) {
    Doctor.findById(jwtPayLoad._id, (err, doctor) => {
      if (err) {
        // If Error Occured
        console.log('Error in Finding User');
        return done(err);
      }
      if (doctor) {
        //If Doctor Found
        return done(null, doctor);
      } else {
        //If Doctor not Found
        return done(null, false);
      }
    });
  })
);

module.exports = passport;
