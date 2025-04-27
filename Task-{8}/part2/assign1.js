// [1]
let sel1=document.getElementById('sel1');
let sel2=document.getElementById('sel2');
let sel3=document.getElementById('sel3');

window.addEventListener('load',()=>{
    let savedFont=window.localStorage.getItem('Font');
    let savedColor=window.localStorage.getItem('Color');
    let savedSize=window.localStorage.getItem('Size');


    sel1.value=savedFont;
    document.body.style.fontFamily=savedFont;
    sel2.value=savedColor;
    document.body.style.backgroundColor=savedColor;
    sel3.value=savedSize;
    document.body.style.fontSize=savedSize +'px';
})

// font family select
sel1.addEventListener('change',(e)=>{
    let myFont=e.target.value;
    window.localStorage.setItem('Font',myFont);   
    document.body.style.fontFamily=window.localStorage.getItem('Font');
})
//color select
sel2.addEventListener('change',(e)=>{
    let myColor=e.target.value;
    window.localStorage.setItem('Color',myColor);   
    document.body.style.backgroundColor=window.localStorage.getItem('Color');
})
// font size select
sel3.addEventListener('change',(e)=>{
    let mySize=e.target.value;
    window.localStorage.setItem('Size',mySize);   
    document.body.style.fontSize=window.localStorage.getItem('Size') + 'px';
})


//---------------------------------------------------------------------------------------------

//[2]