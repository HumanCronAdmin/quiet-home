// QuietHome Database - Filter & Display
(function(){
  let products = [];
  const grid = document.getElementById('product-grid');
  const count = document.getElementById('result-count');
  const catFilter = document.getElementById('filter-category');
  const noiseFilter = document.getElementById('filter-noise');
  const sortBy = document.getElementById('sort-by');
  const searchBox = document.getElementById('search-box');

  fetch('data/products.json')
    .then(r => r.json())
    .then(data => { products = data; render(); })
    .catch(e => { grid.innerHTML = '<p>Error loading data.</p>'; });

  function render(){
    let filtered = products.slice();
    const cat = catFilter.value;
    const noise = noiseFilter.value;
    const q = searchBox.value.toLowerCase().trim();
    const sort = sortBy.value;

    if(cat) filtered = filtered.filter(p => p.category === cat);
    if(noise) filtered = filtered.filter(p => p.noise_rating === noise);
    if(q) filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );

    if(sort === 'quietest') filtered.sort((a,b) => a.noise_db - b.noise_db);
    else if(sort === 'loudest') filtered.sort((a,b) => b.noise_db - a.noise_db);
    else if(sort === 'price-low') filtered.sort((a,b) => a.price_usd - b.price_usd);
    else if(sort === 'price-high') filtered.sort((a,b) => b.price_usd - a.price_usd);

    count.textContent = filtered.length + ' products';
    grid.innerHTML = filtered.map(p => `
      <div class="product-card">
        <h3>${p.name}</h3>
        <div class="brand">${p.brand}</div>
        <span class="db-badge db-${p.noise_rating}">${p.noise_db} dB — ${p.noise_rating}</span>
        <span class="db-badge" style="background:#F3F4F6;color:#374151">${p.category.replace(/-/g,' ')}</span>
        <p style="margin:8px 0;font-size:0.85rem;color:#57534E">${p.description}</p>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
          <span class="price">$${p.price_usd}</span>
          <span class="meta">${p.best_for}</span>
        </div>
        <div class="meta" style="margin-top:6px">
          <strong>+</strong> ${p.pros.join(' · ')}
        </div>
        ${p.cons.length ? `<div class="meta"><strong>-</strong> ${p.cons.join(' · ')}</div>` : ''}
      </div>
    `).join('');
  }

  catFilter.addEventListener('change', render);
  noiseFilter.addEventListener('change', render);
  sortBy.addEventListener('change', render);
  searchBox.addEventListener('input', render);
})();
