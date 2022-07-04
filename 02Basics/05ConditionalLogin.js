// Allow user to access course if he/she is logged in from:
//email, google or facebook
 
var email = true;
var google = false;
var facebook = false;

// Best way
if(email || facebook || google){
    console.log("Login Success");
}
