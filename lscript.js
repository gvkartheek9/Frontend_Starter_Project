document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const usernamePattern = /^[a-zA-Z0-9]+$/;

        if (!username) {
            alert('Please enter a username.');
            event.preventDefault();
            return;
        }

        if (!usernamePattern.test(username)) {
            alert('Username should not contain special characters or spaces.');
            event.preventDefault();
            return;
          }

          const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


        if (!password) {
            alert('Please enter a password.');
            event.preventDefault();
            return;
        }

        if (!passwordPattern.test(password)) {
            alert('Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            event.preventDefault();
            return;
          }
          console.log("login successful");
          window.location.href = 'landing.html';

        event.preventDefault();
    });
});
