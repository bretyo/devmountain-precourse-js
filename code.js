var name = "Bert Femberg";
var email;
email = "asdf@lorem.net";

// let, cont;
const BOY = "Greg";
console.log("This Works");
console.log(BOY);

//  ARRAYS
let myFriends = ['Jeremy', 'Missy', 'Chent'];
myFriends[0];

for(let i = 0; i < myFriends.length; i++)
{
    console.log(myFriends[i]);
}
let i = 2;
myFriends.forEach(element => {
    i*= i;
    console.log(i);
});
let singleFriend = myFriends[0];
myFriends.push("Tony");
console.log(myFriends[3]);
myFriends.shift();
myFriends.unshift("FriendArin");


myFriends.splice(1, 1, "Bart");
myFriends.splice(1,0, "Missy");

let copy = myFriends.slice(2);
console.log(myFriends);
i = 444;
console.log(copy, i);
console.log(copy[1]);

// OBJECTS

var person = {
    name: "Jake Fromstatefarm",
    state: "Alabama",
    haircut: "Mullet",
    age: 28

}

var person2 = {
    name: "Gordon",
    state: "Jorgeia",
    haircut: "Shiny",
    age: 12
}

function sayHello(greetedPerson){
    console.log("Sup, " + greetedPerson.name + ". " + greetedPerson.state + " sucks. Also, you're " + greetedPerson.age + " years old and you still have a " + greetedPerson.haircut + "? Pathetic.");
}

sayHello(person);


//  FUNCTIONS

// Declaration
// function createVar(){
//     let myName = "B";
// }

// Expression
// let createVar = function() {
//     let myName = "B";
// }

// Arrow
// let createVar = () => {
//     let myName = "B";
// }

// function createVar(){
//     let myName = "B";
// }

// createVar();

function returnName(){
    return "B";
}

let name2 = returnName();
console.log(name2); 

function returnFour(){
    return 2+2;
}

let returnHello = function(){
    return "Hello";
}

let returnTrue = () =>{
    return true;
}

// LOOPS
for (let index = 0; index < 10; index++) {
    console.log("hi");
    
}

let int = 0;
while (int < 10) {
    console.log("sup");
    int++;
}

do {
    console.log("bro");
    int++;
} while (int < 20);