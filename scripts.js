
// Función para filtros en la tienda
document.getElementById('country-filter').addEventListener('change', filterProducts);
document.getElementById('roast-filter').addEventListener('change', filterProducts);

function filterProducts() {
    const country = document.getElementById('country-filter').value;
    const roast = document.getElementById('roast-filter').value;
    const products = document.querySelectorAll('.shop-products .product-item');
    products.forEach(product => {
        const productCountry = product.getAttribute('data-country');
        const productRoast = product.getAttribute('data-roast');
        if ((country === 'all' || country === productCountry) &&
            (roast === 'all' || roast === productRoast)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function renderShopProducts() {
    const shopProducts = [
        { id: 'shop1', title: 'Café Colombia 250g', country: 'Colombia', roast: 'medio', price: '€6.99', image: 'cafe_colombia.svg' },
        { id: 'shop2', title: 'Café Etiopía 500g', country: 'Etiopía', roast: 'ligero', price: '€12.50', image: 'cafe_etiopia.svg' }
    ];
    const shopProductsContainer = document.querySelector('.shop-products');
    shopProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.setAttribute('data-country', product.country);
        productElement.setAttribute('data-roast', product.roast);
        productElement.innerHTML = `<img src="${product.image}" alt="${product.title}">
                                    <h3>${product.title}</h3>
                                    <p class="price">${product.price}</p>`;
        shopProductsContainer.appendChild(productElement);
    });
}
renderShopProducts();
