// Search filter functionality
function filterProducts() {
    let input = document.getElementById('search').value.toLowerCase();
    let products = document.getElementsByClassName('product');
    
    for (let product of products) {
        let name = product.getElementsByTagName('h3')[0].textContent.toLowerCase();
        if (name.includes(input)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    }
}

// Sorting functionality
function sortProducts() {
    let sortOption = document.getElementById('sort').value;
    let productList = document.querySelector('.product-list');
    let products = Array.from(productList.getElementsByClassName('product'));
    
    if (sortOption === 'priceLowToHigh') {
        products.sort((a, b) => {
            return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
        });
    } else if (sortOption === 'priceHighToLow') {
        products.sort((a, b) => {
            return parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'));
        });
    }

    // Reorder products
    for (let product of products) {
        productList.appendChild(product);
    }
}
