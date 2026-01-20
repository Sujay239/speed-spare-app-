<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>My Account - Speed Spare</title>
    <link rel="stylesheet" href="assets/CSS/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/CSS/account.css">
</head>
<body>
    <div class="app-container">
        <div class="account-container">
            <!-- Header -->
            <header class="account-header">
                <h1>My Account</h1>
            </header>

            <!-- Profile Card -->
            <div class="profile-card">
                <div class="avatar-container">
                    <div class="avatar-frame">
                        <img src="https://ui-avatars.com/api/?name=Sujay+Demo&background=f97316&color=fff&size=128" alt="Profile">
                    </div>
                    <div class="edit-icon-btn" onclick="openEditModal()"><i class="fa-solid fa-pencil"></i></div>
                </div>
                <div class="profile-info">
                    <h2 class="profile-name">Sujay</h2>
                    <p class="profile-meta">+91 98765 43210</p>
                    <p class="profile-meta">sujay@example.com</p>
                </div>
            </div>

            <!-- Menu Options -->
            <div class="account-menu">
                <!-- My Orders -->
                <a href="orders.php" class="menu-item">
                    <div class="menu-icon"><i class="fa-solid fa-box"></i></div>
                    <span class="menu-text">My Orders</span>
                </a>

                <!-- Addresses -->
                <a href="#" class="menu-item" onclick="openAddressModal()">
                    <div class="menu-icon"><i class="fa-solid fa-location-dot"></i></div>
                    <span class="menu-text">Saved Addresses</span>
                </a>

                <!-- Change Password -->
                <a href="#" class="menu-item" onclick="openChangePasswordModal()">
                    <div class="menu-icon"><i class="fa-solid fa-lock"></i></div>
                    <span class="menu-text">Change Password</span>
                </a>

                <!-- Help -->
                <a href="help.php" class="menu-item">
                    <div class="menu-icon"><i class="fa-solid fa-headset"></i></div>
                    <span class="menu-text">Help & Support</span>
                </a>

                <!-- Logout -->
                <a href="index.php" class="menu-item logout">
                    <div class="menu-icon"><i class="fa-solid fa-arrow-right-from-bracket"></i></div>
                    <span class="menu-text">Logout</span>
                </a>
            </div>
        </div>

        <?php include 'includes/navigation.php'; ?>
    </div>
    <!-- Edit Profile Modal -->
    <div id="edit-profile-modal" class="edit-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Edit Profile</h3>
                <button class="close-modal" onclick="closeEditModal()">&times;</button>
            </div>
            <form id="edit-profile-form" onsubmit="saveProfile(event)">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" id="edit-name" required>
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel" id="edit-phone" required>
                </div>
                <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" id="edit-email" required>
                </div>
                <div class="modal-actions">
                    <button type="button" class="cancel-btn" onclick="closeEditModal()">Cancel</button>
                    <button type="submit" class="save-btn">Update Profile</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Addresses Modal -->
    <div id="address-modal" class="edit-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Saved Addresses</h3>
                <button class="close-modal" onclick="closeAddressModal()">&times;</button>
            </div>

            <!-- List View -->
            <div id="address-list-view">
                <div id="address-list-container"></div>
                <button class="add-new-btn" onclick="toggleAddressForm(true)">
                    <i class="fa-solid fa-plus"></i> Add New Address
                </button>
            </div>

            <!-- Add Form View -->
            <form id="add-address-form" class="address-form" style="display: none;" onsubmit="saveNewAddress(event)">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" id="new-name" placeholder="Enter Full Name" required>
                </div>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel" id="new-phone" placeholder="Enter Phone Number" required>
                </div>
                <div class="form-group">
                    <label>Address Line 1</label>
                    <input type="text" id="new-line1" placeholder="House no, Building, Street" required>
                </div>
                <div class="form-group">
                    <label>Address Line 2 (Area)</label>
                    <input type="text" id="new-line2" placeholder="Locality, Landmark, Area" required>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Pincode</label>
                        <input type="number" id="new-pincode" placeholder="6 digits" required>
                    </div>
                    <div class="form-group">
                        <label>City</label>
                        <input type="text" id="new-city" placeholder="City" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Address Type</label>
                    <div class="type-selection" id="type-radio-group">
                        <label class="type-btn active" onclick="selectType(this)">
                            <input type="radio" name="addr-type" value="Home" checked hidden> Home
                        </label>
                        <label class="type-btn" onclick="selectType(this)">
                            <input type="radio" name="addr-type" value="Work" hidden> Work
                        </label>
                        <label class="type-btn" onclick="selectType(this)">
                            <input type="radio" name="addr-type" value="Other" hidden> Other
                        </label>
                    </div>
                </div>
                <div class="modal-actions">
                    <button type="button" class="cancel-btn" onclick="toggleAddressForm(false)">Cancel</button>
                    <button type="submit" class="save-btn">Save Address</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Change Password Modal -->
    <div id="change-password-modal" class="edit-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Change Password</h3>
                <button class="close-modal" onclick="closeChangePasswordModal()">&times;</button>
            </div>
            <form id="change-password-form" onsubmit="savePassword(event)">
                <div class="form-group">
                    <label>Current Password</label>
                    <input type="password" id="current-pass" required>
                </div>
                <div class="form-group">
                    <label>New Password</label>
                    <input type="password" id="new-pass" required>
                </div>
                <div class="form-group">
                    <label>Confirm New Password</label>
                    <input type="password" id="confirm-pass" required>
                </div>
                <div class="modal-actions">
                    <button type="button" class="cancel-btn" onclick="closeChangePasswordModal()">Cancel</button>
                    <button type="submit" class="save-btn">Update Password</button>
                </div>
            </form>
        </div>
    </div>

    <script>
    // Edit Profile Logic
    function openEditModal() {
        // Get current values
        const name = document.querySelector('.profile-name').textContent.replace(' (Demo)', '');
        const phone = document.querySelectorAll('.profile-meta')[0].textContent;
        const email = document.querySelectorAll('.profile-meta')[1].textContent;

        // Set inputs
        document.getElementById('edit-name').value = name;
        document.getElementById('edit-phone').value = phone;
        document.getElementById('edit-email').value = email;

        // Show modal
        document.getElementById('edit-profile-modal').classList.add('show');
    }

    function closeEditModal() {
        document.getElementById('edit-profile-modal').classList.remove('show');
    }

    function saveProfile(e) {
        e.preventDefault();
        
        const newName = document.getElementById('edit-name').value;
        const newPhone = document.getElementById('edit-phone').value;
        const newEmail = document.getElementById('edit-email').value;

        // Update UI
        document.querySelector('.profile-name').textContent = newName;
        document.querySelectorAll('.profile-meta')[0].textContent = newPhone;
        document.querySelectorAll('.profile-meta')[1].textContent = newEmail;

        closeEditModal();
    }

    // Change Password Logic
    function openChangePasswordModal() {
        document.getElementById('change-password-form').reset();
        document.getElementById('change-password-modal').classList.add('show');
    }

    function closeChangePasswordModal() {
        document.getElementById('change-password-modal').classList.remove('show');
    }

    function savePassword(e) {
        e.preventDefault();
        const current = document.getElementById('current-pass').value;
        const newPass = document.getElementById('new-pass').value;
        const confirmPass = document.getElementById('confirm-pass').value;

        if(newPass !== confirmPass) {
            alert("New passwords do not match!");
            return;
        }

        if(newPass.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        // Mock API call
        alert("Password updated successfully!");
        closeChangePasswordModal();
    }

    // Window Click to close modals
    window.onclick = function(event) {
        const editModal = document.getElementById('edit-profile-modal');
        const addrModal = document.getElementById('address-modal');
        const passModal = document.getElementById('change-password-modal');
        
        if (event.target == editModal) closeEditModal();
        if (event.target == addrModal) closeAddressModal();
        if (event.target == passModal) closeChangePasswordModal();
    }

    // Address Logic
    let addresses = [
        { 
            id: 1, 
            name: 'Sujay (Demo)',
            phone: '+91 98765 43210',
            line1: 'Flat 402, Sai Heights',
            line2: 'Madhapur',
            city: 'Hyderabad',
            pincode: '500081',
            type: 'Home' 
        }
    ];

    function openAddressModal() {
        renderAddressList();
        toggleAddressForm(false);
        document.getElementById('address-modal').classList.add('show');
    }

    function closeAddressModal() {
        document.getElementById('address-modal').classList.remove('show');
    }

    function toggleAddressForm(show) {
        document.getElementById('address-list-view').style.display = show ? 'none' : 'block';
        document.getElementById('add-address-form').style.display = show ? 'block' : 'none';
        if(show) {
            // Reset form when opening
            document.getElementById('add-address-form').reset();
            // Reset type selection to Home
            document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('.type-btn input[value="Home"]').closest('label').classList.add('active');
        }
    }

    function renderAddressList() {
        const container = document.getElementById('address-list-container');
        container.innerHTML = addresses.map(addr => `
            <div class="address-item">
                <div class="addr-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div class="addr-details">
                    <span class="addr-label">${addr.type}</span>
                    <span class="addr-name" style="font-weight: 700; font-size: 14px; margin-bottom: 2px;">${addr.name}</span>
                    <span class="addr-text" style="font-size: 13px; color: #64748b;">
                        ${addr.line1}, ${addr.line2}<br>
                        ${addr.city} - ${addr.pincode}<br>
                        Phone: ${addr.phone}
                    </span>
                </div>
            </div>
        `).join('');
    }

    function selectType(element) {
        document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');
         // The radio button inside is automatically checked by browser click behavior on label, 
         // but since we onclick the label, we can also manually ensure it if needed, 
         // but HTML default handles label-input interaction.
    }

    function saveNewAddress(e) {
        e.preventDefault();
        
        const name = document.getElementById('new-name').value;
        const phone = document.getElementById('new-phone').value;
        const line1 = document.getElementById('new-line1').value;
        const line2 = document.getElementById('new-line2').value;
        const pincode = document.getElementById('new-pincode').value;
        const city = document.getElementById('new-city').value;
        const type = document.querySelector('input[name="addr-type"]:checked').value;

        addresses.push({ 
            id: Date.now(), 
            name, phone, line1, line2, pincode, city, type 
        });
        
        // Go back to list
        toggleAddressForm(false);
        renderAddressList();
    }
    </script>
</body>
</html>
