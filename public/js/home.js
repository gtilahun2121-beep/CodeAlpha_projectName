let allProducts = [];

async function loadProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        allProducts = await response.json();
        renderProducts(allProducts);
    } catch (error) {
        console.error('Error loading products:', error);
        const productList = document.getElementById('product-list');
        if (productList) {
            productList.innerHTML = '<p>Error loading products. Please try again later.</p>';
        }
    }
}

function renderProducts(products) {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    if (products.length === 0) {
        productList.innerHTML = '<p>No products found.</p>';
        return;
    }

    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="btn btn-primary" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
                <a href="product.html?id=${product._id}" class="btn">Details</a>
            </div>
        </div>
    `).join('');
}

function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = allProducts.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    renderProducts(filtered);
}

// Allow pressing Enter to search
document.getElementById('search-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

document.addEventListener('DOMContentLoaded', loadProducts);
