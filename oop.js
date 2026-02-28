// Constructor function

// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);  // convert string → Date object
// }

// // instantiate object
// const person1 = new Person('john','Patwary','4-3-1980');
// const person2 = new Person('Arafat','Hossen','3-6-1970');

// console.log(person1.firstName);
// console.log(person1.dob.getFullYear());
//................................................

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);  // convert string → Date object
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return`${this.firstName} ${this.lastName}`;
    }
}

// instantiate object
const person1 = new Person('john','Patwary','4-3-1980');
const person2 = new Person('Arafat','Hossen','3-6-1970');

console.log(person1.firstName);
console.log(person1.dob.getFullYear());
console.log(person2.getBirthYear());
console.log(person2.getFullName());
console.log(person1);
