// Product Data
const productData = {
  Laptops: {
    brands: ["Dell", "HP", "Apple", "Lenovo", "ASUS"],
    products: {
      Dell: [
        { id: 1, name: "Dell XPS 13", price: 89999, icon: "💻" },
        { id: 2, name: "Dell Inspiron 15", price: 54999, icon: "💻" },
        { id: 3, name: "Dell G15 Gaming", price: 119999, icon: "💻" },
      ],
      HP: [
        { id: 4, name: "HP Pavilion 15", price: 59999, icon: "💻" },
        { id: 5, name: "HP Envy 13", price: 79999, icon: "💻" },
        { id: 6, name: "HP Omen 15", price: 129999, icon: "💻" },
      ],
      Apple: [
        { id: 7, name: "MacBook Air M2", price: 119999, icon: "💻" },
        { id: 8, name: "MacBook Pro 14", price: 199999, icon: "💻" },
        { id: 9, name: "MacBook Pro 16", price: 249999, icon: "💻" },
      ],
      Lenovo: [
        { id: 10, name: "Lenovo ThinkPad E14", price: 64999, icon: "💻" },
        { id: 11, name: "Lenovo IdeaPad 5", price: 69999, icon: "💻" },
        { id: 12, name: "Lenovo Legion 5", price: 99999, icon: "💻" },
      ],
      ASUS: [
        { id: 13, name: "ASUS VivoBook 15", price: 54999, icon: "💻" },
        { id: 14, name: "ASUS ROG Zephyrus", price: 149999, icon: "💻" },
        { id: 15, name: "ASUS TUF Gaming", price: 109999, icon: "💻" },
      ],
    },
  },
  Mobiles: {
    brands: ["Apple", "Samsung", "OnePlus", "Xiaomi", "Realme"],
    products: {
      Apple: [
        { id: 16, name: "iPhone 15", price: 79999, icon: "📱" },
        { id: 17, name: "iPhone 15 Pro", price: 99999, icon: "📱" },
        { id: 18, name: "iPhone 15 Pro Max", price: 119999, icon: "📱" },
      ],
      Samsung: [
        { id: 19, name: "Galaxy S24", price: 79999, icon: "📱" },
        { id: 20, name: "Galaxy S24 Ultra", price: 129999, icon: "📱" },
        { id: 21, name: "Galaxy A54", price: 39999, icon: "📱" },
      ],
      OnePlus: [
        { id: 22, name: "OnePlus 12", price: 64999, icon: "📱" },
        { id: 23, name: "OnePlus 12 Pro", price: 79999, icon: "📱" },
        { id: 24, name: "OnePlus Nord", price: 29999, icon: "📱" },
      ],
      Xiaomi: [
        { id: 25, name: "Xiaomi 14", price: 59999, icon: "📱" },
        { id: 26, name: "Xiaomi 14 Ultra", price: 89999, icon: "📱" },
        { id: 27, name: "Xiaomi Redmi Note 13", price: 19999, icon: "📱" },
      ],
      Realme: [
        { id: 28, name: "Realme 12 Pro", price: 34999, icon: "📱" },
        { id: 29, name: "Realme GT 6", price: 49999, icon: "📱" },
        { id: 30, name: "Realme C65", price: 12999, icon: "📱" },
      ],
    },
  },
  Tablets: {
    brands: ["Apple", "Samsung", "Lenovo", "iPad"],
    products: {
      Apple: [
        { id: 31, name: "iPad Pro 12.9", price: 119999, icon: "📲" },
        { id: 32, name: "iPad Air", price: 69999, icon: "📲" },
        { id: 33, name: "iPad Mini", price: 49999, icon: "📲" },
      ],
      Samsung: [
        { id: 34, name: "Galaxy Tab S9", price: 89999, icon: "📲" },
        { id: 35, name: "Galaxy Tab S9 Ultra", price: 129999, icon: "📲" },
        { id: 36, name: "Galaxy Tab A8", price: 19999, icon: "📲" },
      ],
      Lenovo: [
        { id: 37, name: "Lenovo Tab P12", price: 49999, icon: "📲" },
        { id: 38, name: "Lenovo Tab M10", price: 19999, icon: "📲" },
        { id: 39, name: "Lenovo Yoga Tab", price: 39999, icon: "📲" },
      ],
      iPad: [
        { id: 40, name: "iPad 10th Gen", price: 39999, icon: "📲" },
        { id: 41, name: "iPad Pro 11", price: 99999, icon: "📲" },
        { id: 42, name: "iPad Air 5", price: 79999, icon: "📲" },
      ],
    },
  },
  Monitors: {
    brands: ["Dell", "LG", "ASUS", "BenQ", "Samsung"],
    products: {
      Dell: [
        { id: 43, name: "Dell UltraSharp 27", price: 34999, icon: "🖥️" },
        { id: 44, name: "Dell S2721DGF", price: 29999, icon: "🖥️" },
        { id: 45, name: "Dell P2423DE", price: 24999, icon: "🖥️" },
      ],
      LG: [
        { id: 46, name: "LG 27UP550", price: 39999, icon: "🖥️" },
        { id: 47, name: "LG 27GP850", price: 34999, icon: "🖥️" },
        { id: 48, name: "LG 24UP550", price: 29999, icon: "🖥️" },
      ],
      ASUS: [
        { id: 49, name: "ASUS PA279CV", price: 44999, icon: "🖥️" },
        { id: 50, name: "ASUS VP28UQG", price: 39999, icon: "🖥️" },
        { id: 51, name: "ASUS VA24EHE", price: 14999, icon: "🖥️" },
      ],
      BenQ: [
        { id: 52, name: "BenQ PD2700U", price: 49999, icon: "🖥️" },
        { id: 53, name: "BenQ EW2780U", price: 39999, icon: "🖥️" },
        { id: 54, name: "BenQ GW2480", price: 12999, icon: "🖥️" },
      ],
      Samsung: [
        { id: 55, name: "Samsung M7", price: 54999, icon: "🖥️" },
        { id: 56, name: "Samsung M5", price: 39999, icon: "🖥️" },
        { id: 57, name: "Samsung LU28E590DS", price: 34999, icon: "🖥️" },
      ],
    },
  },
  Mice: {
    brands: ["Logitech", "Razer", "SteelSeries", "Corsair", "HyperX"],
    products: {
      Logitech: [
        { id: 58, name: "Logitech MX Master 3S", price: 9999, icon: "🖱️" },
        { id: 59, name: "Logitech G Pro X", price: 7999, icon: "🖱️" },
        { id: 60, name: "Logitech M705", price: 2999, icon: "🖱️" },
      ],
      Razer: [
        { id: 61, name: "Razer DeathAdder V3", price: 8999, icon: "🖱️" },
        { id: 62, name: "Razer Basilisk V3", price: 7999, icon: "🖱️" },
        { id: 63, name: "Razer Naga Pro", price: 9999, icon: "🖱️" },
      ],
      SteelSeries: [
        { id: 64, name: "SteelSeries Rival 600", price: 7999, icon: "🖱️" },
        { id: 65, name: "SteelSeries Sensei 310", price: 6999, icon: "🖱️" },
        { id: 66, name: "SteelSeries Aerox 3", price: 5999, icon: "🖱️" },
      ],
      Corsair: [
        { id: 67, name: "Corsair M65 RGB Elite", price: 8999, icon: "🖱️" },
        { id: 68, name: "Corsair Harpoon RGB Pro", price: 4999, icon: "🖱️" },
        { id: 69, name: "Corsair Scimitar Pro", price: 9999, icon: "🖱️" },
      ],
      HyperX: [
        { id: 70, name: "HyperX Pulsefire Haste", price: 6999, icon: "🖱️" },
        { id: 71, name: "HyperX Pulsefire Dart", price: 7999, icon: "🖱️" },
        { id: 72, name: "HyperX Clutch", price: 5999, icon: "🖱️" },
      ],
    },
  },
  Headsets: {
    brands: ["Sony", "Bose", "Sennheiser", "Audio-Technica", "Beats"],
    products: {
      Sony: [
        { id: 73, name: "Sony WH-1000XM5", price: 29999, icon: "🎧" },
        { id: 74, name: "Sony WH-CH720", price: 9999, icon: "🎧" },
        { id: 75, name: "Sony WF-C700N", price: 14999, icon: "🎧" },
      ],
      Bose: [
        { id: 76, name: "Bose QuietComfort 45", price: 34999, icon: "🎧" },
        { id: 77, name: "Bose QuietComfort Ultra", price: 39999, icon: "🎧" },
        { id: 78, name: "Bose Sport Earbuds", price: 19999, icon: "🎧" },
      ],
      Sennheiser: [
        { id: 79, name: "Sennheiser Momentum 4", price: 24999, icon: "🎧" },
        { id: 80, name: "Sennheiser Momentum 3", price: 34999, icon: "🎧" },
        { id: 81, name: "Sennheiser Momentum True", price: 19999, icon: "🎧" },
      ],
      "Audio-Technica": [
        { id: 82, name: "Audio-Technica ATH-M50x", price: 14999, icon: "🎧" },
        { id: 83, name: "Audio-Technica ATH-M40x", price: 9999, icon: "🎧" },
        { id: 84, name: "Audio-Technica ATH-SR50BT", price: 19999, icon: "🎧" },
      ],
      Beats: [
        { id: 85, name: "Beats Studio Pro", price: 34999, icon: "🎧" },
        { id: 86, name: "Beats Solo 4", price: 24999, icon: "🎧" },
        { id: 87, name: "Beats Fit Pro", price: 19999, icon: "🎧" },
      ],
    },
  },
}

