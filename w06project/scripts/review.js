const products = [
  { id: 'helm-fox', name: 'Fox MTB Helmet V1' },
  { id: 'gloves-giro', name: 'Giro Trail Gloves' },
  { id: 'tire-maxxis', name: 'Maxxis Minion DHF 2.5' },
  { id: 'pack-evoc', name: 'EVOC Hip Pack 3L' },
  { id: 'lube-muc', name: 'Muc-Off Dry Lube' }
];

function populateProducts(){
  const sel = document.getElementById('product');
  if (!sel) return;
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name;
    sel.appendChild(opt);
  });
}

function showConfirmationIfAny(){
  const params = new URLSearchParams(window.location.search);
  if (!params.has('product')) return;

  const form = document.getElementById('reviewForm');
  const confirm = document.getElementById('confirm');

  const productId = params.get('product') || '';
  const productName = (products.find(p => p.id === productId)?.name) || 'Selected product';
  const rating = params.get('rating') || 'N/A';
  const install = params.get('install') || 'N/A';
  const features = params.getAll('features');
  const comments = params.get('comments') || '';
  const username = params.get('username') || 'Anonymous';

  try {
    const key = 'mxtrails_reviews';
    const count = Number(localStorage.getItem(key) || '0') + 1;
    localStorage.setItem(key, String(count));
    document.getElementById('reviewCount')?.append(count);
  } catch {}

  if (form && confirm) {
    form.classList.add('hidden');
    confirm.classList.remove('hidden');
    confirm.innerHTML = `
      <h2>Thanks for your review, ${username}!</h2>
      <p><strong>Product:</strong> ${productName}</p>
      <p><strong>Rating:</strong> ${rating} / 5</p>
      <p><strong>Installed on:</strong> ${install}</p>
      <p><strong>Useful features:</strong> ${features.length ? features.join(', ') : 'None selected'}</p>
      ${comments ? `<p><strong>Your comments:</strong> ${comments}</p>` : ''}
      <p class="muted">Your feedback helps the MX Trails community ✌️</p>
      <p><a class="btn" href="review.html">Submit another review</a></p>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  populateProducts();
  showConfirmationIfAny();
});
