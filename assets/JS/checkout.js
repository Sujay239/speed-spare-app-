// --- REFINED CHECKOUT LOGIC WITH ADDRESS FORM ---

// Global-ish state for the session
let demoAddresses = [
  {
    id: 1,
    name: "Sujay",
    type: "Home",
    line1: "Flat 402, Sai Heights",
    line2: "Madhapur, Hyderabad - 500081",
    phone: "+91 98765 43210",
    email: "sujay@example.com",
    active: true,
  },
  {
    id: 2,
    name: "Sujay",
    type: "Work",
    line1: "DLF Cyber City, Phase 3",
    line2: "Gachibowli, Hyderabad - 500032",
    phone: "+91 98765 43210",
    email: "sujay@example.com",
    active: false,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  initCheckout();
});

function initCheckout() {
  renderAddresses();
  renderOrderItems();
  updateSummary();
}

// 1. Render Address Logic
function renderAddresses() {
  // Render Active Address (Main View)
  const activeContainer = document.getElementById("active-address-container");
  const activeAddr = demoAddresses.find((a) => a.active) || demoAddresses[0];

  if (activeContainer && activeAddr) {
    activeContainer.innerHTML = `
            <div class="active-address-card">
                <div class="addr-header">
                    <span class="addr-name">${activeAddr.name}</span>
                    <span class="addr-type">${activeAddr.type}</span>
                </div>
                <p class="addr-text">${activeAddr.line1}, ${activeAddr.line2}</p>
                <p class="addr-phone">${activeAddr.phone}</p>
            </div>
        `;
    populateSuccessAddress(activeAddr); // Keep sync with success summary
  }

  // Render All Addresses (Selection Modal)
  const modalList = document.getElementById("modal-address-list");
  if (modalList) {
    modalList.innerHTML = demoAddresses
      .map(
        (addr) => `
            <div class="modal-address-card ${addr.active ? "active" : ""}" onclick="selectNewAddress(${addr.id})">
                <div class="addr-header">
                    <span class="addr-name">${addr.name}</span>
                    <span class="addr-type">${addr.type}</span>
                    ${addr.active ? '<i class="fa-solid fa-circle-check" style="color:var(--primary-green)"></i>' : ""}
                </div>
                <div class="addr-details">${addr.line1}, ${addr.line2}</div>
                <div class="addr-phone">${addr.phone}</div>
            </div>
        `,
      )
      .join("");
  }
}

// 2. Modal Controls
window.openAddressModal = () => {
  document.getElementById("address-modal").classList.add("show");
};

window.closeAddressModal = () => {
  document.getElementById("address-modal").classList.remove("show");
};

window.addNewAddress = () => {
  // Hide selection modal, show form modal
  closeAddressModal();
  document.getElementById("add-address-modal").classList.add("show");
};

window.closeAddModal = () => {
  document.getElementById("add-address-modal").classList.remove("show");
};

// 3. Selection & Form Logic
window.selectNewAddress = (id) => {
  demoAddresses.forEach((a) => (a.active = a.id === id));
  renderAddresses();
  closeAddressModal();
};

window.selectType = (el) => {
  document
    .querySelectorAll(".type-btn")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
  el.querySelector("input").checked = true;
};

window.saveNewAddress = (e) => {
  e.preventDefault();

  const newAddr = {
    id: Date.now(),
    name: document.getElementById("new-name").value,
    phone: document.getElementById("new-phone").value,
    line1: document.getElementById("new-line1").value,
    line2:
      document.getElementById("new-line2").value +
      ", " +
      document.getElementById("new-city").value +
      " - " +
      document.getElementById("new-pincode").value,
    email: "sujay@example.com", // Default for demo
    type: document.querySelector('input[name="addr-type"]:checked').value,
    active: true,
  };

  // Deactivate others, add new
  demoAddresses.forEach((a) => (a.active = false));
  demoAddresses.push(newAddr);

  renderAddresses();
  closeAddModal();

  // Optional feedback
  console.log("New Address Saved:", newAddr);
};

