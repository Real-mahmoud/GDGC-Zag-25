// 1

// let start = 10;
// let end = 100;
// let exclude = 40;


// for (let i = start; i <= end; ) {
//     if(i===40){
//         i+=start;
//         continue ;
//     } 
//     console.log(i);
//     i+=start;
// }



//2

// console.log(`-----------------------------------`);

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i >=stop ; i--) {
//     if (i<start) {
//         console.log(`${end}${i}`);
//     }else console.log(i);
    
// }

// 3
// console.log(`-----------------------------------`);

// let start = 1;
// let end = 6;
// let breaker = 2;

// for (let i = start; i <=end ; i++) {
//     console.log(i);
//     console.log(`-- ${breaker}`);
//     console.log(`-- ${end-breaker}`);   
// }


// 4 

// let index = 10;
// let jump = 2;

// for (;;) {
//   console.log(index);
//   index-=jump;
//   if (index<4) break;
// }



// loop while
//1

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0; 
let counter = 0;
while (index<friends.length) {
    if (friends[index][index-index] !=="A" && typeof friends[index] === "string") {
        console.log(`${++counter} => ${friends[index]}`);
        index++;
    }else {
        index++;
    }
}