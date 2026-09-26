ddconst products = [
  {
    id: 1,
    name: "Dumbbell Set",
    price: 1500,
    category: "Dumbbells",
    image: "images/Dumbbels.jpg",
  },
  {
    id: 2,
    name: "Olympic Barbbell",
    price: 3000,
    category: "Barbbells",
    image: "images/Barbells.2.jpg",
  },
  {
    id: 3,
    name: "Gym Bench",
    price: 5000,
    category: "Benches",
    image: "images/Benches.jpg",
  },
  {
    id: 4,
    name: "Treadmill",
    price: 18000,
    category: "Cardio",
    image: "images/Cardio.jpg",
  },
  {
    id: 5,
    name: "Squat Rack",
    price: 12000,
    category: "Machines",
    image: "images/hero-gym.webp",
  },
  {
    id: 6,
    name: "Gym Gloves",
    price: 800,
    category: "Accessories",
    image: "images/8bc5104979e18b0835c60be1b18ebe18.jpg_720x720q80.jpg",
  },
];

const productsContainer = document.getElementById("productsContainer");
const cartCount = document.getElementById("cartCount");
const cartButton = document.getElementById("cartButton");
const cartPanel = document.getElementById("cartPanel");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// Display Products
function displayProducts() {
  productsContainer.innerHTML = products
    .map((product) => {
      return `
        <div class=product-card>
        <img src="${product.image}"alt="${product.name}" class="product-image">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <strong>${product.price}ETB</strong>
        <button onclick="addToCart(${product.id})"> Add to Cart</button>
        </div>
        `;
    })
    .join("");
}
displayProducts();

// cart
let cart = [];
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  const existingItem = cart.find((item) => item.product.id === productId);
  if ((existingItem = cart)) {
    existingItem.quantity++;
  } else {
    cart.push({
      product: product,
      quantity: 1,
    });
  }
  updateCart();
}
// function addToCart(productId) {
//   const product = products.find((product) => product.id === productId);
//   cart.push(product);
//   // cart Count
//   // cartCount.textContent = cart.length;
//   updateCart();
// }

// Update Cart
// function updateCart() {
//   if (!cartItems) return;
//   cartItems.innerHTML = cart
//     .map((product, index) => {
//       return `
//     <div class="cart-item">
//     <image src="${product.image}"
//     alt="${product.name}"
//     class="cart-item-image">
//     <div class="cart-item-info"
//     <h4>${product.name}</h4>
//     <P>${product.price}ETB</p>
//     <button onclick="removeFromCart(${index})">remove
//     </button>
//     </div>
//     </div>`;
//     })
//     .join("");
//   const total = cart.reduce((sum, product) => sum + product.price, 0);
//   cartTotal.textContent = total;
//   cartCount.textContent = cart.length;
// }
function updateCart() {
  cartItems.innerHTML = cart.map((item, index) => {
    return `
    <div class=""cart-item>
    <img src="${item.product.image}"alt="${item.product.name}"class="cart-item-image">
    <div class="cart-item-info">
    <h4>${item.product.name}</h4>
    <p>${item.product.price}</p>
    <div class="quantity-controls>
    <button onclick="decreaseQuantity(${index})">-
    </button>
    <span>${item.quantity}</span>
    <button onclick="increaseQuantity(${index})">+
    </button>
    </div>
    <button onclick="removeFromCart(${index})">Remove</button>
    </div>
    </div>
    </div>`;
  }).join("");
  const total=cart.reduce((sum,item)=>sum+(item.product.price*item.quantity),0)
  cartTotal.textContent=total;
  cartCount.textContent=cart.reduce((sum,item)=>sum+item.quantity,0)
}
cartButton.addEventListener("click", () => {
  cartPanel.classList.add("active");
});
function increaseQuantity(index){
  cart[index].quantity++;
  updateCart()
}
function decreaseQuantity(index){
  if(cart[index].quantity>1){
    cart[index].quantity--;
  }
  updateCart()
}
// remove Product
function removeFromCart(Index) {
  cart.splice(Index, 1);
  updateCart();
}
closeCart.addEventListener("click", () => {
  cartPanel.classList.remove("active");
});
