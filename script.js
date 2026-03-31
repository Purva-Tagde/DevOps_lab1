<<<<<<< HEAD
function submitForm() {
    let name = document.getElementById("name").value;
    alert("Hello " + name + ", form submitted!");
=======
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let department = document.getElementById("department").value;
    let feedback = document.getElementById("feedback").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');

    // Name check
    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    // Email check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Mobile check
    if (!/^\d{10}$/.test(mobile)) {
        alert("Mobile number must be exactly 10 digits");
        return false;
    }

    // Password check
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // Gender check
    if (!gender) {
        alert("Please select gender");
        return false;
    }

    // Department check
    if (department === "") {
        alert("Please select department");
        return false;
    }

    // Feedback check (minimum 10 words)
    let wordCount = feedback.split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount < 10) {
        alert("Feedback must contain at least 10 words");
        return false;
    }

    // Success
    alert("Form Submitted Successfully!");
    return true;
>>>>>>> e013c9fbffcf340fd2fe6fc57b6f1fd52260f16a
}