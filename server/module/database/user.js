const database = require('./database');
const makeRandomSeed = require('./../algorithm/random/makeRandomSeed')

const User = class {
    
    static craeteDefalutUserId()
    {
        return "USER#" + ((Math.random() * 10000 | 0) + 1000);
    }

    static getUserBySeed(seed)
    {
        const db = database.openDataBase('user_database.db');
    }

    constructor ({id, password, name, email, ip, seed, rank}) {
        this.ip = [ip];

        this.name = name;
        this.email = email;
        this.password = password;

        this.id = id || User.craeteDefalutUserId();
        this.rank = rank || User.static.RANK.RANK_BRONZE;
        this.seed = seed || makeRandomSeed.makeNewSeed();
    }

    getName()
    {
        return this.name;
    }

    setName(name)
    {
        this.name = name;
    }

    getId()
    {
        return this.id;
    }

    setId(id)
    {
        this.id = id;
    }

    getIp()
    {
        return this.ip;
    }

    addIp(ip)
    {
        this.ip.push(ip);
    }

    getEmail()
    {
        return this.email;
    }

    setEmail(email)
    {
        this.email = email;
    }

    getRank()
    {
        return this.rank;
    }

    setRank(rank)
    {
        this.rank = rank;
    }



}

User.static = Object.freeze({
    RANK : {
        RANK_BRONZE :   0,
        RANK_SILVER :   1,
        RANK_GOLD :     2,
        RANK_PLATINUM : 3
    }
})


module.exports = User;