// Coupon codes
const coupons = {
  TECH10: 0.1,
  SAVE20: 0.2,
  DISCOUNT15: 0.15,
  WELCOME5: 0.05,
}

// Cart management
let cart = JSON.parse(localStorage.getItem("cart")) || []
let currentCategory = null
let currentBrand = null
let discountPercentage = 0

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadCart()
  showHome()
})

// Page Navigation
function showHome() {
  hideAllPages()
  document.getElementById("homePage").classList.add("active")
  window.scrollTo(0, 0)
}

function showCategories() {
  hideAllPages()
  document.getElementById("categoriesPage").classList.add("active")
  window.scrollTo(0, 0)
}

function showProducts() {
  hideAllPages()
  document.getElementById("productsPage").classList.add("active")
  window.scrollTo(0, 0)
}

function showCart() {
  hideAllPages()
  document.getElementById("cartPage").classList.add("active")
  renderCart()
  window.scrollTo(0, 0)
}

function showCheckout() {
  hideAllPages()
  document.getElementById("checkoutPage").classList.add("active")
  updateCheckoutTotal()
  window.scrollTo(0, 0)
}

function showThankYou() {
  hideAllPages()
  document.getElementById("thankYouPage").classList.add("active")
  window.scrollTo(0, 0)
}

function hideAllPages() {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active")
  })
}

