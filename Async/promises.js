const posts =[
    {title:'post one' , body:'This is post one '},
    {title:'post two' , body:'This is post two '}

];

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post , index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    } ,1000);
}

function createPost(post){
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;
            // to show error on console
            // const error=true;
            if(!error){
                resolve();

            }else{
                reject('Error:Something went wrong ')
            }
            
           
        },2000);
    });
}

// createPost({title:'post three' , body:'This is post three '}) 
// .then(getPost);
   // to show error on console
// .catch(err=>console.log(err));
// async / await
async function init(){
    await createPost({title:'post three' , body:'This is post three '}) ;
    getPost();
     
}
init();
// promise All
// const promise1= Promise.resolve('Hello World');
// const promise2=10;
// const promise3=new Promise((resolve, reject)=>
// setTimeout(resolve , 2000 ,'GoodBye')
// );
// Promise.all([promise1,promise2,promise3])
// .then(values=>
//     console.log(values)
// );
