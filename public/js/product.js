async function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        window.location.href = 'index.html';
        return;
    }

    try {
        const response = await fetch(`${API_URL}/products/${productId}`);
        const product = await response.json();
        
        const detailContainer = document.getElementById('product-detail');
        detailContainer.innerHTML = `
            <div class="product-detail-card" style="display: flex; gap: 2rem; background: #fff; padding: 2rem; border-radius: 8px;">
                <img src="${product.image}" alt="${product.name}" style="width: 400px; height: 400px; object-fit: cover; border-radius: 8px;">
                <div class="info">
                    <h1>${product.name}</h1>
                    <p class="category" style="color: #888; margin-bottom: 1rem;">${product.category}</p>
                    <p class="description" style="margin-bottom: 1rem;">${product.description}</p>
                    <p class="price" style="font-size: 2rem; color: #e67e22; font-weight: bold; margin-bottom: 1rem;">$${product.price.toFixed(2)}</p>
                    <p class="stock" style="margin-bottom: 1rem;">In Stock: ${product.stock}</p>
                    <button class="btn btn-primary" onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
                    <a href="index.html" class="btn">Back to Products</a>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error loading product details:', error);
        document.getElementById('product-detail').innerHTML = '<p>Error loading product details.</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadProductDetail);
