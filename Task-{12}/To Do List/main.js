let input=document.querySelector(".my-input");
let addButton=document.querySelector(".add-btn");
let arr;
window.addEventListener("load",()=>{
    arr = JSON.parse(localStorage.getItem("arr")) || [];
    
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
        taskContainer.style.cssText="background-color:#89df08;color: white;"
        deleteBtn.style.display="none";
        let doneCounter=document.createElement("div");
        doneCounter.textContent="5";
        doneCounter.style.cssText="background-color: #15101C;text-align:center;padding-top:5px;border-radius:4px";
        taskContainer.appendChild(doneCounter);

        let id=setInterval(()=>{
            doneCounter.textContent--;
        },1000);
         
        if (!doneCounter.textContent) {
            clearInterval(id)
        }

        doneBtn.style.cssText="filter:opacity(50%);pointer-events: none;"
            
        setTimeout(()=>{
            taskContainer.style.display="none";
            arr=arr.filter(task => task!==taskText);
            localStorage.setItem("arr",JSON.stringify(arr));

                
        },5000)

            localStorage.setItem("container-done-background-color",taskContainer.style.backgroundColor);
            localStorage.setItem("container-done-color",taskContainer.style.color);
           
        });

        deleteBtn.addEventListener("click",()=>{
           swal({
                title: "Deletion",
                text: "Are You Sure You Want To Delete?",
                icon: "warning",
                buttons: true,
            })
            .then ((value)=>{
                if (value) {
                    taskContainer.style.display="none";
                    arr=arr.filter(task => task!==taskText);
                    localStorage.setItem("arr",JSON.stringify(arr));
                    
                }
            })
            
        });


    
}