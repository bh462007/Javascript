/*
Using async/await
async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let data = await response.json();
  console.log(data);
}

getData();

🧠 Translation
Promise way     |	async/await
.then()         | 	await
.catch()        |    	try...catch
*/

/*
Golden Rule

❌ Without await → you get Promise
✅ With await → you get real data
*/