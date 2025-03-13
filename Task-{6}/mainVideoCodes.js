let swappingCase="elZERo";
let newCase=swappingCase.split("").map(function(e){
  return e ===  e.toUpperCase()  ? e.toLowerCase() :e.toUpperCase();
})
console.log(newCase.join(""));

let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let newNum = invertedNumbers.map((e)=>{
    return -e;
})

console.log(newNum);

let ignNum= ignoreNumbers.split('').map((e)=>{
      return isNaN(e) ? e : '';
}).join('');

console.log(ignNum);

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let sA=friends.filter((e)=>{
    return e.startsWith("A");
})
console.log(sA);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let even=numbers.filter((e)=>{
    return e % 2==0;
})
console.log(even);

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let wordF=sentence.split(' ').filter((e)=>{
 return e.length<=4 ;
}).join(' ')
console.log(wordF);


// Filter Strings + Multiply
let mix = "A13BS2ZX";

let minNum=mix.split('').filter((e)=>{
    return !isNaN(e);
}).map((e)=>{
    return e*e;
}).join('')
console.log(minNum);


let nums = [10, 20, 15, 30];
let sum=nums.reduce((accum,current)=>{  // accum 10 , // current 20
    return accum+current;
})
console.log(sum);



let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

let big=theBiggest.reduce((accum,current)=>{
    return accum.length > current.length ? accum : current;
})
console.log(big);


let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let char=removeChars.filter((e)=>{
    return e !== "@";
}).reduce((accum,current)=>{
    return `${accum}${current}`;
})
console.log(char);


let li=document.querySelectorAll('li');
let divs=document.querySelectorAll('.content div');

li.forEach((e)=>{
    e.addEventListener('click',()=>{
        window.open("abc.html")
    })
})

divs.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.style.display='none'
    })
})
