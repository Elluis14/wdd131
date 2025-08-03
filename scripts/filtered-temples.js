const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    name: "Tijuana Mexico Temple",
    location: "Tijuana, Mexico",
    dedicated: "2015-12-13",
    area: 30500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tijuana-mexico-temple/tijuana-mexico-temple-11078-thumb.jpg"
  },
  {
    name: "Mexico City Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://es.thechurchnews.com/resizer/v2/GHRNS4RRENELLBN534WCKCM6GQ.JPG?auth=269801af1bab44e1d5b902974f3abd8ddf21177da182b565a54b4e6b67768afd&focal=2190%2C960&width=800&height=432"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 52806,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40800,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919-11-27",
    area: 47500,
    imageUrl: "https://fheontheroad.com/wp-content/uploads/2023/04/B683AA44-6911-4CEF-85C7-A33FFB02CC4A-768x952.jpeg"
  }
];

// DOM elements
const container = document.getElementById('temples-container');

// Render function
function renderTemples(filteredTemples) {
  container.innerHTML = '';
  filteredTemples.forEach(temple => {
    const card = document.createElement('section');
    card.classList.add('temple-card');
    card.innerHTML = `
      <h3>${temple.name}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    `;
    container.appendChild(card);
  });
}

// Filter logic
function filterTemples(criteria) {
  let filtered = temples;

  switch (criteria) {
    case 'old':
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case 'new':
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case 'large':
      filtered = temples.filter(t => t.area > 90000);
      break;
    case 'small':
      filtered = temples.filter(t => t.area < 10000);
      break;
    case 'home':
    default:
      filtered = temples;
      break;
  }

  renderTemples(filtered);
}

// Footer dynamic content
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial render
renderTemples(temples);
