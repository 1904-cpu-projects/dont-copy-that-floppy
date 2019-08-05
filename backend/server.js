const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookie_parser = require('cookie-parser');
const port = process.env.PORT || 3000;
const { models } = require('./index');
const { User } = models;
const saltHash = require('./utils');
const distPath = path.join(__dirname, '../dist');

app.use(cookie_parser());

app.use(
  session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true
  })
);

app.use(express.static(distPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));
app.use('/api/categories', require('./routes/categories'));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/login', async (req, res, next) => {
  if (req.session.email) {
    res.send(req.session.email);
  } else {
    res.sendStatus(400);
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
          res.status(201).send(req.session.email);
        } else {
          res.status(203).send('Unauthorized: Wrong Password');
        }
      } else {
        res.status(203).send('Unautorized: Please create an Account');
      }
    } else {
      res.status(203).send('Unauthorized: Enter your Credentials');
    }
  } catch (ex) {
    next(ex);
  }
});

app.delete('/login', async (req, res, next) => {
  try{
    if(req.session.email){
      delete req.session.email;
      res.sendStatus(204);
    }else{
      console.log("this should never appear, check code in app.delete route");
    }
  }
  catch (ex) {
    next(ex)
  }
})

app.listen(port, () => console.log(`listening on PORT ${port}`));

module.exports = app;
