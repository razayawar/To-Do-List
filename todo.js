const input_box = document.querySelector("#input-box");
const listcontainer = document.querySelector("#list-container");
const btnadd = document.querySelector(".add")


btnadd.addEventListener("click", ()=>{
    if(input_box.value === ''){
        alert("You Must Write Something");
    } 
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    input_box.value = "";
    savedata();
});
listcontainer.addEventListener("click", (evt)=>{
    if(evt.target.tagName === "LI"){
        evt.target.classList.toggle("checked");
        savedata();
    }else if(evt.target.tagName === "SPAN"){
        evt.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showlist(){
   listcontainer.innerHTML = localStorage.getItem("data");
}
showlist();