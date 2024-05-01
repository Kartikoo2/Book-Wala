// Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.book button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const cartCount = document.getElementById('cart-count');
        cartCount.innerText = parseInt(cartCount.innerText) + 1;

        // Add cart item to the cart-items table
        const cartItem = document.createElement('tr');
        cartItem.innerHTML = `
            <td>${button.parentElement.querySelector('h3').innerText}</td>
            <td>${button.parentElement.querySelector('p:nth-child(3)').innerText}</td>
            <td>1</td>
            <td><button class="remove-button">Remove</button></td>
        `;
        document.querySelector('#cart-items').appendChild(cartItem);

        // Update cart total
        const cartTotal = document.getElementById('cart-total');
        cartTotal.innerText = parseFloat(cartTotal.innerText) + parseFloat(button.parentElement.querySelector('p:nth-child(3)').innerText);

        // Add remove button functionality
        const removeButton = cartItem.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            cartItem.remove();
            cartTotal.innerText = parseFloat(cartTotal.innerText) - parseFloat(button.parentElement.querySelector('p:nth-child(3)').innerText);
            cartCount.innerText = parseInt(cartCount.innerText) - 1;
        });
    });
});

// Checkout button functionality
const checkoutButton = document.getElementById('checkout-button');

checkoutButton.addEventListener('click', () => {
    // Add checkout functionality here
});