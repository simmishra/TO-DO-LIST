const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

const addTask =()=>{
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)//li will bw displayed under the list container

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }//parentElement is li so it will be deleted
},false);

const saveData = ()=>{
    localStorage.setItem("data",listContainer.innerHTML) //so whatever content is there in list container
    //  that will be storedd in our browser in the name of data and we can display them with the localStorage.setItem("data")
}

const showTask = ()=>{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

