const input=document.getElementById("myInput");
const tasks=document.getElementById("list");

function newElement(){
  if(input.value===''){
    alert('Write any task.');
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=input.value;
    tasks.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  input.value="";
  savedata();
}


tasks.addEventListener("click" , function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    savedata();
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    savedata();
  }
},false)

function savedata(){
  localStorage.setItem("data",list.innerHTML);
}

function showTask(){
  tasks.innerHTML=localStorage.getItem("data");
}
showTask();