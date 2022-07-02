const uid = "abc123";
// uid ="abcd";  not possible
var fullName = "Shristi Gupta";
var email = "Shristireshu12@gmail.com";
var password = "12233";
var confirmPasswprd = "12233";
var courseCount = 0;
var isLoggedInFromGoogle = false;

// fullName = prompt("Enter your name");


console.log(uid);
console.log("Full name is "+fullName);
console.log(email);

// better way
console.log(`
    With Unique Id: ${uid}
    User is : ${fullName}
    and his email is : ${email}
    and uses the password: ${password}
`);