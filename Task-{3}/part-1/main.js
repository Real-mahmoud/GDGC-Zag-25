//1
// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400) ; // 0


//2

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + true + true + true); // 6

// Soultion Three
console.log(num * num - num); // 6

// Soultion Four
console.log(num * true + num); // 6

// Solution Five
console.log(num**true + num); // 6

// Solution Six
console.log(num/true + num); // 6

// Solution 7
console.log(num++ + --num); // 6


// 3 


let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(Number(num2) + Number(num2)); // 20

// Solution Three
console.log(+num2++ + +--num2); // 20

// Solution Four
console.log(num2+=num2); // 20



// 4
//        xD

let points = 10;

points++;
points++;
points++;

console.log(points); // 13


points--;
points--;
points--;
points--;
points--;

console.log(points); // 8;