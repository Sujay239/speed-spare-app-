// --- Orders Page Logic ---

document.addEventListener('DOMContentLoaded', () => {
    renderOrders();
});

function renderOrders() {
    const container = document.getElementById('orders-container');
    const orders = JSON.parse(localStorage.getItem('speed_spare_orders')) || [];

    if (!container) return;

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="empty-orders">
                <i class="fa-solid fa-box-open"></i>
                <h2>No Orders Yet</h2>
                <p>Looks like you haven't placed any orders. Start shopping our premium collections now!</p>
                <a href="index.php" class="shop-now-btn">Start Shopping</a>
            </div>
        `;
        return;
    }

    container.innerHTML = orders.map(order => `
        <div class="order-card">
            <div class="order-card-header">
                <div>
                    <span class="order-id">Order ID ${order.id}</span>
                    <span class="order-date">Placed on ${order.date}</span>
                </div>
                <div class="order-status">${order.status}</div>
            </div>

            <div class="order-items-list">
                ${order.items.map(item => `
                    <div class="order-item-row">
                        <div class="item-thumb">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="item-info">
                            <span class="item-name">${item.name}</span>
                            <span class="item-qty">Qty: ${item.quantity || 1}</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="order-card-footer">
                <div>
                    <span class="order-total-label">Order Total</span>
                    <div class="order-total-val">₹${order.total.toLocaleString()}</div>
                </div>
                <a href="#" class="view-details-btn" onclick="viewOrderDetails('${order.id}')">View Details</a>
            </div>
        </div>
    `).join('');
}

window.viewOrderDetails = (orderId) => {
    // Navigate to the high-fidelity tracking page
    window.location.href = `track_order.php?id=${orderId.replace('#', '')}`;
};
