// Populate the select options dynamically
const products = [
  { id: 'p1', name: 'Smart Watch' },
  { id: 'p2', name: 'Wireless Headphones' },
  { id: 'p3', name: 'Bluetooth Speaker' },
];

const select = document.querySelector('#productName');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.name;
  option.textContent = product.name;
  select.appendChild(option);
});

// Footer year and last modified
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;
