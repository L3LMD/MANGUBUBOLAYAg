// Prix simulés par produit
const productPrices = {
    "Produit 1": 10,
    "Produit 2": 15,
    "Produit 3": 20,
    "Produit 4": 12,
    "Produit 5": 18,
    
};

// Ajouter au panier
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(productName + " a été ajouté au panier !");
}

// Afficher les produits du panier
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<li>Votre panier est vide.</li>";
    } else {
        let total = 0;
        cart.forEach((item, index) => {
            let li = document.createElement('li');
            li.innerHTML = `${item} - ${productPrices[item]}£ <button onclick="removeFromCart(${index})">Supprimer</button>`;
            cartItems.appendChild(li);
            total += productPrices[item];
        });

        let totalElement = document.createElement('p');
        totalElement.innerHTML = `<strong>Total : ${total}€</strong>`;
        cartItems.appendChild(totalElement);

        let clearButton = document.createElement('button');
        clearButton.textContent = "Vider le panier";
        clearButton.onclick = clearCart;
        cartItems.appendChild(clearButton);
    }
}

// Supprimer un article du panier
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

// Vider tout le panier
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
    updateCartCount();
}

// Afficher le nombre d'articles dans la barre de navigation
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.length;
    const cartLink = document.getElementById('cart-link');
    if (cartLink) {
        cartLink.innerHTML = `Panier (${cartCount})`;
    }
}

// Initialiser
document.addEventListener('DOMContentLoaded', updateCartCount);
