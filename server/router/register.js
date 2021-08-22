const app = require("express")();
const mysql = require("mysql");

const con = mysql.createConnection({
    "host": "localhost",
    "port": "4000",
    "user": "username",
    "password": "PW"
});

con.connect();

app.post("/register", function(req, res) {
    let { id, pass, name, ip } = req.body;
    if (!(id && pass && name && ip)) return res.send(0);
    let query = `SELECT * FROM USER WHERE id=${id}`;
    con.query(query, function(err, row, fields) {
        if (!row[0]) return res.send(0);
        query = "INSERT INTO USER (name, id, pass, ip) VALUES (?, ?, ?, ?)";
        con.query(query, [id, pass, name, ip], (err) => res.send(+!err));
    });
});

app.listen(5000);