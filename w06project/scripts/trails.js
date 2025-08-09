const trails = [
  {
    id: 'dll',
    name: 'Desierto de los Leones',
    distanceKm: 12,
    climbM: 320,
    difficulty: 'intermediate',
    img: 'images/trails/desierto.JPG',
    alt: 'Bosque en Desierto de los Leones'
  },
  {
    id: 'nt',
    name: 'Nevado de Toluca',
    distanceKm: 18,
    climbM: 850,
    difficulty: 'advanced',
    img: 'images/trails/nevado.JPG',
    alt: 'Alta montaña en Nevado de Toluca'
  },
  {
    id: 'vb',
    name: 'Valle de Bravo XC',
    distanceKm: 22,
    climbM: 540,
    difficulty: 'intermediate',
    img: 'images/trails/valle.JPG',
    alt: 'Cross-country en zona boscosa con lago'
  },
  {
    id: 'ch',
    name: 'Chipinque Park',
    distanceKm: 10,
    climbM: 280,
    difficulty: 'beginner',
    img: 'images/trails/chipinque.JPG',
    alt: 'Panorámica desde Chipinque, Monterrey'
  },
  {
    id: 'tp',
    name: 'Tapalpa Flow',
    distanceKm: 14,
    climbM: 360,
    difficulty: 'beginner',
    img: 'images/trails/tapalpa.JPG',
    alt: 'Bosque de pinos y sendero fluido en Tapalpa'
  }
];

const $ = (sel) => document.querySelector(sel);

const byDifficulty = (d) => (t) => d === 'all' ? true : t.difficulty === d;
const byMaxDistance = (m) => (t) => !m ? true : t.distanceKm <= Number(m);
const byMaxClimb = (m) => (t) => !m ? true : t.climbM <= Number(m);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function card(t){
  return `
    <article class="trail-card">
      <img src="${t.img}" alt="${t.alt}" loading="lazy" width="640" height="360">
      <div class="tc-body">
        <h3>${t.name}</h3>
        <p>${t.distanceKm} km · +${t.climbM} m · ${cap(t.difficulty)}</p>
      </div>
    </article>
  `;
}

function render(list){
  const container = $('#trailList');
  const count = $('#resultsCount');
  container.innerHTML = list.map(card).join('');
  if (count) count.textContent = `${list.length} result${list.length === 1 ? '' : 's'}`;
}

function applyFilters(){
  const d = $('#difficulty')?.value || 'all';
  const md = $('#maxDistance')?.value.trim();
  const mc = $('#maxClimb')?.value.trim();

  const filtered = trails
    .filter(byDifficulty(d))
    .filter(byMaxDistance(md))
    .filter(byMaxClimb(mc));

  render(filtered);
}

function resetFilters(){
  $('#filters')?.reset();
  render(trails);
}

document.addEventListener('DOMContentLoaded', () => {
  render(trails);
  $('#applyFilters')?.addEventListener('click', applyFilters);
  $('#resetFilters')?.addEventListener('click', resetFilters);
});
