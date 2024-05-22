document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const resumeInput = document.getElementById('resume');
    const phoneInput = document.getElementById('phone');
    const phonePattern = /^\d{10}$/; // Regular expression to match 10 digits only

    form.addEventListener('submit', function (event) {
        // Validate password
        const password = passwordInput.value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password)) {
            alert('Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long.');
            event.preventDefault();
            return;
        }

        // Validate resume file type
        const resumeFileType = resumeInput.value.split('.').pop().toLowerCase();
        if (resumeFileType !== 'pdf' && resumeFileType !== 'doc' && resumeFileType !== 'docx') {
            alert('Please upload a PDF or DOC file for your resume.');
            event.preventDefault();
            return;
        }

        // Validate phone number
        const phoneNumber = phoneInput.value;
        if (!phonePattern.test(phoneNumber)) {
            alert('Phone number should be 10 digits long and contain only numbers.');
            event.preventDefault();
            return;
        }

        // window.location.href = 'signUplanding.html';

        // If all validations pass, the form will submit

        // If validation passes, navigate to Landing.html
        document.getElementById('signup-form').action = 'signUplanding.html';
        document.getElementById('signup-form').method = 'GET';

        if (!isValid) {
            event.preventDefault();
        }
    });
});
