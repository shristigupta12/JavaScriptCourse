var testArray = [2, 3, 6, 1, 5, 9, 8, 4];
console.log(testArray.fill("h", 1, 4));
console.log(testArray.fill("y", 0, 4));
console.log(testArray.fill("t", 2));

const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];
const result = myNumber.filter((num)=> num!=55);
console.log(result);

// Slice and Splice
var users = ["Ted", "Tim", "Tom", "Sam", "Sor", "Sod"];
console.log(users.slice(1,4));
console.log(users.slice(1));
users.splice(1, 3, "Hi", "Bye");
console.log(users);