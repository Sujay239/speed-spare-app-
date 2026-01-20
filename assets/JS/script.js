// --- GLOBAL DATA ---
const carouselData = [
    { image: "images/banner1.png", alt: "Banner 1" },
    { image: "images/banner2.png", alt: "Banner 2" },
    { image: "images/banner3.png", alt: "Banner 3" },
    { image: "images/ad_banner4.png", alt: "Banner 4" },
    { image: "images/ad_banner5.png", alt: "Banner 5" }
];

const categoriesData = ["All", "Engine", "Breaks", "Lights", "Baterry"];

const dealsData = [
    {
        id: "d1",
        name: "Car Spark Plug",
        image: "https://assets.stickpng.com/thumbs/580b585b2ed51522fa02f15a.png",
        newPrice: 599,
        oldPrice: 800,
        discount: "25% OFF",
        rating: 4.8,
        reviews: 120,
        desc: "High-performance iridium spark plug designed for maximum ignition efficiency and fuel economy."
    },
    {
        id: "d2",
        name: "Oil Filter",
        image: "https://assets.stickpng.com/thumbs/580b585b2ed51522fa02f161.png",
        newPrice: 1200,
        oldPrice: 1800,
        discount: "33% OFF",
        rating: 4.7,
        reviews: 85,
        desc: "Premium synthetic oil filter that captures 99% of engine contaminants for longer engine life."
    },
    {
        id: "d3",
        name: "Air Filter",
        image: "https://assets.stickpng.com/thumbs/580b585b2ed51522fa02f15d.png",
        newPrice: 450,
        oldPrice: 700,
        discount: "35% OFF",
        rating: 4.6,
        reviews: 64,
        desc: "Washable high-flow air filter that increases horsepower and acceleration."
    }
];

const trendingData = [
    { id: "t1", name: "Turbocharger Kit", image: "https://assets.stickpng.com/thumbs/58a64cf9d87310058140409c.png", price: 25000, rating: 4.9, reviews: 210, desc: "Universal turbocharger kit for significant power gains and improved engine response." },
    { id: "t2", name: "Brembo Brake Pads", image: "https://assets.stickpng.com/thumbs/580b585b2ed51522fa02f15e.png", price: 8500, rating: 5.0, reviews: 145, desc: "Original Brembo high-performance ceramic brake pads for superior stopping power." },
    { id: "t3", name: "Alloy Wheels Set", image: "https://assets.stickpng.com/thumbs/580b585b2ed51522fa02f160.png", price: 42000, rating: 4.8, reviews: 92, desc: "Lightweight 17-inch alloy wheels with a sleek matte black finish." }
];

const popularData = [
    { id: "p1", name: "Shock Absorbers", image: "https://assets.stickpng.com/thumbs/58a64ce3d87310058140409a.png", price: 6200, rating: 4.7, reviews: 112, desc: "Gas-charged shock absorbers for a smoother ride and better handling." },
    { id: "p2", name: "Car Battery 75AH", image: "https://assets.stickpng.com/thumbs/580b585b2ed51522fa02f15b.png", price: 5800, rating: 4.6, reviews: 88, desc: "Maintenance-free heavy-duty battery with 3 years of replacement warranty." },
    { id: "p3", name: "Radiator Fan", image: "https://assets.stickpng.com/thumbs/58a64d1ad8731005814040a0.png", price: 3400, rating: 4.5, reviews: 56, desc: "High-speed electric radiator cooling fan for optimal engine temperature." }
];

const recommendedData = [
    { id: "r1", name: "Fuel Injectors", image: "https://assets.stickpng.com/thumbs/58a64d26d8731005814040a2.png", price: 12500, rating: 4.9, reviews: 67, desc: "Precision fuel injectors for improved fuel atomization and combustion." },
    { id: "r2", name: "Steering Rack", image: "https://assets.stickpng.com/thumbs/58a64d30d8731005814040a4.png", price: 18000, rating: 4.8, reviews: 43, desc: "Power steering rack and pinion assembly for precise vehicle control." },
    { id: "r3", name: "Wiper Blades", image: "https://assets.stickpng.com/thumbs/58a64d3cd8731005814040a6.png", price: 950, rating: 4.4, reviews: 124, desc: "Silicone wiper blades for streak-free visibility in any weather conditions." }
];

const recentlyViewedData = [
    { id: "rv1", name: "Engine Cylinder Head", image: "https://assets.stickpng.com/thumbs/58a64d47d8731005814040a8.png", price: 35000, rating: 5.0, reviews: 29, desc: "Complete engine cylinder head assembly with valves and camshafts." },
    { id: "rv2", name: "Exhaust Manifold", image: "https://assets.stickpng.com/thumbs/58a64d55d8731005814040aa.png", price: 7200, rating: 4.7, reviews: 38, desc: "Stainless steel exhaust manifold for improved exhaust flow and heat resistance." }
];

