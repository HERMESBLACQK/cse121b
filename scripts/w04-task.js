/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */




// DOM Manipulation (Output)

// Assign the value of the name property to the HTML element with an ID of name
document.querySelector('#name').textContent = myProfile.name ;

/* Photo with attributes */

// Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo
document.querySelector('#photo').src = myProfile.photo;

// Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo
document.querySelector('#photo').alt = myProfile.name;



/* Favorite Foods List*/

// Iterate over favoriteFoods and append them to the HTML <ul> with an ID of favorite-foods
myProfile.favoriteFoods.forEach(food => {
          let li = document.createElement('li');
          li.textContent = food;
          document.querySelector('#favorite-foods').appendChild(li);
        });


/* Hobbies List */
// Iterate over hobbies and append them to the HTML <ul> with an ID of hobbies
myProfile.hobbies.forEach(hobby => {
          let li = document.createElement('li');
          li.textContent = hobby;
          document.querySelector('#hobbies').appendChild(li);
        });

/* Places Lived DataList */
// Iterate over placesLived and append them to the HTML <dl> with an ID of places-lived
myProfile.placesLived.forEach(place => {
          let dt = document.createElement('dt');
          dt.textContent = place.place;
        
          let dd = document.createElement('dd');
          dd.textContent = place.length;
        
          document.querySelector('#places-lived').appendChild(dt);
          document.querySelector('#places-lived').appendChild(dd);
        });


// Declare a new object literal variable named myProfile
let myProfile = {};

// Add properties to the myProfile object
myProfile.name = "Patrick Juarez";
myProfile.photo = "path/to/your/image.jpg";
myProfile.favoriteFoods = [
  'Rice',
  'Tikka Masala',
  'Prioshki',
  'Shrimp',
  'Banana Cream Pie'
];
myProfile.hobbies = ['Reading', 'Traveling', 'Coding'];
myProfile.placesLived = [];

// Add items to the placesLived array
myProfile.placesLived.push(
  {
    place: 'San Francisco, CA',
    length: '1 year'
  }
);

// Add additional items to the placesLived array
myProfile.placesLived.push(
  {
    place: 'New York, NY',
    length: '2 years'
  },
  {
    place: 'Seattle, WA',
    length: '3 years'
  }
);










