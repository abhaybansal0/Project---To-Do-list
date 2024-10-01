const inputbox = document.getElementById("input-box")
const MyUL = document.getElementById("MyUL")

function addTask(){
    if(inputbox.value === ''){
        alert("Type Something Bitch.")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        MyUL.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

MyUL.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", MyUL.innerHTML);
}

function showTask(){
    MyUL.innerHTML = localStorage.getItem("data");
}
showTask();
