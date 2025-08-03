// Footer dynamic values
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static temperature and wind speed for demonstration
const temp = 24; // °C
const windSpeed = 15; // km/h

document.getElementById("temp").textContent = temp;
document.getElementById("wind").textContent = windSpeed;

// Function to calculate wind chill
function calculateWindChill(t, s) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

// Only display if valid conditions for wind chill (in metric)
let windChill = "N/A";
if (temp <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temp, windSpeed) + " °C";
}
document.getElementById("windChill").textContent = windChill;
