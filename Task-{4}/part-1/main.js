// 31 - 32 

// 1

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! (-50 >= +"-40" )); // true
console.log(- 10 <= -"-40"); // true
console.log(+ "10" === 10); // true
console.log(! (20 < false) ); // true


// 2

console.log('----------------------------'); 

let num1 = 10;
let num2 = 20;

console.log(num1<num2); // true
console.log(num1!=num2); // true
console.log(num1 !== num2); // true
console.log(! (num1>num2)); // true
console.log(typeof num1 === typeof num2); // true
console.log(num2>num1); // true


// 3

console.log('----------------------------'); 

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a > b); // true
console.log(a < b && a > c || a < b); // true
console.log(a < b && a < c || a < b); // true


console.log(a < b && a > c); // true

console.log(!(a > b) && !(a == b) && !(a < c) && !(a == c)); // true

// 33 37
console.log('----------------------------'); 
console.log('part 2');
console.log('----------------------------'); 

// 1


let num3 = 9; 
if (num3 < 10) {
    console.log(`00${num3}`);
}else if (num3 >10 && num3 <100){
    console.log(`0${num3}`);
}else {
    console.log(num3);
}

// 2
console.log('----------------------------'); 

let num4 = 9;
let str = "9";
let str2 = "20";

if(num4==str) {
console.log(`${num4} => (num4) Is The Same Value As ${str} => (str)`);
} 
if (num4==str && num4!==str) {
    console.log(`${num4} => (num4) Is The Same Value As ${str} => (str) But Not The Same Type`);
}
if ((num4!=str2) || num4!==str2) {
    console.log(`${num4} => (num4) Is Not The Same Value Or The Same Type As ${str2} => (str2)`);
}
if (typeof str === typeof str2  && str!=str2) {
    console.log(`${str} => (str) Is The Same Type As ${str2} => (str2) But Not The Same Value`);
    
}


//3
console.log('----------------------------'); 

let numb1 = 10;
let numb2 = 30;
let numb3 = "30";

if (numb3>=numb1 && typeof numb3 !== typeof numb1) {
    console.log(`${numb3} Is Larger Than ${numb1} And Type ${typeof numb3} Not The Same Type As ${typeof numb1}`);  
}

if (numb3>=numb1 && numb2==numb3 && typeof numb3 !== typeof numb1) {
    console.log(`${numb3} Is Larger Than ${numb1} And Value Is The Same As ${numb2} And Type ${typeof numb3} Not The Same Type As ${typeof numb1}`);  
}
if (numb3!== numb1 && typeof numb3 !== typeof numb2) {
    console.log(`{numb3 = ${numb3}} Value And Type Is Not The Same As {num1= ${numb1}} And Type Is Not The Same As {num2}`);
    
}

// 4
console.log('----------------------------'); 

// Edit What You Want Here

let number1 = 4;
let number2 = 3;
let number3 = 4;
let number4 = 26;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (number1 > number2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (number1 > number2 && number1 < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (number1 > number2 && number1 === number3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((number1 + number2) < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((number1 + number3) < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((number1 + number2 + number3) < number4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (number4 - (number1 + number3) + number2 === 21) {
  console.log("True");
} else {
  console.log("False");
}


// 38 39
console.log('----------------------------'); 
console.log('part 3');
console.log('----------------------------'); 

// 1
let day = "    friday      ";
let trueDay=day.trim()[0].toUpperCase()+day.trim().slice(1);
console.log(trueDay);

switch (trueDay) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break; 
     
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;

    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;

    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    

    default:
        console.log("Its Not A Valid Day");
        break;
}