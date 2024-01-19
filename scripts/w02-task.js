/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Omotoso Taiwo Henry';

const currentYear = new Date().getFullYear();

const profilePicture = 'images/taiwo.jpg'; // Replace with the actual image name




/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementsByClassName('block');


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

// Declare and instantiate a variable to hold another single favorite food item.
let newFavoriteFood = 'Pasta';

// Add the value stored in this new variable to your favorite food array.
favFoods.push(newFavoriteFood);

// Append the new array values onto the displayed content of the HTML element with the id of food.
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the first element in the favorite food array.
favFoods.shift();

// Append the array output showing the modified array, using a line break.
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Remove the last element in the favorite food array.
favFoods.pop();

// Append the array output with this final modified favorite foods array.
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;





