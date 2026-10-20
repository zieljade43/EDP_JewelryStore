let cartCount = 0;
let cartItems = [];

// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Golden Luxe Jewelry!");
});

// Add products to cart
function addToCart(productName) {
    cartCount++;

    cartItems.push(productName);

    document.getElementById("cart-count").textContent = cartCount;

    alert(productName + " added to your cart!");
}

// View cart
function showCart() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Your Shopping Cart:\n\n";

    cartItems.forEach(function (item, index) {
        message += (index + 1) + ". " + item + "\n";
    });

    message += "\nTotal items: " + cartCount;

    alert(message);
}
// Show or hide the Contact Us section
function showContact(event) {
    if (event) {
        event.preventDefault();
    }

    const contact = document.getElementById("contact");

    if (!contact) return;

    contact.classList.toggle("show-contact");

    if (contact.classList.contains("show-contact")) {
        contact.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
marker.bindPopup(`
    <div style="text-align:center;">
        <h3>💎 Golden Luxe Jewelry 💎</h3>
        <p>Luxury for the queen in you!</p>

        <img
            src="PASTE_YOUR_GIPHY_GIF_URL_HERE"
            alt="Rich girl lifestyle"
            style="width:180px; border-radius:10px;"
        >

        <p>✨ Shine like a millionaire! ✨</p>
    </div>
`);