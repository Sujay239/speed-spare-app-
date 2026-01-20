<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Reset Password - Speed Spare</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/CSS/style.css">
    <link rel="stylesheet" href="assets/CSS/auth.css">
</head>
<body>
    <div class="auth-container">
        <header class="auth-header">
            <h2 class="auth-logo">Speed<span>Spare</span></h2>
        </header>

        <div class="auth-content">
            <div class="welcome-text">
                <h1>Reset Password 🔑</h1>
                <p>Create a new strong password for your account</p>
            </div>

            <form id="reset-form" class="auth-form" onsubmit="handleResetPassword(event)">
                <div class="form-group">
                    <input type="password" id="new-pass" class="form-input" placeholder="New Password" required minlength="6">
                    <i class="fa-solid fa-lock input-icon"></i>
                </div>

                <div class="form-group">
                    <input type="password" id="confirm-pass" class="form-input" placeholder="Confirm New Password" required minlength="6">
                    <i class="fa-solid fa-lock input-icon"></i>
                </div>

                <button type="submit" class="auth-submit-btn">Update Password</button>
            </form>
        </div>
    </div>

    <script src="assets/JS/auth.js"></script>
    <script>
        // Simple Token Check
        const urlParams = new URLSearchParams(window.location.search);
        if (!urlParams.get('token')) {
            document.querySelector('.auth-content').innerHTML = `
                <div style="text-align: center; padding-top: 50px;">
                    <i class="fa-solid fa-triangle-exclamation" style="font-size: 40px; color: #ef4444; margin-bottom: 20px;"></i>
                    <h2>Invalid Link</h2>
                    <p style="color: #64748b;">This password reset link is invalid or has expired.</p>
                    <a href="auth.php" class="auth-submit-btn" style="text-decoration: none; display: inline-block; margin-top: 20px;">Go to Login</a>
                </div>
            `;
        }
    </script>
</body>
</html>
