 // If Statement
// let numb1 = 12;
// if(numb1 > 13) {
//     document.write("Great than 13");
// }
// else {
//     document.write("Less than 13");
// }

// Using a function
// function isNumber(onlyNumber) {
//     if(Number.isFinite(onlyNumber)) {
//     if(Number.isInteger(onlyNumber)) {
//         document.write(`${onlyNumber} is a number`);
//     }
//     else {
//         document.write(`${onlyNumber} is not a number`);
//     }
// }

// Calling a function
// let myNumber = 7.6;
// isNumber(myNumber);

// Challenge
// function addition(onlyMessi, onlyNeymar) {
//      if( (Number.isFinite(onlyMessi)) && (Number.isFinite(onlyNeymar)) ){
//         document.write(onlyMessi + onlyNeymar);
//      }
//      else {
//         document.write(`${onlyMessi} / ${onlyNeymar} is not a number`);
//      }
// }
// addition(10, "5");
// Challenge Shortcut
// function addition(numb1, numb2) {
//     if((Number.isFinite(numb1)) &&
//     (Number.isFinite(numb2)) ) return numb1 + numb2;
//     return `${numb1} / ${numb2} is not a number`;
// }
// console.log(addition(8, 7));

//Nested If Statement//
// let age = 18;
// let salary = 5000;
// if(age > 17) {
//     if(salary >= 5000) {
//         document.write("Your are qualified");
//     }
//     else {
//         document.write("Present your second payslip");
//     }
// } else {
//     document.write("You are not qualified");
// }

// Nested If Statement using Logical Operator //
// if((age > 17) && (salary >= 5000)) {
//     document.write("Your are qualified");
// } else {
//     document.write("Your are not qualified");
// }

// Switch Statement
// let marks = 51;
// switch(marks) {
//     case 100:
//     case 95:
//         document.write("Grade A");
//     break;
//     case 91:
//     case 90:
//     case 87:
//         document.write("Grade B");
//     break;
//     case 50:
//         document.write("Passed");
//     break;
//     case 49:
//         document.write("Failed");
//     break;
//     default:
//         document.write("Not found");
// }
// Challenge
// let marks = 75;
// switch(true) {
//     case marks>90:
//         document.write("You're awesome");
//     break;
//     case marks>70:
//         document.write("Distinction");
//     break;
//     case marks>50:
//         document.write("Passed");
//     break;
//     case marks>30:
//         document.write("Failed");
//     break;
//     default:
//         document.write("Not found");
// }

/*
Different loop in JS:
- for
- for in: Loop through object's properties
- for of: Loop through the values 
- while
- do while
*/
// for(let i = 0; i<10; i++) {
// for(let i = 0; i<10; i+=2) {
//     if((i % 2) === 0) {
//         console.log(i);
//     }
// if(i == 5) break;
// if(i == 4) continue;
// console.log(i);
// }

//break and continue

// for in
// let person = {
//     name: 'David',
//     surname: 'John',
//     subject: ['HTML 5', 'CSS'],
//     address: {
//         streetName: 'pretoria rd',
//         country: 'South Africa',
//         complexName: 'PTA'
//     }
// }
// for(let data in person) {
//     if(data != 'address')
//     console.log(`${data}: ${person[data]}`)
// }
// console.log(person.address);
// console.log(
//     `Name: ${person.name}
//     Surname: ${person.surname}
//     Street name: ${person.address.streetName}`
// );
// console.log(person);
// console.log(person['name'])

// for of
// let numbers = [9, 7, 4, 34, 8];
// for(let number of numbers) {
//     console.log(number);
// }
// for (let i =0; i<numbers.length; i++) {
//     console.log(numbers[1]);
// }

// While
// let cnt = 0;
// while(cnt < 10) {
//     console.log(cnt);
//     cnt++;
// }
// while(true) {
    // if(cnt < numbers.length){
    //     console.log(number[cnt]);
    // }else {
    //     break;
    // }
    // cnt++
// }

//do{
//   console.log(numbers[cnt]);
//cnt++;
//
//} while(cnt < numbers.length);

// Object
// const person = {
//     name: "Lionel",
//     surname: "Messi"
// }
// console.log(person.name);
// console.log(person['surname']);
// person.email = "lionel@gmail.com";
// console.log(person);

