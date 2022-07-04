// Falsy values and anything other than these values are considered as truthy values
/* undefined
 null
 0
 ''
 NaN*/

 var user = null;
if(user){
    console.log('Condition of user is true');  
}

// Difference between == and === : type coersion
var value = "2";
if(value == 2){
    console.log('== case : Value is true');
    
}
if(value === 2){
    console.log('=== case : Value is true');
    
}
