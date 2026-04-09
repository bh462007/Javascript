/*
The Symbol: ...
Same symbol → 2 different uses

Spread → expands things
Rest → collects things

🔹 1. Spread Operator (Expand)

👉 Used to expand arrays/objects
*/
let arr1 = [1, 2];
let arr2 = [3, 4];

let result = [...arr1, ...arr2];

console.log(result); // [1, 2, 3, 4]

let arr = [1, 2, 3];
let copy = [...arr];

console.log(copy);

let user={name:"Sam"};
let updated={...user,age:25};
console.log(updated);

/*
🔹 2. Rest Operator (Collect)

👉 Used in functions to collect multiple values
*/
function sum(...numbers) {
  return numbers;
}

console.log(sum(1, 2, 3)); // [1, 2, 3]

function total(...nums) {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  return sum;
}

console.log(total(10, 20, 30)); // 60

function test(...args) {
  console.log(args);
}

test(5, 10);

let x=[1,2];
let y=[3,4];
let z=[...x,...y];
console.log(z);

function demo(a, ...rest) {
  console.log(a);
  console.log(rest);
}

demo(1, 2, 3, 4);
/*
Rule:

First parameters take values normally, rest collects “everything left”
*/

function test(x, y, ...z) {
  console.log(x);
  console.log(y);
  console.log(z);
}

test(10, 20, 30, 40, 50);