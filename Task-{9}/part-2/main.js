// [1]

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe=/\d+:\w+:\d+:\d+:\d+:\d+:\d+:\d+/ig;
console.log(ip.match(ipRe));

// [2]

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let re=/os\w*o/ig;
console.log(specialNames.match(re));

// [3]

let phone = "+(995)-123 (4567)";
let phoneRe=/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;
console.log(phone.match(phoneRe));
console.log(phoneRe.test(phone));

// [5]

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reg = /\d{2}\s?[/]?-?\s?\d{2}\s?[/]?-?\s?\d+/; // Write Pattern Here

console.log(date1.match(reg)); // "25/10/1982"
console.log(date2.match(reg)); // "25 - 10 - 1982"
console.log(date3.match(reg)); // "25 10 1982"
console.log(date4.match(reg)); // "25 10 82"
