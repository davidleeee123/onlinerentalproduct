// Sample product data
const products = [
    { id: 1, name: 'Camera', price: 50 },
    { id: 2, name: 'Drone', price: 100 },
    { id: 3, name: 'Laptop', price: 150 }
];

const cart = [];

// Display products
function displayProducts() {
    const productListing = document.getElementById('product-listing');
    productListing.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-card');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price} per day</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productListing.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} added to cart`);
}

// Logout function
function logout() {
    alert("Logged out");
    window.location.href = 'index.html';  // Redirect to login page
}

// Display products when page loads
window.onload = displayProducts;
