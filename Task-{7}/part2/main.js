// 2
let inputOne=document.querySelector('.classes-to-add');
let inputTwo=document.querySelector('.classes-to-remove');
let Current=document.querySelector('.element-current');
let myCurrentClasses=document.querySelector('.current-classes');
let classContainer=document.querySelector('.classes-list div');
let allSpans=document.querySelectorAll('span');

window.addEventListener('load',function(){
    
    inputOne.onblur =function(){
        let addInput=inputOne.value.toLowerCase().split(' ');
        for (let i = 0; i < addInput.length; i++) {
            let addedClass=document.createElement('span');
            addedClass.append(`${addInput[i]}`);
            Current.classList.add(`${addInput[i]}`);
            classContainer.append(addedClass);    
        }
        console.log(classContainer.children[0].innerHTML);
        inputOne.value='';
    }
    

    inputTwo.onblur =function(){
        let removeInput=inputTwo.value.toLowerCase().split(' ');
        for (let i = 0; i < removeInput.length; i++) {       
            if (Current.classList.contains(removeInput[i])) {
                Current.classList.remove(removeInput[i]);
                for (let j = 0; j < classContainer.children.length; j++) {
                    if (classContainer.children[j].innerHTML===removeInput[i]) {
                        classContainer.children[j].remove();
                    }  
                }
            }
        }
        inputTwo.value='';
    } 
})

//---------------------------------------------------

// 3

let myPara=document.querySelector('.myP');
let myElement=document.querySelector('.our-element');
myPara.remove();

let divBefore=document.createElement('div');
divBefore.setAttribute('class','start');
divBefore.setAttribute('title','Start element');
divBefore.setAttribute('data-value','start');
divBefore.append('Start')
myElement.before(divBefore);

let divAfter=document.createElement('div');
divAfter.setAttribute('class','end');
divAfter.setAttribute('title','End element');
divAfter.setAttribute('data-value','end');
divAfter.append('End')

myElement.after(divAfter);
