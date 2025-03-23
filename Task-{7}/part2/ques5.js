let elements=document.body.children;
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click',()=>{
        console.log(`This is ${elements[i].tagName}`);
    }) 
}