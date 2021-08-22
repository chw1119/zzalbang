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
}


const INT= class
{
    constructor()
    {

    }
}

const TINYINT= class
{
    constructor()
    {

    }
}

