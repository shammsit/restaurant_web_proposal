let cart = [];
let total = 0;

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;

    document.getElementById("cartCount").innerText = cart.length;
    document.getElementById("totalPrice").innerText = total;

    let cartItems = document.getElementById("cartItems");
    let newItem = document.createElement("p");
    newItem.innerText = item + " - ₹" + price;
    cartItems.appendChild(newItem);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    scrollToSection("payment");
}

function fakePayment() {
    alert("Payment Successful! (Demo Mode)");
}