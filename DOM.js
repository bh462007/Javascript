/*
🔹 What is DOM?

DOM = HTML turned into a JavaScript object

👉 Your HTML becomes something JS can read and change

🔍 Example

HTML:

<h1 id="title">Hello</h1>

JS:

let el = document.getElementById("title");

👉 Now JS can control that <h1>
*/

button.addEventListener("click",change);
function change(){
    document.getElementById("hello").textContent="Text changed";
}
