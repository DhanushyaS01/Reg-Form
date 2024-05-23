document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Perform some basic validation
    if (!username || !email || !password) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate registration success
    alert('Registration successful!');
});