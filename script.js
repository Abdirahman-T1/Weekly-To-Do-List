const inputBox1 = document.getElementById("inputbox-1");
const inputBox2 = document.getElementById("inputbox-2"); 
const inputBox3 = document.getElementById("inputbox-3"); 
const inputBox4 = document.getElementById("inputbox-4"); 
const listContainer1 = document.getElementById("list-1");
const listContainer2 = document.getElementById("list-2");
const listContainer3 = document.getElementById("list-3");
const listContainer4 = document.getElementById("list-4");

function addTask(day){
    const inputBox = document.getElementById(`inputbox-${day}`);
    const listContainer = document.getElementById(`list-${day}`); 
    if(inputBox.value === "" ){
        alert("you must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
   inputBox.value= "";
   saveData()
}
for (let i = 1; i <= 7; i++) {
  const listContainer = document.getElementById(`list-${i}`);
listContainer.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
} else if(e.target.tagName === "SPAN") {
e.target.parentElement.remove();
saveData();
}
}, false);
}
function saveData(){
    for (let i = 1; i <= 7; i++) {
  const listContainer = document.getElementById(`list-${i}`);
    localStorage.setItem(`data-${i}`,listContainer.innerHTML);
    }
}
function load(){
     for (let i = 1; i <= 7; i++) {
  const listContainer = document.getElementById(`list-${i}`);
    listContainer.innerHTML = localStorage.getItem(`data-${i}`);
    }
}
load();
