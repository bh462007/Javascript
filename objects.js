//object are used to group data in key:value pairs

const User={
    rollno:78,
    name:"Bhagyashri",
    sayHi: function(){
        console.log("hii there!");
    }
};

//two ways to get info out of an object
console.log(User.name);
console.log(User["sayHi"]);