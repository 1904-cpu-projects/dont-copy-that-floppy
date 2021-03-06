const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookie_parser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const { models } = require('./index');
const { User } = models;
const saltHash = require('./utils');
const distPath = path.join(__dirname, '../dist');
const dotenv = require('dotenv');
const seed = require('./seed');

dotenv.config();

if(process.env.SEED) {
  seed()
}

app.use(cookie_parser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(
  session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(distPath));
app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/cart', require('./routes/cart'));
app.use('/google', require('./routes/oauth'));
app.use('/stripe', require('./routes/stripe'));
app.use('/api/orders', require('./routes/orders'))

app.get('/', (req, res, next) => {
  if (req.user) {
    req.session.email = req.user.dataValues.email;
  }
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/login', async (req, res, next) => {
  try{
    if (req.session.email) {
      const user = await User.findOne({
        where: {
          email: req.session.email,
        }
      })
      res.send(user);
    }
    else{
      res.redirect('/');
    }
  }
  catch(ex){
    next(ex);
  }
});

app.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const loginUser = await User.findOne({
        where: {
          email
        }
      });
      if (loginUser) {
        if (loginUser.password === saltHash(password)) {
          req.session.email = email;
          const user = User
          res.status(201).send(req.session.email);
        } else {
          res.status(203).send('Unauthorized: Wrong Password');
        }
      } else {
        res.status(203).send('Unauthorized: Please create an Account');
      }
    } else {
      res.status(203).send('Unauthorized: Enter your Credentials');
    }
  } catch (ex) {
    next(ex);
  }
});

app.delete('/login', async (req, res, next) => {
  try {
    if (req.session.email) {
      delete req.session.email;
      res.sendStatus(204);
    } else {
      console.log('this should never appear, check code in app.delete route');
    }
  } catch (ex) {
    next(ex);
  }
});

module.exports = app;
