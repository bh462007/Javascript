const prompt=require("prompt-sync")();
function greetings(name){
    return "Hii "+name;
}

const name=prompt("Enter your name:");

let username=greetings(name);
console.log(username);