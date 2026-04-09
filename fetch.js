//first read promises.js

/*
🔹 What is fetch()?

It is used to call APIs (get data from internet)

👉 And it returns a Promise
*/

fetch("url")
  .then(res => res.json())
  .then(data => console.log(data));