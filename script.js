// ══════════ DATA ══════════
const allFoodItems = [
  {
    id: 1,
    name: "Chicken Cheese Burger",
    desc: "Juicy double chicken patty with cheddar, lettuce, tomato & special sauce",
    price: 199,
    cat: "burger",
    type: "non-veg",
    rating: 4.5,
    time: "20 min",
    restId: 2,
    img: "https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzgwMCw4MDBd.jpg",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    desc: "Classic thin-crust pizza loaded with pepperoni and mozzarella",
    price: 299,
    cat: "pizza",
    type: "non-veg",
    rating: 4.7,
    time: "25 min",
    restId: 4,
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    desc: "Authentic Hyderabadi dum biryani with tender chicken and saffron",
    price: 249,
    cat: "biryani",
    type: "non-veg",
    rating: 4.8,
    time: "30 min",
    restId: 1,
    img: "https://b.zmtcdn.com/data/pictures/chains/1/2800901/1f8b4b00a89350f81d7cf4846b62520e.jpg",
  },
  {
    id: 4,
    name: "Creamy Garlic Pasta",
    desc: "Fettuccine in rich cream sauce with garlic, parmesan & herbs",
    price: 219,
    cat: "pasta",
    type: "veg",
    rating: 4.4,
    time: "20 min",
    restId: 5,
    img: "https://skinnyspatula.com/wp-content/uploads/2022/10/Creamy_Garlic_Chicken_Pasta_0-735x735.jpg",
  },
  {
    id: 5,
    name: "Veg Margherita Pizza",
    desc: "Classic wood-fired pizza with tomato sauce, basil & mozzarella",
    price: 249,
    cat: "pizza",
    type: "veg",
    rating: 4.5,
    time: "22 min",
    restId: 4,
    img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400",
  },
  {
    id: 6,
    name: "Paneer Biryani",
    desc: "Fragrant basmati rice layered with marinated paneer and spices",
    price: 219,
    cat: "biryani",
    type: "veg",
    rating: 4.6,
    time: "28 min",
    restId: 1,
    img: "https://www.foodiaq.com/wp-content/uploads/2024/10/Paneer-Makhani-Biryani.jpg",
  },
  {
    id: 7,
    name: "BBQ Chicken Wings",
    desc: "Crispy wings tossed in smoky BBQ sauce with blue cheese dip",
    price: 279,
    cat: "snacks",
    type: "non-veg",
    rating: 4.7,
    time: "25 min",
    restId: 2,
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400",
  },
  {
    id: 8,
    name: "Hakka Noodles",
    desc: "Wok-tossed noodles with fresh veggies, soy sauce & sesame oil",
    price: 169,
    cat: "chinese",
    type: "veg",
    rating: 4.3,
    time: "18 min",
    restId: 6,
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
  },
  {
    id: 9,
    name: "Choco Lava Cake",
    desc: "Warm chocolate cake with molten center, served with vanilla ice cream",
    price: 149,
    cat: "dessert",
    type: "veg",
    rating: 4.9,
    time: "15 min",
    restId: 7,
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
  },
  {
    id: 10,
    name: "Mango Lassi",
    desc: "Thick yogurt drink blended with Alphonso mango and cardamom",
    price: 89,
    cat: "drinks",
    type: "veg",
    rating: 4.6,
    time: "5 min",
    restId: 1,
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/mango-lassi-recipe.jpg?w=400",
  },
  {
    id: 11,
    name: "French Fries",
    desc: "Crispy fries tossed in chaat masala, coriander & chilli sauce",
    price: 129,
    cat: "snacks",
    type: "veg",
    rating: 4.4,
    time: "12 min",
    restId: 2,
    img: "https://mccormick.widen.net/content/763cw5moek/jpeg/loaded_fries_1376x774.jpeg?w=400",
  },
  {
    id: 12,
    name: "Chicken Manchurian",
    desc: "Juicy chicken balls in tangy Manchurian sauce with spring onion",
    price: 229,
    cat: "chinese",
    type: "non-veg",
    rating: 4.5,
    time: "22 min",
    restId: 6,
    img: "https://www.licious.in/blog/wp-content/uploads/2021/09/shutterstock_1650877375-750x750.jpg?w=400",
  },
  {
    id: 13,
    name: "Veggie Supreme Burger",
    desc: "Crispy veggie patty with avocado, jalapeños & chipotle mayo",
    price: 179,
    cat: "burger",
    type: "veg",
    rating: 4.3,
    time: "18 min",
    restId: 2,
    img: "https://mcdonaldsblog.in/wp-content/uploads/2018/04/Chicken-American-Cheese-Supreme.jpg?w=400",
  },
  {
    id: 14,
    name: "Cold Coffee Frappe",
    desc: "Blended cold coffee with chocolate syrup and whipped cream",
    price: 119,
    cat: "drinks",
    type: "veg",
    rating: 4.7,
    time: "5 min",
    restId: 7,
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",
  },
  {
    id: 15,
    name: "Gulab Jamun (4 pcs)",
    desc: "Soft milk dumplings in rose-scented sugar syrup, served warm",
    price: 99,
    cat: "dessert",
    type: "veg",
    rating: 4.8,
    time: "10 min",
    restId: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5KYcR79wTcJv7U6nYzIGNIU5iEBK0AoPkQ&s?w=400",
  },
  {
    id: 16,
    name: "Mutton Biryani",
    desc: "Slow-cooked mutton layered with fragrant rice and fried onions",
    price: 349,
    cat: "biryani",
    type: "non-veg",
    rating: 4.9,
    time: "40 min",
    restId: 1,
    img: "https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__1200_0_0_0_auto.jpg?w=400",
  },
  {
    id: 17,
    name: "Chicken Tikka Pizza",
    desc: "Tandoor-spiced chicken tikka on pizza base with mint chutney",
    price: 329,
    cat: "pizza",
    type: "non-veg",
    rating: 4.6,
    time: "28 min",
    restId: 4,
    img: "https://flavorry.com/wp-content/uploads/2025/09/teamgreen1001_httpss.mj_.run9zT8Sikxhn8_An_ultra-close-up_AND__ecff3b71-758f-4b56-a1ea-7797418d9935_1.png?w=400",
  },
  {
    id: 18,
    name: "Penne Arrabbiata",
    desc: "Spicy tomato-garlic sauce over penne with basil and parmesan",
    price: 199,
    cat: "pasta",
    type: "veg",
    rating: 4.3,
    time: "18 min",
    restId: 5,
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
  },
  {
    id: 19,
    name: "Egg Fried Rice",
    desc: "Wok-fried rice with eggs, spring onion, soy and oyster sauce",
    price: 159,
    cat: "chinese",
    type: "non-veg",
    rating: 4.4,
    time: "15 min",
    restId: 6,
    img: "https://www.ericajulson.com/wp-content/uploads/2017/07/Easy-Egg-Fried-Rice-9.jpg?w=400",
  },
  {
    id: 20,
    name: "Tiramisu",
    desc: "Classic Italian dessert with espresso ladyfingers and mascarpone",
    price: 179,
    cat: "dessert",
    type: "veg",
    rating: 4.8,
    time: "5 min",
    restId: 5,
    img: "https://www.micheldumas.com/wp-content/uploads/2025/05/tiramisu1-ezgif.com-jpg-to-webp-converter-1-1.webp?w=500",
  },
  {
    id: 21,
    name: "Strawberry Milkshake",
    desc: "Thick creamy milkshake with fresh strawberries and vanilla ice cream",
    price: 109,
    cat: "drinks",
    type: "veg",
    rating: 4.5,
    time: "5 min",
    restId: 7,
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400",
  },
  {
    id: 22,
    name: "Samosa(2 pcs)",
    desc: "Crispy samosas with ketchup and mint chutney",
    price: 99,
    cat: "snacks",
    type: "veg",
    rating: 4.6,
    time: "10 min",
    restId: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT90eK5EmpeSbJ59Otj8ZkXyaLgp-7awbWflw&s?w=400",
  },
  {
    id: 23,
    name: "Butter Chicken",
    desc: "Tender chicken in a rich, creamy tomato-butter sauce",
    price: 269,
    cat: "biryani",
    type: "non-veg",
    rating: 4.7,
    time: "25 min",
    restId: 3,
    img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-12-butter-chicken%2Fbutter-chicken-323?w=400",
  },
  {
    id: 24,
    name: "Dal Makhani",
    desc: "Black lentils slow-cooked overnight with butter, cream and spices",
    price: 179,
    cat: "biryani",
    type: "veg",
    rating: 4.5,
    time: "20 min",
    restId: 3,
    img: "https://www.cookwithmanali.com/wp-content/uploads/2019/04/Restaurant-Style-Dal-Makhani-500x500.jpg?w=400",
  },
  {
    id: 25,
    name: "Veg Spring Rolls",
    desc: "Crispy fried rolls stuffed with spiced veggies, served with sweet chilli",
    price: 129,
    cat: "chinese",
    type: "veg",
    rating: 4.3,
    time: "15 min",
    restId: 6,
    img: "https://i0.wp.com/s.lightorangebean.com/media/20240914144947/Thai-Veggie-Spring-Rolls_done.png?resize=480%2C270&quality=80&ssl=1?w=400",
  },
  {
    id: 26,
    name: "Waffles with Nutella",
    desc: "Fluffy Belgian waffles drizzled with Nutella, banana slices and cream",
    price: 189,
    cat: "dessert",
    type: "veg",
    rating: 4.9,
    time: "12 min",
    restId: 7,
    img: "https://flouronmyface.com/wp-content/uploads/2017/05/nutella_banana_waffles-1.jpg?w=400",
  },
  {
    id: 27,
    name: "Grilled Tandoori Chicken",
    desc: "Smoky, marinated chicken roasted in a traditional tandoor oven",
    price: 299,
    cat: "snacks",
    type: "non-veg",
    rating: 4.7,
    time: "30 min",
    restId: 3,
    img: "https://www.sidechef.com/recipe/6f3b7435-7ca8-4fb4-87d3-87debd09efa7.jpeg?w=400",
  },
  {
    id: 28,
    name: "Fresh Lime Soda",
    desc: "Chilled lime soda with a hint of salt, sugar and crushed mint",
    price: 69,
    cat: "drinks",
    type: "veg",
    rating: 4.4,
    time: "5 min",
    restId: 8,
    img: "https://gunjanchopra.com/content/images/2022/08/FI-2.jpg?w=400",
  },
];

