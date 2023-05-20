const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'http://localhost:8080/api-docs', //used published url here
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);