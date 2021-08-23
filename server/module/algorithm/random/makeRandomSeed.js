const database = require('./../../database/database');
const crypto = require('crypto')
let db = null;


const makeRandomSeed = class 
{
    static init()
    {
        db = database.openDataBase("seedList.db");
        const list = database.runSQL(db, "SELECT * FROM seeds", function(err, all){
            console.log(all);
        });
    }

    static makeNewSeed()
    {
        let id = crypto.randomBytes(20).toString('hex');
        console.log("len : " +id.length)
        database.runSQL(db, "INSERT INTO seeds(seed) VALUES('" + id + "')");

    }

    static getRandomSeed()
    {
        return seedBuffer[Math.random() * seedBuffer.length | 0];
    }
}

makeRandomSeed.init()

module.exports = makeRandomSeed;