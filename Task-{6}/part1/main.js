// 1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let mixString=mix.map((e)=> isNaN(e) ? e : '').reduce((acc,cur)=> `${acc}${cur}`)
console.log(mixString);

// Elzero

// 2

let myString = "EElllzzzzzzzeroo";
let trueString=myString.split('').filter((e,index,arr)=>{
    return (arr[index]!==arr[index+1])
}).join('')
console.log(trueString);

// Elzero

//3 
let myArray = ["E", "l", "z", ["e", "r"], "o"];

console.log(myArray.join('').split('').filter((e)=> e !=="," ).join(''));

// Elzero

// 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newArr=numsAndStrings.filter(e => !isNaN(e)).map(e => -e);
console.log(newArr);

// [-1, -10, 10, 20, -5, -3]

// 5

let nums = [2, 12, 11, 5, 10, 1, 99];
let result=nums.reduce((acc,cur)=>{
   return cur%2===0 ? cur*acc : cur+acc;
},1)
console.log(result);

// 500

console.log(`---------------------------------------------------`);


/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myStr = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution =myStr.split(',').filter((e)=>{
    return isNaN(e) ? e : '';
}).reduce((acc,cur)=>{
    cur === '_' ? cur=' ': '';
    return `${acc}${cur}`
})



console.log(solution); // Elzero Web School

