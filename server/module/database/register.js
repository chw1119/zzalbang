class User {

    constructor (name, id, pass, ip) {
        this.name = name;
        this.id = id;
        this.pass = pass;
        this.ip = ip;
        this.rank = 0;
        this.like = [];
        this.point = 20000;
        this.createdAt = Date.now();
    }

}

const config = {
    rank: ["샎", "샌", "섽", "섾"]
};
