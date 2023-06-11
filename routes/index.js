const express = require('express');
const routes = express.Router();
const { auth } = require('express-openid-connect');
require('dotenv').config();
const cookieParser = require('cookie-parser');

routes.use('/', require('./swagger'));

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.SECRET,
//   baseURL: process.env.BASEURL,
//   clientID: process.env.CLIENTID,
//   issuerBaseURL: process.env.ISSUER,
// };

// //middleware for login/logout
// routes.use(auth(config));

routes.get('/checkLoginStatus', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

//routes.use(cookieParser());

// routes.get('/checkLoginStatus', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

routes.use('/vegetables', require('./vegetables.js'))
routes.use('/flowers', require('./flowers.js'))

routes.use(
    '/',
    (docData = (req, res) => {
      let docData = {
        documentationURL: 'localhost:8080' //'cse341-assignment2.onrender.com' //'localhost:8080', update url
      };
      res.send(docData);
    })
  );
  

 module.exports = routes;