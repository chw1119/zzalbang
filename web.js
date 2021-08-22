const express = require('express');
const http = require('http');

const router = express.Router();
const app = express();

/*  router imports  */

const imageRouter = require('./server/router/imageRouter')(router);
const registerRouter = require('./server/router/registerRouter')(router);

app.use('/images', imageRouter);
app.use('/register', registerRouter);

<<<<<<< HEAD
app.use('/',express.static('./client/'));

app.get('/',function(req,res){
    res.redirect('./html/main.html');
})

app.listen(PORT);
=======
app.listen(8001);
>>>>>>> d5b277878c554250762975a3498ea828c9268cc7
