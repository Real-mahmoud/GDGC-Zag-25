// 1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(Number("100000")); // 100000
console.log(Math.floor(100000.2)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.round(99999.6)); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(parseInt("100000.231")); // 100000
console.log(10**5); // 100000
console.log(Math.trunc(100000.32123)); // 100000
console.log(100 * 1000); // 100000

// 3

console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16


// 4

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// 5

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// 6

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(flt.toFixed()); // 10