const restaurantsData = [
  {
    id: 1,
    name: "Spice Garden",
    cuisine: "Indian",
    tags: ["Biryani", "Curry", "South Indian"],
    rating: 4.8,
    reviews: 312,
    costForTwo: 400,
    time: "30-40 min",
    open: true,
    promo: "20% OFF",
    type: "indian",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    coverImg:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    desc: "Authentic Indian flavours from the heart of Chennai. Renowned for our dum biryani and home-style curries.",
    address: "12, Gandhi Nagar, VIT Campus Road, Vellore",
  },
  {
    id: 2,
    name: "Burger Barn",
    cuisine: "Fast Food",
    tags: ["Burgers", "Snacks", "American"],
    rating: 4.5,
    reviews: 198,
    costForTwo: 300,
    time: "15-25 min",
    open: true,
    promo: "Free Fries",
    type: "fastfood",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600",
    coverImg:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    desc: "Stacked, saucy, and satisfying. The best burgers in Vellore — made fresh for every order.",
    address: "34, MC Road, Near VIT Gate 2, Vellore",
  },
  {
    id: 3,
    name: "Desi Tadka",
    cuisine: "North Indian",
    tags: ["Punjabi", "Street Food", "Curry"],
    rating: 4.6,
    reviews: 245,
    costForTwo: 350,
    time: "25-35 min",
    open: true,
    promo: null,
    type: "indian",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600",
    coverImg:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800",
    desc: "Punjabi heart, Vellore home. Our dhaba-style curries and freshly baked naan will transport you to the North.",
    address: "88, Katpadi Main Road, Vellore",
  },
  {
    id: 4,
    name: "Pizza Palace",
    cuisine: "Italian",
    tags: ["Pizza", "Italian", "Wood-fired"],
    rating: 4.7,
    reviews: 420,
    costForTwo: 500,
    time: "20-30 min",
    open: true,
    promo: "Buy 2 Get 1",
    type: "pizza",
    img: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=600",
    coverImg:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800",
    desc: "Wood-fired, hand-stretched pizza. Our dough ferments for 48 hours for the perfect crust every time.",
    address: "7, CMC Hospital Road, Vellore",
  },
  {
    id: 5,
    name: "Pasta & Co.",
    cuisine: "Italian",
    tags: ["Pasta", "Risotto", "Italian"],
    rating: 4.4,
    reviews: 167,
    costForTwo: 450,
    time: "20-28 min",
    open: true,
    promo: null,
    type: "multicuisine",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
    coverImg:
      "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=800",
    desc: "A cozy Italian bistro bringing authentic pasta, risottos and desserts to Vellore.",
    address: "21, Sripuram Road, Vellore",
  },
  {
    id: 6,
    name: "Wok & Roll",
    cuisine: "Chinese",
    tags: ["Chinese", "Noodles", "Asian"],
    rating: 4.3,
    reviews: 134,
    costForTwo: 280,
    time: "15-25 min",
    open: false,
    promo: "30% OFF",
    type: "chinese",
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
    coverImg:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800",
    desc: "Authentic Chinese street food. Lightning-fast wok cooking that locks in flavour and freshness.",
    address: "56, Bus Stand Road, Vellore",
  },
  {
    id: 7,
    name: "Sweet Tooth Café",
    cuisine: "Desserts",
    tags: ["Cakes", "Shakes", "Waffles"],
    rating: 4.9,
    reviews: 389,
    costForTwo: 200,
    time: "10-20 min",
    open: true,
    promo: "Student Special",
    type: "dessert",
    img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600",
    coverImg:
      "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800",
    desc: "The sweetest spot in Vellore. Cakes, shakes, waffles and more — dessert is always a good idea.",
    address: "3, VIT University Road, Vellore",
  },
  {
    id: 8,
    name: "The Grand Thali",
    cuisine: "Multi-cuisine",
    tags: ["South Indian", "Thali", "Veg"],
    rating: 4.5,
    reviews: 211,
    costForTwo: 320,
    time: "20-30 min",
    open: true,
    promo: null,
    type: "multicuisine",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
    coverImg:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
    desc: "Experience the full spectrum of South Indian vegetarian cuisine through our legendary Grand Thali.",
    address: "15, VIT Main Road, Vellore",
  },
];

