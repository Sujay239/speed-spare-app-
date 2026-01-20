<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>My Cart - Speed Spare</title>
    <link rel="stylesheet" href="assets/CSS/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/CSS/cart.css">
</head>
<body>

    <div class="app-container">
        <header class="cart-header">
            <a href="javascript:history.back()" class="back-btn">
                <i class="fa-solid fa-chevron-left"></i>
            </a>
            <h2>My cart</h2>
            <button class="more-btn">
                <i class="fa-solid fa-ellipsis"></i>
            </button>
        </header>

        <main class="cart-content">
            <div id="cart-items-container" class="cart-items-list">
                <!-- JS Rendered Items -->
            </div>

            <div class="order-summary">
                <div class="summary-row">
                    <span>Total MRP:</span>
                    <span id="mrp-val">₹0.00</span>
                </div>
                <div class="summary-row savings">
                    <span>Product Discount:</span>
                    <span id="discount-val">₹0.00</span>
                </div>
                <div class="summary-row">
                    <span>Delivery Charges:</span>
                    <span id="delivery-val">₹0.00</span>
                </div>
                <div class="summary-row total">
                    <span>Total Amount:</span>
                    <span id="total-summary-val">₹0.00</span>
                </div>
            </div>
        </main>

        <div class="checkout-footer">
            <button class="checkout-btn" id="checkout-btn" onclick="window.location.href='checkout.php'">
                Checkout for <span id="total-val">₹0.00</span>
            </button>
        </div>

        <?php include 'includes/navigation.php'; ?>
    </div>

    <script src="assets/JS/script.js"></script>
    <script src="assets/JS/cart.js"></script>
</body>
</html>
