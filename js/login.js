let email = document.getElementById('input_email');
let password = document.getElementById('input_password');
let loginButton = document.getElementById('login_submit');

loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting (if inside a form element)

    let enteredEmail = email.value;
    let enteredPassword = password.value;

    if (enteredEmail === 'admin@admin.com' && enteredPassword === '123456') {
        alert('Login successful');
    } else {
        alert('Invalid username or password');
    }
});
