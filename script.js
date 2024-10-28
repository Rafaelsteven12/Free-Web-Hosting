// Get elements
const popupForm = document.getElementById('popupForm');
const closeBtn = document.getElementById('closeBtn');

// Function to display the pop-up only once after the page loads
window.addEventListener('load', function() {
    // Check if pop-up has been shown during the session
    if (!sessionStorage.getItem('popupDisplayed')) {
        setTimeout(function() {
            popupForm.style.display = 'flex';
            // Set a flag in session storage to prevent showing the pop-up again
            sessionStorage.setItem('popupDisplayed', 'true');
        }, 3000); // Show pop-up after 10 seconds
    }
});

// Close popup when close button is clicked
closeBtn.addEventListener('click', function() {
    popupForm.style.display = 'none';
});

// Close popup if user clicks outside the form
window.addEventListener('click', function(event) {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});
