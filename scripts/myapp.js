//DB info
let userDB = "Daniel"
let passDB = "Test1234"


function login(){
    // get the username and password from the user using a prompt
    let userName = prompt("Enter your username:");
    let userPassword = prompt("Enter your password:");
    console.log(userName, userPassword);
    //compare the passDB with the variable

    if(userName === userDB && userPassword === passDB){
        document.getElementById("notifications").innerHTML = "<p>Welcome to the Canvas </p>"
    }else{
        document.getElementById("notifications").innerHTML = "<p class= 'alert-error'> Invalid username or password </p>"
    }
    // display on the HTML welcome and system or invalid credentials
}