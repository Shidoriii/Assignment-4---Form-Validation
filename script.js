document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = parseInt(document.getElementById("age").value);
    let postalCode = document.getElementById("postalCode").value.trim();
    let province = document.getElementById("province").value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let postalCodeRegex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!name || !address || !email || !password || !confirmPassword || isNaN(age) || !postalCode || !province) {
        alert("All fields are required.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        return;
    }

    if (!postalCodeRegex.test(postalCode)) {
        alert("Invalid postal code format. Use A0A0A0.");
        return;
    }

    if (!["QC", "ON", "MN", "SK", "AB", "BC"].includes(province)) {
        alert("Invalid province selection.");
        return;
    }

    if (age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters long and contain at least one uppercase letter and one number.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Thanks for registering with our website, your customer record was created successfully.");
});
