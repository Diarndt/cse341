const express = require('express');
const routes = express.Router();

routes.use('/', require('./swagger'));

routes.use('/contacts', require('./contacts.js'))

routes.use(
    '/',
    (docData = (req, res) => {
      let docData = {
        documentationURL: 'http:localhost:8080/api-doc', //update url
      };
      res.send(docData);
    })
  );
  

 module.exports = routes;