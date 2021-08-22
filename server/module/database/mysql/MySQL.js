const mysql = require('mysql');

const MySQL = class
{
    constructor({host,user,password,database,port})
    {
        this.connection = mysql.createConnection({
            host : host,
            user : user,
            password : password,
            database : database,
            port : port
        })
    }

    init()
    {
        try
        {
            this.connection.connect();
        }
        catch(e)
        {
            return e;
        }
    }

    query(str, func)
    {
        this.connection.query(str, func);
    }


}

MySQL.static = Object.freeze({
    TYPE : {
        
    }
})

module.exports = MySQL;