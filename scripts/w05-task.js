// Declare Global Variables
const templesElement = document.querySelector('#temples');
let templeList = [];

// Function: displayTemples
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    // Create HTML elements
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const img = document.createElement('img');

    // Set properties for h3 and img
    h3.textContent = temple.templeName;
    img.src = temple.imageUrl;
    img.alt = temple.location;

    // Append h3 and img to article
    article.appendChild(h3);
    article.appendChild(img);

    // Append article to templesElement
    templesElement.appendChild(article);
  });
};

// Function: getTemples
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (!response.ok) {
      throw new Error('Failed to fetch temple data');
    }

    templeList = await response.json();
    displayTemples(templeList);
    console.log(templeList)
  } catch (error) {
    console.error(error.message);
  }
};



// Function: reset
const reset = () => {
  templesElement.innerHTML = ''; // Clear all <article> elements
};

// Function: filterTemples
const filterTemples = (temples) => {
  reset(); // Clear existing list

  const filter = document.querySelector("#filtered").value;

  switch (filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
    case "noutah":
      displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
      console.log('noutah')
      break;
    case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
      console.log('dates')
      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      console.error("Invalid filter value");
  }
};

// Event Listener: filterTemples Element change
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
// Call getTemples at the bottom of the file
getTemples();
