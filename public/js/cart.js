function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    const emptyMsg = document.getElementById('empty-cart-msg');
    const totalPrice = document.getElementById('total-price');

    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartSummary.style.display = 'none';
        emptyMsg.style.display = 'block';
        return;
    }

    emptyMsg.style.display = 'none';
    cartSummary.style.display = 'block';

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div class="item-actions">
                <button class="btn" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    totalPrice.innerText = total.toFixed(2);
}

async function checkout() {
    const token = getToken();
    if (!token) {
        alert('Please login to checkout');
        window.location.href = 'auth.html';
        return;
    }

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    try {
        const response = await fetch(`${API_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ items: cart, total })
        });

        if (response.ok) {
            alert('Order placed successfully!');
            cart = [];
            saveCart();
            updateCartCount();
            window.location.href = 'index.html';
        } else {
            const data = await response.json();
            alert(data.message || 'Checkout failed');
        }
    } catch (error) {
        alert('Checkout failed');
    }
}

document.addEventListener('DOMContentLoaded', renderCart);