allFoodItems.forEach((f) => {
  const r = restaurantsData.find((r) => r.id === f.restId);
  f.restName = r ? r.name : "";
});

// ══════════ STATE ══════════
let cart = {},
  wishlist = new Set(),
  isLoggedIn = false,
  loggedInPhone = "";
let studentDiscount = false,
  studentInfo = null;
let currentFoodCat = "all",
  currentFoodSort = "default",
  currentRestFilter = "all";
let currentPage = "home",
  currentRestId = null;
let generatedOTP = "",
  selectedPayment = "upi";
let reviews = {},
  pendingReviewRestId = null,
  selectedRating = 0;

// ══════════ NAV ══════════
function switchTab(tab) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + tab).classList.add("active");
  // highlight restaurants nav btn when on restaurants or detail
  const restBtn = document.getElementById("restNavBtn");
  if (restBtn)
    restBtn.style.background =
      tab === "restaurants" || tab === "restdetail"
        ? "rgba(255,255,255,.25)"
        : "";
  currentPage = tab;
  if (tab === "restaurants") renderRestaurants();
  if (tab === "home") refreshFood();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function goHome() {
  switchTab("home");
}
function handleSearch() {
  if (currentPage === "home" || currentPage === "restdetail") {
    switchTab("home");
    refreshFood();
  } else renderRestaurants();
}

