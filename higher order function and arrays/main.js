const companies =[
    { name: "company one", category:"finance" ,start:1981 , end:2003 },
    { name: "company two", category:"technology" ,start:1983 , end:2004 },
    { name: "company three", category:"auto" ,start:1986 , end:2013 },
    { name: "company four", category:"retail" ,start:1981 , end:1989 },
    { name: "company five" ,category:"finance" ,start:1989 , end:2003 },
    { name: "company six", category:"retail" ,start:1999 , end:2007 },
    { name: "company seven", category:"technology" ,start:1981 , end:2000 },
    { name: "company eight", category:"retail" ,start:2000 , end:2003 },
    { name: "company nine", category:"technology" ,start:1981 , end:2012 },
]
const age =[12 ,54 ,5 ,44,77,8,18,20,2.5,9,19,112,57,6,97]

// for loop
// for (let i=0;i<companies.length;i++)
// {
//     console.log(companies[i]);
// }

// for each 
// companies.forEach(function(company){
//     console.log(company);
// });

//filter using for loop

// let canDrink=[];
// for(let i=0;i<age.length;i++){
//     if(age[i]>=20){
//         canDrink.push(age[i]);

//     }
// }

// console.log(canDrink);

// filter using es5 method for age array

// const canDrink=age.filter(function(Age){
//     if (Age>=25){
//         return true;
//     }

// });
// console.log(canDrink);

//filter using es6 arrow function

// const canDrink=age.filter(Age=>Age>=50);
// console.log(canDrink);

//filter using es5 method for companies array for category retail

// const retailCompany=companies.filter(function(company){
//     if (company.category==='retail'){
//         return true;
//     }
// });
// console.log(retailCompany);

//filter using es6 arrow method for companies array for category retail

// const retailCompany =companies.filter(company=>company.category==='retail');
// console.log(retailCompany);

// Get companies that lasted 10 years or more 

// const lastedTenYears = companies.filter(company=>(company.end-company.start>=10));
// console.log(lastedTenYears);

//map
// map using es5  method for companies name 

// const companyName = companies.map(function(company){
//     return company.name;

// });
// console.log(companyName);

// map using es5  method for companies name and start and end dates

// const companyName = companies.map(function(company){
//     return`${company.name} [${company.start}- ${company.end}]`;

// });
// console.log(companyName);

// map using es6 arrow  method for companies name 
// const companyName=companies.map(company=>(company.category));
// console.log(companyName);

// square root of age using map by es6 arrow function

const ageSquare= age.map(Age=>Math.sqrt(Age));
console.log(ageSquare);



