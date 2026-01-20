<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Checkout - Speed Spare</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/CSS/style.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="assets/CSS/checkout.css?v=<?php echo time(); ?>">
</head>
<body>

<?php
// checkout.php
// The original document already includes the header content directly,
// so we'll integrate the new UI structure while keeping the existing head and body tags.
?>

<link rel="stylesheet" href="assets/CSS/checkout.css">

    <div class="app-container">
        <div class="checkout-page">
            <div class="checkout-header">
                <a href="cart.php" class="back-link">
                    <i class="fa-solid fa-arrow-left"></i>
                </a>
                <h1>Checkout</h1>
            </div>

            <div class="checkout-sections">
                <!-- Address Section -->
                <section class="checkout-section">
                    <div class="section-header">
                        <h2>Delivery Address</h2>
                        <button class="change-btn" onclick="openAddressModal()">Change</button>
                    </div>
                    <div id="active-address-container">
                        <!-- Single active address injected by JS -->
                    </div>
                </section>

                <!-- Address Selection Modal (Hidden initially) -->
                <div id="address-modal" class="address-modal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3>Select Address</h3>
                            <button class="close-modal" onclick="closeAddressModal()">&times;</button>
                        </div>
                        <div id="modal-address-list" class="modal-address-list">
                            <!-- All addresses rendered here for selection -->
                        </div>
                        <button class="add-new-btn-modal" onclick="addNewAddress()">+ Add New Address</button>
                    </div>
                </div>

                <!-- Add New Address Modal (Form) -->
                <div id="add-address-modal" class="address-modal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3>Add New Address</h3>
                            <button class="close-modal" onclick="closeAddModal()">&times;</button>
                        </div>
                        <form id="address-form" class="address-form" onsubmit="saveNewAddress(event)">
                            <div class="form-group">
                                <label>Full Name</label>
                                <input type="text" id="new-name" placeholder="Enter Full Name" required>
                            </div>
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="tel" id="new-phone" placeholder="Enter Phone Number" required>
                            </div>
                            <div class="form-group">
                                <label>Address Line 1</label>
                                <input type="text" id="new-line1" placeholder="House no, Building, Street" required>
                            </div>
                            <div class="form-group">
                                <label>Address Line 2 (Area)</label>
                                <input type="text" id="new-line2" placeholder="Locality, Landmark, Area" required>
                            </div>
                            <div class="form-group">
                                <label>Pincode</label>
                                <input type="number" id="new-pincode" placeholder="6 digits" required>
                            </div>
                            <div class="form-group">
                                <label>City</label>
                                <input type="text" id="new-city" placeholder="City" required>
                            </div>
                            <div class="form-group">
                                <label>Address Type</label>
                                <div class="type-selection" id="type-radio-group">
                                    <label class="type-btn active" onclick="selectType(this)">
                                        <input type="radio" name="addr-type" value="Home" checked hidden> Home
                                    </label>
                                    <label class="type-btn" onclick="selectType(this)">
                                        <input type="radio" name="addr-type" value="Work" hidden> Work
                                    </label>
                                    <label class="type-btn" onclick="selectType(this)">
                                        <input type="radio" name="addr-type" value="Other" hidden> Other
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="save-address-btn">Save & Continue</button>
                        </form>
                    </div>
                </div>

                <!-- Order Review Section -->
                <section class="checkout-section">
                    <div class="section-header">
                        <h2>Order Review</h2>
                    </div>
                    <div id="order-preview-list" class="order-preview-list">
                        <!-- Items will be injected here by JS -->
                    </div>
                </section>

                <!-- Payment Section -->
                <section class="checkout-section">
                    <div class="section-header">
                        <h2>Payment Method</h2>
                    </div>
                    <div class="payment-options">
                        <div class="payment-card active" onclick="togglePayment('online')">
                            <input type="radio" name="payment" id="pay-online" value="online" checked>
                            <label for="pay-online">
                                <i class="fa-solid fa-credit-card"></i>
                                <span>Pay Online</span>
                            </label>
                        </div>
                        <div class="payment-card" onclick="togglePayment('cod')">
                            <input type="radio" name="payment" id="pay-cod" value="cod">
                            <label for="pay-cod">
                                <i class="fa-solid fa-hand-holding-dollar"></i>
                                <span>Cash on Delivery</span>
                            </label>
                        </div>
                    </div>
                </section>

                <!-- Promocode Section -->
                <section class="checkout-section">
                    <div class="promocode-box">
                        <div class="promo-input-row">
                            <i class="fa-solid fa-tags"></i>
                            <input type="text" id="promo-input" placeholder="Enter Promocode">
                            <button onclick="applyPromo()">Apply</button>
                        </div>
                    </div>
                    <div id="promo-message" class="promo-message"></div>
                </section>

                <!-- Summary Section -->
                <section class="checkout-section">
                    <div class="summary-details">
                        <div class="summary-line">
                            <span>Subtotal</span>
                            <span id="summary-subtotal">₹0</span>
                        </div>
                        <div class="summary-line">
                            <span>Delivery Charges</span>
                            <span id="summary-delivery">₹50</span>
                        </div>
                        <div class="summary-line discount" id="summary-discount-row" style="display: none;">
                            <span>Promocode Discount</span>
                            <span id="summary-discount">-₹0</span>
                        </div>
                        <div class="summary-line total">
                            <span>Total Amount</span>
                            <span id="summary-total">₹0</span>
                        </div>
                    </div>
                </section>

                <div class="trust-footer-main">
                    <i class="fa-solid fa-shield-halved"></i> 100% Secure Checkout
                </div>
            </div>

            <!-- Sticky Footer -->
            <div class="checkout-footer">
                <div class="footer-info">
                    <span class="footer-label">Total Payable</span>
                    <span class="footer-total" id="footer-total">₹0</span>
                </div>
                <button class="place-order-btn" onclick="placeOrder()">Place Order</button>
            </div>

            <!-- PROCESSING OVERLAY -->
            <div id="processing-overlay">
                <div class="loader-spinner"></div>
                <h3>Processing...</h3>
                <p>Do not refresh the page or leave this page</p>
            </div>

            <!-- SUCCESS OVERLAY (Ported from reference flow) -->
            <div id="success-overlay">
                <!-- Initial Centered Stage -->
                <div id="success-header" class="success-header-centered">
                    <div class="checkmark-wrapper">
                        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                    </div>
                    <h2 class="success-title">Order Placed!</h2>
                    <p class="success-subtitle">Your order has been placed successfully.</p>
                </div>

                <!-- Details Stage (Revealed via JS) -->
                <div id="success-details" class="details-hidden">
                    <div class="summary-card">
                        <div class="summary-top">
                            <div>
                                <span class="l-small">Order ID</span>
                                <p class="v-bold" id="final-order-id">#---</p>
                            </div>
                            <div style="text-align: right;">
                                <span class="l-small">Amount</span>
                                <p class="v-bold primary" id="final-amount">₹0</p>
                            </div>
                        </div>

                        <h4 class="minor-title">Items</h4>
                        <div id="final-items-list" class="items-list"></div>

                        <div class="delivery-summary-box">
                            <p class="box-label">Delivery To</p>
                            <p class="b-name" id="final-name">Sujay</p>
                            <p class="b-sub" id="final-phone">+91 98765 43210</p>
                            <p class="b-sub" id="final-email">sujay@example.com</p>
                            <div class="b-address" id="final-address">
                                Flat 402, Sai Heights,<br>
                                Madhapur, Hyderabad - 500081
                            </div>
                        </div>
                    </div>

                    <div class="success-footer-actions">
                        <button onclick="alert('Tracking coming soon!')" class="track-btn">Track Order</button>
                        <button onclick="window.location.href='index.php'" class="continue-btn">Continue Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="assets/JS/checkout.js?v=<?php echo time(); ?>"></script>
</body>
</html>
