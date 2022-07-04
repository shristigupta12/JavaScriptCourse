// Create an application with following roles : 
// admin - get full access
// subadmin - get access to create/delete courses
// testprep - get access to create/delete tests
// user - gets access to consume content

// Here switch case would be best to use
var user = "testprep";

switch(user){
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("You get access to create/delete course");
        break;
    case "testprep":
        console.log("You get access to create/delete tests");
        break;
    case "user":
        console.log("You get access to consume content");
        break;
    default:
        console.log("Trail user ");
        break;
    
}