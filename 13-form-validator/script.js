
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailerror');
const passwordError = document.getElementById('passworderror');
const result = document.getElementById('result');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function showError(input, errorElement, message) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    errorElement.textContent = message;
    errorElement.style.visibility = 'visible';
    errorElement.style.opacity = '1';
}

function showSuccess(input, errorElement) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    errorElement.style.visibility = 'hidden';
    errorElement.style.opacity = '0';
}

function validateEmail() {
    if (emailRegex.test(email.value)) {
        showSuccess(email, emailError);
        return true;
    } else {
        showError(email, emailError, 'Enter a valid email address');
        return false;
    }
}

function validatePassword() {
    if (passwordRegex.test(password.value)) {
        showSuccess(password, passwordError);
        return true;
    } else {
        showError(password, passwordError, 'Min 8 chars, 1 uppercase, 1 special char');
        return false;
    }
}

email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
        result.textContent = "Form submitted successfully! ✨";
        result.style.color = "#10b981";
        result.classList.add('show');
        form.reset();
        [email, password].forEach(input => input.classList.remove('valid'));
    } else {
        result.textContent = "Please correct the errors above.";
        result.style.color = "#ef4444";
        result.classList.add('show');
    }
});