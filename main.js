//Swagger;
const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger');

const http = require('http');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const clientRoutes = require('./routes/clients.routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middleware/error.handler');

dotenv.config();
const app = express();

//Server
const server = http.createServer(app);
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET_KEY));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Credentials'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

//Routes
app.use('/clients', clientRoutes);

V1SwaggerDocs(app, port); // Swagger

//Error handlers
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

module.exports = { app, server };
