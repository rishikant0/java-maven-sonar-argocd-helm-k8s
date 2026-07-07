let cart = [];


// ================= ADD TO CART =================

function addToCart(name, price) {

    const product = {
        name: name,
        price: price
    };

    cart.push(product);

    updateCart();

    showNotification(name + " added to cart!");
}


// ================= UPDATE CART =================

function updateCart() {

    const cartCount =
        document.getElementById("cart-count");

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    // Update cart number
    cartCount.textContent = cart.length;


    // Empty cart
    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty 🛒
            </p>
        `;

        cartTotal.textContent = "0";

        return;
    }


    // Show products
    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;


        const cartItem =
            document.createElement("div");


        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div>
                <h4>${item.name}</h4>

                <p>
                    ₹${item.price.toLocaleString("en-IN")}
                </p>
            </div>

            <button
                class="remove-btn"
                onclick="removeFromCart(${index})"
            >
                ✕
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.textContent =
        total.toLocaleString("en-IN");

}


// ================= REMOVE PRODUCT =================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// ================= OPEN / CLOSE CART =================

function toggleCart() {

    const sidebar =
        document.getElementById("cart-sidebar");

    const overlay =
        document.getElementById("cart-overlay");


    sidebar.classList.toggle("active");

    overlay.classList.toggle("active");

}


// ================= SUBSCRIBE =================

function subscribe() {

    const emailInput =
        document.getElementById("email");


    const email =
        emailInput.value.trim();


    if (email === "") {

        alert(
            "Please enter your email address."
        );

        return;

    }


    if (!email.includes("@")) {

        alert(
            "Please enter a valid email address."
        );

        return;

    }


    alert(
        "Thank you for subscribing! 🎉"
    );


    emailInput.value = "";

}


// ================= NOTIFICATION =================

function showNotification(message) {

    const notification =
        document.createElement("div");


    notification.textContent = "✓ " + message;


    notification.style.position = "fixed";
    notification.style.bottom = "25px";
    notification.style.left = "50%";
    notification.style.transform =
        "translateX(-50%)";

    notification.style.background = "#111827";
    notification.style.color = "white";

    notification.style.padding =
        "14px 25px";

    notification.style.borderRadius =
        "8px";

    notification.style.zIndex =
        "3000";

    notification.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.2)";


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.remove();

    }, 2200);

}
