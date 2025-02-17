/* 
!Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/

const colors = ["red", "blue", "green", "yellow", "orange"];

let reverse = [];

for (const element of colors) {
  reverse.unshift(element);
}
console.log(reverse);

/* 
!Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 78, 46]
*/
const numbers = [12, 98, 5, 41, 23, 78, 46];

let evenNum = [];
for (const number of numbers) {
  if (number % 2 === 0) {
    evenNum.push(number);
  }
}
console.log(evenNum);

/* 
!Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/
let names = ["Tom", "Tim", "Tin", "Tik"];

let output = "";
for (let name of names) {
  output += name;
}
console.log(output);

/* 
!Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

const statements = "I am a hard working person";

const statementsToArr = statements.split(" ");
console.log(statementsToArr);

let reverseSent = "";

for (const statement of statementsToArr) {
  reverseSent = statement + " " + reverseSent;
}

console.log(reverseSent);
