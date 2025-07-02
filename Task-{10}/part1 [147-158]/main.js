// [1]

class Car {
    constructor(name, model, price){
        this.n = name;
        this.m = model;
        this.p = price;
    };
    run (){
        return`Car is running now`;
    };
    stop (){
        return `Car is stopped`;
    };
}

let car1=new Car("BMW","abc",5000);
let car2=new Car("AUDI","xyz",6000);
let car3=new Car("marshel","hcc",4000);

console.log(`Car one name is ${car1.n} and moded is ${car1.m} and price is ${car1.p}`);
console.log(car1.run());
console.log("                                           ");

// [2]

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

class Tablet extends Phone {
    constructor(name,serial,price,size){
        super(name,serial,price);
        this.s=size || "unknown";
    }
    fullDetails (){
        return `${this.name} Serial is ${this.serial} and Size is ${this.s}`
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

console.log(" ");

// [3]

// Edit The Class
class User {
    #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  // good idea from me for use getter to get private but use it like property
  // console.log(userone.card) => give result
  get card(){
    let cardStr = this.#c.toString();
    if ( (cardStr.match(/^\d{4}-\d{4}-\d{4}-\d{4}$/ig))) {  // regular expression
        return cardStr; 
    }
    return cardStr.replace(/(\d{4})(?=\d)/g,"$1-"); // replace with regular expression and captured group ()
  }
  get showData (){
    
    return `hello ${this.u} your card number is ${this.card}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

console.log(" ");

// [4]

String.prototype.addLove=function (){
    return` i love u who see this task xd`;
};


// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
