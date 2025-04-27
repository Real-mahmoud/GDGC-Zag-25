// [1]-------------
// let myNumbers = [1, 2, 3, 4, 5];

// let [a,,,,e]=myNumbers

// console.log(a * e); // 5

//[2]--------------

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// let [a,b,c,[d,e,[f,g]]]=mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

//[3]---------------

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
arr1.push(...arr3);
let [c,,,,a,b]=arr1;
console.log(`My Best Friends: ${a}, ${b}, ${c}`);
