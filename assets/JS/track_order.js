// --- Track Order Page Logic ---

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("id");

  if (!orderId) {
    window.location.href = "orders.php";
    return;
  }

  renderOrderDetails(orderId);
});

function renderOrderDetails(orderId) {
  let orders = JSON.parse(localStorage.getItem("speed_spare_orders")) || [];

  // Inject Demo Orders (Same as orders.js)
  const demoOrders = [
    {
      id: "ORD-DEMO-001",
      date: "Today",
      status: "Out for Delivery",
      total: 4500,
      address: {
        name: "Sujay (Demo)",
        line1: "Flat 402, Sai Heights",
        line2: "Madhapur",
        city: "Hyderabad",
        pincode: "500081",
        phone: "+91 98765 43210",
      },
      items: [
        {
          name: "Brembo Brake Pads (Front)",
          quantity: 1,
          price: 4500,
          image: "https://m.media-amazon.com/images/I/71p-Ie4CjVL._SX679_.jpg",
        },
      ],
      deliveryPartner: {
        name: "Ramesh Kumar",
        phone: "+919876543210",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    },
    {
      id: "ORD-DEMO-002",
      date: "Yesterday",
      status: "Delivered",
      total: 1200,
      address: {
        name: "Sujay (Demo)",
        line1: "Flat 402, Sai Heights",
        line2: "Madhapur",
        city: "Hyderabad",
        pincode: "500081",
        phone: "+91 98765 43210",
      },
      items: [
        {
          name: "Motul 7100 4T 10W50",
          quantity: 1,
          price: 1200,
          image: "https://m.media-amazon.com/images/I/61M-8qXgLlL._SX679_.jpg",
        },
      ],
    },
  ];

  // Combine demo orders
  orders = [...demoOrders, ...orders];
  const order = orders.find((o) => o.id === orderId || o.id === "#" + orderId);

  if (!order) {
    alert("Order not found!");
    window.location.href = "orders.php";
    return;
  }

  // 1. Basic Info
  document.getElementById("order-id").textContent = order.id;
  const statusTextEl = document.getElementById("order-status-text");
  statusTextEl.textContent = order.status;

  // Status Coloring
  if (order.status.toLowerCase() === "delivered") {
    statusTextEl.style.color = "#5081AB";
  } else if (order.status.toLowerCase() === "out for delivery") {
    statusTextEl.style.color = "#10c05d";
  } else {
    statusTextEl.style.color = "#f59e0b"; // Pending/Other
  }

  // 2. Timeline Mapping
  renderTimeline(order.status);

  // 2.1 Delivery Partner Section
  const partnerSection = document.getElementById("delivery-partner-section");
  if (
    order.status.toLowerCase() === "out for delivery" &&
    order.deliveryPartner
  ) {
    partnerSection.style.display = "flex";
    partnerSection.innerHTML = `
          <div class="partner-info">
              <div class="partner-avatar">
                  <img src="${order.deliveryPartner.image}" alt="Partner">
              </div>
              <div class="partner-text">
                  <h4>${order.deliveryPartner.name}</h4>
                  <p>Delivery Partner</p>
              </div>
          </div>
          <a href="tel:${order.deliveryPartner.phone}" class="btn-call-partner">
              <i class="fa-solid fa-phone"></i>
          </a>
      `;
  } else {
    partnerSection.style.display = "none";
  }

  // 3. Items List
  const itemsList = document.getElementById("shipment-items-list");
  itemsList.innerHTML = order.items
    .map(
      (item) => `
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
            ${
              order.status.toLowerCase() === "delivered"
                ? `
                <div class="item-actions">
                    <button class="btn-return" onclick="openReturnModal('${item.name.replace(/'/g, "\\'")}', '${item.image}')">Return</button>
                    <button class="btn-review" onclick="openReviewModal('${item.name.replace(/'/g, "\\'")}', '${item.image}')">Write Review</button>
                </div>
            `
                : ""
            }
        </div>
    `,
    )
    .join("");

  // 4. Billing Details
  let subtotal = 0;
  order.items.forEach(
    (item) =>
      (subtotal += (item.newPrice || item.price) * (item.quantity || 1)),
  );
  const delivery = 0; // Reference shows FREE
  const taxes = 96; // Matching reference
  const total = subtotal + taxes;

  document.getElementById("bill-subtotal").textContent =
    `₹${subtotal.toLocaleString()}`;
  document.getElementById("bill-total").textContent =
    `₹${total.toLocaleString()}`;

  // 5. Address Details
  if (order.address) {
    document.getElementById("addr-name").textContent = order.address.name;
    document.getElementById("addr-full").textContent =
      `${order.address.line1}, ${order.address.line2}, ${order.address.city} - ${order.address.pincode}`;
    document.getElementById("addr-phone").textContent =
      `Phone: ${order.address.phone}`;
  }
}

