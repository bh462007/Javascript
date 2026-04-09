let name = "John";
let age = 25;

let user = {
  name,
  age
};
console.log(user);
//If key = variable name, just write once.

//method short syntax
let obj={
    sayHello(){
        console.log("Hello");
    }
};
console.log(obj);

//dynamic keys
let key = "score";

let student = {
  [key]: 95
};

console.log(student); // { score: 95 }

//real use case
let category="food";
let amount=200;
let expense={
    category,
    amount,
    add(){
        console.log(`Added ${this.amount} in ${this.category}`);
    }
};
expense.add();
console.log(expense);
/*
Mental Model

“Write objects faster, cleaner, and smarter”
*/

let user1={
    greet(){
        console.log("Hi");
    }
};
console.log(user1);

let x = "value";

let ob = {
  x
};

console.log(ob);

let obj1 = {
  a: 10,
  show() {
    console.log(this.a);
  }
};

obj1.show();