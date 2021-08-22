const express = require('express');
const http = require('http');

const router = express.Router();
const app = express();

const PORT = 8001;

/*  router imports  */

const imageRouter = require('./server/router/imageRouter')(router);
const registerRouter = require('./server/router/registerRouter')(router);

app.use('/images', imageRouter);
app.use('/register',registerRouter);


