//constructor function
function Player(name,age){
    if(!new.target){    //safeguarding constructors
        throw Error("you must use the new operator to call the constructor");
    }
    this.name=name;
    this.age=age;
}

const sam=new Player("Sam",20);
console.log(sam.age);

//using a class
class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.sayHi=function(){
            console.log(this.name);
        };
    }
}

const raj=new User("Raj",19);
console.log(raj.name);
raj.sayHi();

class Book{
    constructor(title,author,pages,everRead){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.everRead=everRead;
        this.info=function(){
            let status=this.everRead?"already read":"not read yet";
            console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${status}`);
        }
    }
}
const b1=new Book("secret","Rhonda Byrne",78,true);
b1.info();