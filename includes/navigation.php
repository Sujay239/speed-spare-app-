<?php
$current_page = basename($_SERVER['PHP_SELF']);
?>
<nav class="bottom-nav">
    <a href="index.php" class="nav-item <?php echo ($current_page == 'index.php' || $current_page == '' || $current_page == '/') ? 'active' : ''; ?>">
        <i class="fa-solid fa-house"></i>
        <span>Home</span>
    </a>

    <a href="categories.php" class="nav-item <?php echo $current_page == 'categories.php' ? 'active' : ''; ?>">
        <i class="fa-solid fa-border-all"></i>
        <span>Categories</span>
    </a>

    <a href="orders.php" class="nav-item <?php echo $current_page == 'orders.php' ? 'active' : ''; ?>">
        <i class="fa-solid fa-box-open"></i>
        <span>Orders</span>
    </a>

    <a href="account.php" class="nav-item <?php echo $current_page == 'account.php' ? 'active' : ''; ?>">
        <i class="fa-regular fa-user"></i>
        <span>Account</span>
    </a>
</nav>

