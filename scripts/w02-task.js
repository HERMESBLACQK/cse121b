/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Omotoso Taiwo Henry';

const currentYear = new Date().getFullYear();

const profilePicture = 'images/taiwo.jpg'; // Replace with the actual image name




/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');


const yearElement = document.querySelector('#year');




/* Step 4 - Adding Content */


nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);






/* Step 5 - Array */

// Declare an array variable to hold your favorite foods.
let favFoods = ['Pizza', 'Ice Cream', 'Sushi', 'Chocolate', 'Burgers'];

// Modify the HTML element with the id of food to display your favorite foods array.
foodElement.innerHTML = favFoods







