var user = {
    firstName : "Shristi",
    lastName : "Gupta", 
    role : "student",
    loginCount : 22,
    InstagramSignedIn : true,
    courseList : [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info : function(){
        // return `First name : ${this.firstName}
        // Last name : ${this.lastName}
        // Role : ${this.role}
        // Login Count : ${this.loginCount}
        // Signed in Instagram : ${this.InstagramSignedIn}
        // Course list : ${courseList}`
        console.table(this);
    }
};
var courseList = true;
user.buyCourse("React Course");
console.log(user.courseList);
console.log(user.getCourseCount());
console.log(user.info());