// 2
let myImgs=document.images;
for (let i = 0; i < myImgs.length; i++) {
    myImgs[i].setAttribute('src','https://elzero.org/wp-content/themes/elzero/imgs/logo.png');
    myImgs[i].style.backgroundColor='#03A9F4';
    myImgs[i].setAttribute('alt','Elzero Logo');
}

// 3

let myInput=document.querySelector('input');
let myCoin=document.querySelector('.result');

myInput.addEventListener('input',()=>{
    myCoin.innerHTML=`{${myInput.value}} USD Dollar = {${(myInput.value*15.6).toFixed(2)}} Egyptian Pound`

})

// 6

let allInputs=document.querySelectorAll('.input');
let create=document.getElementById('create');
let result=document.querySelector('.results');

let createFunc=function(){
    let numOfElements=allInputs[0].value;
    let ElementsText=allInputs[1].value;
   for (let i = 0; i < numOfElements ; i++) {

     let newElement=document.createElement('div');
     newElement.setAttribute('class','box');  
     newElement.setAttribute('title','Element');  
     newElement.setAttribute('id',`id-${i+1}`);
     newElement.innerHTML=`${ElementsText}` ;
     newElement.style.display='inline-block';
     newElement.style.width='200px';
     newElement.style.margin='10px';
     newElement.style.padding='10px 0px';
     newElement.style.textAlign='center';
     newElement.style.backgroundColor='#E91E63';
     result.appendChild(newElement);
    
   }
}


create.onclick=(e)=>{
    if (result.children.length===0) {
       createFunc(); 
    }else{
        result.innerHTML='';
        createFunc();
    }



    e.preventDefault();
}
