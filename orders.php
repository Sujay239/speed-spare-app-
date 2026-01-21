<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>My Orders - Speed Spare</title>
    <link rel="stylesheet" href="assets/CSS/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/CSS/orders.css">
</head>
<body>
    <div class="app-container">
        <!-- Dedicated Orders Header (Similar to Cart) -->
        <header class="orders-header">
            <a href="index.php" class="back-link">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
            <h1>My Orders</h1>
        </header>

        <div class="orders-page">
            <div id="orders-container" class="orders-container">

                <div class="orders-loader">
                    <div class="spinner"></div>
                    <p>Fetching your orders...</p>
                </div>
            </div>
        </div>

<?php

include 'includes/navigation.php';
?>

    </div>

    <script src="assets/JS/orders.js?v=<?php echo time(); ?>"></script>

</body>
</html>
