let inputs=document.querySelectorAll('input');
let sel=document.getElementById('sel');

// let input1=document.getElementById('in1');
// let input2=document.getElementById('in2');
// let input3=document.getElementById('in3');

window.addEventListener('load',()=>{
    inputs.forEach((e,i)=>{
        e.value=window.sessionStorage.getItem(`input[${i+1}]`);
    })
    if (window.sessionStorage.getItem('Select')) {
        sel.value=window.sessionStorage.getItem('Select');
    }
    
    // first try
    // input1.value=window.sessionStorage.getItem('input1');
    // input2.value=window.sessionStorage.getItem('input2');
    // input3.value=window.sessionStorage.getItem('input3');
});

// first try
// input1.onblur=function (){
//     window.sessionStorage.setItem('input1',input1.value);
// }
// input2.onblur=function (){
//     window.sessionStorage.setItem('input2',input2.value);
// }
// input3.onblur=function (){
//     window.sessionStorage.setItem('input3',input3.value);
// }

inputs.forEach((e,i)=>{
    e.onblur=function (){
        window.sessionStorage.setItem(`input[${i+1}]`,e.value);
    }
})

sel.addEventListener('change',()=>{
            
    window.sessionStorage.setItem('Select',sel.value);
})