let lis=document.querySelectorAll('ul li');
let exp=document.querySelector('.experiment')
// if there this color in local storage
if( window.localStorage.getItem('color')){
    //[1] add color to div
    exp.style.backgroundColor= window.localStorage.getItem('color');
    // [2] remove active class from all lis
    lis.forEach((li)=>{
        li.classList.remove("active");
    });
   // [3] add active class to current color
    document.querySelector(`[data-color=${window.localStorage.getItem('color')}]`).classList.add('active')
}else{

}

lis.forEach((li)=>{
    li.addEventListener('click',(e)=>{
        lis.forEach((li)=>{
            li.classList.remove("active")
        });
        e.currentTarget.classList.add('active');
        window.localStorage.setItem('color',e.currentTarget.dataset.color);
        exp.style.backgroundColor= window.localStorage.getItem('color');
        
        
    })
})