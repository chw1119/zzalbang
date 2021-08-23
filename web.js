const express = require('express');

const http = require('http');
const ejs = require('ejs');
const makeRandomSeed = require('./server/module/algorithm/random/makeRandomSeed');
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

app.use('/api/login', loginRouter);
app.use('/api/images', imageRouter);
app.use('/api/register', registerRouter);

app.use(express.static('./client'));

app.get('/login', function(req, res){
    res.render('login.html');
});

app.get('/register', function(req, res) {
    res.render('register.html');
})

app.get('/', function(req, res) {
    res.render('main.html');
});

app.listen(PORT, () => console.log("ON"));

makeRandomSeed.makeNewSeed();