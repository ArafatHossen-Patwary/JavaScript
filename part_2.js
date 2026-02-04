// Array
// const fruits = ['apple', 'orange', 'pears',];
// console.log(fruits);

// fruits[3] = 'grapes';
// console. log(fruits);

// fruits.push('mango');
// fruits.unshift('strawberries');
// fruits.pop();

// console.log(fruits);

// console.log(Array.isArray(fruits));

// console.log(Array.isArray('hello')); 

// console.log(fruits.indexOf('orange'));

//...........................................

//Object literal

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'Movies'],
//     Address: {
//         sreet: '50 main st',
//         city: 'Boston',
//         state:'MA'
//     }
// }
// console.log(person.firstName);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.Address.city);

//............................................................

//stracturing
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'Movies'],
//     Address: {
//         sreet: '50 main st',
//         city: 'Boston',
//         state:'MA'
//     }
// }
// const {firstName, lastName, Address:{ city }}= person;
// console.log(city);

// person.email = 'arafat@gmail.com';
// console.log(person);

//.....................................................

// const todo = [
//     {
//         id:1,
//         text:'Arafat',
//         isCompleate:true
//     },
//     {
//         id:2,
//         text:'Naeem',
//         isCompleate:true
//     },
//     {
//         id:3,
//         text:'Asraf',
//         isCompleate:true
//     },
// ];

// console.log(todo);

// converting in jeson

// const todo = [
//     {
//         id:1,
//         text:'Arafat',
//         isCompleate:true
//     },
//     {
//         id:2,
//         text:'Naeem',
//         isCompleate:true
//     },
//     {
//         id:3,
//         text:'Asraf',
//         isCompleate:true
//     },
// ];
// const todoJson = JSON.stringify(todo);
// console.log(todoJson);

//................................

//loop

// for(let i= 0;i<=10; i++) {
//     // console.log(i);
//     console.log( `number is:${i}`);
// }

// while loop
// let i= 0;
// while(i<10){
//     console.log( `number is:${i}`);
//     i++;
// }
//.............................................
// const todo = [
//     {
//         id:1,
//         text:'Arafat',
//         isCompleate:true
//     },
//     {
//         id:2,
//         text:'Naeem',
//         isCompleate:true
//     },
//     {
//         id:3,
//         text:'Asraf',
//         isCompleate:true
//     },
// ];
// for(let i=0; i< todo.length; i++){
//     console.log(todo[i].text);
// }

// for(let t of todo){
//     console.log(t);
// }

// for(let t of todo){
//     console.log(t.id);
//     }
//.............................................    

// const todo = [
//     {
//         id:1,
//         text:'Arafat',
//         isCompleate:true
//     },
//     {
//         id:2,
//         text:'Naeem',
//         isCompleate:true
//     },
//     {
//         id:3,
//         text:'Asraf',
//         isCompleate:false
//     },
// ];
// use forEach
// todo.forEach(function(t){
 
//     console.log(t.text);
// });
//............................................
// Map 
// const todoText = todo.map(function(t){
//     return t.text;
// });

// console.log(todoText);
//...............................................
// filter
const todo = [
    {
        id:1,
        text:'Arafat',
        isCompleate:true
    },
    {
        id:2,
        text:'Naeem',
        isCompleate:true
    },
    {
        id:3,
        text:'Asraf',
        isCompleate:false
    },
];

const todoCompleted = todo.filter(function(t){
    return t.isCompleate == true;
});

console.log(todoCompleted);
//........................................

// const todo = [
//     {
//         id:1,
//         text:'Arafat',
//         isCompleate:true
//     },
//     {
//         id:2,
//         text:'Naeem',
//         isCompleate:true
//     },
//     {
//         id:3,
//         text:'Asraf',
//         isCompleate:false
//     },
// ];

// const todoCompleted = todo.filter(function(t){
//     return t.isCompleate == true;

// }).map(function(t){
   
//     return t.text;
// });

// console.log(todoCompleted);