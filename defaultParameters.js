//"Default parameters are fallback values when user gives nothing"

function add(a=2,b=3){
    console.log(`${a+b}`);
}
add();
add(12,3);
/*
How it works

👉 If value is not passed, default is used
👉 If value is passed, default is ignored
*/

function createUser(name="Anonymous", role="User"){
    console.log(`${name} is a ${role}`);
}
createUser();
createUser("Admin","Superuser");
//👉 You’ll use this in forms, APIs, and your Expense Tracker.

function greet(name = "Guest") {
  console.log(`Hi ${name}`);
}

greet("Alex");

function multiply(a = 2, b = 3) {
  return a * b;
}

console.log(multiply(5));

function login(user="abc") {
  console.log("User: " + user);
}

login();

function test(x = 10) {
  console.log(x);
}

test(undefined);