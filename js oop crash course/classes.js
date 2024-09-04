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
    getAge(){
        const years=new Date ().getFullYear()-this.year;
        return `${this.tittle} is ${years} years old `;
    }
    
    // year revise prototype 
    
   revise(newYear){
        this.year=newYear;
        this.revised=true;
    }

};
//instantiate the object
const book1= new book('book one ', 'abraham','2015');
console.log(book1);
book1.revise('2024');
console.log(book1)