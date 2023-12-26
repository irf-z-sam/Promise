const posts=[
    {title:"Post One",body:"This is post One",createdAt:new Date().getTime()},
    {title:"Post Two",body:"This is post Two",createdAt:new Date().getTime()}
];
let intervalId ;
function getPost(){
    clearInterval(intervalId);
   const timerId= setInterval(()=>{
    let output = "";
        for(let i=0;i<posts.length;i++){
            output += `<li>${posts[i].title}-last updated ${(new Date().getTime()- posts[i].createdAt)/1000}</li>`
        }
        console.log("timer running id= ",timerId);
        document.body.innerHTML = output;
    },1000)
   
}
getPost();

function createPost(post,callback){
    setTimeout(()=>{
    posts.push({...post,createdAt:new Date().getTime()});
    callback();
    },3000)
}

function create4thPost(post,callback){
    setTimeout(()=>{
    posts.push({...post,createdAt:new Date().getTime()});
    callback();
    },5000)
}
getPost()

createPost({title:"Post Three",body:"This is post Three"},getPost);
createPost({title:"Post Four",body:"This is post Four"},getPost);

var timer;
var count=0;
function lastEditedInSecondsAgo(){
    count=0;
    clearInterval(timer);
    timer=setInterval(()=>{
        count++;
        console.log(count);
    },5000);
}

//Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Goodbye")
})
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));
