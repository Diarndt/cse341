// const express = require('express');
// const bodyParse = require('body-parse');
// const MongoClient = require('mondodb').MongoClient;
// const mondodb = require('./db/connect');
// const contactRoutes = require('./routes/contacts');

// const port = process.env.Port || 8080;

// const app = express();

// app.use(bodyParse.json());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// });

// app.use('/', require('./routes'));

// mondodb.initDb((err, mongodb) => {
//     if(err) {
//         console.log(err);
//     }else{
//         app.listen(port);
//         console.log('Connect to DB and listening on ${port}');
//     }
// });
