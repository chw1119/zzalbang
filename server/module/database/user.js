
const makeRandomSeed = require('./../algorithm/random/makeRandomSeed')

const User = class {
    
    static craeteDefalutUserId()
    {
        return "USER#" + ((Math.random() * 10000 | 0) + 1000);
    }

    constructor ({id, password, name, email, ip, seed, rank}) {
        this.id = id || User.craeteDefalutUserId();
        this.password = password;
        this.name = name;
        this.rank = rank || 
        this.email = email;
        this.ip = [ip];
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

}

User.static = Object.freeze({
    
})


module.exports = User;