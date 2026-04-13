//variables + scope + hoisting

function test(){
    if(true){
        var x = 10;
        let y = 20;
    }
    console.log(x); // works
    //console.log(y); // error
}
test();

const obj = {name: "A"};
obj = {name: "B"};
//error for reassignment

let a = 5;

function test(){
    console.log(a);
    let a = 10;
}
test();
/*
If a variable is declared with let inside a scope, it shadows outer variables — even before initialization.
*/


var b = 5;

function test(){
    var b;            // hoisted
    console.log(b);   // undefined
    b = 10;
}
test();
//error
//look at the declaration type



const array=[1,2,3];
console.log(array);

array.push(4);
console.log(array);