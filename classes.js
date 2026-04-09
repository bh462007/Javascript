class User{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hello ${this.name}!`);
    }
}
let obj1=new User("Alex");
obj1.greet();

