const inputbox = document.getElementById('input-box');
const listcantainer = document.getElementById("list-cantainer");

console.log(listcantainer);

document.getElementById("add-btn").addEventListener("click", addTask);
addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        addTask()
    }
})

function addTask() {
    if (inputbox.value == "") {
        alert("You must write something!!!");

    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        let span = document.createElement("span");
        span.innerHTML = "<i class='fa-solid fa-trash'></i>";
        li.appendChild(span);
        listcantainer.appendChild(li);

    }
    inputbox.value = "";
    saveData()
}

//save data to localStorage 

function saveData() {
    localStorage.setItem("data", listcantainer.innerHTML)
    
}

listcantainer.addEventListener("click", (e) => {
    if (e.target.tagName.toUpperCase() === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if(e.target.tagName.toUpperCase() === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})
//fetch data from local storage
function showTask() {
    listcantainer.innerHTML=localStorage.getItem(data)
}
showTask()