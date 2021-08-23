const database = require('./../../database/database');
const crypto = require('crypto')
let db = null;


const makeRandomSeed = class 
{
    static init()
    {
        db = database.openDataBase("seedList.db");
        const list = database.runSQL(db, "SELECET * FROM seeds")
        console.log(list);
    }

    static makeNewSeed()
    {
        let id = crypto.randomBytes(20).toString('hex');
        database.runSQL(db, "INSERT INTO seeds(seed) VALUE(" + id + ")");

    }

    static getRandomSeed()
    {
        return seedBuffer[Math.random() * seedBuffer.length | 0];
    }
}

makeRandomSeed.init()

module.exports = makeRandomSeed;