var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is : ${this.courseCount}`);
    }
}

// New keyword
var hitesh = new User("Hitesh", 2);
console.log(hitesh);
var Sam = new User("Sam", 3);
console.log(Sam);

//Prototype
User.prototype.getFirstName = function(){
    console.log(`Your first name is : ${this.firstName}`);
}
    var hitesh = new User("Hitesh", 2);
    console.log(hitesh);
    var Sam = new User("Sam", 3);
    console.log(Sam);
hitesh.getFirstName();
Sam.getFirstName();