const allProductsData = [
    ...dealsData,
    ...trendingData,
    ...popularData,
    ...recommendedData,
    ...recentlyViewedData,
    { id: "ap1", name: "Premium Brake Disk", image: "https://assets.stickpng.com/thumbs/580b585b2ed51522fa02f15e.png", price: 3500, rating: 4.9, reviews: 190, desc: "Slotted and drilled brake disks for maximum heat dissipation." },
    { id: "ap2", name: "Engine Piston Set", image: "https://assets.stickpng.com/thumbs/580b585b2ed51522fa02f15c.png", price: 12000, rating: 5.0, reviews: 45, desc: "Forged aluminum pistons for high-compression engine builds." },
    { id: "ap3", name: "LED Headlight", image: "https://assets.stickpng.com/thumbs/5e17320b923140134ba99b21.png", price: 5200, rating: 5.0, reviews: 78, desc: "Ultra-bright LED headlight kit with 6000K cool white light." }
];

document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ALREADY DEFINED GLOBALLY ---

    // --- RENDERING FUNCTIONS ---
    function renderCarousel() {
        const track = document.getElementById('carousel-track');
        const indicatorsContainer = document.getElementById('carousel-indicators');
        if (!track || !indicatorsContainer) return;

        track.innerHTML = carouselData.map(slide => `
            <div class="carousel-slide">
                <img src="${slide.image}" alt="${slide.alt}">
            </div>
        `).join('');

        indicatorsContainer.innerHTML = carouselData.map((_, index) => `
            <span class="indicator ${index === 0 ? 'active' : ''}"></span>
        `).join('');

        initCarousel();
    }

    function renderCategories() {
        const container = document.getElementById('categories-container');
        if (!container) return;
        container.innerHTML = categoriesData.map((cat, index) => `
            <button class="cat-pill ${index === 0 ? 'active' : ''}">${cat}</button>
        `).join('');
        const pills = container.querySelectorAll('.cat-pill');
        pills.forEach(pill => {
            pill.addEventListener('click', function () {
                pills.forEach(p => p.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    window.getCartActionHTML = function (product) {
        const cart = JSON.parse(localStorage.getItem('speed_spare_cart')) || [];
        const item = cart.find(i => i.id === product.id);

        if (item) {
            return `
                <div class="home-qty-selector" onclick="event.stopPropagation()">
                    <button onclick="updateHomeQty('${product.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-val">${item.quantity}</span>
                    <button onclick="updateHomeQty('${product.id}', 1)"><i class="fa-solid fa-plus"></i></button>
                </div>
            `;
        } else {
            return `
                <div class="add-btn-small" onclick="event.stopPropagation(); addToCartById('${product.id}')">
                    <i class="fa-solid fa-plus"></i>
                </div>
            `;
        }
    };

    function renderProductList(containerId, data) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = data.map(product => {
            const displayPrice = product.price || product.newPrice;
            return `
                <div class="product-card" onclick="window.location.href='product_details.php?id=${product.id}'">
                    <div class="wishlist-btn" onclick="event.stopPropagation(); this.classList.toggle('active');">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <div class="img-container">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-details">
                        <h4>${product.name}</h4>
                        <div class="price-add-row">
                            <span class="price">₹${displayPrice ? displayPrice.toLocaleString() : '0'}</span>
                            ${getCartActionHTML(product)}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderDeals() {
        const container = document.getElementById('deals-container');
        if (!container) return;
        container.innerHTML = dealsData.map(deal => `
            <div class="product-card" onclick="window.location.href='product_details.php?id=${deal.id}'">
                <div class="wishlist-btn" onclick="event.stopPropagation(); this.classList.toggle('active');">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <div class="img-container">
                    <img src="${deal.image}" alt="${deal.name}">
                </div>
                <div class="product-details">
                    <div class="deal-discount" style="margin-bottom: 5px;">${deal.discount}</div>
                    <h4>${deal.name}</h4>
                    <div class="price-add-row">
                        <div style="display: flex; flex-direction: column;">
                            <span class="price" style="color: #ff3b30;">₹${deal.newPrice.toLocaleString()}</span>
                            <span class="old-price" style="font-size: 12px; text-decoration: line-through; color: #bbb;">₹${deal.oldPrice.toLocaleString()}</span>
                        </div>
                        ${getCartActionHTML(deal)}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // --- HERO CAROUSEL INITIALIZATION ---
    function initCarousel() {
        const track = document.querySelector('.carousel-track');
        const slides = Array.from(document.querySelectorAll('.carousel-slide'));
        const indicators = document.querySelectorAll('.indicator');
        if (track && slides.length > 0) {
            const firstClone = slides[0].cloneNode(true);
            track.appendChild(firstClone);
            let currentIndex = 0;
            const totalSlides = slides.length;
            function updateCarousel(instant = false) {
                track.style.transition = instant ? 'none' : 'transform 0.5s ease-in-out';
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
                indicators.forEach((indicator, index) => {
                    const indicatorIndex = currentIndex % totalSlides;
                    indicator.classList.toggle('active', index === indicatorIndex);
                });
            }
            function nextSlide() {
                currentIndex++;
                updateCarousel();
                if (currentIndex === totalSlides) {
                    setTimeout(() => {
                        currentIndex = 0;
                        updateCarousel(true);
                    }, 500);
                }
            }
            setInterval(nextSlide, 3000);
        }
    }

    // --- STICKY HEADER COLLAPSE ---
    const header = document.querySelector('header');
    if (header) {
        let lastScrollY = window.scrollY;
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const scrollDiff = currentScrollY - lastScrollY;

                    // Add shadow shadow after small scroll
                    if (currentScrollY > 10) header.classList.add('scrolled');
                    else header.classList.remove('scrolled');

                    // Collapse logic
                    if (currentScrollY > 150) {
                        if (scrollDiff > 5) {
                            // Scrolling DOWN - collapse
                            header.classList.add('collapsed');
                        } else if (scrollDiff < -20) {
                            // Scrolling UP significant distance - expand
                            header.classList.remove('collapsed');
                        }
                    } else if (currentScrollY < 100) {
                        // Near top - always expand
                        header.classList.remove('collapsed');
                    }

                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // --- DEAL RUSH TIMER ---
    function startTimer(duration, display) {
        let timer = duration, hours, minutes, seconds;
        setInterval(function () {
            hours = parseInt(timer / 3600, 10);
            minutes = parseInt((timer % 3600) / 60, 10);
            seconds = parseInt(timer % 60, 10);
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = hours + ":" + minutes + ":" + seconds;
            if (--timer < 0) timer = duration;
        }, 1000);
    }

    const timerDisplay = document.querySelector('#deal-timer');
    if (timerDisplay) startTimer(3 * 3600, timerDisplay);

    // --- GLOBAL ADD TO CART BY ID ---
    window.addToCartById = function (productId) {
        const product = allProductsData.find(p => p.id === productId);
        if (!product) return;

        let cart = JSON.parse(localStorage.getItem('speed_spare_cart')) || [];
        const existing = cart.find(item => item.id === productId);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('speed_spare_cart', JSON.stringify(cart));
        renderAllProducts();
        updateHeaderBadge();
    };

    window.updateHomeQty = function (productId, delta) {
        let cart = JSON.parse(localStorage.getItem('speed_spare_cart')) || [];
        const itemIndex = cart.findIndex(i => i.id === productId);

        if (itemIndex !== -1) {
            cart[itemIndex].quantity += delta;
            if (cart[itemIndex].quantity < 1) {
                cart.splice(itemIndex, 1);
            }
            localStorage.setItem('speed_spare_cart', JSON.stringify(cart));

            // Check if we are on Homepage or Search page
            if (typeof renderAllProducts === 'function' && document.getElementById('trending-container')) {
                renderAllProducts();
            } else if (typeof renderFilteredResults === 'function') {
                renderFilteredResults();
            }

            updateHeaderBadge();
        }
    };

    function updateHeaderBadge() {
        const cart = JSON.parse(localStorage.getItem('speed_spare_cart')) || [];
        const badge = document.querySelector('.cart-btn .badge');
        if (badge) {
            badge.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
        }
    }

    function renderAllProducts() {
        renderDeals();
        renderProductList('trending-container', trendingData);
        renderProductList('popular-container', popularData);
        renderProductList('recommended-container', recommendedData);
        renderProductList('recently-viewed-container', recentlyViewedData);
        renderProductList('products-container', allProductsData);
    }

    // --- INITIAL RENDERING ---
    renderCarousel();
    renderCategories();
    renderAllProducts();

    // --- Bottom Nav Pulse ---
    const navLinks = document.querySelectorAll('.nav-item');
    const currentPath = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            navLinks.forEach(n => n.classList.remove('active'));
            link.classList.add('active');
        }
    });

    // Update cart count from localStorage
    const cart = JSON.parse(localStorage.getItem('speed_spare_cart')) || [];
    const badge = document.querySelector('.cart-btn .badge');
    if (badge) {
        badge.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    }
});
