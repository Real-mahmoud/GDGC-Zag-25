// 1
function getDetails(zName, zAge, zCountry) {
    
    function namePattern(zName) {
        nameArray=zName.split(" ");
        return `${nameArray[0]} ${nameArray[1][0].toUpperCase()}.`;
    
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        let age=zAge.split(" ")[0];
        return `Your Age Is ${age}`;
      // 38 Is My Age => Your Age Is 38
      // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        return zCountry.substr(0,2).toUpperCase();
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You live in ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
}
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY


// 2

console.log(`----------------------------------------------------`);


function itsMe() {
    return `Iam A Normal Function`;
  }
  console.log(itsMe()); // Iam A Normal Function


let itsArrow=()=> `Iam A Arrow Function`  // <<<<<<<<<< solution
console.log(itsArrow());


function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


let webUrl=(protocol,web,tld) => `${protocol}://www.${web}.${tld}` ; // <<<<<<<<<<<<< solution
console.log(webUrl("https", "elzero", "org")); // https://www.elzero.org

// 3


 let checker=(zName)=> {
    return  (status)=> {
      return (salary)=> {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
      };
    };
  }
  
  console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


