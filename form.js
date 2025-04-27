document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let isValid = true;

    
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters and contain at least one uppercase letter and one number.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    
    let confirmPassword = document.getElementById("confirmPassword").value;
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = "Passwords do not match.";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    if (isValid) {
        document.getElementById("myForm").submit();
    }
});
