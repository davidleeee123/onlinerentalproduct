// Handle Login
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert('Login successful!');
        // You can add real authentication logic here (e.g., check against a database)
    } else {
        alert('Please enter both email and password.');
    }
});

// Handle Signup
document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
        alert('Sign up successful!');
        // You can add real sign-up logic here (e.g., save to a database)
    } else {
        alert('Please fill out all fields.');
    }
});
