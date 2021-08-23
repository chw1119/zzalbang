const database = require('./../../database/database');
const crypto = require('crypto')

let seedBuffer = [];

const makeRandomSeed = class 
{
    static init()
    {
        const db = database.openDataBase();

        
    }

    static makeNewSeed()
    {
        let id = crypto.randomBytes(20).toString('hex');
        if(seedBuffer.includes(id))
        {
            return makeRandomSeed.makeNewSeed();
        }
        else
        {
            return id;
        }
    }

    static getRandomSeed()
    {
        return seedBuffer[Math.random() * seedBuffer.length | 0];
    }
}

makeRandomSeed.init()

module.exports = makeRandomSeed;