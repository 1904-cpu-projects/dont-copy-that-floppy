const router = require('express').Router();
const passport = require('passport');
const { models } = require('../index')
const { User } = models
module.exports = router;

const scope = "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
router.get('/', passport.authenticate('google', { scope }));

router.get(
  '/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  })
);

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(
new GoogleStrategy({
  clientID: process.env.GClientId,
  clientSecret:  process.env.GClientSecret,
  callbackURL: 'http://localhost:3000/google/callback'
},
(token, refreshToken, profile, done) => {
  const info =  {
    firstName: profile.name.givenName,
    lastName: profile.name.familyName,
    email: profile.emails[0].value
  }
  User.findOrCreate({ where: { googleId: profile.id }, defaults: info })
  .spread(user => {
    done(null, user);
  })
  .catch(done);
}
)
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err);
    });
});
