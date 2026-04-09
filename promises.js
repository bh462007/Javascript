/*
🔹 What is a Promise?

A Promise is a “future result”

It has 3 states:

🟡 Pending
🟢 Resolved (success)
🔴 Rejected (error)
*/


let promise=new Promise((resolve, reject)=>{
  resolve("Success");
});
promise.
  then(result=>{
    console.log(result);
  })
  .catch(error=>{
    console.log(error);
  });


let fetchdata=new Promise((resolve, reject)=>{
  let success=true;
  if(success){
    console.log("Data received");
  }
  else{
    console.log("Error occurred");
  }
});
fetchdata
  .then(res=>console.log(res))
  .catch(err=>console.log(err));

/*
🧠 Mental Model

“I’ll give you the result later — handle it using .then()”
Promises are used to handle things that take time
*/

/*
Q1:

Is this synchronous or asynchronous?

👉 console.log("Hello")

Q2:

Is API call fast or slow?

Q3:

Why do we need Promise?

A) To style UI
B) To handle async tasks
C) To store data

Q4 (Important):

Which one handles success?

A) .catch()
B) .then()
*/

//asnwers
/*
Q1: synchronous ✔️
Q2: slow ✔️
Q3: B (handle async tasks) ✔️
Q4: .then() ✔️
*/