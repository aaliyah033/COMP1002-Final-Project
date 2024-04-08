// Function to change the image based on the selected color option
function changeImage(colorOption) {
    // Get the parent phone card element
    var phoneCard = colorOption.closest('.phone-card');

    // Get the image element inside the phone card
    var image = phoneCard.querySelector('img');

    // Get the data-images attribute value which contains image options
    var imageOptions = image.getAttribute('data-images').split(', ');

    // Get the index of the selected color option
    var colorIndex = Array.from(phoneCard.querySelectorAll('.color-option')).indexOf(colorOption);

    // Update the image src based on the color index
    image.src = imageOptions[colorIndex];
}

// Set default image source when the page loads
window.onload = function() {
    // Get the first phone card
    var defaultPhoneCard = document.querySelector('.phone-card');

    // Get the default image source from the data-images attribute
    var defaultImage = defaultPhoneCard.getAttribute('data-images').split(', ')[0];

    // Set the default image source
    defaultPhoneCard.querySelector('img').src = defaultImage;
};