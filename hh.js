const form = document.querySelector('#logoform');
const brandInput = document.querySelector('input[name="brandname"]');
const colorInput = document.querySelector('input[name="color"]');
const fontSizeInput = document.querySelector('input[name="fontsize"]');
const results = document.querySelector('#results');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    const newLogo = logobuilder(
        brandInput.value,
        colorInput.value,
        fontSizeInput.value
    );

    results.appendChild(newLogo); // Append the new logo to results
});

function logobuilder(text, color, size) {
    const logo = document.createElement('h1');
    logo.innerText = text; // Set the logo text
    logo.style.color = color; // Set the logo color
    logo.style.fontSize = size + 'px'; // Set the logo font size
    return logo; // Return the created logo element
}
