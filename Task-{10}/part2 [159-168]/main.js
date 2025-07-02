// [1]
let newDate=new Date();
let bd=new Date("8-22-2004");
let age=newDate-bd;

console.log(`${(age / 1000).toFixed(0)} seconds`);
console.log(`${(age / 1000 / 60).toFixed(2)} minutes`);
console.log(`${(age / 1000 / 60 / 60).toFixed(2)} hours`);
console.log(`${(age / 1000 / 60 / 60 / 24).toFixed(2)} days`);
console.log(`${(age / 1000 / 60 / 60 / 24 / 30).toFixed(2)} months`);
console.log(`${(age / 1000 / 60 / 60 / 24 / 30 / 12).toFixed(2)} years`);

// [2]
console.log(" ");

let date1=new Date(10000);

date1.setFullYear(1980);
date1.setHours(0);
console.log(date1);

// [3]

console.log(" ");
let date2=new Date();
date2.setDate(0);
console.log(date2);
let months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

console.log(`previous month is ${months[date2.getMonth()]} and last day is ${date2.getDay()}`);


// [4]
console.log(" ");


let date3=new Date("oct 25 1982");
let date4=new Date("10/25/1982");
let date5=new Date("1982-10-25");
console.log(date3);
console.log(date4);
console.log(date5);
