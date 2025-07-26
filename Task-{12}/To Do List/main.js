let input=document.querySelector(".my-input");
let addButton=document.querySelector(".add-btn");
let allTasksContainer;
let doneTasksContainer;
let inProgressTasks;
let doneTasks=[];
let taskExist=true;
let doneTaskExist=true;
let inProgressTasksTitle;
let doneTasksTitle;

window.addEventListener("load",()=>{

    inProgressTasks = JSON.parse(localStorage.getItem("inProgressTasks")) || [];
    allTasksContainer=document.createElement("div");
    allTasksContainer.setAttribute("class","in-prog-tasks");

    inProgressTasks.forEach(e => {
        generateTask(e);
    });

    doneTasks=JSON.parse(localStorage.getItem("DoneTasks")) || [];
    doneTasksContainer=document.createElement("div");
    doneTasksContainer.setAttribute("class","done-tasks");
   
    doneTasks.forEach(e => {
        generateDoneTask(e);
    });

    // this when add new task the order of both in prog and done tasks will be the same
    document.body.appendChild(allTasksContainer);
    document.body.appendChild(doneTasksContainer);
    
    addButton.addEventListener("click",()=>{
        if (input.value) {
            inProgressTasks.push(input.value)
            localStorage.setItem("inProgressTasks",JSON.stringify(inProgressTasks));
            generateTask(input.value);    
        }  
        input.value="";
    })

})

function generateTask(taskText) {
    // to add task title just one time for all tasks
    
    if(taskExist){
       inProgressTasksTitle=document.createElement("div");
        inProgressTasksTitle.textContent="In Progress Tasks";
        inProgressTasksTitle.setAttribute("class","task-word");
        allTasksContainer.appendChild(inProgressTasksTitle);
        taskExist=false;
    }

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


                if (timeLeft===0) {
                    clearInterval(countdownInterval);


                    // if time of the done tasks done(end) then make a list for done tasks

                    doneTasks.push(taskText);
                    localStorage.setItem("DoneTasks",JSON.stringify(doneTasks));

                    if (!document.body.contains(doneTasksContainer)) {
                    doneTasksContainer = document.createElement("div");
                    doneTasksContainer.setAttribute("class", "done-tasks");
                    doneTasksContainer.appendChild(doneTasksTitle)
                    document.body.appendChild(doneTasksContainer);
                    
                    }
                    generateDoneTask(taskText);                   
                }
            },1000);
            
            // wait 5 sec until remove the done task from in progress tasks
            deleteDoneTask=setTimeout(()=>{
            singleTaskContainer.style.display="none";
            inProgressTasks=inProgressTasks.filter(task => task!==taskText);
            localStorage.setItem("inProgressTasks",JSON.stringify(inProgressTasks));  
            
            // delete the title for in progress tasks
            if (inProgressTasks.length === 0 ) {
                inProgressTasksTitle.style.display = "none";
                taskExist = true; // allow showing again when new task is added
            };

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
       
        // for save the green color for done in future
        localStorage.setItem("container-done-background-color",singleTaskContainer.style.backgroundColor); // green
        localStorage.setItem("container-done-color",singleTaskContainer.style.color); // white     
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
                inProgressTasks=inProgressTasks.filter(task => task!==taskText);
                localStorage.setItem("inProgressTasks",JSON.stringify(inProgressTasks));

                if (inProgressTasks.length === 0 ) {
                    inProgressTasksTitle.style.display = "none";
                    taskExist = true; 
                }                  
            }
        })
    });  
}

function generateDoneTask (taskText){
     
    if(doneTaskExist){
        doneTasksTitle=document.createElement("div");
        doneTasksTitle.textContent="Done Tasks";
        doneTasksTitle.setAttribute("class","task-word");
        doneTasksContainer.appendChild(doneTasksTitle);
        doneTaskExist=false;
    }

    let singleTaskContainer=document.createElement("div");
    singleTaskContainer.setAttribute("class","task-content");
    singleTaskContainer.style.backgroundColor=localStorage.getItem("container-done-background-color")
    singleTaskContainer.style.color=localStorage.getItem("container-done-color")

    let taskName=document.createElement("div");
    taskName.setAttribute("class","task-name");
    taskName.textContent=taskText;

    let deleteBtn=document.createElement("img");
    deleteBtn.src="Images\\delete.png";
    deleteBtn.setAttribute("class","delete-img");

    singleTaskContainer.appendChild(taskName);
    singleTaskContainer.appendChild(deleteBtn);

    doneTasksContainer.appendChild(singleTaskContainer);

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
                doneTasks=doneTasks.filter(task => task!==taskText);
                localStorage.setItem("DoneTasks",JSON.stringify(doneTasks));

                if (doneTasks.length === 0 ) {
                    doneTasksTitle.style.display = "none";
                    doneTaskExist=true;
                }                  
            }
        })
    });  
}