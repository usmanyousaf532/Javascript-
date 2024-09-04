// Object protos 
const bookProtos ={
    getSummary:function(){
        return`${this.tittle} was written by ${this.author} in ${this.year}`;
    
    },
    
    // get Age prototype 
    getAge : function(){
        const years=new Date ().getFullYear()-this.year;
        return `${this.tittle} is ${years} years old `;}
    };

    //Create object

    // const book1= Object.create(bookProtos)
    // book1.tittle='book one ';
    // book1.author='john doe';
    // book1.year='2013';

    const book1= Object.create(bookProtos,{
        tittle:{value:'book1'},
        author:{value:'abraham'},
        year:{ value:'2017'},
    });

    console.log(book1);