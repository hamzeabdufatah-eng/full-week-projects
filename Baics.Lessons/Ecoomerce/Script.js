// =============================
// PRODUCTS
// =============================

const products = [
  {
    id: 1,
    name: "Dumbbell",
    price: 1500,
  },

  {
    id: 2,
    name: "Barbell",
    price: 3000,
  },

  {
    id: 3,
    name: "Gym Bench",
    price: 5000,
  },

  {
    id: 4,
    name: "Mass Gainer",
    price: 13000,
  },
  {
    id:5,
    name:"Vanila Protien",
    price:8000,
  },
  {
    id:6,
    name:"Magnesium",
    price:8500,
  },
  {
    id:7,
    name:"Omega 3",
    price:9000,
  },
  {
    id:8,
    name:"Vitamin C",
    price:6000,
  },
  {
    id:9,
    name:"Licorice",
    price:7000,
  },
  {
    id:10,
    name:"Caffiene",
    price:1000
  },
];

// =============================
// CART
// =============================

let cart = [];

// =============================
// HTML ELEMENTS.
// =============================

const productsContainer = document.getElementById("products");

const cartItems = document.getElementById("cartItems");

const cartCount = document.getElementById("cartCount");

const cartTotal = document.getElementById("cartTotal");

const cartButton = document.getElementById("cartButton");

const cartBox = document.getElementById("cart");

const closeCart = document.getElementById("closeCart");

const searchInput = document.getElementById("searchInput");

// =============================
// SHOW PRODUCTS
// =============================

function displayProducts(productList) {
  productsContainer.innerHTML = productList
    .map((product)=> {
      return `
            <div class="product">

                <h3>${product.name}</h3>

                <p>
                    ${product.price} ETB
                </p>

                <button
                    class="addButton"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>
        `;
    })
     .join("");
}

// =============================
// ADD TO CART
// =============================

function addToCart(productId) {
  const product = products.find((product) => product.id === productId);

  cart.push(product);

  updateCart();
}

// =============================
// UPDATE CART
// =============================

function updateCart() {
  cartItems.innerHTML = cart
    .map((product, index) => {
      return `
            <div class="cartItem">

                <h4>
                    ${product.name}
                </h4>

                <p>
                    ${product.price} ETB
                </p>

                <button
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            </div>
        `;
    })
    .join("");

  // Cart count

  cartCount.textContent = cart.length;

  // Calculate total

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  cartTotal.textContent = total;
}

// =============================
// REMOVE FROM CART
// =============================

function removeFromCart(index) {
  cart.splice(index, 1);

  updateCart();
}

// =============================
// OPEN CART
// =============================

cartButton.addEventListener("click", () => {
  cartBox.classList.add("active");
});

// =============================
// CLOSE CART
// =============================

closeCart.addEventListener("click", () => {
  cartBox.classList.remove("active");
});

// =============================
// SEARCH
// =============================

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText),
  );

  displayProducts(filteredProducts);
});

// =============================
// CHECKOUT
// =============================

document.getElementById("checkoutButton").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");

    return;
  }

  alert("Order placed successfully!");

  cart = [];

  updateCart();
});

// =============================
// START WEBSITE
// =============================

displayProducts(products);
