const button=document.getElementById("btn");
button.addEventListener("click",addText);
function addText(){
    const myInput=document.getElementById("text").value;
    
    document.getElementById("displayHere").textContent=myInput;
}
