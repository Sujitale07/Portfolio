

let NewDate  = document.getElementById("date");

setInterval(()=>{
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let second =  date.getSeconds();

    NewDate.innerHTML = `${hour} : ${minutes} : ${second}s`

}, )

let post = document.getElementById("Post");

let tasks = document.getElementById("tasks")
post.addEventListener("click" , ()=>{
    let value = document.getElementById("msg").value; 
    tasks.innerHTML = `${value}`
})

let box = document.getElementById("box");

box.addEventListener("click" , ()=>{
    
})