// constructor 

function book(tittle,author,year){
    this.tittle=tittle;
    this.author=author;
    this.year=year;
    // this.getSummary = function(){
    //     return`${this.tittle} was written by ${this.author} in ${this.year}`;

    // }

}

// get summary prototype
book.prototype.getSummary=function(){
    return`${this.tittle} was written by ${this.author} in ${this.year}`;

};

// magazine constructor 

function magazine(tittle,author,year,month){
    //inherit book properties
    book.call(this,tittle,author,year)
    this.month=month;
};

// inherit getSummary prototype of book
magazine.prototype=Object.create(book.prototype);
const mg1=new magazine('mag1 ','abraham lincon','2022','september');

//use magazine constructor

magazine.prototype.constructor=magazine;
console.log(mg1);