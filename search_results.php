<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Search Results - Speed Spare</title>
    <link rel="stylesheet" href="assets/CSS/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/CSS/search_results.css">
</head>
<body>

    <div class="app-container">
        <?php include 'includes/header.php'; ?>

        <main class="search-results-page">
            <div class="filter-wrapper">
                <div class="filter-bar">
                    <div class="filter-item" id="btn-sort" onclick="openSheet('sort')">Sort By <i class="fa-solid fa-chevron-down"></i></div>
                    <div class="filter-item" id="btn-price" onclick="openSheet('price')">Price <i class="fa-solid fa-chevron-down"></i></div>
                    <div class="filter-item" id="btn-discount" onclick="openSheet('discount')">Discount <i class="fa-solid fa-chevron-down"></i></div>
                    <div class="filter-item">Brand <i class="fa-solid fa-chevron-down"></i></div>
                </div>
            </div>

            <div class="result-info">
                <div>Results for <span id="search-query-display">"..."</span></div>
                <div><span id="result-count">0</span> items</div>
            </div>

            <div class="search-list" id="search-results-container">
                <!-- JS Rendered Results -->
            </div>

            <div id="no-results-msg" class="no-results" style="display: none;">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h3>No results found</h3>
                <p>Try searching for engines, brakes, or lights.</p>
            </div>
        </main>

        <!-- Sheets -->
        <div class="overlay" id="overlay" onclick="closeSheet()"></div>

        <!-- Sort Sheet -->
        <div class="bottom-sheet" id="sheet-sort">
            <div class="sheet-header">
                <h3>Sort By</h3>
                <i class="fa-solid fa-xmark close-sheet" onclick="closeSheet()"></i>
            </div>
            <div class="option-list">
                <div class="option-item selected" data-value="relevance" onclick="selectSort('relevance')">Relevance <i class="fa-solid fa-check"></i></div>
                <div class="option-item" data-value="low-high" onclick="selectSort('low-high')">Price: Low to High <i class="fa-solid fa-check"></i></div>
                <div class="option-item" data-value="high-low" onclick="selectSort('high-low')">Price: High to Low <i class="fa-solid fa-check"></i></div>
                <div class="option-item" data-value="popular" onclick="selectSort('popular')">Popularity <i class="fa-solid fa-check"></i></div>
            </div>
        </div>

        <!-- Price Sheet -->
        <div class="bottom-sheet" id="sheet-price">
            <div class="sheet-header">
                <h3>Price Range</h3>
                <i class="fa-solid fa-xmark close-sheet" onclick="closeSheet()"></i>
            </div>
            <div class="option-list">
                <div class="option-item selected" data-value="all" onclick="selectPrice('all')">All Prices <i class="fa-solid fa-check"></i></div>
                <div class="option-item" data-value="u1000" onclick="selectPrice('u1000')">Under ₹1,000 <i class="fa-solid fa-check"></i></div>
                <div class="option-item" data-value="u5000" onclick="selectPrice('u5000')">₹1,000 - ₹5,000 <i class="fa-solid fa-check"></i></div>
                <div class="option-item" data-value="u10000" onclick="selectPrice('u10000')">₹5,000 - ₹10,000 <i class="fa-solid fa-check"></i></div>
                <div class="option-item" data-value="a10000" onclick="selectPrice('a10000')">Above ₹10,000 <i class="fa-solid fa-check"></i></div>
            </div>
        </div>

        <!-- Discount Sheet -->
        <div class="bottom-sheet" id="sheet-discount">
            <div class="sheet-header">
                <h3>Discount</h3>
                <i class="fa-solid fa-xmark close-sheet" onclick="closeSheet()"></i>
            </div>
            <div class="option-list">
                <div class="option-item selected" data-value="0" onclick="selectDiscount('0')">All <i class="fa-solid fa-check"></i></div>
                <div class="option-item" data-value="20" onclick="selectDiscount('20')">20% or more <i class="fa-solid fa-check"></i></div>
                <div class="option-item" data-value="30" onclick="selectDiscount('30')">30% or more <i class="fa-solid fa-check"></i></div>
                <div class="option-item" data-value="50" onclick="selectDiscount('50')">50% or more <i class="fa-solid fa-check"></i></div>
            </div>
        </div>

        <?php include 'includes/navigation.php'; ?>
    </div>

    <script src="assets/JS/script.js"></script>
    <script src="assets/JS/search_results.js"></script>
</body>
</html>
