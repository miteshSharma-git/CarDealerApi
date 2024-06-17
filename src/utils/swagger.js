import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Car Purchasing  Api',
    description: 'This are the apis for Car Purchasing App  which is created on node js as backened '
  },
  host: 'localhost:3000'
};

const outputFile = './src/resources/swagger.json';
const routes = ['./index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);