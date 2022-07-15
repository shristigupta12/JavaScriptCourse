var user = {
    name : "",
    getUserName : function(){
        console.log(`User name is : ${this.name}`);
    }
};
var hitesh = Object.create(user);
console.log(hitesh);
hitesh.name = "Hitesh Choudhary";
hitesh.getUserName();

var sam = Object.create(user, {
    name : {value : "Shristi"}, 
    courseCount : {value : 3}
});
sam.getUserName();