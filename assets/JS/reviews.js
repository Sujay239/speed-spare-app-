document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("producctid");

    function findProduct(id) {
        if (typeof allProductsData === "undefined") return null;

        const dataSources = [
            dealsData,
            trendingData,
            popularData,
            recommendedData,
            recentlyViewedData,
            allProductsData
        ];

        for (let source of dataSources) {
            const found = source.find(p => p.id === id);
            if (found) return found;
        }
        return null;
    }

    const product = findProduct(productId);
    const root = document.getElementById("reviews-root");

    if (product) {
        // Generate Mock Reviews
        const mockReviews = [
            {
                name: "Rahul Sharma",
                rating: 5,
                date: "2 days ago",
                comment: "Excellent part! Fits perfectly in my car and improved performance immediately. Highly recommended.",
                avatar: "https://ui-avatars.com/api/?name=RS&background=random",
                photos: ["https://m.media-amazon.com/images/I/71p-Ie4CjVL._SX679_.jpg"]
            },
            {
                name: "Priya Singh",
                rating: 4.5,
                date: "1 week ago",
                comment: "Genuine product and very fast delivery. The packaging was also top-notch.",
                avatar: "https://ui-avatars.com/api/?name=PS&background=random",
                photos: ["https://m.media-amazon.com/images/I/61M-8qXgLlL._SX679_.jpg"]
            },
            {
                name: "Amit Patel",
                rating: 5,
                date: "2 weeks ago",
                comment: "Great value for money. Cheaper than the local store and better quality.",
                avatar: "https://ui-avatars.com/api/?name=AP&background=random",
                photos: []
            },
            {
                name: "Sneha Reddy",
                rating: 4,
                date: "1 month ago",
                comment: "Does the job well. Installation was easy with the provided manual.",
                avatar: "https://ui-avatars.com/api/?name=SR&background=random",
                photos: ["https://m.media-amazon.com/images/I/71p-Ie4CjVL._SX679_.jpg", "https://m.media-amazon.com/images/I/61M-8qXgLlL._SX679_.jpg"]
            },
            {
                name: "Vikram Malhotra",
                rating: 5,
                date: "1 month ago",
                comment: "Absolutely amazing! I was skeptical at first, but the quality is outstanding.",
                avatar: "https://ui-avatars.com/api/?name=VM&background=random",
                photos: []
            }
        ];

        if (root) {
            root.innerHTML = `
                <div class="product-info-bar">
                    <img src="${product.image}" alt="${product.name}" class="product-thumb">
                    <div class="p-details">
                        <span class="name">${product.name}</span>
                    </div>
                </div>

                <div class="review-summary-card">
                    <div class="summary-left">
                        <h2>${product.rating || "4.8"}</h2>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p class="total-text">Based on ${product.reviews || "117"} reviews</p>
                    </div>
                    <div class="summary-right">
                        ${[5, 4, 3, 2, 1].map(num => `
                            <div class="rating-bar-row">
                                <span class="bar-num">${num}</span>
                                <div class="bar-track">
                                    <div class="bar-fill" style="width: ${num === 5 ? '85' : (num === 4 ? '10' : '5')}%"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="reviews-list">
                    ${mockReviews.map(rev => `
                        <div class="review-item">
                            <div class="reviewer-header">
                                <img src="${rev.avatar}" alt="${rev.name}" class="reviewer-avatar">
                                <div class="rev-info">
                                    <h4>${rev.name}</h4>
                                    <span class="date">${rev.date}</span>
                                </div>
                            </div>
                            <div class="rev-rating">
                                ${Array(Math.floor(rev.rating)).fill('<i class="fa-solid fa-star"></i>').join('')}
                                ${rev.rating % 1 !== 0 ? '<i class="fa-solid fa-star-half-stroke"></i>' : ''}
                            </div>
                            <p class="rev-comment">${rev.comment}</p>
                            ${rev.photos && rev.photos.length > 0 ? `
                                <div class="rev-photos">
                                    ${rev.photos.map((photo, pIdx) => `<img src="${photo}" alt="Review Photo" onclick="viewPhoto('${rev.photos.join(', ')}', ${pIdx})">`).join('')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        }
    } else {
        if (root) {
            root.innerHTML = `<div style="padding: 50px; text-align: center;"><h2>Product Not Found</h2><a href="index.php">Go Back</a></div>`;
        }
    }

    let currentReviewPhotos = [];
    let currentPhotoIndex = 0;

    window.viewPhoto = function (photosStr, index) {
        currentReviewPhotos = photosStr.split(', ');
        currentPhotoIndex = index;

        updateLightbox();

        const lightbox = document.getElementById('image-lightbox');
        if (lightbox) {
            lightbox.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    };

    function updateLightbox() {
        const lightboxImg = document.getElementById('lightbox-img');
        const counter = document.getElementById('img-counter');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        if (lightboxImg && counter) {
            lightboxImg.src = currentReviewPhotos[currentPhotoIndex];
            counter.textContent = `${currentPhotoIndex + 1} / ${currentReviewPhotos.length}`;

            // Hide/Show nav buttons based on photo count
            if (currentReviewPhotos.length > 1) {
                prevBtn.style.display = 'flex';
                nextBtn.style.display = 'flex';
            } else {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            }
        }
    }

    window.changePhoto = function (direction) {
        currentPhotoIndex += direction;

        // Loop around
        if (currentPhotoIndex < 0) {
            currentPhotoIndex = currentReviewPhotos.length - 1;
        } else if (currentPhotoIndex >= currentReviewPhotos.length) {
            currentPhotoIndex = 0;
        }

        updateLightbox();
    };

    window.closeLightbox = function () {
        const lightbox = document.getElementById('image-lightbox');
        if (lightbox) {
            lightbox.classList.remove('show');
            document.body.style.overflow = '';
        }
    };
});