// 4. Order Review Rendering
function renderOrderItems() {
  const container = document.getElementById("order-preview-list");
  const cart = JSON.parse(localStorage.getItem("speed_spare_cart")) || [];

  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML =
      '<p style="text-align:center; padding:20px; color:#999;">Cart is empty</p>';
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
        <div class="preview-item">
            <div class="preview-img">
                <img src="${item.image}" alt="">
            </div>
            <div class="preview-info">
                <div class="preview-name">${item.name}</div>
                <div class="preview-meta">Qty: ${item.quantity} | Size: M</div>
            </div>
            <div class="preview-price">₹${((item.newPrice || item.price) * item.quantity).toLocaleString()}</div>
        </div>
    `,
    )
    .join("");
}

// 5. Payment & Summary
window.togglePayment = (type) => {
  document
    .querySelectorAll(".payment-card")
    .forEach((c) => c.classList.remove("active"));
  const activeCard = document
    .querySelector(`.payment-card input[value="${type}"]`)
    .closest(".payment-card");
  activeCard.classList.add("active");
  activeCard.querySelector("input").checked = true;
};

function updateSummary() {
  const cart = JSON.parse(localStorage.getItem("speed_spare_cart")) || [];
  let subtotal = 0;
  cart.forEach(
    (item) => (subtotal += (item.newPrice || item.price) * item.quantity),
  );

  const delivery = 50;
  const total = subtotal + delivery;

  document.getElementById("summary-subtotal").textContent =
    `₹${subtotal.toLocaleString()}`;
  document.getElementById("summary-total").textContent =
    `₹${total.toLocaleString()}`;
  document.getElementById("footer-total").textContent =
    `₹${total.toLocaleString()}`;
  document.getElementById("final-amount").textContent =
    `₹${total.toLocaleString()}`;
}

// 6. Success Flow Logic
function populateSuccessAddress(addr) {
  const nameEl = document.getElementById("final-name");
  const phoneEl = document.getElementById("final-phone");
  const emailEl = document.getElementById("final-email");
  const addrEl = document.getElementById("final-address");

  if (nameEl) nameEl.textContent = addr.name;
  if (phoneEl) phoneEl.textContent = addr.phone;
  if (emailEl) emailEl.textContent = addr.email;
  if (addrEl) addrEl.innerHTML = `${addr.line1},<br>${addr.line2}`;
}

window.placeOrder = async function () {
  const cart = JSON.parse(localStorage.getItem("speed_spare_cart")) || [];
  if (cart.length === 0) return alert("Empty Cart!");

  document.getElementById("processing-overlay").style.display = "flex";
  await new Promise((r) => setTimeout(r, 2500));
  document.getElementById("processing-overlay").style.display = "none";

  showSuccessOverlay(cart);
};

function showSuccessOverlay(cart) {
  const overlay = document.getElementById("success-overlay");
  overlay.style.display = "flex";

  const orderId = "#" + (Math.floor(Math.random() * 90000) + 10000);
  document.getElementById("final-order-id").innerText = orderId;

  // Calculate total for saving
  let subtotal = 0;
  cart.forEach(
    (item) => (subtotal += (item.newPrice || item.price) * item.quantity),
  );
  const total = subtotal + 50;

  // Save to Orders History
  const orders = JSON.parse(localStorage.getItem("speed_spare_orders")) || [];
  const newOrder = {
    id: orderId,
    date: new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    items: cart,
    total: total,
    status: "Placed",
    address: demoAddresses.find((a) => a.active) || demoAddresses[0],
  };
  orders.unshift(newOrder); // Newest first
  localStorage.setItem("speed_spare_orders", JSON.stringify(orders));

  const finalItemsList = document.getElementById("final-items-list");
  finalItemsList.innerHTML = cart
    .map(
      (item) => `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <div style="width: 44px; height: 44px; background: #f8fafc; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 1px solid #f1f5f9; flex-shrink: 0;">
                <img src="${item.image}" alt="" style="width: 32px; height: 32px; object-fit: contain;">
            </div>
            <div style="flex: 1;">
                <p style="font-size: 14px; font-weight: 800; color: #000; margin: 0;">${item.name}</p>
                <p style="font-size: 12px; color: #666; margin: 0;">Qty: ${item.quantity}</p>
            </div>
        </div>
    `,
    )
    .join("");

  setTimeout(() => {
    const header = document.getElementById("success-header");
    header.classList.remove("success-header-centered");
    header.classList.add("success-header-top");

    header.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="width: 40px; height: 40px; background: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <svg viewBox="0 0 52 52" style="width: 22px; height: 22px; stroke: white; stroke-width: 4; fill: none;">
                        <path d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h2 style="font-size: 1.3rem; font-weight: 900; color: #000; margin: 0;">Order Placed!</h2>
            </div>
        `;

    const details = document.getElementById("success-details");
    details.classList.remove("details-hidden");
    details.classList.add("details-visible");

    // Setup Track Order Button
    const trackBtn = document.getElementById("success-track-btn");
    if (trackBtn) {
      trackBtn.onclick = () =>
        (window.location.href = `track_order.php?id=${orderId.replace("#", "")}`);
    }

    localStorage.removeItem("speed_spare_cart");
  }, 1500);
}

window.applyPromo = () => {
  const input = document.getElementById("promo-input").value;
  const msg = document.getElementById("promo-message");
  if (input === "SAVE10") {
    msg.textContent = "SAVE10 applied! (Demo only)";
    msg.style.color = "#10c05d";
  } else {
    msg.textContent = "Invalid code";
    msg.style.color = "red";
  }
};
