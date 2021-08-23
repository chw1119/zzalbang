const __type = class
{
    constructor(typename, N)
    {
        this.typename = typename || "INT";
        this.N = N || 0;
    }

    toString()
    {
        return this.typename + "(" + N + ")";
    }
}

const CHAR = class extends __type
{
    constructor(N)
    {
        super("CHAR", N);
    }

    getTypeName()
    {
        return "CHAR";
    }
}


const VARCHAR = class
{
    constructor(N)
    {
        super("VARCHAR", N);
    }
    getTypeName()
    {
        return "CHAR";
    }
}


const INT = class
{
    constructor()
    {

        super("INT", N);
    }
    
    getTypeName()
    {
        return "CHAR";
    }
}

const TINYINT = class
{
    constructor()
    {

        super("TINYINT", N);
    }

    getTypeName()
    {
        return "CHAR";
    }
}

