const passport=require('passport');
const Doctor=require('../models/doctors');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;


var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    Doctor.findOne({id: jwt_payload.id})
    .then(user => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch(err => done(err, false));
  
}));
module.exports=passport;