function renderTimeline(currentStatus) {
  const container = document.getElementById("timeline-container");
  const phases = [
    { id: "pending", title: "Pending", icon: "fa-clipboard-list" },
    { id: "confirmed", title: "Confirmed", icon: "fa-circle-check" },
    { id: "shipped", title: "Shipped", icon: "fa-truck" },
    {
      id: "out-delivery",
      title: "Out for Delivery",
      icon: "fa-truck-ramp-box",
    },
    { id: "delivered", title: "Delivered", icon: "fa-box-archive" },
  ];

  // Determine current step index
  const activeIndex = phases.findIndex(
    (p) => p.title.toLowerCase() === currentStatus.toLowerCase(),
  );
  const finalIndex = activeIndex === -1 ? 0 : activeIndex;

  container.innerHTML = phases
    .map((phase, index) => {
      const isCompleted = index < finalIndex;
      const isCurrent = index === finalIndex;
      const statusClass = isCompleted
        ? "completed"
        : isCurrent
          ? "in-progress"
          : "upcoming";

      return `
            <div class="timeline-step ${statusClass}">
                <div class="step-icon ${phase.id}"><i class="fa-solid ${phase.icon}"></i></div>
                <div class="step-content">
                    <span class="step-title">${phase.title}</span>
                    ${
                      isCompleted
                        ? `
                        <span class="step-status"><i class="fa-solid fa-check"></i> Completed</span>
                    `
                        : isCurrent
                          ? `
                        <span class="step-status-pill">In Progress</span>
                    `
                          : ""
                    }
                </div>
            </div>
        `;
    })
    .join("");
}

function downloadInvoice(btn) {
  const originalContent = btn.innerHTML;
  // Show Loader
  btn.innerHTML =
    '<i class="fa-solid fa-circle-notch fa-spin"></i> Downloading...';
  btn.style.opacity = "0.7";
  btn.disabled = true;

  setTimeout(() => {
    // Restore
    btn.innerHTML = originalContent;
    btn.style.opacity = "1";
    btn.disabled = false;

    // Show Success
    alert("Invoice downloaded successfully!");
  }, 2000);
}

// --- Review Modal Logic ---
let currentRating = 0;
let reviewFiles = [];

function openReviewModal(name, image) {
  document.getElementById("review-name").textContent = name;
  document.getElementById("review-img").src = image;
  document.getElementById("review-modal").style.display = "flex";
  setRating(0); // Reset
  document.getElementById("review-desc").value = "";

  // Reset Files
  reviewFiles = [];
  document.getElementById("review-imgs").value = ""; // Reset input
  renderReviewPreviews();
}

function closeReviewModal() {
  document.getElementById("review-modal").style.display = "none";
}

function setRating(rating) {
  currentRating = rating;
  const stars = document.querySelectorAll("#star-container i");
  stars.forEach((star) => {
    const val = parseInt(star.getAttribute("data-value"));
    if (val <= rating) {
      star.classList.remove("fa-regular");
      star.classList.add("fa-solid", "checked");
    } else {
      star.classList.remove("fa-solid", "checked");
      star.classList.add("fa-regular");
    }
  });
}

function handleReviewFiles(input) {
  if (input.files) {
    // Append new files to existing array
    Array.from(input.files).forEach((file) => {
      reviewFiles.push(file);
    });
    renderReviewPreviews();
  }
}

function renderReviewPreviews() {
  const container = document.getElementById("review-imgs-preview");
  container.innerHTML = ""; // Clear

  reviewFiles.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const div = document.createElement("div");
      div.className = "preview-item";
      div.innerHTML = `
                <img src="${e.target.result}" alt="Preview">
                <button class="preview-remove" onclick="removeReviewFile(${index})">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            `;
      container.appendChild(div);
    };
    reader.readAsDataURL(file);
  });
}

function removeReviewFile(index) {
  reviewFiles.splice(index, 1);
  renderReviewPreviews();

  // Optional: If you want to clear the actual input when empty (though not strictly necessary as we use the array)
  if (reviewFiles.length === 0) {
    document.getElementById("review-imgs").value = "";
  }
}

function submitReview() {
  if (currentRating === 0) {
    alert("Please select a star rating!");
    return;
  }
  const text = document.getElementById("review-desc").value;
  alert(
    `Thank you! You rated it ${currentRating} stars.\nReview: ${text}\nImages: ${reviewFiles.length} uploaded.`,
  );
  closeReviewModal();
}

// --- Return Modal Logic ---
let returnFiles = [];

function openReturnModal(name, image) {
  document.getElementById("return-name").textContent = name;
  document.getElementById("return-img").src = image;
  document.getElementById("return-modal").style.display = "flex";

  // Reset Form
  document.getElementById("return-reason").value = "";
  document.getElementById("return-desc").value = "";
  document.getElementById("return-imgs").value = "";
  returnFiles = [];
  renderReturnPreviews();
}

function closeReturnModal() {
  document.getElementById("return-modal").style.display = "none";
}

function handleReturnFiles(input) {
  if (input.files) {
    Array.from(input.files).forEach((file) => {
      returnFiles.push(file);
    });
    renderReturnPreviews();
  }
}

function renderReturnPreviews() {
  const container = document.getElementById("return-imgs-preview");
  container.innerHTML = "";

  returnFiles.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const div = document.createElement("div");
      div.className = "preview-item";
      div.innerHTML = `
                <img src="${e.target.result}" alt="Preview">
                <button class="preview-remove" onclick="removeReturnFile(${index})">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            `;
      container.appendChild(div);
    };
    reader.readAsDataURL(file);
  });
}

function removeReturnFile(index) {
  returnFiles.splice(index, 1);
  renderReturnPreviews();
  if (returnFiles.length === 0) {
    document.getElementById("return-imgs").value = "";
  }
}

function submitReturn() {
  const reason = document.getElementById("return-reason").value;
  const desc = document.getElementById("return-desc").value;

  if (!reason) {
    alert("Please select a reason for return.");
    return;
  }
  if (returnFiles.length === 0) {
    alert("Please upload at least one image of the product to proceed.");
    return;
  }

  alert(
    `Return Request Submitted!\nReason: ${reason}\nImages: ${returnFiles.length}`,
  );
  closeReturnModal();
}
