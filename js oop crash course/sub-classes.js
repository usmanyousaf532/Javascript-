class book {
    constructor(tittle,author,year)
    {
        this.tittle=tittle;
        this.author=author;
        this.year=year;

    }
    getSummary(){
        return`${this.tittle} was written by ${this.author} in ${this.year}`;


    }
}

// magazine subclass 

class magazine extends book{
    constructor(tittle,author,year,month){
        super(tittle,author,year)
        this.month=month;
    }
}

//instantiate magazine 

const mg1=new magazine('mag1', 'Dom','2022','November');
console.log(mg1);
console.log(mg1.getSummary())