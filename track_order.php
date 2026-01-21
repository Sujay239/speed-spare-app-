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

                <!-- Delivery Partner Info (Dynamic) -->
                <div id="delivery-partner-section" class="delivery-partner-section" style="display: none;">
                    <!-- Rendered by JS -->
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
                <button class="action-btn invoice" onclick="downloadInvoice(this)">
                    <i class="fa-solid fa-file-invoice"></i> Invoice
                </button>
                <button class="action-btn support" onclick="window.location.href='help.php'">
                    <i class="fa-solid fa-headset"></i> Support
                </button>
            </div>

            <!-- Cancel Action -->
            <div class="cancel-order-container">
                <a href="#" class="cancel-link">Cancel Order</a>
                <p class="cancel-note">Not eligible for cancel the order now</p>
            </div>
            <!-- Review Modal -->
            <div id="review-modal" class="modal-overlay" style="display: none;">
                <div class="modal-content review-modal-content">
                    <div class="modal-header">
                        <h3>Write a Review</h3>
                        <span class="close-modal" onclick="closeReviewModal()">&times;</span>
                    </div>
                    <div class="modal-body">
                        <div class="review-product-info">
                            <img id="review-img" src="" alt="Product" class="review-thumb">
                            <span id="review-name">Product Name</span>
                        </div>

                        <div class="star-rating-container">
                            <p>Rate this product</p>
                            <div class="stars" id="star-container">
                                <i class="fa-regular fa-star" data-value="1" onclick="setRating(1)"></i>
                                <i class="fa-regular fa-star" data-value="2" onclick="setRating(2)"></i>
                                <i class="fa-regular fa-star" data-value="3" onclick="setRating(3)"></i>
                                <i class="fa-regular fa-star" data-value="4" onclick="setRating(4)"></i>
                                <i class="fa-regular fa-star" data-value="5" onclick="setRating(5)"></i>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Your Review</label>
                            <textarea id="review-desc" class="form-textarea" placeholder="Tell us what you liked or disliked..."></textarea>
                        </div>

                        <div class="form-group">
                            <label>Add Images (Optional)</label>
                            <div class="custom-file-upload">
                                <input type="file" id="review-imgs" multiple accept="image/*" class="hidden-input" onchange="handleReviewFiles(this)">
                                <label for="review-imgs" class="upload-box">
                                    <div class="icon-box">
                                        <i class="fa-solid fa-camera"></i>
                                    </div>
                                    <div class="text-box">
                                        <span class="upload-title">Tap to Upload</span>
                                        <span class="upload-desc">Max 5 images</span>
                                    </div>
                                </label>
                            </div>
                            <div id="review-imgs-preview" class="review-imgs-preview"></div>
                        </div>

                        <div class="modal-actions">
                            <button class="cancel-btn" onclick="closeReviewModal()">Cancel</button>
                            <button class="save-btn" onclick="submitReview()">Submit Review</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Return Modal -->
            <div id="return-modal" class="modal-overlay" style="display: none;">
                <div class="modal-content review-modal-content">
                    <div class="modal-header">
                        <h3>Return Item</h3>
                        <span class="close-modal" onclick="closeReturnModal()">&times;</span>
                    </div>
                    <div class="modal-body">
                        <div class="review-product-info">
                            <img id="return-img" src="" alt="Product" class="review-thumb">
                            <span id="return-name">Product Name</span>
                        </div>

                        <div class="form-group">
                            <label>Reason for Return</label>
                            <select id="return-reason" class="form-control">
                                <option value="">Select a reason</option>
                                <option value="damaged">Product Damaged</option>
                                <option value="wrong_item">Received Wrong Item</option>
                                <option value="size_issue">Size/Fit Issue</option>
                                <option value="quality">Quality Not as Expected</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Description</label>
                            <textarea id="return-desc" class="form-textarea" placeholder="Please describe the issue..."></textarea>
                        </div>

                        <div class="form-group">
                            <label>Upload Images (Mandatory)</label>
                            <p class="upload-desc" style="color: #ef4444; margin-bottom: 8px;">At least 1 image required</p>
                            <div class="custom-file-upload">
                                <input type="file" id="return-imgs" multiple accept="image/*" class="hidden-input" onchange="handleReturnFiles(this)">
                                <label for="return-imgs" class="upload-box">
                                    <div class="icon-box">
                                        <i class="fa-solid fa-camera"></i>
                                    </div>
                                    <div class="text-box">
                                        <span class="upload-title">Tap to Upload</span>
                                        <span class="upload-desc">Max 5 images</span>
                                    </div>
                                </label>
                            </div>
                            <div id="return-imgs-preview" class="review-imgs-preview"></div>
                        </div>

                        <div class="modal-actions">
                            <button class="cancel-btn" onclick="closeReturnModal()">Cancel</button>
                            <button class="save-btn" onclick="submitReturn()">Submit Return</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

    <script src="assets/JS/track_order.js?v=<?php echo time(); ?>"></script>
</body>
</html>
