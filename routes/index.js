const { auth } = require('express-openid-connect');
require('dotenv').config();

const express = require('express');
const router = express.Router();

//from auth0.com
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

// req.isAuthenticated is provided from the auth router
router.get('/checkLoginStatus', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.use('/', require('./swagger'));

router.use('/vegetables', require('./vegetables.js'));
router.use('/flowers', require('./flowers.js'));


module.exports = router;