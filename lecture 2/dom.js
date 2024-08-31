//console.dir(document);
//EXAMINE THE DOCUMENT OBJECT

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.head);
// console.log(document.body)
// console.log(document.doctype)
// console.log(document.title)
// document.title =123
// console.log(document.title)


//GET ELEMENT BY ID
// console.log(document.getElementById('header-title'));

// by variable 
// var title=document.getElementById('header-title');
// console.log(title);

// title.textContent='hello';// pays attention on text
// title.innerText='hello g';//pays attention on styling mostly

// title.innerHTML = '<h3> HELLO </h3>';//it places the h3 tag into actual h1 tag rather then deleting the h1 tag 


// var header=document.getElementById('main-header');
// header.style.borderBottom= '2px solid black';

//GET ELEMENTS BY CLASS NAME 
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Usman';
// items[1].style.fontWeight ='Bold';
// items[1].style.backgroundColor='blue';

// //give each item same color or some property use for loop 

// for (var i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor='grey';
// }

//Get ELEMENTS BY TAG 

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Usman';
// li[1].style.fontWeight ='Bold';
// li[1].style.backgroundColor='blue';

// //give each item same color or some property use for loop 

// for (var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor='yellow';
// }

//querry SELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom ='2px solid red';

// var input =document.querySelector('input');
// input.value='Hello world ';

// var submit =document.querySelector('input[type="submit"]');
// submit.value='send  ';
// // querry selector always select 1st item by defeault that have same class
// var item = document.querySelector('.list-group-item');
// item.style.color='red';
// //for last item
// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color='blue';

// // for 2nd child 

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color='green';

// //for 3rd child 

// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.color='brown';



//querry selector all 

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='hello usman ';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='pink';
//     even[i].style.backgroundColor='#ccc';
// }


// trversing the dom

//ParentNode
var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

//CHild Node

// console.log(itemList.childNodes);

//children node

// console.log(itemList.children);
// console.log(itemList.children[1]);

// first child 

// console.log(itemList.firstChild);// it works like child node and gives text space if exist

//firstelemnt child
// console.log(itemList.firstElementChild);


// last child

// console.log(itemList.lastChild);// works similar to first child 
//lastelemnt child

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 4'

// nextsiblings 

// console.log(itemList.nextSibling);// works similar to first and last child 

// nextElement Siblings 
// console.log(itemList.nextElementSibling);

//previous sibling
// console.log(itemList.previousSibling);//works similar to first child 
// previous Element Siblings 

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor ='Yellow'

//Create element

//create a div 

// var newDiv = document.createElement('div');
// // console.log(newDiv);

// // add class 
// newDiv.className='hello';
// //add id 
// newDiv.id='hello1';

// // set attr 
// newDiv.setAttribute('tittle','world');


 
// // create text node
// var textDiv = document.createTextNode('hello usman');
// // add text in div 
// newDiv.appendChild(textDiv)


// var  container = document.querySelector('header .container');
// var h1= document.querySelector('header h1');


// console.log(newDiv);
// container.insertBefore(newDiv , h1)


//event listenier
// var button = document.getElementById('button').addEventListener('click', function(){
//     console.log(123);
// });

// var button = document.getElementById('button').addEventListener('click', buttonClick);
// function buttonClick(e){
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);


//     // var output = document.getElementById('output');
//     // output.innerHTML='<h3>'+e.target.id+'</h3>';
//     // console.log(e.type)
//     // console.log(e.clientX)
//     // console.log(e.clientY)

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     console.log(e.altKey);
//     }

// var button = document.getElementById('button').addEventListener
// ('click', runEvent);
// var button = document.getElementById('button');
// // button.addEventListener('dblclick', runEvent);
// // button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// var box = document.getElementById('box');
// box.addEventListener('mouseenter', runEvent);

// var box = document.getElementById('box');
// box.addEventListener('mouseleave', runEvent);
// function runEvent(e){
//     console.log('EVENT TYPE '+e.type);

//     // output.innerHTML='<h3>MouseX:'+e.offsetX+'</h3><h3>mouseY:'+e.offsetY+'</h3>';
//     document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+", 40)";
// }

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);
// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);

// var select=document.querySelector('select');
// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit',runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('Event Type ' +e.type);
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>';
    
}






