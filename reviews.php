<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>User Reviews - Speed Spare</title>
    <link rel="stylesheet" href="assets/CSS/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/CSS/reviews.css">
</head>
<body>
    <div class="app-container no-nav">
        <header class="reviews-header">
            <a href="javascript:history.back()" class="back-link">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
            <h1>User Reviews</h1>
        </header>

        <div class="reviews-page">
            <div id="reviews-root">
                <!-- Rendered by JS -->
                <div class="loader-container">
                    <div class="spinner"></div>
                    <p>Loading reviews...</p>
                </div>
            </div>
        </div>

        <!-- Lightbox Preview -->
        <div id="image-lightbox" class="lightbox">
            <span class="close-lightbox" onclick="closeLightbox()">&times;</span>

            <button class="lightbox-nav prev" id="prev-btn" onclick="event.stopPropagation(); changePhoto(-1)">
                <i class="fa-solid fa-chevron-left"></i>
            </button>

            <div class="lightbox-main" onclick="event.stopPropagation()">
                <img class="lightbox-content" id="lightbox-img">
                <div class="lightbox-counter" id="img-counter">1 / 1</div>
            </div>

            <button class="lightbox-nav next" id="next-btn" onclick="event.stopPropagation(); changePhoto(1)">
                <i class="fa-solid fa-chevron-right"></i>
            </button>

            <!-- Clickable overlay to close -->
            <div class="lightbox-overlay" onclick="closeLightbox()"></div>
        </div>

    </div>

    <script src="assets/JS/script.js"></script>
    <script src="assets/JS/reviews.js"></script>
</body>
</html>
