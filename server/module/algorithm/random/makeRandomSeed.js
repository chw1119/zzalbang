const fs = require('fs');
const crypto = require('crypto')

let seedBuffer = [];

const makeRandomSeed = class 
{
    static init()
    {
        fs.readFile('./seeds','utf-8',function(err,data){
            if(err)
            {
                console.error(err);
                setTimeout(function(){
                    makeRandomSeed.init();
                },1000)
            }
            else
            {
                seedBuffer = data.trim().split("\n");
            }
        })
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