// Category Selection
function selectCategory(category) {
  currentCategory = category
  const brands = productData[category].brands
  const brandsContainer = document.getElementById("brandsContainer")

  document.getElementById("categoryTitle").textContent = category
  brandsContainer.innerHTML = ""

  brands.forEach((brand) => {
    const brandCard = document.createElement("div")
    brandCard.className = "brand-card"
    brandCard.innerHTML = `<h3>${brand}</h3>`
    brandCard.onclick = () => selectBrand(brand)
    brandsContainer.appendChild(brandCard)
  })

  showCategories()
}

// Brand Selection
function selectBrand(brand) {
  currentBrand = brand
  const products = productData[currentCategory].products[brand]
  const productsContainer = document.getElementById("productsContainer")

  document.getElementById("brandTitle").textContent = `${brand} - ${currentCategory}`
  productsContainer.innerHTML = ""

  products.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card"
    productCard.innerHTML = `
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-brand">${brand}</div>
                <div class="product-price">₹${product.price.toLocaleString()}</div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.icon}')">Add to Cart</button>
                </div>
            </div>
        `
    productsContainer.appendChild(productCard)
  })

  showProducts()
}

// Cart Functions
function addToCart(id, name, price, icon) {
  const existingItem = cart.find((item) => item.id === id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ id, name, price, icon, quantity: 1 })
  }

  saveCart()
  updateCartCount()
  showNotification(`${name} added to cart!`)
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id)
  saveCart()
  updateCartCount()
  renderCart()
}

