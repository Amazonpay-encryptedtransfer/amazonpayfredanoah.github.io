window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Simulate a delay to show the preloader (3 seconds)
    setTimeout(() => {
        preloader.style.display = 'none';
        content.classList.remove('hidden');
    }, 3000);
});

function navigateToNextPage() {
    window.location.href = "transaction.html";  // Redirect to the next page
}