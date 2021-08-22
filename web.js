const express = require('express');
const http = require('http');
const ejs = require('ejs');

const router = express.Router();
const app = express();
const PORT = 8001;

/*  router imports  */

const imageRouter = require('./server/router/imageRouter')(router);
const loginRouter = require('./server/router/loginRouter')(router);
const registerRouter = require('./server/router/registerRouter')(router);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/html');
app.engine('html', require('ejs').renderFile);

app.use('/login', loginRouter);
app.use('/images', imageRouter);
app.use('/register', registerRouter);

app.use(express.static('./client'));

app.get('/', function(req, res) {
    res.redirect('./html/main.html');
});

app.listen(PORT, () => console.log("ON"));