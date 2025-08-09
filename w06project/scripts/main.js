document.addEventListener('DOMContentLoaded', () => {
  // Footer basics
  document.getElementById('year')?.append(new Date().getFullYear());
  const lm = document.getElementById('lastModified');
  if (lm) lm.textContent = document.lastModified;

  // Visit counter
  const visitKey = 'mxtrails_visits';
  try {
    const visits = Number(localStorage.getItem(visitKey) || '0') + 1;
    localStorage.setItem(visitKey, String(visits));
    const vc = document.getElementById('visitCount');
    if (vc) vc.textContent = visits;
  } catch {}

  // Weather sample on home
  const tempEl = document.getElementById('temp');
  const windEl = document.getElementById('wind');
  const chillEl = document.getElementById('chill');
  const emoji = document.querySelector('.weather-emoji');

  if (tempEl && windEl && chillEl) {
    const t = Number(tempEl.textContent);
    const v = Number(windEl.textContent);
    if (t <= 10 && v > 4.8) {
      const wc = 13.12 + 0.6215*t - 11.37*Math.pow(v,0.16) + 0.3965*t*Math.pow(v,0.16);
      chillEl.textContent = `${Math.round(wc)}°C`;
      if (emoji) emoji.textContent = '🥶';
    } else {
      chillEl.textContent = 'N/A';
      if (emoji) emoji.textContent = t >= 26 ? '🥵' : '🙂';
    }
  }
});
