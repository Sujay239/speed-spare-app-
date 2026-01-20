// Cart Management using LocalStorage
let cart = JSON.parse(localStorage.getItem('speed_spare_cart')) || [];

function saveCart() {
    localStorage.setItem('speed_spare_cart', JSON.stringify(cart));
}

function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const mrpEl = document.getElementById('mrp-val');
    const discountEl = document.getElementById('discount-val');
    const deliveryEl = document.getElementById('delivery-val');
    const totalSummaryEl = document.getElementById('total-summary-val');
    const totalFooterEl = document.getElementById('total-val');

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 50px 0;">
                <i class="fa-solid fa-cart-shopping" style="font-size: 50px; color: #eee; margin-bottom: 20px;"></i>
                <h3>Your cart is empty</h3>
                <p style="color: #888;">Add some quality parts to get started!</p>
                <a href="index.php" style="display: inline-block; margin-top: 20px; color: var(--primary-green); font-weight: 700; text-decoration: none;">Shop Now</a>
            </div>
        `;
        if (mrpEl) mrpEl.textContent = "₹0.00";
        if (discountEl) discountEl.textContent = "₹0.00";
        if (deliveryEl) deliveryEl.textContent = "₹0.00";
        if (totalSummaryEl) totalSummaryEl.textContent = "₹0.00";
        if (totalFooterEl) totalFooterEl.textContent = "₹0.00";
        return;
    }

    let totalDiscountedPrice = 0;
    let totalMRP = 0;

    container.innerHTML = cart.map((item, index) => {
        const itemPrice = item.newPrice || item.price;
        const oldPrice = item.oldPrice || (itemPrice * 1.25);

        totalDiscountedPrice += itemPrice * item.quantity;
        totalMRP += oldPrice * item.quantity;

        return `
            <div class="cart-item">
                <i class="fa-solid fa-xmark remove-item" onclick="removeFromCart(${index})"></i>
                <div class="img-box">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <div>
                        <h3 class="item-title">${item.name}</h3>
                        <div class="item-variant">${item.category || 'Genuine Part'}</div>
                    </div>
                    <div class="item-price-qty">
                        <span class="item-price">₹${Math.round(itemPrice).toLocaleString()}</span>
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateQty(${index}, -1)"><i class="fa-solid fa-minus"></i></button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn plus" onclick="updateQty(${index}, 1)"><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Update Summary
    const totalDiscount = totalMRP - totalDiscountedPrice;
    const delivery = 50;
    const finalTotal = totalDiscountedPrice + (totalDiscountedPrice > 0 ? delivery : 0);

    if (mrpEl) mrpEl.textContent = `₹${Math.round(totalMRP).toLocaleString()}`;
    if (discountEl) discountEl.textContent = `- ₹${Math.round(totalDiscount).toLocaleString()}`;
    if (deliveryEl) deliveryEl.textContent = `₹${totalDiscountedPrice > 0 ? delivery : 0}`;
    if (totalSummaryEl) totalSummaryEl.textContent = `₹${Math.round(finalTotal).toLocaleString()}`;
    if (totalFooterEl) totalFooterEl.textContent = `₹${Math.round(finalTotal).toLocaleString()}`;
}

window.updateQty = function (index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) cart[index].quantity = 1;
    saveCart();
    renderCartItems();
};

window.removeFromCart = function (index) {
    cart.splice(index, 1);
    saveCart();
    renderCartItems();
    updateCartCount();
};

function updateCartCount() {
    const badge = document.querySelector('.cart-btn .badge');
    if (badge) {
        badge.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
    updateCartCount();
});
