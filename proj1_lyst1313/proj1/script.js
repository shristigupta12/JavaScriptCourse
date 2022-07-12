var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 800;

setInterval( ()=>{
    if(count<1000){
        count++;
        counter.innerText = count;
    }
}, 1)

setTimeout(()=>{
    followers.innerText = "Followers on Instagram"
}, 1600)