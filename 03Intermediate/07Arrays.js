var countries = ["India", "America", "Japan", "Vietnam"];
console.log(countries.length);

var states = new Array("Rajasthan", "Assam", "karnataka");  /*This is better approach*/ 

console.log(states[1]);
states[0] = "Punjab";
console.log(states);

var user = ["Shristi", 3 , true];  // js will not give error here but this is not a good approach
console.log(user);
user.pop();
console.log(user);
user.unshift("New value");
console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("Shristi"));
console.log(user.indexOf("x"));

// Converting a string into array:
var surname = "Gupta";
console.log(Array.from(surname));