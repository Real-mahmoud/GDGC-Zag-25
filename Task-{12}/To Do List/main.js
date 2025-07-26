let input=document.querySelector(".my-input");
let addButton=document.querySelector(".add-btn");
let inProgressTasks;
let doneTasks=[];
let taskExist=true;
let inProgressTasksTitle;

window.addEventListener("load",()=>{
    inProgressTasks = JSON.parse(localStorage.getItem("inProgressTasks")) || [];
    
    inProgressTasks.forEach(e => {
        generateTask(e);
    });
    
    
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
        document.body.appendChild(inProgressTasksTitle);
        taskExist=false;
    }

    
    function taskElements(){
        
    }

    let allTasksContainer=document.createElement("div");
    allTasksContainer.setAttribute("class","in-prog-tasks");

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


                if (timeLeft===0) {
                clearInterval(countdownInterval);


                // if time of the done tasks done(end) then make a list for done tasks

                let doneTasksContainer=document.createElement("div");
                doneTasksContainer.setAttribute("class","done-tasks");

                doneTasks.push(taskText);
                console.log(doneTasks);
                
                localStorage.setItem("DoneTasks",JSON.stringify(doneTasks));
            }
            },1000);
            
            
           
            

            // wait 5 sec until remove the done task from in progress tasks
            deleteDoneTask=setTimeout(()=>{
            singleTaskContainer.style.display="none";
            inProgressTasks=inProgressTasks.filter(task => task!==taskText);
            localStorage.setItem("inProgressTasks",JSON.stringify(inProgressTasks));  
            
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