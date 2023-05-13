const express = require('express');
const routes = express.Router();

routes.use('/', require('./swagger'));

routes.use('/contacts', require('./contacts.js'))

routes.use(
    '/',
    (docData = (req, res) => {
      let docData = {
        documentationURL: 'https://cse341-assignment2.onrender.com/api-docs', //update url
      };
      res.send(docData);
    })
  );
  

 module.exports = routes;