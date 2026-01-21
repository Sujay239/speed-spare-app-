document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  function findProduct(id) {
    // Ensure data sources from script.js are available
    if (typeof trendingData === "undefined") return null;

    const dataSources = [
      dealsData,
      trendingData,
      popularData,
      recommendedData,
      recentlyViewedData,
      allProductsData,
    ];

    for (let source of dataSources) {
      const found = source.find((p) => p.id === id);
      if (found) return found;
    }
    return null;
  }

  const product = findProduct(productId);
  const root = document.getElementById("details-root");

  if (product) {
    const currentPrice = product.newPrice || product.price;
    const oldPrice = product.oldPrice || currentPrice * 1.25;
    const discount = product.discount || "20% OFF";

    if (root) {
      root.innerHTML = `
                <div class="product-hero">
                    <div class="hero-controls">
                        <a href="index.php" class="control-btn"><i class="fa-solid fa-chevron-left"></i></a>
                        <div class="hero-right-controls">
                            <button class="control-btn"><i class="fa-solid fa-heart"></i></button>
                            <button class="control-btn" onclick="shareProduct()"><i class="fa-solid fa-share-nodes"></i></button>
                        </div>
                    </div>
                    <img src="${product.image}" alt="${product.name}" class="product-main-img">
                </div>

                <div class="details-content">
                    <div class="title-row">
                        <h1 class="product-name">${product.name}</h1>
                        <div class="price-section">
                            <span class="current-price">₹${Math.round(currentPrice).toLocaleString()}</span>
                            <span class="old-price-label">₹${Math.round(oldPrice).toLocaleString()}</span>
                            <span class="discount-label">${discount}</span>
                        </div>
                    </div>

                    <div class="stats-row">
                        <div class="stat-pill">
                            <i class="fa-solid fa-star"></i> ${product.rating || "4.8"}
                        </div>
                        <div class="stat-pill">
                            <i class="fa-solid fa-thumbs-up"></i> 94%
                        </div>
                        <span class="review-count">${product.reviews || "117"} reviews</span>
                    </div>

                    <h3 class="section-title">Description</h3>
                    <p class="description-text">
                        ${product.desc || "Premium quality spare part designed for maximum efficiency and durability. Tested under extreme conditions to ensure long-lasting performance for your vehicle."}
                    </p>

                    <h3 class="section-title">Specifications</h3>
                    <div class="specs-list">
                        <div class="spec-item"><span class="spec-label">Material</span><span class="spec-value">High-Grade Alloy</span></div>
                        <div class="spec-item"><span class="spec-label">Weight</span><span class="spec-value">1.2 kg</span></div>
                        <div class="spec-item"><span class="spec-label">Dimensions</span><span class="spec-value">15 x 10 x 5 cm</span></div>
                        <div class="spec-item"><span class="spec-label">Warranty</span><span class="spec-value">2 Years</span></div>
                    </div>

                    <h3 class="section-title">User Reviews</h3>
                    <div class="review-card">
                        <div class="review-header">
                            <span class="reviewer-name">Rahul Sharma</span>
                            <div class="review-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                        </div>
                        <p class="review-text">Excellent part! Fits perfectly in my car and improved performance immediately. Highly recommended.</p>
                    </div>
                    <div class="review-card">
                        <div class="review-header">
                            <span class="reviewer-name">Priya Singh</span>
                            <div class="review-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></div>
                        </div>
                        <p class="review-text">Genuine product and very fast delivery. The packaging was also top-notch.</p>
                    </div>

                    <a href="reviews.php?producctid=${product.id}" class="see-all-reviews">See all ${product.reviews || "117"} reviews</a>

                    <div class="related-products-section">
                        <h3 class="section-title">You might also like</h3>
                        <div class="products-scroll" id="related-container">
                            <!-- Rendered by JS -->
                        </div>
                    </div>
                </div>

                <div class="cart-sticky-bar">
                    <button class="add-to-cart-btn">Add to Cart</button>
                    <button class="buy-now-btn" onclick="buyNow()">Buy Now</button>
                </div>
            `;

      // Render Related Products
      renderRelatedProducts(productId);

      // --- SYNC CART BUTTONS ---
      function syncCartButtons() {
        const stickyBar = document.querySelector(".cart-sticky-bar");
        if (!stickyBar) return;

        let cart = JSON.parse(localStorage.getItem("speed_spare_cart")) || [];
        const item = cart.find((i) => i.id === product.id);

        if (item) {
          // Show quantity selector
          stickyBar.innerHTML = `
                        <div class="qty-selector-wide">
                            <button class="qty-btn" onclick="updateDetailsQty(-1)"><i class="fa-solid fa-minus"></i></button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn plus" onclick="updateDetailsQty(1)"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <button class="buy-now-btn" onclick="window.location.href='cart.php'">Go to Cart</button>
                    `;
        } else {
          // Show normal buttons
          stickyBar.innerHTML = `
                        <button class="add-to-cart-btn" onclick="addToCart()">Add to Cart</button>
                        <button class="buy-now-btn" onclick="buyNow()">Buy Now</button>
                    `;
        }
      }

      syncCartButtons();

      window.addToCart = function () {
        let cart = JSON.parse(localStorage.getItem("speed_spare_cart")) || [];
        const existing = cart.find((i) => i.id === product.id);
        if (existing) {
          existing.quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("speed_spare_cart", JSON.stringify(cart));
        syncCartButtons();
        updateHeaderBadge();
      };

      window.buyNow = function () {
        // Overwrite cart with just this item
        const cart = [{ ...product, quantity: 1 }];
        localStorage.setItem("speed_spare_cart", JSON.stringify(cart));
        window.location.href = "checkout.php";
      };

      window.updateDetailsQty = function (delta) {
        let cart = JSON.parse(localStorage.getItem("speed_spare_cart")) || [];
        let itemIndex = cart.findIndex((i) => i.id === product.id);

        if (itemIndex !== -1) {
          cart[itemIndex].quantity += delta;
          if (cart[itemIndex].quantity < 1) {
            cart.splice(itemIndex, 1);
          }
          localStorage.setItem("speed_spare_cart", JSON.stringify(cart));
          syncCartButtons();
          updateHeaderBadge();
        }
      };

      function updateHeaderBadge() {
        const cart = JSON.parse(localStorage.getItem("speed_spare_cart")) || [];
        const badge = document.querySelector(".cart-btn .badge");
        if (badge) {
          badge.textContent = cart.reduce(
            (acc, item) => acc + item.quantity,
            0,
          );
        }
      }

      window.shareProduct = async function () {
        if (navigator.share) {
          try {
            await navigator.share({
              title: product.name,
              text: `Check out this ${product.name} at Speed Spare!`,
              url: window.location.href,
            });
          } catch (err) {
            console.log("Error sharing:", err);
          }
        } else {
          // Fallback
          navigator.clipboard.writeText(window.location.href);
          alert("Link copied to clipboard!");
        }
      };
    }
  } else {
    if (root)
      root.innerHTML = `<div style="padding: 50px; text-align: center;"><h2>Product Not Found</h2><a href="index.php">Go Back</a></div>`;
  }

  function renderRelatedProducts(currentId) {
    const container = document.getElementById("related-container");
    if (!container) return;

    // Get some products from allProductsData excluding current
    if (typeof allProductsData !== "undefined") {
      const related = allProductsData
        .filter((p) => p.id !== currentId)
        .slice(0, 5);
      container.innerHTML = related
        .map(
          (product) => `
                <div class="product-card" onclick="window.location.href='product_details.php?id=${product.id}'">
                    <div class="img-container">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-details">
                        <h4>${product.name}</h4>
                        <span class="price">₹${(product.price || product.newPrice).toLocaleString()}</span>
                    </div>
                </div>
            `,
        )
        .join("");
    }
  }
});
