<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Forgot Password - Speed Spare</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/CSS/style.css">
    <link rel="stylesheet" href="assets/CSS/auth.css">
</head>
<body>
    <div class="auth-container">
        <header class="auth-header">
            <a href="auth.php" class="back-btn"><i class="fa-solid fa-arrow-left"></i></a>
            <h2 class="auth-logo">Speed<span>Spare</span></h2>
        </header>

        <div class="auth-content">
            <div class="welcome-text">
                <h1>Forgot Password? 🔒</h1>
                <p>Enter your email and we'll send you instructions to reset your password</p>
            </div>

            <form id="forgot-form" class="auth-form" onsubmit="handleForgotPassword(event)">
                <div class="form-group">
                    <input type="email" class="form-input" placeholder="Enter your email" required>
                    <i class="fa-regular fa-envelope input-icon"></i>
                </div>

                <button type="submit" class="auth-submit-btn">Send Reset Link</button>
            </form>
        </div>
    </div>

    <script src="assets/JS/auth.js"></script>
</body>
</html>
