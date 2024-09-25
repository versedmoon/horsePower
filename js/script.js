// Define an array of colors
const colors = ['#8BC34A', '#FF9800', '#FFEB3B', '#A5D6A7', '#9575CD', '#00BCD4', '#E57373', '#4DD0E1'];

// Get all elements with the class 'media-heading'
const elements = document.querySelectorAll('.media-heading');

// Loop through each element and assign a different background color
elements.forEach((element, index) => {
    element.querySelector('b').style.backgroundColor = colors[index]; // Apply color from the array
    element.querySelector('b').style.padding = '5px'; // Add padding for spacing
    element.querySelector('b').style.borderRadius = '3px'; // Optional: Rounded corners
});
