const sqlite3 = require('sqlite3').verbose();

const database = class
{
    static openDataBase(dbName, option)
    {
        const db = new sqlite3.Database(__dirname + "/database/" + dbName, option || sqlite3.OPEN_READWRITE, function(err){
            if(err)
            {
                console.log("database open error");
            }
            else
            {
                console.log("database opened");
            }
        });

        return db;
    }

    static runSQL(db, sql)
    {
        db.run(sql,function(err){
            if(err)
            {
                console.log(err);
            }
        })
    }
}

module.exports = database;