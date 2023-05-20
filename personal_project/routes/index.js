const express = require('express');
const routes = express.Router();

routes.use('/', require('./swagger'));

routes.use('/vegetables', require('./vegetables.js'))
routes.use('/flowers', require('./flowers.js'))

routes.use(
    '/',
    (docData = (req, res) => {
      let docData = {
        documentationURL: 'https://localhost:8080/api-docs', //update url
      };
      res.send(docData);
    })
  );
  

 module.exports = routes;