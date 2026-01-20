<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Speed Spare</title>

    <link rel="stylesheet" href="assets/CSS/style.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

    <div class="app-container">

        <?php include 'includes/header.php'; ?>

        <main class="content-wrapper">
            <section class="hero-section">
                <div class="carousel-container" id="hero-carousel-container">
                    <div class="carousel-track" id="carousel-track">
                        <!-- JS Rendered -->
                    </div>
                    <div class="carousel-indicators" id="carousel-indicators">
                        <!-- JS Rendered -->
                    </div>
                </div>
            </section>


            <section class="categories-section">
                <div class="section-header">
                    <h3>Categories</h3>
                    <a href="#" class="see-all">See all</a>
                </div>
                <div class="categories-scroll" id="categories-container">
                    <!-- JS Rendered -->
                </div>
            </section>


            <section class="deal-rush-section">
                <div class="section-header">
                    <div class="deal-title">
                        <h3>Deal Rush</h3>
                        <div class="timer-badge">
                            <i class="fa-solid fa-clock"></i> <span id="deal-timer">02:59:59</span>
                        </div>
                    </div>
                </div>
                <div class="deals-scroll" id="deals-container">
                    <!-- JS Rendered -->
                </div>
            </section>

            <section class="banner-mid-section">
                <div class="promo-banner" style="background: linear-gradient(135deg, #ff9500, #ff5e00);">
                    <div class="promo-text">
                        <span>Power Up</span>
                        <h4>Heavy Duty Batteries<br>3-Year Warranty</h4>
                        <button class="shop-now-btn" style="background: white; color: #ff5e00;">Shop Now</button>
                    </div>
                    <img src="https://assets.stickpng.com/thumbs/580b585b2ed51522fa02f15b.png" alt="Battery" class="promo-img">
                </div>
            </section>

            <section class="trending-section">
                <div class="section-header">
                    <h3>Trending Now</h3>
                    <a href="#" class="see-all">See all</a>
                </div>
                <div class="product-grid" id="trending-container">
                    <!-- JS Rendered -->
                </div>
            </section>

            <section class="banner-mid-section">
                <div class="promo-banner">
                    <div class="promo-text">
                        <span>Flash Sale</span>
                        <h4>Save up to 60% on all<br>Suspension Parts</h4>
                        <button class="shop-now-btn">Shop Now</button>
                    </div>
                    <img src="images/banner2.png" alt="Promo Banner" class="promo-img">
                </div>
            </section>

            <section class="popular-section">
                <div class="section-header">
                    <h3>Popular Parts</h3>
                    <a href="#" class="see-all">See all</a>
                </div>
                <div class="product-grid" id="popular-container">
                    <!-- JS Rendered -->
                </div>
            </section>

            <section class="banner-mid-section">
                <div class="promo-banner" style="background: linear-gradient(135deg, #10c05d, #0d9a4b);">
                    <div class="promo-text">
                        <span style="color: white; opacity: 0.9;">Exclusive Deal</span>
                        <h4>Free Shipping on all<br>Engine Oil Kits</h4>
                        <button class="shop-now-btn" style="background: white; color: var(--primary-green);">Claim Now</button>
                    </div>
                    <img src="https://assets.stickpng.com/thumbs/580b585b2ed51522fa02f15c.png" alt="Oil Kit" class="promo-img">
                </div>
            </section>

            <section class="recommended-section">
                <div class="section-header">
                    <h3>Recommended for you</h3>
                    <a href="#" class="see-all">See all</a>
                </div>
                <div class="product-grid" id="recommended-container">
                    <!-- JS Rendered -->
                </div>
            </section>

            <section class="banner-mid-section">
                <div class="promo-banner" style="background: #fff5f5; border: 1px solid #ffd8d8;">
                    <div class="promo-text">
                        <span style="color: #ff3b30;">Safety First</span>
                        <h4 style="color: #333;">Brake Pad Installation<br>Free Checkup inclusive</h4>
                        <button class="shop-now-btn" style="background: #ff3b30;">Go Secure</button>
                    </div>
                    <img src="https://assets.stickpng.com/thumbs/580b585b2ed51522fa02f15e.png" alt="Safety" class="promo-img">
                </div>
            </section>

            <section class="recently-viewed-section">
                <div class="section-header">
                    <h3>Recently Viewed</h3>
                </div>
                <div class="product-grid" id="recently-viewed-container">
                    <!-- JS Rendered -->
                </div>
            </section>

            <section class="banner-mid-section">
                <div class="promo-banner" style="background: linear-gradient(135deg, #5856d6, #af52de);">
                    <div class="promo-text">
                        <span>Night Drive</span>
                        <h4>Xenon Lighting Kits<br>Master the Dark</h4>
                        <button class="shop-now-btn" style="background: white; color: #5856d6;">View More</button>
                    </div>
                    <img src="https://assets.stickpng.com/thumbs/5e17320b923140134ba99b21.png" alt="Lighting" class="promo-img">
                </div>
            </section>

            <section class="product-grid-section">
                <div class="section-header">
                    <h3>All Products</h3>
                    <a href="#" class="see-all">See all</a>
                </div>
                <div class="product-grid" id="products-container">
                    <!-- JS Rendered -->
                </div>
            </section>
        </main>

        <?php include 'includes/navigation.php'; ?>

    </div>

    <script src="assets/JS/script.js"></script>
</body>
</html>
