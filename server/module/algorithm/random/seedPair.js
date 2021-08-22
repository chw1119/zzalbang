const user = require('./../../database/user');
const memeImage = require('./../meme/memeImage');

const seedPair = class
{
    constructor(seedStr, obj)
    {
        this.pairData = obj || null;
        this.pairDataType = null;

        if(obj.contructor == user)
        {
            this.pairDataType = seedPair.static.TYPE.OBJECT_TYPE_USERDATA;
        }
        else if(obj.contructor == memeImage)
        {
            this.pairDataType = seedPair.static.TYPE.OBJECT_TYPE_IMAGEDATA;
        }
        else
        {
            this.pairDataType = seedPair.static.TYPE.OBJECT_TYPE_UNKNOWN;
        }
    }

    getPairDataType()
    {
        return this.pairDataType;
    }
}

seedPair.static = Object.freeze({
    TYPE : {
        OBJECT_TYPE_UNKNOWN :-1,
        OBJECT_TYPE_USERDATA  : 0,
        OBJECT_TYPE_IMAGEDATA : 1
    }
})

module.exports = seedPair;