// ══════════ FOOD GRID ══════════
function getFilteredFood() {
  let data = [...allFoodItems];
  const q = document.getElementById("searchInput").value.toLowerCase();
  if (q)
    data = data.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.desc.toLowerCase().includes(q) ||
        f.cat.includes(q) ||
        f.restName.toLowerCase().includes(q),
    );
  if (currentFoodCat !== "all")
    data = data.filter((f) => f.cat === currentFoodCat);
  if (currentFoodSort === "price-asc") data.sort((a, b) => a.price - b.price);
  else if (currentFoodSort === "price-desc")
    data.sort((a, b) => b.price - a.price);
  else if (currentFoodSort === "rating")
    data.sort((a, b) => b.rating - a.rating);
  return data;
}
function refreshFood() {
  const data = getFilteredFood();
  const grid = document.getElementById("foodGrid");
  const noRes = document.getElementById("noResultsFood");
  if (!data.length) {
    grid.innerHTML = "";
    noRes.style.display = "block";
    return;
  }
  noRes.style.display = "none";
  grid.innerHTML = data.map((item) => foodCardHTML(item)).join("");
}
function foodCardHTML(item) {
  const inCart = cart[item.id] || 0;
  const isWished = wishlist.has(item.id);
  return `<div class="food-card">
    <div class="food-card-img-wrap">
      <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400'"/>
      <span class="veg-badge ${item.type}">${item.type === "veg" ? "🌿 Veg" : "🍗 Non-Veg"}</span>
      <div class="rating-badge">⭐ ${item.rating}</div>
      <button class="wishlist-btn ${isWished ? "liked" : ""}" onclick="toggleWishlist(${item.id})">${isWished ? "❤️" : "🤍"}</button>
    </div>
    <div class="food-info">
      <h3>${item.name}</h3>
      <p class="desc">${item.desc}</p>
      <div style="font-size:12px;color:var(--brand);font-weight:600;margin-bottom:6px;cursor:pointer" onclick="openRestaurant(${item.restId})">🏪 ${item.restName}</div>
      <div class="food-meta"><div class="price">₹${item.price}</div><div class="delivery-time">⏱️ ${item.time}</div></div>
      <div id="fbtn-${item.id}">${
        inCart === 0
          ? `<button class="add-btn" onclick="addToCart(${item.id})">Add to Cart +</button>`
          : `<div class="qty-control"><button onclick="changeQty(${item.id},-1)">−</button><span>${inCart}</span><button onclick="changeQty(${item.id},1)">+</button></div>`
      }</div>
    </div>
  </div>`;
}
function filterFoodCat(cat, el) {
  currentFoodCat = cat;
  document
    .querySelectorAll(".cat-chip")
    .forEach((c) => c.classList.remove("active"));
  el.classList.add("active");
  refreshFood();
}
function sortFood(val) {
  currentFoodSort = val;
  refreshFood();
}

// ══════════ RESTAURANTS ══════════
function renderRestaurants() {
  let data = [...restaurantsData];
  const q = document.getElementById("searchInput").value.toLowerCase();
  if (q)
    data = data.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)),
    );
  if (currentRestFilter === "open") data = data.filter((r) => r.open);
  else if (currentRestFilter === "top")
    data = data.filter((r) => r.rating >= 4.6);
  else if (currentRestFilter !== "all")
    data = data.filter((r) => r.type === currentRestFilter);
  const grid = document.getElementById("restGrid");
  const noRes = document.getElementById("noResultsRest");
  if (!data.length) {
    grid.innerHTML = "";
    noRes.style.display = "block";
    return;
  }
  noRes.style.display = "none";
  grid.innerHTML = data
    .map(
      (r) => `
    <div class="rest-card" onclick="openRestaurant(${r.id})">
      <div class="rest-card-img">
        <img src="${r.img}" alt="${r.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600'"/>
        ${r.promo ? `<div class="rest-promo-tag">🔖 ${r.promo}</div>` : ""}
        <div class="rest-time-tag">⏱ ${r.time}</div>
      </div>
      <div class="rest-card-body">
        <h3>${r.name}</h3>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
          <span style="color:var(--mid);font-size:13px">${r.cuisine}</span>
          <span class="rest-open ${r.open ? "open" : "closed"}">${r.open ? "● Open" : "● Closed"}</span>
        </div>
        <div class="rest-card-tags">${r.tags.map((t) => `<span class="rest-tag">${t}</span>`).join("")}</div>
        <div class="rest-card-meta">
          <div class="rest-rating">★<span>${r.rating}</span><span class="rest-reviews">(${r.reviews + (reviews[r.id] || []).length})</span></div>
          <div style="font-size:13px;color:var(--mid)">₹${r.costForTwo} for two</div>
        </div>
      </div>
    </div>`,
    )
    .join("");
}
function filterRest(filter, el) {
  currentRestFilter = filter;
  document
    .querySelectorAll(".rest-filter-chip")
    .forEach((c) => c.classList.remove("active"));
  el.classList.add("active");
  renderRestaurants();
}

