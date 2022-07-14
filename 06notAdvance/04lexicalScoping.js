// Lexical Scoping is a classical way of writing JavaScript
function init(){
    var firstName = "Hitesh"
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
}
init();