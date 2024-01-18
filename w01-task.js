// 🔍 Part 1 error
let userName = "Moroni";
console.log(`Username: ${userName}`);
userName = "Moronihah"; // Removed the 'const' declaration as 'userName' is reassigned
console.log(`Username: ${userName}`);

// 🔍 Part 2 error
const currentDateAndTime = new Date(); // Using 'new Date()' to get the current date and time
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3 error. The following statement calls a function named total that accepts any number of arguments and returns the sum. The returned value is stored in a variable named theTotal. 1-10 are the arguments.

// 'total' function declaration
function total(...theNumbers) {
  let sum = 0;
  for (let aNumber of theNumbers) {
    sum += aNumber * 1; 
  }
  return sum;
}

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

