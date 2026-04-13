//bug happen if we copy array/object because they are reference type 
//they are stored by reference, not by value

let a = 10;
let b = a;
b = 20;
console.log(a);

let arr1 = [1,2];
let arr2 = arr1;
arr2[0] = 100;

console.log(arr1);

let obj1={x:1};
let obj2={...obj1};
obj2.x=5;
console.log(obj1.x);
console.log(obj2.x);

let x=[1,2];
let y=x;
y=[3,4];
//console.log(x);
console.log(y);

let obj = {x: 1};

function change(o){
    o = {x: 10};
    console.log(o);
}

change(obj);
console.log(obj.x);

/*
arr2 = arr1 copies the reference (same memory), so changes affect both
arr2 = [...arr1] creates a new copy (new memory), so changes are independent
*/

//Bugs happen when multiple variables point to the same memory location.

const p={x:1};
const q=p;
console.log(p);
console.log(q);

q.x=99;
console.log(q);


