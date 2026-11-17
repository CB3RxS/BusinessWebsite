// contact.js - form validation for the Contact page only

const form = document.getElementById('contact-form');

if (form) {
    const successBox = document.getElementById('form-success');

    // ---------- 1. CHECK FUNCTIONS ----------
    // Each one receives what the user typed and returns an error message,
    // or an empty string '' when the value is fine.

    function checkName(value) {
        if (value === '') return 'Please enter your full name.';
        if (value.length < 2) return 'Your name must be at least 2 characters.';
        return '';
    }

    function checkEmail(value) {
        if (value === '') return 'Please enter your email.';
        // something@something.something, with no spaces
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) return 'Please enter a valid email, like name@gmail.com.';
        return '';
    }

    function checkPhone(value) {
        // Optional: an empty phone is fine
        const digits = value.replace(/[\s-]/g, '');   // ignore spaces and dashes
        if (digits === '') return '';
        if (!/^09\d{9}$/.test(digits)) return 'Use an 11-digit number starting with 09, like 09123456789.';
        return '';
    }

    function checkAge(value) {
        // Optional: an empty age is fine
        if (value === '') return '';
        const age = Number(value);
        if (!Number.isInteger(age) || age < 1 || age > 120) return 'Age must be a whole number from 1 to 120.';
        return '';
    }

    function checkSubject(value) {
        if (value === '') return 'Please choose a subject.';
        return '';
    }

    function checkMessage(value) {
        if (value === '') return 'Please write a message.';
        if (value.length < 10) return 'Your message must be at least 10 characters.';
        return '';
    }

    // Connect each field's id to its check function
    const checks = {
        'full-name': checkName,
        'email': checkEmail,
        'phone': checkPhone,
        'age': checkAge,
        'option': checkSubject,
        'message': checkMessage
    };

    // ---------- 2. SHOW / CLEAR ERRORS ----------

    function showError(input, message) {
        input.parentElement.querySelector('.error-message').textContent = message;
        input.classList.add('invalid');
        input.setAttribute('aria-invalid', 'true');
    }

    function clearError(input) {
        input.parentElement.querySelector('.error-message').textContent = '';
        input.classList.remove('invalid');
        input.removeAttribute('aria-invalid');
    }

    // Check one field; returns true if it is OK
    function validateField(input) {
        const message = checks[input.id](input.value.trim());
        if (message !== '') {
            showError(input, message);
            return false;
        }
        clearError(input);
        return true;
    }

    // ---------- 3. EVENTS ----------

    // Live feedback: check a field when the user leaves it,
    // and re-check as they type once it has been marked wrong
    for (const id in checks) {
        const input = document.getElementById(id);
        input.addEventListener('blur', function () {
            validateField(input);
        });
        input.addEventListener('input', function () {
            if (input.classList.contains('invalid')) {
                validateField(input);
            }
        });
    }

    // On submit: stop the default, check everything
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        successBox.hidden = true;

        let firstInvalid = null;
        for (const id in checks) {
            const input = document.getElementById(id);
            if (!validateField(input) && firstInvalid === null) {
                firstInvalid = input;
            }
        }

        if (firstInvalid !== null) {
            firstInvalid.focus();   // jump to the first problem
            return;                 // stop here, don't show success
        }

        // Everything is valid. Nothing is actually sent (no backend).
        form.reset();               // reset BEFORE showing success, because reset hides it
        successBox.textContent = 'Thank you! Your form passed validation. (Demo only: nothing was sent to the cafe.)';
        successBox.hidden = false;
    });

    // Reset button: also clear errors and the success message
    form.addEventListener('reset', function () {
        for (const id in checks) {
            clearError(document.getElementById(id));
        }
        successBox.hidden = true;
    });
}