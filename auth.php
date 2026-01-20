<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Login / Sign Up - Speed Spare</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/CSS/style.css">
    <link rel="stylesheet" href="assets/CSS/auth.css">
</head>
<body>
    <div class="auth-container">
        <!-- Header -->
        <header class="auth-header">
            <a href="index.php" class="back-btn"><i class="fa-solid fa-arrow-left"></i></a>
            <h2 class="auth-logo">Speed<span>Spare</span></h2>
        </header>

        <div class="auth-content">
            <!-- Welcome Text -->
            <div class="welcome-text">
                <h1 id="welcome-title">Welcome Back! 👋</h1>
                <p id="welcome-desc">Please sign in to your account</p>
            </div>

            <!-- Tab Switcher -->
            <div class="auth-tabs">
                <div class="tab-slider"></div>
                <button class="tab-btn active" data-tab="login" onclick="switchTab('login')">Log In</button>
                <button class="tab-btn" data-tab="register" onclick="switchTab('register')">Sign Up</button>
            </div>

            <!-- Login Form -->
            <form id="login-form" class="auth-form" onsubmit="handleLogin(event)">
                <div class="form-group">
                    <input type="email" class="form-input" placeholder="Email Address" required>
                    <i class="fa-regular fa-envelope input-icon"></i>
                </div>
                
                <div class="form-group">
                    <input type="password" class="form-input" placeholder="Password" required>
                    <i class="fa-solid fa-lock input-icon"></i>
                </div>

                <div class="forgot-pass">
                    <a href="forgot_password.php">Forgot Password?</a>
                </div>

                <button type="submit" class="auth-submit-btn">Login</button>
            </form>

            <!-- Register Form -->
            <form id="register-form" class="auth-form hidden" onsubmit="handleRegister(event)">
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="Full Name" required>
                    <i class="fa-regular fa-user input-icon"></i>
                </div>

                <div class="form-group">
                    <input type="email" class="form-input" placeholder="Email Address" required>
                    <i class="fa-regular fa-envelope input-icon"></i>
                </div>

                <div class="form-group">
                    <input type="tel" class="form-input" placeholder="Phone Number" required>
                    <i class="fa-solid fa-phone input-icon"></i>
                </div>
                
                <div class="form-group">
                    <input type="password" class="form-input" placeholder="Create Password" required>
                    <i class="fa-solid fa-lock input-icon"></i>
                </div>

                <div class="form-group checkbox-group">
                    <input type="checkbox" id="terms-accept" required>
                    <label for="terms-accept">
                        I accept the <a href="terms.php">Terms & Conditions</a>, <a href="privacy.php">Privacy Policy</a>, and <a href="return_policy.php">Return Policy</a>.
                    </label>
                </div>

                <button type="submit" class="auth-submit-btn">Create Account</button>
            </form>
        </div>
    </div>

    <script src="assets/JS/auth.js"></script>
</body>
</html>
