const courses = [
    {
        name : "Complete ReactJS course",
        price : "2.3"
    },
    {
        name : "Complete Angular course",
        price : "2.1"
    },
    {
        name : "Complete Mern course",
        price : "2.4"
    },
    {
        name : "Complete C++ course",
        price : "2.7"
    }
];

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course)=>{
        const li = document.createElement("li");  // creating <li></li>
        li.classList.add("list-group-item");
        const name = document.createTextNode(course.name);  //doubt
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$"+course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.append(li);
    })
}
// generateList();
window.addEventListener("load", generateList);   //doubt

//Sorting price
const btn = document.querySelector(".sort-btn");
btn.addEventListener("click", ()=>{
    courses.sort((a,b)=> a.price - b.price); //doubt
    generateList();
})
const btn2 = document.querySelector(".sort-btn2");
btn2.addEventListener("click", ()=>{
    courses.sort((a,b)=> {
        if(a<b){
            return -1;
        }
        if(a>b){
            return 1;
        }
        return 0;
    }
    );
    generateList();
})