<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Help & Support - Speed Spare</title>
    <link rel="stylesheet" href="assets/CSS/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/CSS/help.css">
</head>
<body>
    <div class="app-container">
        <!-- Header -->
        <header class="help-header">
            <div class="header-top">
                <a href="account.php" class="back-btn">
                    <i class="fa-solid fa-arrow-left"></i>
                </a>
            </div>
            <h1>Help & Support</h1>
            <p>How can we help you today?</p>
        </header>

        <!-- Search Bar -->
        <div class="search-container">
            <div class="search-box">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for issues...">
            </div>
        </div>

        <!-- Quick Actions Grid -->
        <div class="help-grid">
            <a href="orders.php" class="grid-item">
                <div class="grid-icon"><i class="fa-solid fa-box-open"></i></div>
                <span class="grid-text">My Orders</span>
            </a>
            <a href="#" onclick="alert('Returns & Refunds coming soon!')" class="grid-item">
                <div class="grid-icon"><i class="fa-solid fa-rotate-left"></i></div>
                <span class="grid-text">Returns</span>
            </a>
            <a href="#" onclick="alert('Payment help coming soon!')" class="grid-item">
                <div class="grid-icon"><i class="fa-solid fa-wallet"></i></div>
                <span class="grid-text">Payments</span>
            </a>
            <a href="account.php" class="grid-item">
                <div class="grid-icon"><i class="fa-solid fa-user-shield"></i></div>
                <span class="grid-text">Account</span>
            </a>
        </div>

        <!-- FAQs -->
        <div class="help-container">
            <h3 class="section-title">Frequently Asked Questions</h3>
            <div class="faq-list">
                <div class="faq-item" onclick="toggleFaq(this)">
                    <button class="faq-question">
                        How do I track my order?
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        You can track your order by going to "My Orders", selecting your order, and clicking "Track Order".
                    </div>
                </div>
                <div class="faq-item" onclick="toggleFaq(this)">
                    <button class="faq-question">
                        What is the return policy?
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        We offer a 7-day return policy for unused items in their original packaging.
                    </div>
                </div>
                <div class="faq-item" onclick="toggleFaq(this)">
                    <button class="faq-question">
                        How can I cancel my order?
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        You can cancel your order from the "My Orders" page before it has been shipped.
                    </div>
                </div>
                <div class="faq-item" onclick="toggleFaq(this)">
                    <button class="faq-question">
                        Do you offer warranties?
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="faq-answer">
                        Yes, most products come with a standard manufacturer warranty.
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <h3 class="section-title">Send us a message</h3>
            <div class="contact-section">
                <div class="contact-card">
                    <form onsubmit="event.preventDefault(); alert('Message sent successfully!'); this.reset();">
                        <div class="form-group">
                            <label>Issue Type</label>
                            <select class="form-select" id="issue-type-select" onchange="toggleOrderSelect()">
                                <option value="">Select an issue</option>
                                <option value="Order Related">Order Related</option>
                                <option value="Payment Issue">Payment Issue</option>
                                <option value="Account Issue">Account Issue</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        
                        <div class="form-group" id="order-group" style="display: none;">
                            <label>Select Order</label>
                            <select class="form-select" id="order-select">
                                <option value="">Select an Order</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Your Message</label>
                            <textarea class="form-textarea" placeholder="Describe your issue here..."></textarea>
                        </div>
                        <button type="submit" class="send-btn">
                            Send Message <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>

            <!-- Bottom Actions -->
            <div class="bottom-actions">
                <button class="action-btn btn-call" onclick="window.location.href='tel:+919876543210'">
                    <i class="fa-solid fa-phone"></i> Call Us
                </button>
                <button class="action-btn btn-chat" onclick="alert('Live Chat connecting...')">
                    <i class="fa-solid fa-comments"></i> Live Chat
                </button>
            </div>
        </div>
    </div>

    <script>
        function toggleFaq(element) {
            // Close other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== element) {
                    item.classList.remove('active');
                }
            });
            // Toggle clicked FAQ
            element.classList.toggle('active');
        }

        // Mock Orders Data
        const mockOrders = [
            { id: 'ORD-8721', status: 'Delivered', date: '20 Oct, 2023' },
            { id: 'ORD-9923', status: 'Shipped', date: '22 Oct, 2023' },
            { id: 'ORD-1102', status: 'Processing', date: '24 Oct, 2023' }
        ];

        function toggleOrderSelect() {
            const issueType = document.getElementById('issue-type-select').value;
            const orderGroup = document.getElementById('order-group');
            const orderSelect = document.getElementById('order-select');

            if (issueType === 'Order Related') {
                orderGroup.style.display = 'block';
                // Populate if empty (except placeholder)
                if (orderSelect.options.length <= 1) {
                    mockOrders.forEach(order => {
                        const option = document.createElement('option');
                        option.value = order.id;
                        option.text = `${order.id} - ${order.status} (${order.date})`;
                        orderSelect.appendChild(option);
                    });
                }
            } else {
                orderGroup.style.display = 'none';
            }
        }
    </script>
</body>
</html>
