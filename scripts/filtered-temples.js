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
  },

  {
    name: "Colonia Juárez Chihuahua Mexico Temple",
    location: "Colonia Juárez, Chihuahua, Mexico",
    dedicated: "1999-03-06",
    area: 6800, // SMALL: < 10,000 ft²
    imageUrl: "https://content.churchofjesuschrist.org/acp/bc/cp/Mexico/imagenes/templos_mx/1200x675/03_templo_colonia_juarez_612x340px.png"
  },
  {
    name: "Oaxaca Mexico Temple",
    location: "Oaxaca, Mexico",
    dedicated: "2000-03-11",
    area: 10700,
    imageUrl: "https://churchofjesuschrist.org/imgs/f4d7feeaec4cb56a01fe624fad0ddddb26267d11/full/500%2C/0/default"
  },
  {
    name: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44175,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/500%2C/0/default"
  },
  {
    name: "Provo City Center Temple",
    location: "Provo, Utah, USA",
    dedicated: "2016-03-20",
    area: 85084,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/e97d43cdfab131f3ffac633cd7c952de861d51c8/full/500%2C/0/default"
  }
];

// DOM elements
const container = document.getElementById('temples-container');

// Render function
function renderTemples(filteredTemples) {
  container.innerHTML = '';
  if (!filteredTemples.length) {
    container.innerHTML = `<p class="meta">No temples match this filter.</p>`;
    return;
  }

  filteredTemples.forEach(temple => {
    const card = document.createElement('section');
    card.classList.add('temple-card');
    card.innerHTML = `
      <h3>${temple.name}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${formatDate(temple.dedicated)}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    `;
    container.appendChild(card);
  });
}

function formatDate(isoStr){
  const d = new Date(isoStr);
  return d.toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric' });
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

// (Opcional) Enlazar botones si usas data-filter en el HTML
document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b === btn));
    filterTemples(btn.dataset.filter);
  });
});
