var name = "Reshu";

console.log("line 2", name);

 function sayName(){
    var name = "Shristi";
    console.log("line 7", name);
    function sayName2(){
        console.log("Line 9", name);
    }
    sayName2();
}
sayName();