function updateQuantity(id, quantity) {
  const item = cart.find((item) => item.id === id)
  if (item) {
    item.quantity = Math.max(1, quantity)
    saveCart()
    renderCart()
  }
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cartItemsContainer")

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">Your cart is empty</p>'
    document.getElementById("checkoutBtn").disabled = true
    return
  }

  document.getElementById("checkoutBtn").disabled = false
  cartItemsContainer.innerHTML = ""

  cart.forEach((item) => {
    const cartItem = document.createElement("div")
    cartItem.className = "cart-item"
    cartItem.innerHTML = `
            <div class="cart-item-image">${item.icon}</div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                <div class="quantity-selector">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <input type="number" value="${item.quantity}" readonly>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="btn-remove" onclick="removeFromCart(${item.id})">Remove</button>
        `
    cartItemsContainer.appendChild(cartItem)
  })

  updateCartSummary()
}

function updateCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = Math.floor(subtotal * discountPercentage)
  const total = subtotal - discount

  document.getElementById("subtotal").textContent = `₹${subtotal.toLocaleString()}`
  document.getElementById("discount").textContent = `₹${discount.toLocaleString()}`
  document.getElementById("total").textContent = `₹${total.toLocaleString()}`
}

function applyCoupon() {
  const couponCode = document.getElementById("couponInput").value.toUpperCase()

  if (coupons[couponCode]) {
    discountPercentage = coupons[couponCode]
    updateCartSummary()
    showNotification(`Coupon applied! ${discountPercentage * 100}% discount`)
    document.getElementById("couponInput").value = ""
  } else {
    showNotification("Invalid coupon code", "error")
  }
}

function proceedToCheckout() {
  if (cart.length === 0) {
    showNotification("Cart is empty", "error")
    return
  }
  showCheckout()
}

function updateCheckoutTotal() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = Math.floor(subtotal * discountPercentage)
  const total = subtotal - discount
  document.getElementById("checkoutTotal").textContent = `₹${total.toLocaleString()}`
}

function processPayment(event) {
  event.preventDefault()

  const fullName = document.getElementById("fullName").value
  const phone = document.getElementById("phone").value
  const address = document.getElementById("address").value
  const pincode = document.getElementById("pincode").value
  const paymentMethod = document.querySelector('input[name="payment"]:checked').value

  // Simulate payment processing
  showNotification("Processing payment...")

  setTimeout(() => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const discount = Math.floor(subtotal * discountPercentage)
    const total = subtotal - discount
    const orderId = "ORD" + Date.now()

    // Store order details
    const orderData = {
      orderId,
      total,
      paymentMethod,
      address: `${fullName}, ${address}, ${pincode}`,
      items: cart,
      date: new Date().toLocaleDateString(),
    }

    localStorage.setItem("lastOrder", JSON.stringify(orderData))

    // Display thank you page
    displayThankYou(orderData)
    showThankYou()

    // Clear cart and reset
    cart = []
    discountPercentage = 0
    saveCart()
    updateCartCount()
  }, 2000)
}

function displayThankYou(orderData) {
  document.getElementById("orderId").textContent = orderData.orderId
  document.getElementById("orderAmount").textContent = `₹${orderData.total.toLocaleString()}`
  document.getElementById("orderPayment").textContent = orderData.paymentMethod
  document.getElementById("orderAddress").textContent = orderData.address

  const orderItemsList = document.getElementById("orderItemsList")
  orderItemsList.innerHTML = ""

  orderData.items.forEach((item) => {
    const itemRow = document.createElement("div")
    itemRow.className = "order-item-row"
    itemRow.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>₹${(item.price * item.quantity).toLocaleString()}</span>
        `
    orderItemsList.appendChild(itemRow)
  })
}

// Local Storage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

function loadCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || []
  updateCartCount()
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  document.getElementById("cartCount").textContent = count
}

// Notification
function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "error" ? "var(--secondary)" : "var(--success)"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        z-index: 2000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
    `
  notification.textContent = message
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease"
    setTimeout(() => notification.remove(), 300)
  }, 3000)
}

// Add slide animations
const style = document.createElement("style")
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)
