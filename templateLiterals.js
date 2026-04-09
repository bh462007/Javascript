 export let name="sam";
let msg=`Hello ${name}, Welcome`;
console.log(msg);

//variable injection(interpolation)
let pri=100;
console.log(`total price is ${pri}`);

//expressions inside ${}
let a=5;
let b=10;
console.log(`Sum is ${a+b}`);

//multi-line strings
let text=`Line 1
Line 2
Line 3`;
console.log(text);

//real use case
let product="Laptop"
let price=45000;
let bill=`Product:${product}
Price:${price}
Thank you!`;
console.log(bill);

/*
Think of template literals as:

"Smart strings that can think and format themselves"
*/

let age=20;
let op=`I am ${age} years old`;
console.log(op);

let item="Phone";
let pric=20000;
let bill1=`Item: ${item}
Price: ₹${pric}`
console.log(bill1);

let x=10;
let y=3;
console.log(`Result: ${x*y}`);

let naam="sam";
let score=90;
console.log(`Student ${naam} scored ${score+10}`);