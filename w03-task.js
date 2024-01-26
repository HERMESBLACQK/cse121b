/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
          return number1 + number2;
      }
      
      function addNumbers() {
          let addNumber1 = Number(document.querySelector('#add1').value);
          let addNumber2 = Number(document.querySelector('#add2').value);
          document.querySelector('#sum').value = add(addNumber1, addNumber2);
      }
      
      document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
          return number1 - number2;
      }
      
      function subtractNumbers() {
          let subtractNumber1 = Number(document.querySelector('#add1').value);
          let subtractNumber2 = Number(document.querySelector('#add2').value);
          document.querySelector('#sum').value = Subtract(subtractNumber1, subtractNumber2);
      }
      
      document.querySelector('#SubtractNumbers').addEventListener('click', addNumbers);


/* Arrow Function - Multiply Numbers */
function add(number1, number2) {
          return number1 + number2;
      }
      
      function addNumbers() {
          let addNumber1 = Number(document.querySelector('#add1').value);
          let addNumber2 = Number(document.querySelector('#add2').value);
          document.querySelector('#sum').value = add(addNumber1, addNumber2);
      }
      
      document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Open Function Use - Divide Numbers */
function add(number1, number2) {
          return number1 + number2;
      }
      
      function addNumbers() {
          let addNumber1 = Number(document.querySelector('#add1').value);
          let addNumber2 = Number(document.querySelector('#add2').value);
          document.querySelector('#sum').value = add(addNumber1, addNumber2);
      }
      
      document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = `Array: ${numbersArray.join(', ')}`;


/* Output Odds Only Array */
document.querySelector('#odds').textContent = `Odds: ${numbersArray.filter(number => number % 2 !== 0).join(', ')}`;


/* Output Evens Only Array */
document.querySelector('#evens').textContent = `Evens: ${numbersArray.filter(number => number % 2 === 0).join(', ')}`;


/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = `Sum: ${numbersArray.reduce((sum, number) => sum + number, 0)}`;


/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = `Multiplied: ${numbersArray.map(number => number * 2).join(', ')}`;


/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = `Sum of Multiplied: ${numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0)}`;

