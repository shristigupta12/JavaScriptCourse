// var value = Math.max(2, 45, 6, 780, 3);
// console.log(value);

// var myObj = {};
// Object.assign(myObj, {a: 1, b: 2}, {z: 4, y: 5});
// console.log(myObj);

function sum1(a, b){
    return a+b;
}

var myA = [4, 5];
console.log(sum1(...myA));  //Spread operator

function sum2(...args){     // Rest operator
    console.log(args);
    let sum = 0;
    for(const arg of args){
        sum+= arg;
    }
    return sum;
}
console.log(sum2(1, 2, 3));

function sum3(a, b,...args){    
    console.log(args);
    let multi = a*b;
    let sum = 0
    for(const arg of args){
        sum+= arg;
    }
    return [multi, sum];
}
console.log(sum3(1, 2, 3, 6));