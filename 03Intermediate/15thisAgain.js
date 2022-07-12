// ***FOR ALL REGULAR FUNCTION CALLS, THIS POINTS TO WINDOW OBJECT***
console.log(this);

var user = {
    firstName : "Shristi",
    courseCount : 4,
    getCourseCount : function(){
        console.log("Line 7", this);
    }
};
user.getCourseCount();   /* This is called through object and not a regular function call */

function sayHello(){
    console.log("Hello");
}
sayHello();    /* This is a regular function call */

var user = {
    firstName : "Shristi",
    courseCount : 4,
    getCourseCount : function(){
        console.log("Line 22", this);
        function Hello(){
            console.log("Hello");
            console.log("Line 25 ", this );
        }
        Hello();      /* Regular function call */
    },    
};
user.getCourseCount();