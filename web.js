const express = require('express');

const http = require('http');
const ejs = require('ejs');
const sqlite3 = require('sqlite3');
const database = require('./server/module/database/database');
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

app.get('/', function(req, res) {
    res.render('./html/main.html');
});

app.listen(PORT, () => console.log("ON"));

let db = database.openDataBase("seedList.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

let sql = 'create table seeds (seed VARCHAR(20));';

db.run(sql, function (err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Row(s) updated: ${this.changes}`);

});

// close the database connection
db.close();