// ══════════ RESTAURANT DETAIL ══════════
function openRestaurant(id) {
  currentRestId = id;
  const rest = restaurantsData.find((r) => r.id === id);
  const items = allFoodItems.filter((f) => f.restId === id);
  const restReviews = reviews[id] || [];
  const avgRating = restReviews.length
    ? (
        restReviews.reduce((s, r) => s + r.rating, 0) / restReviews.length
      ).toFixed(1)
    : rest.rating;

  // Group items by broad category
  const cats = [
    "Starters & Snacks",
    "Main Course",
    "Rice & Biryani",
    "Noodles & Pasta",
    "Pizza",
    "Desserts",
    "Beverages",
  ];
  const catMap = {
    snacks: "Starters & Snacks",
    burger: "Starters & Snacks",
    biryani: "Rice & Biryani",
    chinese: "Noodles & Pasta",
    pasta: "Noodles & Pasta",
    pizza: "Pizza",
    dessert: "Desserts",
    drinks: "Beverages",
  };
  const grouped = {};
  cats.forEach((c) => {
    grouped[c] = [];
  });
  items.forEach((item) => {
    const bucket = catMap[item.cat] || "Main Course";
    grouped[bucket].push(item);
  });
  const filledCats = cats.filter((c) => grouped[c].length);

  const menuSections = filledCats
    .map(
      (cat) => `
    <div class="rest-menu-section" id="sec-${cat.replace(/\s+&?\s*/g, "-")}">
      <h3>${cat}</h3>
      ${grouped[cat].map((item) => restMenuItemHTML(item)).join("")}
    </div>`,
    )
    .join("");

  const reviewsHTML = restReviews.length
    ? restReviews
        .map(
          (rv) =>
            `<div class="review-card"><div class="rev-top"><div><div class="reviewer-name">${rv.name}</div><div class="review-stars">${"★".repeat(rv.rating)}${"☆".repeat(5 - rv.rating)}</div></div><div class="review-date">${rv.date}</div></div><div class="review-text">${rv.text}</div></div>`,
        )
        .join("")
    : `<p style="color:var(--mid);font-size:14px">No reviews yet. Be the first to review!</p>`;

  document.getElementById("restDetailContent").innerHTML = `
    <button class="back-btn" onclick="switchTab('restaurants')">← Back to Restaurants</button>
    <div class="rest-detail-hero">
      <img src="${rest.coverImg}" alt="${rest.name}" onerror="this.src='${rest.img}'"/>
      <div class="rest-detail-hero-overlay">
        <div class="rest-detail-info">
          <h1>${rest.name}</h1>
          <div class="rest-detail-meta">
            <span class="badge">⭐ ${avgRating} (${rest.reviews + restReviews.length} reviews)</span>
            <span class="badge">${rest.cuisine}</span>
            <span class="badge">⏱ ${rest.time}</span>
            <span class="badge">₹${rest.costForTwo} for two</span>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top:12px;display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;padding:0 0 12px">
      <p style="color:var(--mid);font-size:14px;max-width:600px;line-height:1.6">${rest.desc}<br><br>📍 <strong>${rest.address}</strong></p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
        ${rest.promo ? `<span style="background:var(--brand-light);color:var(--brand);padding:6px 14px;border-radius:50px;font-weight:700;font-size:13px">🔖 ${rest.promo}</span>` : ""}
        <span style="background:${rest.open ? "#dcfce7" : "#fee2e2"};color:${rest.open ? "#15803d" : "#b91c1c"};padding:6px 14px;border-radius:50px;font-weight:700;font-size:13px">${rest.open ? "● Open Now" : "● Currently Closed"}</span>
      </div>
    </div>
    <div class="rest-detail-layout">
      <nav class="rest-menu-nav">
        <h4>Menu</h4>
        <ul class="rest-cat-nav">
          ${filledCats.map((cat, i) => `<li class="${i === 0 ? "active" : ""}" onclick="scrollToSec('${cat}')">${cat}</li>`).join("")}
        </ul>
        <div style="margin-top:20px;padding-top:16px;border-top:1px solid #f0f0f0">
          <button class="btn-full" style="padding:10px;font-size:13px" onclick="openReviewModal(${rest.id})">✍️ Write Review</button>
        </div>
      </nav>
      <div id="restMenuContent">
        ${menuSections || `<div style="text-align:center;padding:40px;color:var(--mid)">No menu items yet</div>`}
        <div class="reviews-section">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
            <h3>Reviews (${rest.reviews + restReviews.length})</h3>
            <button onclick="openReviewModal(${rest.id})" style="padding:8px 16px;border-radius:50px;border:2px solid var(--brand);background:none;color:var(--brand);font-weight:700;cursor:pointer;font-family:'Syne',sans-serif;font-size:13px">+ Add Review</button>
          </div>
          <div id="reviewsList-${rest.id}">${reviewsHTML}</div>
        </div>
      </div>
    </div>`;
  switchTab("restdetail");
}

function restMenuItemHTML(item) {
  const inCart = cart[item.id] || 0;
  return `<div class="rest-menu-item">
    <img class="rest-menu-item-img" src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400'"/>
    <div class="rest-menu-item-info">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">
        <span class="veg-badge ${item.type}" style="position:static;font-size:10px">${item.type === "veg" ? "🌿" : "🍗"}</span>
        <h5 class="item-name">${item.name}</h5>
      </div>
      <p class="item-desc">${item.desc}</p>
      <div class="rest-menu-item-footer">
        <div><div class="item-price-tag">₹${item.price}</div><div style="font-size:11px;color:var(--mid)">⭐ ${item.rating} • ⏱ ${item.time}</div></div>
        <div id="rbtn-${item.id}">${
          inCart === 0
            ? `<button class="item-add-btn" onclick="addToCart(${item.id})">Add +</button>`
            : `<div class="item-qty-ctrl"><button onclick="changeQty(${item.id},-1)">−</button><span>${inCart}</span><button onclick="changeQty(${item.id},1)">+</button></div>`
        }</div>
      </div>
    </div>
  </div>`;
}

