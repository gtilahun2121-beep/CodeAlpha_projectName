// API Base URL
const API_URL = '/api';

// Cart Logic
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
    }
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCartCount();
    alert('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    if (typeof renderCart === 'function') {
        renderCart();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Auth logic
function getToken() {
    return localStorage.getItem('token');
}

function setToken(token) {
    localStorage.setItem('token', token);
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    window.location.href = 'index.html';
}

function updateAuthUI() {
    const authLinks = document.getElementById('auth-links');
    const adminLink = document.getElementById('admin-link');
    const token = getToken();
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    if (token && authLinks) {
        authLinks.innerHTML = `
            <span>Welcome, ${username}</span>
            <a href="orders.html" style="margin-left: 1rem;">My Orders</a>
            <a href="#" onclick="logout()" style="margin-left: 1rem;">Logout</a>
        `;
        if (role === 'admin' && adminLink) {
            adminLink.style.display = 'block';
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateAuthUI();
});
