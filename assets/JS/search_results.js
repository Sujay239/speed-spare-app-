let currentResults = [];
let filters = { sort: 'relevance', price: 'all', discount: '0' };

function openSheet(type) {
    document.getElementById('overlay').classList.add('show');
    document.getElementById(`sheet-${type}`).classList.add('show');
}

function closeSheet() {
    document.getElementById('overlay').classList.remove('show');
    document.querySelectorAll('.bottom-sheet').forEach(s => s.classList.remove('show'));
}

function selectSort(val) {
    filters.sort = val;
    updatePillState('btn-sort', val !== 'relevance');
    updateSelectedUI('sheet-sort', val);
    renderFilteredResults();
    closeSheet();
}

function selectPrice(val) {
    filters.price = val;
    updatePillState('btn-price', val !== 'all');
    updateSelectedUI('sheet-price', val);
    renderFilteredResults();
    closeSheet();
}

function selectDiscount(val) {
    filters.discount = val;
    updatePillState('btn-discount', val !== '0');
    updateSelectedUI('sheet-discount', val);
    renderFilteredResults();
    closeSheet();
}

function updatePillState(id, isActive) {
    const pill = document.getElementById(id);
    if (isActive) pill.classList.add('active');
    else pill.classList.remove('active');
}

function updateSelectedUI(sheetId, val) {
    const sheet = document.getElementById(sheetId);
    const items = sheet.querySelectorAll('.option-item');
    items.forEach(item => {
        if (item.getAttribute('data-value') === val) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

function renderFilteredResults() {
    let data = [...currentResults];

    // Filter by Price
    if (filters.price === 'u1000') data = data.filter(p => (p.price || p.newPrice) < 1000);
    else if (filters.price === 'u5000') data = data.filter(p => (p.price || p.newPrice) >= 1000 && (p.price || p.newPrice) <= 5000);
    else if (filters.price === 'u10000') data = data.filter(p => (p.price || p.newPrice) >= 5000 && (p.price || p.newPrice) <= 10000);
    else if (filters.price === 'a10000') data = data.filter(p => (p.price || p.newPrice) > 10000);

    // Filter by Discount
    if (filters.discount !== '0') {
        data = data.filter(p => {
            const discStr = p.discount || '0%';
            const num = parseInt(discStr);
            return num >= parseInt(filters.discount);
        });
    }

    // Sort
    if (filters.sort === 'low-high') data.sort((a, b) => (a.price || a.newPrice) - (b.price || b.newPrice));
    else if (filters.sort === 'high-low') data.sort((a, b) => (b.price || b.newPrice) - (a.price || a.newPrice));
    else if (filters.sort === 'popular') data.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));

    const resultsContainer = document.getElementById('search-results-container');
    const noResultsMsg = document.getElementById('no-results-msg');
    const countDisplay = document.getElementById('result-count');

    if (countDisplay) countDisplay.textContent = data.length;

    if (data.length === 0) {
        if (resultsContainer) resultsContainer.style.display = 'none';
        if (noResultsMsg) noResultsMsg.style.display = 'block';
        return;
    }

    if (noResultsMsg) noResultsMsg.style.display = 'none';
    if (resultsContainer) {
        resultsContainer.style.display = 'flex';
        resultsContainer.innerHTML = data.map(product => {
            const price = product.price || product.newPrice;
            const oldPrice = product.oldPrice || Math.round(price * 1.25);
            const discount = product.discount || '20% OFF';

            return `
                <div class="search-item" onclick="window.location.href='product_details.php?id=${product.id}'">
                    <div class="wishlist-icon">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <div class="img-box">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="details-box">
                        <h2 class="product-title">${product.name}</h2>
                        <div class="rating-box">
                            <div class="rating-star">
                                ${product.rating || '4.5'} <i class="fa-solid fa-star"></i>
                            </div>
                            <span>(${product.reviews || '45'})</span>
                        </div>
                        <div class="price-row">
                            <div style="flex: 1">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span class="new-price">₹${Math.round(price).toLocaleString()}</span>
                                    <span class="old-price">₹${Math.round(oldPrice).toLocaleString()}</span>
                                </div>
                                <span class="discount-badge">${discount}</span>
                            </div>
                            <div class="action-box">
                                ${window.getCartActionHTML ? window.getCartActionHTML(product) : ''}
                            </div>
                        </div>
                        <div style="font-size: 13px; color: #10c05d; font-weight: 600; margin-top: 5px;">
                            Free Delivery
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    const searchInput = document.getElementById('global-search-input');
    if (searchInput) searchInput.value = query || '';

    const queryDisplay = document.getElementById('search-query-display');
    if (queryDisplay) queryDisplay.textContent = `"${query || ''}"`;

    if (query) {
        const searchTerm = query.toLowerCase().trim();
        // Since allProductsData is linked via script.js, we expect it to be available
        if (typeof allProductsData !== 'undefined') {
            currentResults = allProductsData.filter(p =>
                p.name.toLowerCase().includes(searchTerm) ||
                (p.desc && p.desc.toLowerCase().includes(searchTerm))
            );
            renderFilteredResults();
        }
    }
});
