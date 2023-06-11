const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host:  'localhost:8080',//'cse341-assignment2.onrender.com', //used published url here or localhost no https needed 'localhost:8080',
  schemes: ['https'], //use either http or https
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);