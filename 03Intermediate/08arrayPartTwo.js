var isEven = (element) =>{
    // if(element%2==0){
    //     return true;
    // }
    // return false;
    return element%2===0;   /* This is a better way */
}
console.log(isEven(0));

var result = [3, 3, 5, 0, 3].every(isEven);
console.log(result);

// callback
var result = [2,3,6,8].every((e)=>{
    return e%2==0;
})
// or
var result = [2,3,6,8].every((e)=> e%2==0 ); // for one line code