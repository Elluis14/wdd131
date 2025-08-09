// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Example dynamic content on homepage
const places = [
  { name: "Chichen Itzá", location: "Yucatán", type: "Cultural" },
  { name: "Cancún", location: "Quintana Roo", type: "Beach" }
];

const section = document.getElementById("dynamic-content");
if (section) {
  section.innerHTML = places.map(place => `
    <div class="card">
      <h3>${place.name}</h3>
      <p>${place.location}</p>
      <p>Type: ${place.type}</p>
    </div>
  `).join('');
}
