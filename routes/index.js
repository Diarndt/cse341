const express = require('express');
const routes = express.Router();

routes.use('/', require('./swagger'));

routes.use('/vegetables', require('./vegetables.js'))
routes.use('/flowers', require('./flowers.js'))

routes.use(
    '/',
    (docData = (req, res) => {
      let docData = {
        documentationURL: 'https://cse341-assignment2.onrender.com', //update url
      };
      res.send(docData);
    })
  );
  

 module.exports = routes;