function scrollToSec(cat) {
  const id = "sec-" + cat.replace(/\s+&?\s*/g, "-");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  document
    .querySelectorAll(".rest-cat-nav li")
    .forEach((li) => li.classList.toggle("active", li.textContent === cat));
}

// ══════════ CART ══════════
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCartCount();
  updateBtns(id);
  const item = allFoodItems.find((f) => f.id === id);
  showToast(`${item.name} added 🛒`, "success");
  renderCartPanel();
}
function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  updateCartCount();
  updateBtns(id);
  renderCartPanel();
}
function removeFromCart(id) {
  delete cart[id];
  updateCartCount();
  updateBtns(id);
  renderCartPanel();
}
function updateBtns(id) {
  const qty = cart[id] || 0;
  const fb = document.getElementById(`fbtn-${id}`);
  const rb = document.getElementById(`rbtn-${id}`);
  if (fb)
    fb.innerHTML =
      qty === 0
        ? `<button class="add-btn" onclick="addToCart(${id})">Add to Cart +</button>`
        : `<div class="qty-control"><button onclick="changeQty(${id},-1)">−</button><span>${qty}</span><button onclick="changeQty(${id},1)">+</button></div>`;
  if (rb)
    rb.innerHTML =
      qty === 0
        ? `<button class="item-add-btn" onclick="addToCart(${id})">Add +</button>`
        : `<div class="item-qty-ctrl"><button onclick="changeQty(${id},-1)">−</button><span>${qty}</span><button onclick="changeQty(${id},1)">+</button></div>`;
}
function updateCartCount() {
  document.getElementById("cartCount").textContent = Object.values(cart).reduce(
    (a, b) => a + b,
    0,
  );
}
function getCartTotals() {
  let subtotal = 0;
  Object.entries(cart).forEach(([id, qty]) => {
    const item = allFoodItems.find((f) => f.id == id);
    if (item) subtotal += item.price * qty;
  });
  const deliveryFee = subtotal > 0 ? (subtotal >= 300 ? 0 : 40) : 0;
  const taxes = Math.round(subtotal * 0.05);
  const discountAmt = studentDiscount ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + deliveryFee + taxes - discountAmt;
  return { subtotal, deliveryFee, taxes, discountAmt, total };
}
function renderCartPanel() {
  const container = document.getElementById("cartItems");
  const footer = document.getElementById("cartFooter");
  const keys = Object.keys(cart);
  if (!keys.length) {
    container.innerHTML = `<div class="cart-empty-state"><div class="emoji">🛒</div><p>Your cart is empty.<br>Add some delicious food!</p></div>`;
    footer.style.display = "none";
    return;
  }
  container.innerHTML = keys
    .map((id) => {
      const item = allFoodItems.find((f) => f.id == id),
        qty = cart[id];
      return `<div class="cart-item">
      <div class="cart-item-info"><h5>${item.name}</h5><div class="item-rest">from ${item.restName}</div><div class="item-price">₹${item.price} × ${qty} = ₹${item.price * qty}</div></div>
      <div class="cart-item-qty"><button onclick="changeQty(${id},-1)">−</button><span>${qty}</span><button onclick="changeQty(${id},1)">+</button></div>
      <button class="cart-remove" onclick="removeFromCart(${id})">✕</button>
    </div>`;
    })
    .join("");
  const { subtotal, deliveryFee, taxes, discountAmt, total } = getCartTotals();
  document.getElementById("discountBadgeCart").innerHTML = studentDiscount
    ? `<div class="discount-badge-cart">🎓 Student discount active — saving ₹${discountAmt}</div>`
    : "";
  document.getElementById("billSection").innerHTML = `
    <div class="bill-row"><span>Subtotal</span><span>₹${subtotal}</span></div>
    <div class="bill-row"><span>Delivery</span><span>${deliveryFee === 0 ? '<span style="color:var(--green)">FREE</span>' : "₹" + deliveryFee}</span></div>
    <div class="bill-row"><span>GST (5%)</span><span>₹${taxes}</span></div>
    ${discountAmt > 0 ? `<div class="bill-row discount"><span>🎓 Student Discount</span><span>−₹${discountAmt}</span></div>` : ""}
    <div class="bill-row total"><span>Total</span><span>₹${total}</span></div>`;
  footer.style.display = "block";
}
function openCart() {
  document.getElementById("cartPanel").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
  renderCartPanel();
}
function closeCart() {
  document.getElementById("cartPanel").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
}

// ══════════ WISHLIST ══════════
function toggleWishlist(id) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    showToast("Removed from wishlist", "info");
  } else {
    wishlist.add(id);
    showToast("Added to wishlist ❤️", "success");
  }
  refreshFood();
}

