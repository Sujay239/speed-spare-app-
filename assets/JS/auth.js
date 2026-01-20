document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const tabSlider = document.querySelector(".tab-slider");
  const loginTab = document.querySelector('[data-tab="login"]');
  const registerTab = document.querySelector('[data-tab="register"]');

  const welcomeTitle = document.getElementById("welcome-title");
  const welcomeDesc = document.getElementById("welcome-desc");

  // Switch Tab Logic
  window.switchTab = function (tab) {
    if (tab === "login") {
      // Update UI
      loginTab.classList.add("active");
      registerTab.classList.remove("active");
      tabSlider.style.transform = "translateX(0)";

      // Show Form
      loginForm.classList.remove("hidden");
      registerForm.classList.add("hidden");

      // Update Text
      welcomeTitle.textContent = "Welcome Back! 👋";
      welcomeDesc.textContent = "Please sign in to your account";
    } else {
      // Update UI
      registerTab.classList.add("active");
      loginTab.classList.remove("active");
      tabSlider.style.transform = "translateX(100%)";

      // Show Form
      registerForm.classList.remove("hidden");
      loginForm.classList.add("hidden");

      // Update Text
      welcomeTitle.textContent = "Create Account 🚀";
      welcomeDesc.textContent = "Join us to get started now";
    }
  };

  // Handle Login
  window.handleLogin = function (e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    // Show Loader
    btn.innerHTML =
      '<i class="fa-solid fa-circle-notch fa-spin"></i> Signing In...';
    btn.disabled = true;

    setTimeout(() => {
      // Mock Success
      localStorage.setItem("speed_spare_auth", "true");
      alert("Login Successful!");
      window.location.href = "index.php"; // Redirect to home/account
    }, 1500);
  };

  // Handle Register
  window.handleRegister = function (e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    // Show Loader
    btn.innerHTML =
      '<i class="fa-solid fa-circle-notch fa-spin"></i> Creating Account...';
    btn.disabled = true;

    setTimeout(() => {
      // Mock Success
      alert("Account Created Successfully!");
      window.switchTab("login");
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 1500);
  };

  // Initialize (Optional: Check URL param for default tab)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("tab") === "register") {
    switchTab("register");
  }
});
