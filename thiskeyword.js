let obj={
    name:"sam",
    show(){
        console.log(this.name);
    }
};
obj.show();

/*
Key Rule:
this = “current object”
*/

let ob = {
  a: 5,
  show() {
    console.log(this.a);
  }
};

let f = ob.show;
f();