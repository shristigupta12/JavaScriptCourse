console.log(name);

var name = "Reshu";  // Here in output instead of undefined, the output should be error and explain the reason for name not coming  

if (true) {
    var lastName = "Gupta";
}
console.log(lastName);   // Here lastName shouldn't have given the output because the scope was over

// So to tackle these issues, let is used instead of var. because let gives better output than var

// In JavaScript, instead of {}, functions play a better role for scoping
