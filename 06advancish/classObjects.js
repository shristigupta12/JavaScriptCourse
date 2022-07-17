const User = require("./06classJs");
const hitesh = new User("Shristi", "Shristireshu12@gmail.com");
console.log(hitesh.getInfo);
hitesh.enrollCourse("React Bootcamp");
console.log(hitesh.getCourseList());
hitesh.enrollCourse("Angular Bootcamp");
console.log(hitesh.getCourseList());

let courses = hitesh.getCourseList();
courses.forEach((c)=>{
    console.log(c);
})