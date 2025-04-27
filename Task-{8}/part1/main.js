// 1

// let msg=window.prompt("Print Number From – To","Example: 5-20");

// let range=msg.split("-");
// console.log(range);

// if (range[0]<range[1]) {
//     for (let i = +range[0]; i <= +range[1]; i++) {
//         console.log(i);
//     }  
// }else {
//     for (let i = +range[1]; i <= +range[0]; i++) {
//         console.log(i);
//     }  
// }

// 2

setTimeout(popUp,3000);  
let myBtn;

function popUp(){
    let myDiv=document.createElement('div');
    myDiv.className="div-task2"
    let myhead=document.createElement('h3');
    myhead.innerHTML="Welcome"
    let myP=document.createElement('p');
    myP.innerHTML='welcome To Website';
    myBtn=document.createElement('button');
    myBtn.innerText='X';
    myBtn.onclick=()=>{
        myDiv.remove();
    }
    myDiv.appendChild(myhead);
    myDiv.appendChild(myP);
    myDiv.appendChild(myBtn);


    document.body.appendChild(myDiv);
}

// 3 ,, 4  ,, 5


let intervalId=setInterval(counter,500);
let myNum=document.querySelector('.div-task3');

function counter(){
    if (myNum.innerHTML > 0 ) {
        
        if (myNum.innerHTML === '5'){
            window.open('https://elzero.org','_blank','width=300,height=300,left=100,top=100') // for task 5
        }
        myNum.innerHTML -=1;
    }else {
        window.open('https://elzero.org') // for task 4
        clearInterval(intervalId);        // for task 3  
    }
}