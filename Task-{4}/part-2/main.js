// Array task

//1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1

console.log(myFriends.slice(num-num,num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length=num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


//2 
console.log(`---------------------------------------`);

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

//3
console.log(`---------------------------------------`);

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr=finalArr.concat(arrTwo.pop(),arrOne.reverse(),arrTwo.reverse())
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]



//4
console.log(`---------------------------------------`);


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO


//5
console.log(`---------------------------------------`);

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions


console.log(haystack.includes(needle));

console.log(haystack[1] === needle);


haystack.pop()
let include=haystack.pop();

if (include === needle) {
    console.log('Found');
    
}


//6
console.log(`---------------------------------------`);

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs=allArrs.concat(arr2.pop(),arr1.pop(),arr2.pop());
allArrs=allArrs.reverse().join("").toLowerCase();

console.log(allArrs); // fxy