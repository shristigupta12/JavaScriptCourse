var myMap = new Map();
myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}
for(let value of myMap.values()){
    console.log(`Value is ${value}`);
}
//or
for(let [key, value] of myMap){
    console.log(`Key is ${key} and Value is ${value}`);
}
// myMap.forEach((key)=>{
//     console.log(`${key}`);   -- here its giving value instead of key
// });
myMap.forEach((v, k)=>{
    console.log(`Value is ${v} and Key is ${k}`);
});

myMap.delete(3);
console.log(myMap);