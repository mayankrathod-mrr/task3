document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();
        const isValid = validateForm();
        if (isValid) {
            document.getElementById('successMessage').textContent = "Thank you for your submission!";
            form.reset();
        }
    });

    function validateForm() {
        let valid = true;

        // Name validation
        const name = document.getElementById('name').value;
        if (!/^[a-zA-Z]+$/.test(name)) {
            showError('nameError', 'Name must contain only letters.');
            valid = false;
        }

        // Email validation
        const email = document.getElementById('email').value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError('emailError', 'Please enter a valid email address.');
            valid = false;
        }

        // Phone Number validation
        const phone = document.getElementById('phone').value;
        if (!/^\d+$/.test(phone)) {
            showError('phoneError', 'Phone number must contain only digits.');
            valid = false;
        }

        // Date of Birth validation
        const dob = document.getElementById('dob').value;
        if (!dob) {
            showError('dobError', 'Please enter a valid date.');
            valid = false;
        }

        // Gender validation
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            showError('genderError', 'Please select a gender.');
            valid = false;
        }

        // Country validation
        const country = document.getElementById('country').value;
        if (!country) {
            showError('countryError', 'Please select a country.');
            valid = false;
        }

        // Comments validation
        const comments = document.getElementById('comments').value;
        if (comments.length > 500) {
            showError('commentsError', 'Comments must be less than 500 characters.');
            valid = false;
        }

        // Agreement validation
        const agreement = document.getElementById('agreement').checked;
        if (!agreement) {
            showError('agreementError', 'You must agree to the terms and conditions.');
            valid = false;
        }

        return valid;
    }

    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.textContent = '');
        document.getElementById('successMessage').textContent = '';
    }
});