// Prices for each box type
const prices = {
    1: 10.00,
    2: 18.00,
    3: 24.00
};

// Update the total price based on selected unit
function updatePrice() {
    const selectedUnit = document.querySelector('input[name="box-select"]:checked').id;
    const unitNumber = selectedUnit.replace('unit', '');
    let totalPrice = prices[unitNumber];
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)} USD`;
}

// Function to simulate adding to cart
function addToCart() {
    alert('Item added to cart!');
}

// Event listeners for dynamic price update
document.querySelectorAll('input[name="box-select"]').forEach(radio => {
    radio.addEventListener('change', updatePrice);
});

// Initial price update
updatePrice();
