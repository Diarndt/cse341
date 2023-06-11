const { auth } = require('express-openid-connect');
const dotenv = require('dotenv');
dotenv.config();

//from auth0.com
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER
};

const express = require('express');
const routes = express.Router();

// auth router attaches /login, /logout, and /callback routes to the baseURL
routes.use(auth(config));

// req.isAuthenticated is provided from the auth router
routes.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

routes.use('/', require('./swagger'));

routes.use('/vegetables', require('./vegetables.js'))
routes.use('/flowers', require('./flowers.js'))

// routes.use(
//     '/',
//     (docData = (req, res) => {
//       let docData = {
//         documentationURL:  'localhost:8080',//'cse341-personal-project-ju8e.onrender.com', //'localhost:8080', update url
//       };
//       res.send(docData);
//     })
//   );
  

 module.exports = routes;