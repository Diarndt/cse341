const { auth } = require('express-openid-connect');
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
//const cookieParser = require('cookie-parser');


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const port = process.env.PORT;

const app = express();

// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: process.env.SECRET,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.CLIENT_ID,
//     issuerBaseURL: process.env.ISSUER
//   };
  
//   // auth router attaches /login, /logout, and /callback routes to the baseURL
//   app.use(auth(config));
  
//   // req.isAuthenticated is provided from the auth router
//   app.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
//   });


app
    .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    .use(bodyParser.json())
    // .use(expressValidator())
    .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requsted-With, Content-Type, Accept, Z-Key');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
}) 
    .use('/', require('./routes'));


    //error handling, example on nodejs
process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
    });

mongodb.initDb((err, mongodb) => {
    if(err) {
        console.log(err);
    }else{
        app.listen(port);
        console.log(`Connect to DB and listening on ${port}`);
    }
});