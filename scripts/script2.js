//functions
let counter = 0;

if(counter==5){
    console.log('😊');
}
console.log(counter++);

//1) creating the function
function increase(){
    counter++;
    console.log(counter);
}

function decrease(){
    counter--;
    console.log(counter);
}
//2) call/run/execute the function

function sayHi(){
    let userName=prompt("Enter your name:");

    console.log("welcome ..." + userName);
}

function multiByThree(){
    //1. get the cumber from a prompt
    let number = Number(prompt("Enter the number:"));
    //2. multi the number by 3
    let result =number*3;
    //3. display the result on the console
    document.getElementById("total").innerHTML=result;
}

if(5==5){
    console.log('😊');
}


function plusTwo(){
    //1. get the number from a prompt
    let number = Number(prompt("Enter the number:"));
    //2. add the number by 2
    let result =number+2;
    //3. display the result on the console
    document.getElementById("total").innerHTML=result;
}