let input=document.querySelector(".my-input");
let addButton=document.querySelector(".add-btn");
// let taskContainer=document.querySelector(".tasks");

window.addEventListener("load",()=>{
    let arr = JSON.parse(localStorage.getItem("arr")) || [];
    
    arr.forEach(e => {
        generateTask(e);
    });
    
    
    addButton.addEventListener("click",()=>{
        if (input.value) {
            arr.push(input.value)
            localStorage.setItem("arr",JSON.stringify(arr));
            generateTask(input.value);    
        }  
    })

})

function generateTask(taskText) {
   
    let taskContainer=document.createElement("div");
    taskContainer.setAttribute("class","task-content");
    


    let taskName=document.createElement("div");
    taskName.setAttribute("class","task-name");
    taskName.textContent=taskText;

    let doneBtn=document.createElement("img");
    doneBtn.src="Images\\done.png";
    doneBtn.setAttribute("class","done-img");

    let deleteBtn=document.createElement("img");
    deleteBtn.src="Images\\delete.png";
    deleteBtn.setAttribute("class","delete-img");

    taskContainer.appendChild(taskName);
    taskContainer.appendChild(doneBtn);
    taskContainer.appendChild(deleteBtn);

    document.body.appendChild(taskContainer);


    
        doneBtn.addEventListener("click",()=>{
            taskContainer.style.backgroundColor=localStorage.getItem("container-done-background-color");
            taskContainer.style.color=localStorage.getItem("container-done-color");
            taskContainer.style.cssText="background-color:#89df08;color: white;"
            doneBtn.style.cssText="filter:opacity(50%);"
            deleteBtn.style.cssText="filter:opacity(50%);"

            localStorage.setItem("container-done-background-color",taskContainer.style.backgroundColor);
            localStorage.setItem("container-done-color",taskContainer.style.color);
           
        })
    
}