// ══════════ MODALS ══════════
function openModal(id) {
  document.getElementById(id).classList.add("active");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

// ══════════ SIGN IN ══════════
function openSignIn() {
  if (isLoggedIn) {
    if (confirm("Logged in as +91 " + loggedInPhone + ". Log out?")) logout();
    return;
  }
  openModal("signinModal");
  showSigninStep("signinStep1");
}
function showSigninStep(show) {
  ["signinStep1", "signinStep2", "signinStep3"].forEach(
    (s) =>
      (document.getElementById(s).style.display =
        s === show ? "block" : "none"),
  );
}
function sendOTP() {
  const phone = document.getElementById("phoneInput").value.trim();
  if (phone.length !== 10 || !/^\d+$/.test(phone)) {
    document.getElementById("phoneError").classList.add("show");
    document.getElementById("phoneInput").classList.add("error");
    return;
  }
  document.getElementById("phoneError").classList.remove("show");
  document.getElementById("phoneInput").classList.remove("error");
  generatedOTP = String(Math.floor(1000 + Math.random() * 9000));
  loggedInPhone = phone;
  document.getElementById("otpSubtitle").textContent =
    `OTP sent to +91 ${phone.slice(0, 5)}XXXXX`;
  document.getElementById("otpHint").textContent = `Demo OTP: ${generatedOTP}`;
  ["otp1", "otp2", "otp3", "otp4"].forEach(
    (id) => (document.getElementById(id).value = ""),
  );
  showSigninStep("signinStep2");
  startResendTimer();
  showToast(`OTP sent 📲`, "success");
  setTimeout(() => {
    generatedOTP
      .split("")
      .forEach((d, i) => (document.getElementById("otp" + (i + 1)).value = d));
  }, 1500);
}
function moveOtp(el, next) {
  el.value = el.value.replace(/\D/, "");
  if (el.value && next <= 4) document.getElementById("otp" + next)?.focus();
}
function verifyOTP() {
  const entered = ["otp1", "otp2", "otp3", "otp4"]
    .map((id) => document.getElementById(id).value)
    .join("");
  if (entered !== generatedOTP) {
    document.getElementById("otpError").classList.add("show");
    return;
  }
  document.getElementById("otpError").classList.remove("show");
  isLoggedIn = true;
  showSigninStep("signinStep3");
  document.getElementById("signInNavBtn").textContent =
    `👤 +91 ${loggedInPhone.slice(0, 5)}...`;
  showToast("Login successful! 🎉", "success");
}
function resendOTP() {
  generatedOTP = String(Math.floor(1000 + Math.random() * 9000));
  document.getElementById("otpHint").textContent = `New OTP: ${generatedOTP}`;
  startResendTimer();
  showToast("OTP resent 📲", "info");
}
let resendInterval;
function startResendTimer() {
  let secs = 30;
  const link = document.getElementById("resendLink"),
    timer = document.getElementById("resendTimer");
  link.style.display = "none";
  timer.textContent = ` (${secs}s)`;
  clearInterval(resendInterval);
  resendInterval = setInterval(() => {
    secs--;
    timer.textContent = ` (${secs}s)`;
    if (secs <= 0) {
      clearInterval(resendInterval);
      link.style.display = "inline";
      timer.textContent = "";
    }
  }, 1000);
}
function logout() {
  isLoggedIn = false;
  loggedInPhone = "";
  document.getElementById("signInNavBtn").textContent = "Sign In";
  showToast("Logged out 👋", "info");
}

// ══════════ STUDENT VERIFICATION ══════════
const VIT_REG = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
function verifyStudent() {
  const reg = document.getElementById("regNoInput").value.trim();
  const name = document.getElementById("studentNameInput").value.trim();
  const email = document.getElementById("studentEmailInput").value.trim();
  let ok = true;
  if (!VIT_REG.test(reg)) {
    document.getElementById("regError").classList.add("show");
    document.getElementById("regNoInput").classList.add("error");
    ok = false;
  } else {
    document.getElementById("regError").classList.remove("show");
    document.getElementById("regNoInput").classList.remove("error");
  }
  if (name.length < 2) {
    document.getElementById("nameError").classList.add("show");
    document.getElementById("studentNameInput").classList.add("error");
    ok = false;
  } else {
    document.getElementById("nameError").classList.remove("show");
    document.getElementById("studentNameInput").classList.remove("error");
  }
  if (!email.endsWith("@vit.ac.in")) {
    document.getElementById("emailError").classList.add("show");
    document.getElementById("studentEmailInput").classList.add("error");
    ok = false;
  } else {
    document.getElementById("emailError").classList.remove("show");
    document.getElementById("studentEmailInput").classList.remove("error");
  }
  if (!ok) return;
  studentDiscount = true;
  studentInfo = {
    reg,
    name,
    year: "20" + reg.slice(0, 2),
    branch: reg.slice(2, 5),
  };
  document.getElementById("studentVerifyForm").style.display = "none";
  document.getElementById("studentVerifiedBadge").style.display = "block";
  document.getElementById("verifiedStudentInfo").textContent =
    `${name} • ${reg} • ${studentInfo.branch} ${studentInfo.year}`;
  renderCartPanel();
  showToast("Student verified! 10% discount applied 🎓", "success");
}
function removeStudentDiscount() {
  studentDiscount = false;
  studentInfo = null;
  document.getElementById("studentVerifyForm").style.display = "block";
  document.getElementById("studentVerifiedBadge").style.display = "none";
  renderCartPanel();
  showToast("Student discount removed", "info");
}

// ══════════ REVIEWS ══════════
function openReviewModal(restId) {
  if (!isLoggedIn) {
    showToast("Please sign in to write a review!", "error");
    openSignIn();
    return;
  }
  pendingReviewRestId = restId;
  const rest = restaurantsData.find((r) => r.id === restId);
  document.getElementById("reviewRestName").textContent = `For: ${rest.name}`;
  document.getElementById("reviewText").value = "";
  selectedRating = 0;
  document
    .querySelectorAll(".star-rate")
    .forEach((s) => s.classList.remove("selected"));
  document.getElementById("ratingError").classList.remove("show");
  document.getElementById("reviewTextError").classList.remove("show");
  openModal("reviewModal");
}
function setRating(n) {
  selectedRating = n;
  document
    .querySelectorAll(".star-rate")
    .forEach((s, i) => s.classList.toggle("selected", i < n));
}
function submitReview() {
  const text = document.getElementById("reviewText").value.trim();
  if (!selectedRating) {
    document.getElementById("ratingError").classList.add("show");
    return;
  }
  document.getElementById("ratingError").classList.remove("show");
  if (text.length < 10) {
    document.getElementById("reviewTextError").classList.add("show");
    return;
  }
  document.getElementById("reviewTextError").classList.remove("show");
  if (!reviews[pendingReviewRestId]) reviews[pendingReviewRestId] = [];
  const date = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  reviews[pendingReviewRestId].push({
    name: `User +91 ${loggedInPhone.slice(0, 5)}...`,
    rating: selectedRating,
    text,
    date,
  });
  closeModal("reviewModal");
  showToast("Review submitted! 🌟", "success");
  const listEl = document.getElementById(`reviewsList-${pendingReviewRestId}`);
  if (listEl) {
    listEl.innerHTML = reviews[pendingReviewRestId]
      .map(
        (rv) =>
          `<div class="review-card"><div class="rev-top"><div><div class="reviewer-name">${rv.name}</div><div class="review-stars">${"★".repeat(rv.rating)}${"☆".repeat(5 - rv.rating)}</div></div><div class="review-date">${rv.date}</div></div><div class="review-text">${rv.text}</div></div>`,
      )
      .join("");
  }
}

// ══════════ CHECKOUT ══════════
function openCheckout() {
  if (!Object.keys(cart).length) {
    showToast("Your cart is empty!", "error");
    return;
  }
  if (!isLoggedIn) {
    showToast("Please sign in first!", "error");
    openSignIn();
    return;
  }
  const { subtotal, deliveryFee, taxes, discountAmt, total } = getCartTotals();
  const items = Object.entries(cart)
    .map(([id, qty]) => {
      const item = allFoodItems.find((f) => f.id == id);
      return `<div class="order-item-row"><span>${item.name} × ${qty}</span><span>₹${item.price * qty}</span></div>`;
    })
    .join("");
  document.getElementById("checkoutOrderSummary").innerHTML =
    `<h4>Order Summary</h4>${items}<hr class="bill-divider"/><div class="order-item-row" style="color:var(--mid)"><span>Subtotal</span><span>₹${subtotal}</span></div><div class="order-item-row" style="color:var(--mid)"><span>Delivery</span><span>${deliveryFee === 0 ? '<b style="color:var(--green)">FREE</b>' : "₹" + deliveryFee}</span></div><div class="order-item-row" style="color:var(--mid)"><span>GST (5%)</span><span>₹${taxes}</span></div>${discountAmt > 0 ? `<div class="order-item-row" style="color:var(--green)"><span>🎓 Student Discount</span><span>−₹${discountAmt}</span></div>` : ""}<hr class="bill-divider"/><div class="final-total-row"><span>Total</span><span>₹${total}</span></div>`;
  document.getElementById("checkoutSavingsTag").innerHTML =
    discountAmt > 0
      ? `<div class="savings-tag">🎉 You're saving ₹${discountAmt} with student discount!</div>`
      : deliveryFee === 0
        ? `<div class="savings-tag">🚚 Free delivery on this order!</div>`
        : "";
  document.getElementById("checkoutView").style.display = "block";
  document.getElementById("orderSuccessView").style.display = "none";
  openModal("checkoutModal");
}
function selectPayment(method, el) {
  selectedPayment = method;
  document
    .querySelectorAll(".pay-option")
    .forEach((o) => o.classList.remove("selected"));
  el.classList.add("selected");
}
function placeOrder() {
  const addr = document.getElementById("deliveryAddress").value.trim();
  if (addr.length < 10) {
    document.getElementById("addressError").classList.add("show");
    document.getElementById("deliveryAddress").classList.add("error");
    return;
  }
  document.getElementById("addressError").classList.remove("show");
  document.getElementById("deliveryAddress").classList.remove("error");
  const eta = Math.floor(25 + Math.random() * 15);
  document.getElementById("orderEta").textContent =
    `Estimated delivery: ${eta}–${eta + 5} minutes 🕐`;
  document.getElementById("checkoutView").style.display = "none";
  document.getElementById("orderSuccessView").style.display = "block";
  showToast("Order placed! 🎊", "success");
}
function finalCloseOrder() {
  cart = {};
  updateCartCount();
  refreshFood();
  renderCartPanel();
  closeModal("checkoutModal");
  closeCart();
  showToast("Enjoy your meal! 😋", "success");
}

// ══════════ TOAST ══════════
function showToast(msg, type = "success") {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.className = `toast show ${type}`;
  setTimeout(() => t.classList.remove("show"), 3500);
}

// ══════════ INIT ══════════
refreshFood();
