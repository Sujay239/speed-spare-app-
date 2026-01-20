// --- Track Order Page Logic ---

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('id');

    if (!orderId) {
        window.location.href = 'orders.php';
        return;
    }

    renderOrderDetails(orderId);
});

function renderOrderDetails(orderId) {
    const orders = JSON.parse(localStorage.getItem('speed_spare_orders')) || [];
    const order = orders.find(o => o.id === orderId || o.id === '#' + orderId);

    if (!order) {
        alert("Order not found!");
        window.location.href = 'orders.php';
        return;
    }

    // 1. Basic Info
    document.getElementById('order-id').textContent = order.id;
    const statusTextEl = document.getElementById('order-status-text');
    statusTextEl.textContent = order.status;

    // Status Coloring
    if (order.status.toLowerCase() === 'delivered') {
        statusTextEl.style.color = '#16a34a';
    } else {
        statusTextEl.style.color = '#f59e0b'; // Pending/Other
    }

    // 2. Timeline Mapping
    renderTimeline(order.status);

    // 3. Items List
    const itemsList = document.getElementById('shipment-items-list');
    itemsList.innerHTML = order.items.map(item => `
        <div class="shipment-item-card">
            <div class="item-main">
                <div class="item-img-box">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>Qty: ${item.quantity || 1}</p>
                    <div class="item-price">₹${(item.newPrice || item.price).toLocaleString()}</div>
                </div>
            </div>
            ${order.status.toLowerCase() === 'delivered' ? `
                <div class="item-actions">
                    <button class="btn-return">Return</button>
                    <button class="btn-review">Write Review</button>
                </div>
            ` : ''}
        </div>
    `).join('');

    // 4. Billing Details
    let subtotal = 0;
    order.items.forEach(item => subtotal += (item.newPrice || item.price) * (item.quantity || 1));
    const delivery = 0; // Reference shows FREE
    const taxes = 96; // Matching reference
    const total = subtotal + taxes;

    document.getElementById('bill-subtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('bill-total').textContent = `₹${total.toLocaleString()}`;

    // 5. Address Details
    if (order.address) {
        document.getElementById('addr-name').textContent = order.address.name;
        document.getElementById('addr-full').textContent = `${order.address.line1}, ${order.address.line2}, ${order.address.city} - ${order.address.pincode}`;
        document.getElementById('addr-phone').textContent = `Phone: ${order.address.phone}`;
    }
}

function renderTimeline(currentStatus) {
    const container = document.getElementById('timeline-container');
    const phases = [
        { id: 'pending', title: 'Pending', icon: 'fa-clipboard-list' },
        { id: 'confirmed', title: 'Confirmed', icon: 'fa-circle-check' },
        { id: 'shipped', title: 'Shipped', icon: 'fa-truck' },
        { id: 'out-delivery', title: 'Out for Delivery', icon: 'fa-truck-ramp-box' },
        { id: 'delivered', title: 'Delivered', icon: 'fa-box-archive' }
    ];

    // Determine current step index
    const activeIndex = phases.findIndex(p => p.title.toLowerCase() === currentStatus.toLowerCase());
    const finalIndex = activeIndex === -1 ? 0 : activeIndex;

    container.innerHTML = phases.map((phase, index) => {
        const isCompleted = index < finalIndex;
        const isCurrent = index === finalIndex;
        const statusClass = isCompleted ? 'completed' : (isCurrent ? 'in-progress' : 'upcoming');

        return `
            <div class="timeline-step ${statusClass}">
                <div class="step-icon ${phase.id}"><i class="fa-solid ${phase.icon}"></i></div>
                <div class="step-content">
                    <span class="step-title">${phase.title}</span>
                    ${isCompleted ? `
                        <span class="step-status"><i class="fa-solid fa-check"></i> Completed</span>
                    ` : (isCurrent ? `
                        <span class="step-status-pill">In Progress</span>
                    ` : '')}
                </div>
            </div>
        `;
    }).join('');
}
