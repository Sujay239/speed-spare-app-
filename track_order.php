<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Order Details - Speed Spare</title>
    <link rel="stylesheet" href="assets/CSS/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/CSS/track_order.css">
</head>
<body>
    <div class="app-container">
        <!-- Header -->
        <header class="track-header">
            <a href="orders.php" class="back-link">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
            <h1>Order Details</h1>
        </header>

        <div class="track-content">
            <!-- Order Meta -->
            <div class="order-meta-info">
                <div class="meta-row">
                    <span class="meta-label">Order ID:</span>
                    <span class="meta-val" id="order-id">#-----</span>
                </div>
                <div class="meta-row status-top">
                    <div class="label-stack">
                        <span class="meta-label">Order Status</span>
                        <h2 id="order-status-text">Delivered</h2>
                    </div>
                </div>
            </div>

            <!-- Tracking History -->
            <section class="tracking-section">
                <h3>Tracking History</h3>
                <div class="timeline-container" id="timeline-container">
                    <!-- Phases rendered by JS -->
                    <div class="timeline-step completed">
                        <div class="step-icon pending"><i class="fa-solid fa-clipboard-list"></i></div>
                        <div class="step-content">
                            <span class="step-title">Pending</span>
                            <span class="step-status"><i class="fa-solid fa-check"></i> Completed</span>
                        </div>
                    </div>
                    <div class="timeline-step completed">
                        <div class="step-icon confirmed"><i class="fa-solid fa-circle-check"></i></div>
                        <div class="step-content">
                            <span class="step-title">Confirmed</span>
                            <span class="step-status"><i class="fa-solid fa-check"></i> Completed</span>
                        </div>
                    </div>
                    <div class="timeline-step completed">
                        <div class="step-icon shipped"><i class="fa-solid fa-truck"></i></div>
                        <div class="step-content">
                            <span class="step-title">Shipped</span>
                            <span class="step-status"><i class="fa-solid fa-check"></i> Completed</span>
                        </div>
                    </div>
                    <div class="timeline-step completed">
                        <div class="step-icon out-delivery"><i class="fa-solid fa-truck-ramp-box"></i></div>
                        <div class="step-content">
                            <span class="step-title">Out for Delivery</span>
                            <span class="step-status"><i class="fa-solid fa-check"></i> Completed</span>
                        </div>
                    </div>
                    <div class="timeline-step in-progress">
                        <div class="step-icon delivered"><i class="fa-solid fa-box-archive"></i></div>
                        <div class="step-content">
                            <span class="step-title">Delivered</span>
                            <span class="step-status-pill">In Progress</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Items Section -->
            <section class="items-shipment-section">
                <h3>Items in this Shipment</h3>
                <div id="shipment-items-list" class="shipment-items-list">
                    <!-- Items rendered here -->
                </div>
            </section>

            <!-- Bill Details -->
            <section class="bill-details-section">
                <h3>Bill Details</h3>
                <div class="bill-card">
                    <div class="bill-row">
                        <span>Subtotal</span>
                        <span id="bill-subtotal">₹0.00</span>
                    </div>
                    <div class="bill-row">
                        <span>Delivery Fee</span>
                        <span class="free-text" id="bill-delivery">FREE</span>
                    </div>
                    <div class="bill-row">
                        <span>Taxes & Charges</span>
                        <span id="bill-taxes">₹96.00</span>
                    </div>
                    <div class="bill-total-row">
                        <span>Total Amount</span>
                        <span id="bill-total">₹0</span>
                    </div>
                </div>
            </section>

            <!-- Delivery Address -->
            <section class="address-section">
                <h3>Delivery Address</h3>
                <div class="address-box">
                    <p class="addr-name" id="addr-name">Sujay (Demo)</p>
                    <p class="addr-text" id="addr-full">Flat 402, Sai Heights, Madhapur, Hyderabad</p>
                    <p class="addr-phone" id="addr-phone">Phone: +91 98765 43210</p>
                </div>
            </section>

            <!-- Order Actions -->
            <div class="order-actions-grid">
                <button class="action-btn invoice">
                    <i class="fa-solid fa-file-invoice"></i> Invoice
                </button>
                <button class="action-btn support">
                    <i class="fa-solid fa-headset"></i> Support
                </button>
            </div>

            <!-- Cancel Action -->
            <div class="cancel-order-container">
                <a href="#" class="cancel-link">Cancel Order</a>
                <p class="cancel-note">Not eligible for cancel the order now</p>
            </div>
        </div>

        <?php include 'includes/navigation.php'; ?>
    </div>

    <script src="assets/JS/track_order.js"></script>
</body>
</html>
