<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Categories - Speed Spare</title>
    <link rel="stylesheet" href="assets/CSS/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/CSS/categories.css">
</head>
<body>
    <div class="app-container">
        <!-- Header -->
        <header class="categories-header">
            <a href="index.php" class="back-link">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
            <h1>All Categories</h1>
        </header>

        <div class="categories-container">
            <!-- Search bar could go here -->
            
            <div class="category-grid">
                <!-- Engines -->
                <a href="search_results.php?category=Engines" class="category-card">
                    <div class="cat-icon-box"><i class="fa-solid fa-gears"></i></div>
                    <span class="cat-name">Engines</span>
                    <span class="cat-count">120+ Items</span>
                </a>

                <!-- Brakes -->
                <a href="search_results.php?category=Brakes" class="category-card">
                    <div class="cat-icon-box"><i class="fa-solid fa-circle-stop"></i></div>
                    <span class="cat-name">Brakes</span>
                    <span class="cat-count">85+ Items</span>
                </a>

                <!-- Lights -->
                <a href="search_results.php?category=Lights" class="category-card">
                    <div class="cat-icon-box"><i class="fa-solid fa-lightbulb"></i></div>
                    <span class="cat-name">Lights</span>
                    <span class="cat-count">200+ Items</span>
                </a>

                <!-- Tyres -->
                <a href="search_results.php?category=Tyres" class="category-card">
                    <div class="cat-icon-box"><i class="fa-solid fa-ring"></i></div>
                    <span class="cat-name">Tyres</span>
                    <span class="cat-count">56 Items</span>
                </a>

                <!-- Oil -->
                <a href="search_results.php?category=Oil" class="category-card">
                    <div class="cat-icon-box"><i class="fa-solid fa-oil-can"></i></div>
                    <span class="cat-name">Oils & Fluids</span>
                    <span class="cat-count">45 Items</span>
                </a>

                <!-- Battery -->
                <a href="search_results.php?category=Battery" class="category-card">
                    <div class="cat-icon-box"><i class="fa-solid fa-car-battery"></i></div>
                    <span class="cat-name">Battery</span>
                    <span class="cat-count">32 Items</span>
                </a>

                <!-- Tools -->
                <a href="search_results.php?category=Tools" class="category-card">
                    <div class="cat-icon-box"><i class="fa-solid fa-wrench"></i></div>
                    <span class="cat-name">Tools</span>
                    <span class="cat-count">150+ Items</span>
                </a>

                <!-- Interior -->
                <a href="search_results.php?category=Interior" class="category-card">
                    <div class="cat-icon-box"><i class="fa-solid fa-chair"></i></div>
                    <span class="cat-name">Interior</span>
                    <span class="cat-count">90+ Items</span>
                </a>

                <!-- Exterior -->
                <a href="search_results.php?category=Exterior" class="category-card">
                    <div class="cat-icon-box"><i class="fa-solid fa-car-side"></i></div>
                    <span class="cat-name">Exterior</span>
                    <span class="cat-count">110 Items</span>
                </a>

                <!-- Audio -->
                <a href="search_results.php?category=Audio" class="category-card">
                    <div class="cat-icon-box"><i class="fa-solid fa-music"></i></div>
                    <span class="cat-name">Audio</span>
                    <span class="cat-count">40 Items</span>
                </a>

                <!-- Cleaning -->
                <a href="search_results.php?category=Cleaning" class="category-card">
                    <div class="cat-icon-box"><i class="fa-solid fa-pump-soap"></i></div>
                    <span class="cat-name">Cleaning</span>
                    <span class="cat-count">65 Items</span>
                </a>

                 <!-- Accessories -->
                 <a href="search_results.php?category=Accessories" class="category-card">
                    <div class="cat-icon-box"><i class="fa-solid fa-gem"></i></div>
                    <span class="cat-name">Accessories</span>
                    <span class="cat-count">24 Items</span>
                </a>
            </div>
        </div>

        <?php include 'includes/navigation.php'; ?>
    </div>
</body>
</html>
