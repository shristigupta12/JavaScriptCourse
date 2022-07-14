function init(){
    var firstName = "Hitesh"
    console.log("Hi");
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}
var value = init();   // Here ambiguity comes up
value();

// Explaination of above code with example
function doAddition(x){
    return function (y){
        return x+y;
    };
}
var add = doAddition(4);
console.log(add(3));
//or
console.log(doAddition(2)(3)); 
// this doAddition()()() is called curring