let input=document.querySelector(".my-input");
let addButton=document.querySelector(".add-btn");
let inProgressArray;
let taskExist=true;
window.addEventListener("load",()=>{
    inProgressArray = JSON.parse(localStorage.getItem("inProgressArray")) || [];
    
    inProgressArray.forEach(e => {
        generateTask(e);
    });
    
    
    addButton.addEventListener("click",()=>{
        if (input.value) {
            

            inProgressArray.push(input.value)
            localStorage.setItem("inProgressArray",JSON.stringify(inProgressArray));
            generateTask(input.value);    
        }  
        input.value="";
    })

})

function generateTask(taskText) {
    // to add task title one time for all tasks
    if(taskExist){
        let taskWord=document.createElement("div");
        taskWord.textContent="In Progress Tasks";
        taskWord.setAttribute("class","task-word");
        document.body.appendChild(taskWord);
        taskExist=false;
    }
    

    let allTasksContainer=document.createElement("div");
    allTasksContainer.setAttribute("class","all-tasks");

    let singleTaskContainer=document.createElement("div");
    singleTaskContainer.setAttribute("class","task-content");

    let taskName=document.createElement("div");
    taskName.setAttribute("class","task-name");
    taskName.textContent=taskText;

    let doneBtn=document.createElement("img");
    doneBtn.src="Images\\done.png";
    doneBtn.setAttribute("class","done-img");

    let deleteBtn=document.createElement("img");
    deleteBtn.src="Images\\delete.png";
    deleteBtn.setAttribute("class","delete-img");

    singleTaskContainer.appendChild(taskName);
    singleTaskContainer.appendChild(doneBtn);
    singleTaskContainer.appendChild(deleteBtn);

    allTasksContainer.appendChild(singleTaskContainer);

    document.body.appendChild(allTasksContainer);

    
    let doneCounter=document.createElement("div");
    let timeLeft=5;
    doneCounter.textContent=timeLeft;
    let deleteDoneTask;
    let countdownInterval;

    doneBtn.addEventListener("click",()=>{

        
        
        // check if the button is the done or he already make done and want to re-done again
        if (doneBtn.src.includes("done.png")) {
            
            doneBtn.src="Images\\unDone.png";

            singleTaskContainer.style.cssText="background-color: #08df33ff;color: white;"
            deleteBtn.style.display="none";
           
            doneCounter.style.cssText="background-color: #15101C;text-align:center;padding-top:5px;border-radius:4px";
            singleTaskContainer.appendChild(doneCounter);

            countdownInterval=setInterval(()=>{
                timeLeft--;
                doneCounter.textContent=timeLeft;
            },1000);
            
            if (timeLeft<=0) {
                clearInterval(countdownInterval);
            }  


            deleteDoneTask=setTimeout(()=>{
            singleTaskContainer.style.display="none";
            inProgressArray=inProgressArray.filter(task => task!==taskText);
            localStorage.setItem("inProgressArray",JSON.stringify(inProgressArray));   
            },5000)
       
        }else if (doneBtn.src.includes("unDone.png")){
            doneBtn.src="Images\\done.png";
            singleTaskContainer.style.cssText="background-color: #15101C;color: #9E78CF;";
            clearTimeout(deleteDoneTask);
            clearInterval(countdownInterval);
            deleteBtn.style.display="inline";
            doneCounter.style.display="none";
            timeLeft=5;
            doneCounter.textContent=timeLeft;

        }
       
        
        // not used yet 
        // for sve the green color for done in future
        // localStorage.setItem("container-done-background-color",singleTaskContainer.style.backgroundColor);
        // localStorage.setItem("container-done-color",singleTaskContainer.style.color);

       

        // doneBtn.style.cssText="filter:opacity(50%);pointer-events: none;"
            
     
           
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
                    singleTaskContainer.style.display="none";
                    inProgressArray=inProgressArray.filter(task => task!==taskText);
                    localStorage.setItem("inProgressArray",JSON.stringify(inProgressArray));
                    
                }
            })
            
        });


    
}