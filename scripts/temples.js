// Dynamic Footer Year and Last Modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Responsive Hamburger Menu
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuButton.textContent = menu.classList.contains("hidden") ? "☰" : "X";
});
