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

// get Age prototype 
book.prototype.getAge = function(){
    const years=new Date ().getFullYear()-this.year;
    return `${this.tittle} is ${years} years old `;
}

// year revise prototype 

book.prototype.revise=function(newYear){
    this.year=newYear;
    this.revised=true;
}

const book1 =new book('book one' , 'john doe', '2013');
const book2 =new book('book two' , 'jane doe', '2016');

book2.revise('2024');
console.log(book2);

