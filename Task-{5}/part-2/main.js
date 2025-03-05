// 57 63
//1
function sayHello(theName, theGender) {
    if (theGender==="Male") console.log(`Hello mr ${theName}`);
    else if (theGender==="Female") console.log(`Hello Miss ${theName}`);
    else console.log(`Hello ${theName}`);  
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// 2

console.log(`--------------------------------------`);


function calculate(firstNum, secondNum, operation) {

    if(secondNum== undefined) console.log(`Second Number Not Found`);
    else{
        switch (operation) {
            case "add":
                console.log(firstNum+secondNum);
                break;
            case "subtract":
                console.log(firstNum-secondNum);
                break;
            case "multiply":
                console.log(firstNum*secondNum);
                break;
        
            default:
                console.log(firstNum+secondNum);
                break;
        }
    } 
}
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

//3 
console.log(`--------------------------------------`);

function ageInTime(theAge) {
    if (theAge<10 || theAge>100) console.log(`Age Out Of Range`);
    else {
        console.log(`your age :`);
        console.log(`years: ${theAge}`);
        console.log(`months: ${theAge*12}`);
        console.log(`weeks: ${theAge*12*4}`);
        console.log(`days: ${theAge*12*4*7}`);
        console.log(`hours: ${theAge*12*4*7*24}`);
        console.log(`minutes: ${theAge*12*4*7*24*60}`);
        console.log(`seconds: ${theAge*12*4*7*24*60*60}`);
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

  // 4

console.log(`--------------------------------------`);

//solved from challenge from challenge 


function checkStatus(...details){
    details.sort() //=> (age, name, T/F)
    details[2]===true ?
    console.log(`Hello ${details[1]}, Your Age Is ${details[0]}, You Are Available For Hire`) :
    console.log(`Hello ${details[1]}, Your Age Is ${details[0]}, You Are Not Available For Hire`) ;
}

  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"




console.log(`----------------------`);

/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = function (...name) {
    
    return ` String [${name.join(`], [`)}] => Done !`;
  };
  
  console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

  let nms= (...name)=> ` String [${name.join(`], [`)}] => Done !`;
  console.log(nms("Osama", "Mohamed", "Ali", "Ibrahim"));

  // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
  
  /* ================================= */
  
  // [1] Replace ??? In Return Statement To Get The Output
  // [2] Create The Same Function With Regular Syntax
  // [3] Use Array Inside The Arguments To Get The Output
  
  let myNumbers = [20, 50, 10, 60];
  
  
  let calc = (one, two, ...nums) => one+two+eval(nums.join("+"));
  
  console.log(calc(10, -myNumbers[0]-myNumbers[1], ...myNumbers)); // 80
