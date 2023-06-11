const express = require('express');
const routes = express.Router();
const { auth } = require('express-openid-connect');
require('dotenv').config();
//const cookieParser = require('cookie-parser');

routes.use('/', require('./swagger'));

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
routes.use(auth(config));

// req.isAuthenticated is provided from the auth router
routes.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


routes.use('/vegetables', require('./vegetables.js'))
routes.use('/flowers', require('./flowers.js'))

routes.use(
    '/',
    (docData = (req, res) => {
      let docData = {
        documentationURL: 'cse341-personal-project-ju8e.onrender.com', //'localhost:8080', update url
      };
      res.send(docData);
    })
  );
  

 module.exports = routes;