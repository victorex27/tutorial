// console.log(nameOfTutor);
// console.log(nameOfStudent);
//

/**
 * 
*/

let nameOfTutor = "Victor Obikobe";
let firstNameOfStudent = "Judah";
let lastNameOfStudent = "Akinlaja";
// let nameOfStudent = firstNameOfStudent+" "+lastNameOfStudent;
let nameOfStudent = `${firstNameOfStudent} ${lastNameOfStudent}`;



// joining variables using string concatenation
console.log("The name of the teacher is "+nameOfTutor+" and he taught "+nameOfStudent+" @ 10:30am");
console.log("At the end of this lesson "+firstNameOfStudent+" must have learnt the basics of Javascript");


nameOfTutor = "John Doe";

// using string literal
console.log(`The name of the teacher is ${nameOfTutor} and he taught ${nameOfStudent} @ 10:30am`)
console.log(`At the end of this lesson ${firstNameOfStudent} must have learnt the basics of Javascript`);




// declared and initialized
let sum = 0;
let init1 = 3;
let init2 = 6;

console.log(`The value of sum before the calculation is ${sum}`)

const addition = (a, b)=>{
    return a+b;
}

// reassign
sum = addition(init1, init2);

console.log(`The sum of ${init1} and ${init2} with addition function is ${sum}`)

// string + string = string (concatenation)
// number + number = number (addition)
// number + string = string (concatenation)

init1 = "3"

console.log(`The sum of ${init1} and ${init2} without addition function is ${init1 + init2}`)
console.log(`The sum of ${init1} and ${firstNameOfStudent} without addition function is ${init1 + firstNameOfStudent}`)

let isClassLive = false;


const pi = 3.142;
//  pi = 31.42; //-> this is wrong. You cannot redeclare a const declaration


let diameter = 3.5;

let circumference = pi * diameter;

console.log(`The circumference of a circle with diameter:${diameter} is ${circumference}`)

let test;
if (true) {
  test = true; // use "var" instead of "let"
}

alert(test);
