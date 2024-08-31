

// console.log ('hello world');

// // variables (let , const)
// // let age=20;
// // age = 30;
// // console.log(age);
// // const age =20;
// // console.log(age);

// //data types (string , numbers , boolean , null , undefined)

// const name = 'john';
// const age =26;
// const isCool =true;
// const x=null;
// const y= undefined;

// console.log(typeof y);

// concatenation
// console.log('My name is '+ name + ' and my age is '+ age);
// //template string
// console.log(`my name is ${name} and my age is ${age}`);
// const hello=`my name is ${name} and my age is ${age}`;
// console.log(hello);

// // strings

// // const s= 'hello world';
// // console.log(s.length);
// // console.log(s.toUpperCase());
// // console.log(s.toLowerCase());
// // console.log(s.substring(0 , 8));
// // console.log(s.substring(0 , 8) .toUpperCase());

// //strings into arrays 
// // const s= 'hello world, usman, arham, ayyan';
// // console.log(s.split(''));
// // console.log(s.split(','));

// //arrays :variables that hold multiple values 

// // const fruit=['mango','orange','banana'];
// // //to add something on specific index of the string 
// // fruit[3]='gava';
// // //to add something in starting of array
// // fruit.unshift('strawbery');
// // //to add something at last of the string
// // fruit.push('apple');
// // //to delete something from array used that
// // fruit.pop();
// // //to check index of the value in array
// // console.log(Array.isArray('mango'));
// // //to find index of some value of array
// // console.log(fruit.indexOf('orange'));
// // // console.log(Array.isArray('mango'));
// // console.log(fruit);

// // const person={
// //     firstname: 'john',
// //     lastanme:'doe',
// //     age:30,
// //     hobbies:['music', 'cricket'],
// //     address:{
// //         city:'boston',
// //         street:'main',
// //     }
// // }
// // person.email='john@gmail.com',
// // console.log(person.address.city);
// // console.log(person.email);
// // console.log(person);

// // //destructuring 
// // const {firstname,  lastanme , address:{street}}=person;
// // console.log(street);

// todos
// const todos=[{
//     id:1,
//     text:'meeting with boss',
//     isComplete: true

// },
// {
//     id:2,
//     text:'app with boss',
//     isComplete: false

// }
// ]

// console.log(todos);

// const jasontodos=JSON.stringify(todos);
// console.log(jasontodos);

// //for loop

// for(let i=0 ; i<10;i++)
// {
//     console.log(`for loop numbers ${i}`);
// }

// while loop
// let i=0;
// while(i<10){
//     console.log(`while loop numbers ${i}`);
//     i++;
// }
// const todos=[
//     {
//         id:1,
//     text:'meeting with boss',
//     isComplete: true

// },
// {
//     id:2,
//     text:'app with boss',
//     isComplete: false

// }];

// for(let i=0;i<todos.length ; i++)
// {
//     console.log(todos[i].text);
// }

// const todos=[
//     {
//         id:100,
//     text:'meeting with boss',
//     isComplete: true

// },
// {
//     id:21,
//     text:'app with boss',
//     isComplete: false

// }];

// for(let todo of todos){
//     console.log(todo.id);
// }

//forEach , map , filter
//forEach
// todos.forEach(function(todo)
// {
// console.log(todo.id);
// });

//Map

//  const todoText= todos.map(function(todo)
// {
// return todo.text
// });
// console.log(todoText);

//filter

// const todoCompleted= todos.filter(function(todo)
// {
// return todo.isComplete===true;
// });
// console.log(todoCompleted);

//map and filter together

// const todoCompleted= todos.filter(function(todo)
// {
// return todo.isComplete===true;
// }).map(function(todo){
//     return todo.id

// })
// console.log(todoCompleted);


// if and if else condition

// const x=100;
// if (x===10)
// {
//     console.log('x is 10');
// } else if( x>10){
//     console.log('x is greater then 10');
// }
// else {
//     console.log('x is less than 10');
// }

//terniary operator

// const x= 12;
//  const color =  x >10 ? 'red' : 'blue';

//  console.log(color);

// switch statement

// const x= 9;
//  const color =  x >10 ? 'red' : 'blue';

// switch(color){
//     case 'red':
//         console.log('color is red ');
//         break;
//     case 'blue':
//         console.log('color is blue ');
//         break;
//     default:
//         console.log('color is not red or blue ');
//         break;        
// }

//functions
// function addNum(num1 , num2){
//     console.log(num1+num2);
// }
// addNum(5,6)

// function addNum(num1=5 , num2=6){
//     console.log(num1+num2);
// }
// addNum()

// function addNum(num1 , num2){
//     return(num1+num2);
// }
// console.log(addNum(5,8));

// const addNum=(num1 ,num2)=>(num1+num2);
// console.log(addNum(5,77));

// constructor function

// function person(firstname , lastaname ,dob)
// {
//     this.firstname=firstname;
//     this.lastaname=lastaname;
//     this.dob=dob;
// }
// const person1 = new person('john ' , 'doe ', '8-8-2018');
// console.log(person1);

// class 
class person{
    constructor(firstname , lastname ,dob){
        this.firstname=firstname;
        this.lastname=lastname;
        this.dob=new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();

    }
    getFullName(){
        return `${this.firstname }  ${this.lastname}`;
    }
}
const person1 = new person('john ' , 'doe', '8-8-2018');
const person2 = new person('john ' , 'dog', '7-18-2017');

console.log(person2.getFullName());
console.log(person1);
console.log(person2);





