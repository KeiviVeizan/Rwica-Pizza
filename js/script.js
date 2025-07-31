// script.js
// JavaScript para dinamismo: carrito de compras simple

document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    const modal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const checkoutButton = document.getElementById('checkout');

    let cart = [];

    // Abrir modal al click en icono de carrito
    cartIcon.addEventListener('click', () => {
        modal.style.display = 'block';
        updateCartUI();
    });

    // Cerrar modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar modal al click fuera
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Añadir al carrito
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);
            cart.push({ name, price });
            updateCartCount();
        });
    });

    // Actualizar UI del carrito
    function updateCartUI() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Actualizar contador de carrito
    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Simular checkout (puedes integrar con API real)
    checkoutButton.addEventListener('click', () => {
        alert('Procediendo al pago... (Función simulada)');
        cart = [];
        updateCartUI();
        updateCartCount();
        modal.style.display = 'none';
    });
});