// constructor 

function book(tittle,author,year){
    this.tittle=tittle;
    this.author=author;
    this.year=year;
    this.getSummary = function(){
        return`${this.tittle} was written by ${this.author} in ${this.year}`;

    }

}
const book1 =new book('book one' , 'john doe', '2013');
const book2 =new book('book two' , 'jane doe', '2016');

console.log(book1.getSummary());

