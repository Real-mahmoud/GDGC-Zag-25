// [1]

let setOfNumbers=new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers][2]);

console.log('"'.repeat(50));

// [2]

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(new Set(myFriends.sort()));

console.log('"'.repeat(50));

// [3]

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMap=new Map()
let myKeys=Object.keys(myInfo);
// console.log(myInfo[myKeys[0]]); 

for (let i = 0; i < myKeys.length; i++) {
    myMap.set(myKeys[i],myInfo[myKeys[i]]); 
}
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has('role'));

console.log('"'.repeat(50));

// [4]

let theNumber = 100020003000;
console.log(+[...new Set(theNumber.toString())].filter((e)=>e>0).join(''));

console.log('"'.repeat(50));

// [5]

let theName = "Elzero";
console.log([...theName]);                // 1 
console.log([...new Set(theName)]);       // 2
console.log(theName.split(''));           // 3
console.log(Array.from(theName));         // 4
console.log(Array.from(theName,(e)=> e)); // 5






