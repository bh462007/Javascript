let age = 18;
if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}

let marks = 75;
if (marks >= 90) {
    console.log("A");
}
else if (marks >= 60) {
    console.log("B");
}
else {
    console.log("Fail");
}

let age1 = 20;
let hasId = true;
if (age >= 18 && hasId) {
    console.log("Allowed");
}

let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalid");
        
}

let x = 10;

if(x > 5){
    console.log("A");
}else if(x > 8){
    console.log("B");
}else{
    console.log("C");
}

let a = 0;

if(a){
    console.log("Yes");
}else{
    console.log("No");
}

let age2 = 20;
let hasID = false;

if(age2 >= 18 || hasID){
    console.log("Allowed");
}else{
    console.log("Not Allowed");
}

if("" && 10){
    console.log("A");
}else{
    console.log("B");
}

if(null || "Hello"){
    console.log("Yes");
}

let n = 5;

if(n > 10 && n < 20){
    console.log("A");
}else{
    console.log("B");
}