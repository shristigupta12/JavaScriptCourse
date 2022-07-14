const Shristi = {
    firstName : "Shristi", 
    lastName : "Gupta", 
    role : "Admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            Role is ${this.role}
            Studying ${this.courseCount} courses.
        `);
    }
}

const dj = {
    firstName : "Rock",
    lastName : "dj",
    role : "Sub-Admin",
    courseCount : 4
};

Shristi.getInfo();
// dj.getInfo();  -- Not possible

// So here we'll study borrowing of methods
Shristi.getInfo.bind(dj)();
// .bind always gives a reference to an object which needs to be called
Shristi.getInfo.call(dj);
// while .call directly calls the methods