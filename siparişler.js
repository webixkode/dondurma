document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let iceCreamType = document.getElementById('ice-cream-type').value;
    let size = document.getElementById('size').value;
    let quantity = document.getElementById('quantity').value;
    let totalPrice = calculateTotalPrice(size, quantity);

    // Update the summary
    document.getElementById('ice-cream-summary').textContent = iceCreamType;
    document.getElementById('size-summary').textContent = size;
    document.getElementById('quantity-summary').textContent = quantity;
    document.getElementById('total-price').textContent = totalPrice;
});

function calculateTotalPrice(size, quantity) {
    let pricePerItem = 10; // Default price (can vary based on size or ice cream type)
    if (size === 'medium') pricePerItem = 12;
    if (size === 'large') pricePerItem = 15;

    return pricePerItem * quantity + '₺';
}
