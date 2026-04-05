import { useState, useEffect, useRef, useCallback } from "react";
import logo from "./assets/logo.png";
import "./App.css";
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
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/mango-lassi-recipe.jpg",
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
    img: "https://mccormick.widen.net/content/763cw5moek/jpeg/loaded_fries_1376x774.jpeg",
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
    img: "https://www.licious.in/blog/wp-content/uploads/2021/09/shutterstock_1650877375-750x750.jpg",
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
    img: "https://mcdonaldsblog.in/wp-content/uploads/2018/04/Chicken-American-Cheese-Supreme.jpg",
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5KYcR79wTcJv7U6nYzIGNIU5iEBK0AoPkQ&s",
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
    img: "https://vismaifood.com/storage/app/uploads/public/980/eb9/ed6/thumb__1200_0_0_0_auto.jpg",
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
    img: "https://flavorry.com/wp-content/uploads/2025/09/teamgreen1001_httpss.mj_.run9zT8Sikxhn8_An_ultra-close-up_AND__ecff3b71-758f-4b56-a1ea-7797418d9935_1.png",
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
    img: "https://www.ericajulson.com/wp-content/uploads/2017/07/Easy-Egg-Fried-Rice-9.jpg",
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
    img: "https://www.micheldumas.com/wp-content/uploads/2025/05/tiramisu1-ezgif.com-jpg-to-webp-converter-1-1.webp",
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
    name: "Samosa (2 pcs)",
    desc: "Crispy samosas with ketchup and mint chutney",
    price: 99,
    cat: "snacks",
    type: "veg",
    rating: 4.6,
    time: "10 min",
    restId: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT90eK5EmpeSbJ59Otj8ZkXyaLgp-7awbWflw&s",
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
    img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-12-butter-chicken%2Fbutter-chicken-323",
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
    img: "https://www.cookwithmanali.com/wp-content/uploads/2019/04/Restaurant-Style-Dal-Makhani-500x500.jpg",
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
    img: "https://i0.wp.com/s.lightorangebean.com/media/20240914144947/Thai-Veggie-Spring-Rolls_done.png",
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
    img: "https://flouronmyface.com/wp-content/uploads/2017/05/nutella_banana_waffles-1.jpg",
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
    img: "https://www.sidechef.com/recipe/6f3b7435-7ca8-4fb4-87d3-87debd09efa7.jpeg",
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
    img: "https://gunjanchopra.com/content/images/2022/08/FI-2.jpg",
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

// Attach restName
allFoodItems.forEach((f) => {
  const r = restaurantsData.find((r) => r.id === f.restId);
  f.restName = r ? r.name : "";
});

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400";

// ══════════ HELPERS ══════════
function getCartTotals(cart, studentDiscount) {
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

// ══════════ TOAST ══════════
function Toast({ toast }) {
  if (!toast) return null;
  const colors = { success: "#22c55e", error: "#ef4444", info: "#3b82f6" };
  return (
    <div
      style={{
        position: "fixed",
        top: 18,
        right: 18,
        background: "#111827",
        color: "white",
        padding: "12px 18px",
        borderRadius: 14,
        fontSize: 13,
        zIndex: 9999,
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        maxWidth: 300,
        borderLeft: `4px solid ${colors[toast.type] || colors.success}`,
        animation: "slideIn 0.3s ease",
      }}
    >
      {toast.msg}
    </div>
  );
}

// ══════════ HEADER ══════════
function Header({
  searchVal,
  onSearch,
  onHome,
  onOffers,
  onRestaurants,
  onSignIn,
  cartCount,
  onCart,
  isLoggedIn,
  loggedInPhone,
}) {
  return (
    <header
      style={{
        background: "#ff5722",
        padding: "13px 36px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 16px rgba(255,87,34,0.45)",
        position: "sticky",
        top: 0,
        zIndex: 600,
      }}
    >
      <div
        onClick={onHome}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: "white",
          fontWeight: 800,
          fontSize: 20,
          cursor: "pointer",
        }}
      >
        <img
          src={logo}
          alt="MealMate"
          style={{ height: 48, borderRadius: 12 }}
        />
      </div>
      <div style={{ flex: 1, margin: "0 24px", position: "relative" }}>
        <input
          value={searchVal}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search food or restaurants..."
          style={{
            width: "100%",
            padding: "11px 110px 11px 18px",
            borderRadius: 50,
            border: "none",
            outline: "none",
            fontSize: 14,
          }}
        />
        <button
          onClick={() => onSearch(searchVal)}
          style={{
            position: "absolute",
            right: 4,
            top: 4,
            bottom: 4,
            padding: "0 18px",
            borderRadius: 50,
            border: "none",
            background: "#111827",
            color: "white",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          Search
        </button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {[
          { label: "🏠 Home", fn: onHome },
          { label: "🎁 Offers", fn: onOffers },
          { label: "🏪 Restaurants", fn: onRestaurants },
        ].map(({ label, fn }) => (
          <span
            key={label}
            onClick={fn}
            style={{
              color: "white",
              fontWeight: 600,
              padding: "8px 14px",
              borderRadius: 50,
              cursor: "pointer",
              fontSize: 14,
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.2)")
            }
            onMouseLeave={(e) => (e.target.style.background = "transparent")}
          >
            {label}
          </span>
        ))}
        <span
          onClick={onSignIn}
          style={{
            color: "white",
            fontWeight: 600,
            padding: "8px 14px",
            borderRadius: 50,
            cursor: "pointer",
            fontSize: 14,
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) =>
            (e.target.style.background = "rgba(255,255,255,0.2)")
          }
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
        >
          {isLoggedIn ? `👤 +91 ${loggedInPhone.slice(0, 5)}...` : "Sign In"}
        </span>
        <div
          onClick={onCart}
          style={{
            background: "#111827",
            color: "#fff",
            padding: "9px 18px",
            borderRadius: 50,
            cursor: "pointer",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 14,
            whiteSpace: "nowrap",
          }}
        >
          🛒 Cart{" "}
          <span
            style={{
              background: "white",
              color: "#ff5722",
              fontSize: 11,
              padding: "2px 7px",
              borderRadius: "50%",
              fontWeight: 700,
              minWidth: 20,
              textAlign: "center",
            }}
          >
            {cartCount}
          </span>
        </div>
      </div>
    </header>
  );
}

// ══════════ FOOD CARD ══════════
function FoodCard({ item, cartQty, onAdd, onChangeQty, isWished, onWishlist }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 16,
        boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.25s, box-shadow 0.25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.13)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.07)";
      }}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          onError={(e) => (e.target.src = FALLBACK_IMG)}
          style={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.06)")}
          onMouseLeave={(e) => (e.target.style.transform = "")}
        />
        <span
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            padding: "3px 10px",
            borderRadius: 50,
            fontSize: 11,
            fontWeight: 700,
            background: item.type === "veg" ? "#dcfce7" : "#fee2e2",
            color: item.type === "veg" ? "#15803d" : "#b91c1c",
          }}
        >
          {item.type === "veg" ? "🌿 Veg" : "🍗 Non-Veg"}
        </span>
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(4px)",
            color: "white",
            padding: "4px 10px",
            borderRadius: 50,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          ⭐ {item.rating}
        </div>
        <button
          onClick={() => onWishlist(item.id)}
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: isWished ? "#fee2e2" : "rgba(255,255,255,0.9)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          {isWished ? "❤️" : "🤍"}
        </button>
      </div>
      <div
        style={{
          padding: 13,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <h3 style={{ fontSize: 15, marginBottom: 3 }}>{item.name}</h3>
        <p
          style={{
            color: "#6b7280",
            fontSize: 13,
            lineHeight: 1.5,
            marginBottom: 9,
          }}
        >
          {item.desc}
        </p>
        <div
          style={{
            fontSize: 12,
            color: "#ff5722",
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          🏪 {item.restName}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 11,
          }}
        >
          <div style={{ fontWeight: 700, color: "#ff5722", fontSize: 17 }}>
            ₹{item.price}
          </div>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 500 }}>
            ⏱️ {item.time}
          </div>
        </div>
        {cartQty === 0 ? (
          <button
            onClick={() => onAdd(item.id)}
            style={{
              width: "100%",
              padding: 10,
              border: "none",
              borderRadius: 50,
              background: "#ff5722",
              color: "white",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Add to Cart +
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              background: "#fff3ef",
              borderRadius: 50,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => onChangeQty(item.id, -1)}
              style={{
                flex: 1,
                padding: "10px 0",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: 18,
                fontWeight: 700,
                color: "#ff5722",
              }}
            >
              −
            </button>
            <span
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: "#111827",
                minWidth: 28,
                textAlign: "center",
              }}
            >
              {cartQty}
            </span>
            <button
              onClick={() => onChangeQty(item.id, 1)}
              style={{
                flex: 1,
                padding: "10px 0",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: 18,
                fontWeight: 700,
                color: "#ff5722",
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ══════════ HOME PAGE ══════════
function HomePage({
  cart,
  wishlist,
  onAdd,
  onChangeQty,
  onWishlist,
  searchVal,
  onBrowseRestaurants,
}) {
  const [foodCat, setFoodCat] = useState("all");
  const [foodSort, setFoodSort] = useState("default");
  const menuRef = useRef(null);

  const categories = [
    { val: "all", label: "🍽️ All" },
    { val: "burger", label: "🍔 Burgers" },
    { val: "pizza", label: "🍕 Pizza" },
    { val: "biryani", label: "🍛 Biryani" },
    { val: "pasta", label: "🍝 Pasta" },
    { val: "chinese", label: "🥡 Chinese" },
    { val: "dessert", label: "🧁 Desserts" },
    { val: "drinks", label: "🧃 Drinks" },
    { val: "snacks", label: "🍟 Snacks" },
  ];

  let data = [...allFoodItems];
  if (searchVal) {
    const q = searchVal.toLowerCase();
    data = data.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.desc.toLowerCase().includes(q) ||
        f.cat.includes(q) ||
        f.restName.toLowerCase().includes(q),
    );
  }
  if (foodCat !== "all") data = data.filter((f) => f.cat === foodCat);
  if (foodSort === "price-asc") data.sort((a, b) => a.price - b.price);
  else if (foodSort === "price-desc") data.sort((a, b) => b.price - a.price);
  else if (foodSort === "rating") data.sort((a, b) => b.rating - a.rating);

  return (
    <div>
      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.52),rgba(0,0,0,0.28)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836') center/cover no-repeat",
          minHeight: 420,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: 50,
            padding: "6px 18px",
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 16,
          }}
        >
          🔥 Free delivery on first 3 orders
        </div>
        <h2
          style={{
            fontSize: "clamp(30px,5vw,54px)",
            fontWeight: 800,
            marginBottom: 12,
            textShadow: "0 3px 10px rgba(0,0,0,0.4)",
            lineHeight: 1.1,
          }}
        >
          Delicious Food,
          <br />
          Delivered Fast 🚀
        </h2>
        <p
          style={{
            fontSize: 17,
            marginBottom: 26,
            fontWeight: 500,
            textShadow: "0 1px 4px rgba(0,0,0,0.4)",
          }}
        >
          Fresh meals from 50+ local restaurants — at your door in 30 min
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() =>
              menuRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "14px 28px",
              border: "none",
              borderRadius: 50,
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 700,
              background: "#ff5722",
              color: "white",
              boxShadow: "0 6px 20px rgba(255,87,34,0.5)",
            }}
          >
            Order Now
          </button>
          <button
            onClick={onBrowseRestaurants}
            style={{
              padding: "14px 28px",
              border: "2px solid rgba(255,255,255,0.5)",
              borderRadius: 50,
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 700,
              background: "rgba(255,255,255,0.15)",
              color: "white",
              backdropFilter: "blur(8px)",
            }}
          >
            Browse Restaurants
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <div style={{ padding: "26px 36px 0", maxWidth: 1200, margin: "auto" }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#6b7280",
            textTransform: "uppercase",
            letterSpacing: 1,
            marginBottom: 12,
          }}
        >
          Browse by Category
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            overflowX: "auto",
            paddingBottom: 4,
            scrollbarWidth: "none",
          }}
        >
          {categories.map((c) => (
            <div
              key={c.val}
              onClick={() => setFoodCat(c.val)}
              style={{
                padding: "8px 18px",
                borderRadius: 50,
                border: `2px solid ${foodCat === c.val ? "#ff5722" : "#e5e7eb"}`,
                background: foodCat === c.val ? "#ff5722" : "white",
                color: foodCat === c.val ? "white" : "#111827",
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontWeight: 600,
                fontSize: 13,
                flexShrink: 0,
                transition: "0.2s",
              }}
            >
              {c.label}
            </div>
          ))}
        </div>
      </div>

      {/* FOOD GRID */}
      <section
        ref={menuRef}
        style={{ padding: "24px 36px", maxWidth: 1200, margin: "auto" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <h2 style={{ fontSize: 26 }}>Popular Dishes</h2>
          <select
            value={foodSort}
            onChange={(e) => setFoodSort(e.target.value)}
            style={{
              padding: "8px 16px",
              borderRadius: 50,
              border: "2px solid #e5e7eb",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
              outline: "none",
              background: "white",
            }}
          >
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
        {data.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ fontSize: 52 }}>😔</div>
            <p style={{ color: "#6b7280", marginTop: 10 }}>
              No dishes found. Try a different search!
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr))",
              gap: 20,
            }}
          >
            {data.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                cartQty={cart[item.id] || 0}
                onAdd={onAdd}
                onChangeQty={onChangeQty}
                isWished={wishlist.has(item.id)}
                onWishlist={onWishlist}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

// ══════════ RESTAURANTS PAGE ══════════
function RestaurantsPage({ onOpenRestaurant, reviews, searchVal }) {
  const [filter, setFilter] = useState("all");

  const filters = [
    { val: "all", label: "All" },
    { val: "indian", label: "🍛 Indian" },
    { val: "fastfood", label: "🍔 Fast Food" },
    { val: "pizza", label: "🍕 Pizza" },
    { val: "chinese", label: "🥡 Chinese" },
    { val: "dessert", label: "🧁 Desserts" },
    { val: "multicuisine", label: "🌍 Multi-cuisine" },
    { val: "open", label: "🟢 Open Now" },
    { val: "top", label: "⭐ Top Rated" },
  ];

  let data = [...restaurantsData];
  if (searchVal) {
    const q = searchVal.toLowerCase();
    data = data.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }
  if (filter === "open") data = data.filter((r) => r.open);
  else if (filter === "top") data = data.filter((r) => r.rating >= 4.6);
  else if (filter !== "all") data = data.filter((r) => r.type === filter);

  return (
    <div style={{ padding: "28px 36px", maxWidth: 1200, margin: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 14,
          marginBottom: 24,
        }}
      >
        <h2 style={{ fontSize: 26 }}>All Restaurants</h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {filters.map((f) => (
            <div
              key={f.val}
              onClick={() => setFilter(f.val)}
              style={{
                padding: "8px 16px",
                borderRadius: 50,
                border: `2px solid ${filter === f.val ? "#ff5722" : "#e5e7eb"}`,
                background: filter === f.val ? "#ff5722" : "white",
                color: filter === f.val ? "white" : "#111827",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 13,
                transition: "0.2s",
              }}
            >
              {f.label}
            </div>
          ))}
        </div>
      </div>
      {data.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <div style={{ fontSize: 52 }}>🏪</div>
          <p style={{ color: "#6b7280", marginTop: 10 }}>
            No restaurants found
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
            gap: 20,
          }}
        >
          {data.map((r) => (
            <div
              key={r.id}
              onClick={() => onOpenRestaurant(r.id)}
              style={{
                background: "white",
                borderRadius: 16,
                boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(0,0,0,0.13)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.07)";
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  onError={(e) => (e.target.src = FALLBACK_IMG)}
                  style={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {r.promo && (
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      background: "#ff5722",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: 50,
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    🔖 {r.promo}
                  </div>
                )}
                <div
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    background: "rgba(0,0,0,0.65)",
                    backdropFilter: "blur(4px)",
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: 50,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  ⏱ {r.time}
                </div>
              </div>
              <div style={{ padding: 14 }}>
                <h3 style={{ fontSize: 16, marginBottom: 4 }}>{r.name}</h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <span style={{ color: "#6b7280", fontSize: 13 }}>
                    {r.cuisine}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: r.open ? "#15803d" : "#b91c1c",
                    }}
                  >
                    {r.open ? "● Open" : "● Closed"}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                    marginBottom: 10,
                  }}
                >
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "#f4f6f8",
                        color: "#6b7280",
                        padding: "3px 10px",
                        borderRadius: 50,
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{ fontWeight: 700, color: "#f59e0b", fontSize: 14 }}
                  >
                    ★ {r.rating}{" "}
                    <span style={{ color: "#6b7280", fontWeight: 400 }}>
                      ({r.reviews + (reviews[r.id]?.length || 0)})
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: "#6b7280" }}>
                    ₹{r.costForTwo} for two
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ══════════ RESTAURANT DETAIL ══════════
const CAT_MAP = {
  snacks: "Starters & Snacks",
  burger: "Starters & Snacks",
  biryani: "Rice & Biryani",
  chinese: "Noodles & Pasta",
  pasta: "Noodles & Pasta",
  pizza: "Pizza",
  dessert: "Desserts",
  drinks: "Beverages",
};
const CATS = [
  "Starters & Snacks",
  "Main Course",
  "Rice & Biryani",
  "Noodles & Pasta",
  "Pizza",
  "Desserts",
  "Beverages",
];

function RestaurantDetail({
  restId,
  cart,
  onAdd,
  onChangeQty,
  onBack,
  reviews,
  onOpenReview,
  isLoggedIn,
}) {
  const rest = restaurantsData.find((r) => r.id === restId);
  const items = allFoodItems.filter((f) => f.restId === restId);
  const restReviews = reviews[restId] || [];

  const grouped = {};
  CATS.forEach((c) => (grouped[c] = []));
  items.forEach((item) => {
    const b = CAT_MAP[item.cat] || "Main Course";
    grouped[b].push(item);
  });
  const filledCats = CATS.filter((c) => grouped[c].length);

  const avgRating = restReviews.length
    ? (
        restReviews.reduce((s, r) => s + r.rating, 0) / restReviews.length
      ).toFixed(1)
    : rest.rating;

  return (
    <div>
      <button
        onClick={onBack}
        style={{
          margin: "16px 36px 0",
          padding: "9px 20px",
          borderRadius: 50,
          border: "2px solid #e5e7eb",
          background: "white",
          cursor: "pointer",
          fontWeight: 700,
          fontSize: 14,
          color: "#111827",
        }}
      >
        ← Back to Restaurants
      </button>
      <div style={{ position: "relative", margin: "16px 36px 0" }}>
        <img
          src={rest.coverImg}
          alt={rest.name}
          onError={(e) => (e.target.src = rest.img)}
          style={{
            width: "100%",
            height: 280,
            objectFit: "cover",
            borderRadius: 20,
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "28px 32px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: 32,
              fontWeight: 800,
              marginBottom: 10,
            }}
          >
            {rest.name}
          </h1>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              `⭐ ${avgRating} (${rest.reviews + restReviews.length} reviews)`,
              rest.cuisine,
              `⏱ ${rest.time}`,
              `₹${rest.costForTwo} for two`,
            ].map((b) => (
              <span
                key={b}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                  color: "white",
                  padding: "5px 13px",
                  borderRadius: 50,
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "16px auto",
          padding: "0 36px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <p
          style={{
            color: "#6b7280",
            fontSize: 14,
            maxWidth: 600,
            lineHeight: 1.6,
          }}
        >
          {rest.desc}
          <br />
          <br />
          📍 <strong>{rest.address}</strong>
        </p>
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {rest.promo && (
            <span
              style={{
                background: "#fff3ef",
                color: "#ff5722",
                padding: "6px 14px",
                borderRadius: 50,
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              🔖 {rest.promo}
            </span>
          )}
          <span
            style={{
              background: rest.open ? "#dcfce7" : "#fee2e2",
              color: rest.open ? "#15803d" : "#b91c1c",
              padding: "6px 14px",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            {rest.open ? "● Open Now" : "● Currently Closed"}
          </span>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 36px 40px",
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: 28,
        }}
      >
        {/* Sidebar */}
        <nav style={{ position: "sticky", top: 80, alignSelf: "start" }}>
          <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>
            Menu
          </h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {filledCats.map((cat) => (
              <li
                key={cat}
                onClick={() =>
                  document
                    .getElementById(`sec-${cat}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                style={{
                  padding: "8px 12px",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#6b7280",
                  transition: "0.2s",
                  marginBottom: 2,
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#fff3ef";
                  e.target.style.color = "#ff5722";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "";
                  e.target.style.color = "#6b7280";
                }}
              >
                {cat}
              </li>
            ))}
          </ul>
          <div
            style={{
              marginTop: 20,
              paddingTop: 16,
              borderTop: "1px solid #f0f0f0",
            }}
          >
            <button
              onClick={() => onOpenReview(restId)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 50,
                border: "none",
                background: "linear-gradient(135deg,#ff5722,#ff784e)",
                color: "white",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              ✍️ Write Review
            </button>
          </div>
        </nav>

        {/* Menu Content */}
        <div>
          {filledCats.map((cat) => (
            <div key={cat} id={`sec-${cat}`} style={{ marginBottom: 32 }}>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 14,
                  paddingBottom: 8,
                  borderBottom: "2px solid #f4f6f8",
                }}
              >
                {cat}
              </h3>
              {grouped[cat].map((item) => {
                const qty = cart[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      gap: 14,
                      padding: "14px 0",
                      borderBottom: "1px solid #f4f6f8",
                      alignItems: "flex-start",
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      onError={(e) => (e.target.src = FALLBACK_IMG)}
                      style={{
                        width: 90,
                        height: 90,
                        objectFit: "cover",
                        borderRadius: 12,
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          marginBottom: 3,
                        }}
                      >
                        <span
                          style={{
                            padding: "2px 8px",
                            borderRadius: 50,
                            fontSize: 10,
                            fontWeight: 700,
                            background:
                              item.type === "veg" ? "#dcfce7" : "#fee2e2",
                            color: item.type === "veg" ? "#15803d" : "#b91c1c",
                          }}
                        >
                          {item.type === "veg" ? "🌿" : "🍗"}
                        </span>
                        <h5 style={{ fontSize: 14, fontWeight: 700 }}>
                          {item.name}
                        </h5>
                      </div>
                      <p
                        style={{
                          color: "#6b7280",
                          fontSize: 12,
                          lineHeight: 1.5,
                          marginBottom: 8,
                        }}
                      >
                        {item.desc}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontWeight: 700,
                              color: "#ff5722",
                              fontSize: 15,
                            }}
                          >
                            ₹{item.price}
                          </div>
                          <div style={{ fontSize: 11, color: "#6b7280" }}>
                            ⭐ {item.rating} • ⏱ {item.time}
                          </div>
                        </div>
                        {qty === 0 ? (
                          <button
                            onClick={() => onAdd(item.id)}
                            style={{
                              padding: "7px 18px",
                              borderRadius: 50,
                              border: "2px solid #ff5722",
                              background: "white",
                              color: "#ff5722",
                              fontWeight: 700,
                              fontSize: 13,
                              cursor: "pointer",
                            }}
                          >
                            Add +
                          </button>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0,
                              background: "#fff3ef",
                              borderRadius: 50,
                              overflow: "hidden",
                            }}
                          >
                            <button
                              onClick={() => onChangeQty(item.id, -1)}
                              style={{
                                padding: "6px 12px",
                                border: "none",
                                background: "transparent",
                                color: "#ff5722",
                                fontWeight: 700,
                                fontSize: 16,
                                cursor: "pointer",
                              }}
                            >
                              −
                            </button>
                            <span
                              style={{
                                fontWeight: 700,
                                fontSize: 14,
                                minWidth: 22,
                                textAlign: "center",
                              }}
                            >
                              {qty}
                            </span>
                            <button
                              onClick={() => onChangeQty(item.id, 1)}
                              style={{
                                padding: "6px 12px",
                                border: "none",
                                background: "transparent",
                                color: "#ff5722",
                                fontWeight: 700,
                                fontSize: 16,
                                cursor: "pointer",
                              }}
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          {/* Reviews */}
          <div style={{ marginTop: 16 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>
                Reviews ({rest.reviews + restReviews.length})
              </h3>
              <button
                onClick={() => onOpenReview(restId)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 50,
                  border: "2px solid #ff5722",
                  background: "none",
                  color: "#ff5722",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                + Add Review
              </button>
            </div>
            {restReviews.length === 0 ? (
              <p style={{ color: "#6b7280", fontSize: 14 }}>
                No reviews yet. Be the first to review!
              </p>
            ) : (
              restReviews.map((rv, i) => (
                <div
                  key={i}
                  style={{
                    background: "white",
                    borderRadius: 14,
                    padding: "14px 16px",
                    marginBottom: 12,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 6,
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>
                        {rv.name}
                      </div>
                      <div style={{ color: "#f59e0b", fontSize: 14 }}>
                        {"★".repeat(rv.rating)}
                        {"☆".repeat(5 - rv.rating)}
                      </div>
                    </div>
                    <div style={{ color: "#6b7280", fontSize: 12 }}>
                      {rv.date}
                    </div>
                  </div>
                  <div style={{ color: "#374151", fontSize: 14 }}>
                    {rv.text}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════ CART PANEL ══════════
function CartPanel({
  open,
  onClose,
  cart,
  onChangeQty,
  onRemove,
  studentDiscount,
  onProceed,
}) {
  const { subtotal, deliveryFee, taxes, discountAmt, total } = getCartTotals(
    cart,
    studentDiscount,
  );
  const keys = Object.keys(cart);

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 999,
          }}
        />
      )}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: 380,
          height: "100vh",
          background: "white",
          boxShadow: "-4px 0 24px rgba(0,0,0,0.12)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
        }}
      >
        <div
          style={{
            padding: "18px 20px",
            borderBottom: "1px solid #f0f0f0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 700 }}>🛒 Your Cart</h3>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: 18,
              cursor: "pointer",
              color: "#6b7280",
            }}
          >
            ✖
          </button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "12px 20px" }}>
          {keys.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <div style={{ fontSize: 52 }}>🛒</div>
              <p style={{ color: "#6b7280", marginTop: 12 }}>
                Your cart is empty.
                <br />
                Add some delicious food!
              </p>
            </div>
          ) : (
            keys.map((id) => {
              const item = allFoodItems.find((f) => f.id == id),
                qty = cart[id];
              return (
                <div
                  key={id}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom: "1px solid #f4f6f8",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h5 style={{ fontWeight: 700, fontSize: 14 }}>
                      {item.name}
                    </h5>
                    <div style={{ color: "#6b7280", fontSize: 12 }}>
                      from {item.restName}
                    </div>
                    <div
                      style={{
                        color: "#ff5722",
                        fontWeight: 600,
                        fontSize: 13,
                        marginTop: 2,
                      }}
                    >
                      ₹{item.price} × {qty} = ₹{item.price * qty}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0,
                      background: "#fff3ef",
                      borderRadius: 50,
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => onChangeQty(id, -1)}
                      style={{
                        padding: "4px 10px",
                        border: "none",
                        background: "transparent",
                        color: "#ff5722",
                        fontWeight: 700,
                        fontSize: 15,
                        cursor: "pointer",
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: 13,
                        minWidth: 20,
                        textAlign: "center",
                      }}
                    >
                      {qty}
                    </span>
                    <button
                      onClick={() => onChangeQty(id, 1)}
                      style={{
                        padding: "4px 10px",
                        border: "none",
                        background: "transparent",
                        color: "#ff5722",
                        fontWeight: 700,
                        fontSize: 15,
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => onRemove(id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#9ca3af",
                      fontSize: 14,
                      cursor: "pointer",
                      padding: "2px 4px",
                    }}
                  >
                    ✕
                  </button>
                </div>
              );
            })
          )}
        </div>
        {keys.length > 0 && (
          <div style={{ borderTop: "1px solid #f0f0f0", padding: "16px 20px" }}>
            {studentDiscount && (
              <div
                style={{
                  background: "#dcfce7",
                  color: "#15803d",
                  padding: "8px 12px",
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: 13,
                  marginBottom: 12,
                }}
              >
                🎓 Student discount active — saving ₹{discountAmt}
              </div>
            )}
            {[
              ["Subtotal", `₹${subtotal}`],
              ["Delivery", deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`],
              ["GST (5%)", `₹${taxes}`],
            ].map(([l, v]) => (
              <div
                key={l}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 13,
                  color: "#6b7280",
                  marginBottom: 6,
                }}
              >
                <span>{l}</span>
                <span style={{ color: v === "FREE" ? "#22c55e" : undefined }}>
                  {v}
                </span>
              </div>
            ))}
            {discountAmt > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 13,
                  color: "#22c55e",
                  marginBottom: 6,
                }}
              >
                <span>🎓 Student Discount</span>
                <span>−₹{discountAmt}</span>
              </div>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: 700,
                fontSize: 17,
                borderTop: "2px dashed #e5e7eb",
                paddingTop: 10,
                marginTop: 6,
              }}
            >
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button
              onClick={onProceed}
              style={{
                width: "100%",
                padding: 13,
                borderRadius: 50,
                border: "none",
                background: "linear-gradient(135deg,#ff5722,#ff784e)",
                color: "white",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                marginTop: 14,
              }}
            >
              Proceed to Pay →
            </button>
          </div>
        )}
      </div>
    </>
  );
}

// ══════════ SIGN IN MODAL ══════════
function SignInModal({ open, onClose, onLogin }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpErr, setOtpErr] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [resendSecs, setResendSecs] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    setResendSecs(30);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () =>
        setResendSecs((s) => {
          if (s <= 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return s - 1;
        }),
      1000,
    );
  }, []);

  const sendOTP = () => {
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      setPhoneErr(true);
      return;
    }
    setPhoneErr(false);
    const g = String(Math.floor(1000 + Math.random() * 9000));
    setGeneratedOtp(g);
    setTimeout(() => setOtp(g.split("")), 1500);
    setStep(2);
    startTimer();
  };

  const verifyOTP = () => {
    if (otp.join("") !== generatedOtp) {
      setOtpErr(true);
      return;
    }
    setOtpErr(false);
    setStep(3);
    onLogin(phone);
  };

  const resend = () => {
    const g = String(Math.floor(1000 + Math.random() * 9000));
    setGeneratedOtp(g);
    setTimeout(() => setOtp(g.split("")), 1500);
    startTimer();
  };

  const handleClose = () => {
    setStep(1);
    setPhone("");
    setOtp(["", "", "", ""]);
    onClose();
  };

  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 24,
          padding: 32,
          width: "100%",
          maxWidth: 420,
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            fontSize: 18,
            cursor: "pointer",
            color: "#6b7280",
          }}
        >
          ✕
        </button>
        {step === 1 && (
          <div>
            <div style={{ display: "flex", gap: 7, marginBottom: 20 }}>
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  style={{
                    width: s === 1 ? 24 : 8,
                    height: 8,
                    borderRadius: s === 1 ? 4 : "50%",
                    background: s === 1 ? "#ff5722" : "#e5e7eb",
                    transition: "0.3s",
                  }}
                />
              ))}
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>
              Welcome Back 👋
            </h2>
            <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 20 }}>
              Enter your phone number to continue
            </p>
            <label
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 5,
              }}
            >
              Phone Number
            </label>
            <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
              <div
                style={{
                  padding: "12px 13px",
                  borderRadius: 12,
                  border: "2px solid #e5e7eb",
                  fontWeight: 700,
                  fontSize: 14,
                  background: "#f9fafb",
                  flexShrink: 0,
                }}
              >
                🇮🇳 +91
              </div>
              <input
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                placeholder="10-digit mobile number"
                maxLength={10}
                style={{
                  flex: 1,
                  padding: "12px 15px",
                  borderRadius: 12,
                  border: `2px solid ${phoneErr ? "#ef4444" : "#e5e7eb"}`,
                  fontSize: 14,
                  outline: "none",
                }}
              />
            </div>
            {phoneErr && (
              <div
                style={{
                  color: "#ef4444",
                  fontSize: 12,
                  marginTop: -10,
                  marginBottom: 10,
                }}
              >
                Enter a valid 10-digit number
              </div>
            )}
            <button
              onClick={sendOTP}
              style={{
                width: "100%",
                padding: 13,
                borderRadius: 50,
                border: "none",
                background: "linear-gradient(135deg,#ff5722,#ff784e)",
                color: "white",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                marginTop: 8,
              }}
            >
              Send OTP 📲
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <div style={{ display: "flex", gap: 7, marginBottom: 20 }}>
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  style={{
                    width: s === 2 ? 24 : 8,
                    height: 8,
                    borderRadius: s === 2 ? 4 : "50%",
                    background: s <= 2 ? "#ff5722" : "#e5e7eb",
                    transition: "0.3s",
                  }}
                />
              ))}
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>
              Verify OTP 🔐
            </h2>
            <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 6 }}>
              OTP sent to +91 {phone.slice(0, 5)}XXXXX
            </p>
            <p
              style={{
                color: "#ff5722",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              Demo OTP: {generatedOtp}
            </p>
            <label
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              Enter 4-digit OTP
            </label>
            <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
              {otp.map((v, i) => (
                <input
                  key={i}
                  value={v}
                  maxLength={1}
                  onChange={(e) => {
                    const n = [...otp];
                    n[i] = e.target.value.replace(/\D/g, "");
                    setOtp(n);
                    if (e.target.value && i < 3)
                      document.getElementById(`otp-${i + 1}`)?.focus();
                  }}
                  id={`otp-${i}`}
                  style={{
                    width: 52,
                    height: 52,
                    textAlign: "center",
                    borderRadius: 12,
                    border: `2px solid ${otpErr ? "#ef4444" : "#e5e7eb"}`,
                    fontSize: 20,
                    fontWeight: 700,
                    outline: "none",
                  }}
                />
              ))}
            </div>
            {otpErr && (
              <div style={{ color: "#ef4444", fontSize: 12, marginBottom: 10 }}>
                Incorrect OTP. Please try again.
              </div>
            )}
            <div
              style={{
                textAlign: "center",
                fontSize: 13,
                color: "#6b7280",
                marginBottom: 14,
              }}
            >
              {resendSecs > 0 ? (
                `Resend in ${resendSecs}s`
              ) : (
                <span
                  onClick={resend}
                  style={{
                    color: "#ff5722",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Resend OTP
                </span>
              )}
            </div>
            <button
              onClick={verifyOTP}
              style={{
                width: "100%",
                padding: 13,
                borderRadius: 50,
                border: "none",
                background: "linear-gradient(135deg,#ff5722,#ff784e)",
                color: "white",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Verify OTP ✓
            </button>
          </div>
        )}
        {step === 3 && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                fontSize: 60,
                marginBottom: 14,
                animation: "bounce 0.6s ease",
              }}
            >
              🎉
            </div>
            <h3 style={{ fontSize: 21, fontWeight: 800, marginBottom: 7 }}>
              You're logged in!
            </h3>
            <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 22 }}>
              Welcome to MealMate. Enjoy your meal!
            </p>
            <button
              onClick={handleClose}
              style={{
                width: "100%",
                padding: 13,
                borderRadius: 50,
                border: "none",
                background: "linear-gradient(135deg,#ff5722,#ff784e)",
                color: "white",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Start Ordering 🍕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ══════════ OFFERS MODAL ══════════
function OffersModal({
  open,
  onClose,
  studentDiscount,
  studentInfo,
  onVerify,
  onRemove,
}) {
  const [reg, setReg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const VIT_REG = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;

  const verify = () => {
    const e = {};
    if (!VIT_REG.test(reg))
      e.reg = "Format: 2-digit year + 3-letter branch + 4 digits";
    if (name.length < 2) e.name = "Please enter your name";
    if (!email.endsWith("@vit.ac.in")) e.email = "Must be a @vit.ac.in email";
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    onVerify({ reg, name, email });
  };

  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 24,
          padding: 32,
          width: "100%",
          maxWidth: 420,
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            fontSize: 18,
            cursor: "pointer",
            color: "#6b7280",
          }}
        >
          ✕
        </button>
        <div
          style={{
            background: "linear-gradient(135deg,#ff5722,#ff784e)",
            borderRadius: 16,
            padding: 22,
            textAlign: "center",
            color: "white",
            marginBottom: 20,
          }}
        >
          <div style={{ fontSize: 44, marginBottom: 8 }}>🎓</div>
          <div
            style={{
              display: "inline-block",
              background: "white",
              color: "#ff5722",
              padding: "3px 14px",
              borderRadius: 50,
              fontWeight: 800,
              fontSize: 17,
              marginBottom: 8,
            }}
          >
            10% OFF
          </div>
          <h3 style={{ fontSize: 19, marginBottom: 5 }}>
            Student Special Offer
          </h3>
          <p style={{ fontSize: 13, opacity: 0.9 }}>
            Exclusive discount for verified VIT students
          </p>
        </div>
        {!studentDiscount ? (
          <div>
            <div
              style={{
                background: "#fafafa",
                borderRadius: 14,
                padding: 16,
                marginBottom: 14,
              }}
            >
              <h4 style={{ marginBottom: 12, fontSize: 15 }}>
                🏫 VIT Student Verification
              </h4>
              {[
                {
                  label: "VIT Registration Number",
                  val: reg,
                  set: (v) => setReg(v.toUpperCase()),
                  ph: "e.g. 21BEC1234",
                  err: errors.reg,
                  max: 10,
                },
                {
                  label: "Full Name",
                  val: name,
                  set: setName,
                  ph: "Your full name",
                  err: errors.name,
                },
                {
                  label: "VIT Email",
                  val: email,
                  set: setEmail,
                  ph: "yourname@vit.ac.in",
                  err: errors.email,
                  type: "email",
                },
              ].map((f) => (
                <div key={f.label} style={{ marginBottom: 14 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 600,
                      marginBottom: 5,
                    }}
                  >
                    {f.label}
                  </label>
                  <input
                    value={f.val}
                    onChange={(e) => f.set(e.target.value)}
                    placeholder={f.ph}
                    maxLength={f.max}
                    type={f.type || "text"}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: 12,
                      border: `2px solid ${f.err ? "#ef4444" : "#e5e7eb"}`,
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                  {f.err && (
                    <div
                      style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}
                    >
                      {f.err}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={verify}
              style={{
                width: "100%",
                padding: 13,
                borderRadius: 50,
                border: "none",
                background: "linear-gradient(135deg,#ff5722,#ff784e)",
                color: "white",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Verify Student Status 🎓
            </button>
          </div>
        ) : (
          <div>
            <div
              style={{
                background: "#dcfce7",
                border: "1px solid #bbf7d0",
                color: "#15803d",
                padding: "11px 14px",
                borderRadius: 12,
                fontWeight: 600,
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                gap: 9,
                marginTop: 10,
              }}
            >
              <span style={{ fontSize: 22 }}>✅</span>
              <div>
                <div>Student Verified! 10% discount active</div>
                <div style={{ fontSize: 12, fontWeight: 400, marginTop: 2 }}>
                  {studentInfo?.name} • {studentInfo?.reg}
                </div>
              </div>
            </div>
            <button
              onClick={onRemove}
              style={{
                width: "100%",
                padding: 11,
                borderRadius: 50,
                border: "2px solid #ff5722",
                background: "transparent",
                color: "#ff5722",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                marginTop: 12,
              }}
            >
              Remove Discount
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ══════════ REVIEW MODAL ══════════
function ReviewModal({ open, onClose, restId, isLoggedIn, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [errors, setErrors] = useState({});
  const rest = restaurantsData.find((r) => r.id === restId);

  const submit = () => {
    const e = {};
    if (!rating) e.rating = "Please select a rating";
    if (text.length < 10) e.text = "Please write at least 10 characters";
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    onSubmit(restId, rating, text);
    setRating(0);
    setText("");
    setErrors({});
    onClose();
  };

  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 24,
          padding: 32,
          width: "100%",
          maxWidth: 420,
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            fontSize: 18,
            cursor: "pointer",
            color: "#6b7280",
          }}
        >
          ✕
        </button>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>
          Write a Review ✍️
        </h2>
        <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 20 }}>
          For: {rest?.name}
        </p>
        <label
          style={{
            display: "block",
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          Your Rating
        </label>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              onClick={() => setRating(s)}
              style={{
                fontSize: 28,
                cursor: "pointer",
                color: s <= rating ? "#f59e0b" : "#d1d5db",
                transition: "0.15s",
              }}
            >
              ★
            </span>
          ))}
        </div>
        {errors.rating && (
          <div style={{ color: "#ef4444", fontSize: 12, marginBottom: 10 }}>
            {errors.rating}
          </div>
        )}
        <label
          style={{
            display: "block",
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 5,
          }}
        >
          Your Review
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          placeholder="Share your experience..."
          style={{
            width: "100%",
            padding: "12px 15px",
            borderRadius: 12,
            border: `2px solid ${errors.text ? "#ef4444" : "#e5e7eb"}`,
            fontSize: 14,
            resize: "none",
            outline: "none",
          }}
        />
        {errors.text && (
          <div
            style={{
              color: "#ef4444",
              fontSize: 12,
              marginTop: 4,
              marginBottom: 6,
            }}
          >
            {errors.text}
          </div>
        )}
        <button
          onClick={submit}
          style={{
            width: "100%",
            padding: 13,
            borderRadius: 50,
            border: "none",
            background: "linear-gradient(135deg,#ff5722,#ff784e)",
            color: "white",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            marginTop: 8,
          }}
        >
          Submit Review 🌟
        </button>
      </div>
    </div>
  );
}

// ══════════ CHECKOUT MODAL ══════════
function CheckoutModal({ open, onClose, cart, studentDiscount, onSuccess }) {
  const [payment, setPayment] = useState("upi");
  const [address, setAddress] = useState("");
  const [addrErr, setAddrErr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [eta, setEta] = useState(0);
  const { subtotal, deliveryFee, taxes, discountAmt, total } = getCartTotals(
    cart,
    studentDiscount,
  );

  const items = Object.entries(cart).map(([id, qty]) => {
    const item = allFoodItems.find((f) => f.id == id);
    return { item, qty };
  });

  const place = () => {
    if (address.length < 10) {
      setAddrErr(true);
      return;
    }
    setAddrErr(false);
    const e = Math.floor(25 + Math.random() * 15);
    setEta(e);
    setSuccess(true);
  };

  const close = () => {
    setSuccess(false);
    setAddress("");
    onClose();
    onSuccess();
  };

  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 24,
          padding: 32,
          width: "100%",
          maxWidth: 480,
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={close}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            fontSize: 18,
            cursor: "pointer",
            color: "#6b7280",
          }}
        >
          ✕
        </button>
        {!success ? (
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6 }}>
              Final Bill 🧾
            </h2>
            <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 20 }}>
              Review your order before paying
            </p>
            <div
              style={{
                background: "#fafafa",
                borderRadius: 14,
                padding: 14,
                marginBottom: 14,
              }}
            >
              <h4 style={{ fontWeight: 700, marginBottom: 10 }}>
                Order Summary
              </h4>
              {items.map(({ item, qty }) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 13,
                    marginBottom: 7,
                  }}
                >
                  <span>
                    {item.name} × {qty}
                  </span>
                  <span>₹{item.price * qty}</span>
                </div>
              ))}
              <hr
                style={{
                  border: "none",
                  borderTop: "2px dashed #e5e7eb",
                  margin: "10px 0",
                }}
              />
              {[
                ["Subtotal", `₹${subtotal}`],
                ["Delivery", deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`],
                ["GST (5%)", `₹${taxes}`],
              ].map(([l, v]) => (
                <div
                  key={l}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 13,
                    color: "#6b7280",
                    marginBottom: 7,
                  }}
                >
                  <span>{l}</span>
                  <span style={{ color: v === "FREE" ? "#22c55e" : undefined }}>
                    {v}
                  </span>
                </div>
              ))}
              {discountAmt > 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 13,
                    color: "#22c55e",
                    marginBottom: 7,
                  }}
                >
                  <span>🎓 Student Discount</span>
                  <span>−₹{discountAmt}</span>
                </div>
              )}
              <hr
                style={{
                  border: "none",
                  borderTop: "2px dashed #e5e7eb",
                  margin: "10px 0",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 17,
                  fontWeight: 700,
                }}
              >
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
            {(discountAmt > 0 || deliveryFee === 0) && (
              <div
                style={{
                  background: "#dcfce7",
                  color: "#15803d",
                  padding: "7px 13px",
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: 13,
                  textAlign: "center",
                  marginBottom: 14,
                }}
              >
                {discountAmt > 0
                  ? `🎉 You're saving ₹${discountAmt} with student discount!`
                  : "🚚 Free delivery on this order!"}
              </div>
            )}
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 10 }}>
              Payment Method
            </h4>
            {[
              { val: "upi", icon: "📱", label: "UPI (GPay / PhonePe / Paytm)" },
              { val: "card", icon: "💳", label: "Credit / Debit Card" },
              { val: "cod", icon: "💵", label: "Cash on Delivery" },
            ].map((p) => (
              <div
                key={p.val}
                onClick={() => setPayment(p.val)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "11px 13px",
                  borderRadius: 12,
                  border: `2px solid ${payment === p.val ? "#ff5722" : "#e5e7eb"}`,
                  background: payment === p.val ? "#fff3ef" : "white",
                  marginBottom: 9,
                  cursor: "pointer",
                  transition: "0.2s",
                }}
              >
                <span style={{ fontSize: 20 }}>{p.icon}</span>
                <span style={{ fontWeight: 600, fontSize: 14 }}>{p.label}</span>
              </div>
            ))}
            <label
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 5,
              }}
            >
              Delivery Address
            </label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your full delivery address"
              style={{
                width: "100%",
                padding: "12px 15px",
                borderRadius: 12,
                border: `2px solid ${addrErr ? "#ef4444" : "#e5e7eb"}`,
                fontSize: 14,
                outline: "none",
                marginBottom: 4,
              }}
            />
            {addrErr && (
              <div style={{ color: "#ef4444", fontSize: 12, marginBottom: 8 }}>
                Please enter a delivery address (min 10 chars)
              </div>
            )}
            <button
              onClick={place}
              style={{
                width: "100%",
                padding: 13,
                borderRadius: 50,
                border: "none",
                background: "linear-gradient(135deg,#ff5722,#ff784e)",
                color: "white",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                marginTop: 8,
              }}
            >
              Place Order 🚀
            </button>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 60, marginBottom: 14 }}>🎊</div>
            <h3 style={{ fontSize: 21, fontWeight: 800, marginBottom: 7 }}>
              Order Placed!
            </h3>
            <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 16 }}>
              Your food is being prepared with love.
            </p>
            <div
              style={{
                background: "#f0fdf4",
                borderRadius: 14,
                padding: 14,
                margin: "14px 0",
              }}
            >
              {[
                ["Order Confirmed ✅", true, false],
                ["Kitchen Preparing... 👨‍🍳", false, true],
                ["Out for Delivery 🛵", false, false],
                ["Delivered 🏠", false, false],
              ].map(([label, done, active]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 13,
                    marginBottom: 11,
                  }}
                >
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: done
                        ? "#22c55e"
                        : active
                          ? "#ff5722"
                          : "#e5e7eb",
                      flexShrink: 0,
                      boxShadow: active
                        ? "0 0 0 3px rgba(255,87,34,0.2)"
                        : "none",
                    }}
                  />
                  {label}
                </div>
              ))}
            </div>
            <p style={{ fontWeight: 700, color: "#ff5722", marginBottom: 20 }}>
              Estimated delivery: {eta}–{eta + 5} minutes 🕐
            </p>
            <button
              onClick={close}
              style={{
                width: "100%",
                padding: 13,
                borderRadius: 50,
                border: "none",
                background: "linear-gradient(135deg,#ff5722,#ff784e)",
                color: "white",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Done 🎉
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ══════════ MAIN APP ══════════
export default function App() {
  const [page, setPage] = useState("home"); // home | restaurants | restdetail
  const [currentRestId, setCurrentRestId] = useState(null);
  const [searchVal, setSearchVal] = useState("");
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState(new Set());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInPhone, setLoggedInPhone] = useState("");
  const [studentDiscount, setStudentDiscount] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);
  const [reviews, setReviews] = useState({});
  const [toast, setToast] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [signinOpen, setSigninOpen] = useState(false);
  const [offersOpen, setOffersOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewRestId, setReviewRestId] = useState(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const toastTimer = useRef(null);

  const showToast = useCallback((msg, type = "success") => {
    setToast({ msg, type });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3500);
  }, []);

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const addToCart = useCallback(
    (id) => {
      setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
      const item = allFoodItems.find((f) => f.id === id);
      showToast(`${item.name} added 🛒`, "success");
    },
    [showToast],
  );

  const changeQty = useCallback((id, delta) => {
    setCart((c) => {
      const n = { ...c };
      n[id] = (n[id] || 0) + delta;
      if (n[id] <= 0) delete n[id];
      return n;
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((c) => {
      const n = { ...c };
      delete n[id];
      return n;
    });
  }, []);

  const toggleWishlist = useCallback(
    (id) => {
      setWishlist((w) => {
        const n = new Set(w);
        if (n.has(id)) {
          n.delete(id);
          showToast("Removed from wishlist", "info");
        } else {
          n.add(id);
          showToast("Added to wishlist ❤️", "success");
        }
        return n;
      });
    },
    [showToast],
  );

  const openSignIn = () => {
    if (isLoggedIn) {
      if (window.confirm(`Logged in as +91 ${loggedInPhone}. Log out?`)) {
        setIsLoggedIn(false);
        setLoggedInPhone("");
        showToast("Logged out 👋", "info");
      }
      return;
    }
    setSigninOpen(true);
  };

  const handleLogin = (phone) => {
    setIsLoggedIn(true);
    setLoggedInPhone(phone);
    showToast("Login successful! 🎉", "success");
  };

  const openReview = (restId) => {
    if (!isLoggedIn) {
      showToast("Please sign in to write a review!", "error");
      setSigninOpen(true);
      return;
    }
    setReviewRestId(restId);
    setReviewOpen(true);
  };

  const submitReview = (restId, rating, text) => {
    const date = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    setReviews((r) => ({
      ...r,
      [restId]: [
        ...(r[restId] || []),
        {
          name: `User +91 ${loggedInPhone.slice(0, 5)}...`,
          rating,
          text,
          date,
        },
      ],
    }));
    showToast("Review submitted! 🌟", "success");
  };

  const openCheckout = () => {
    if (!Object.keys(cart).length) {
      showToast("Your cart is empty!", "error");
      return;
    }
    if (!isLoggedIn) {
      showToast("Please sign in first!", "error");
      setSigninOpen(true);
      return;
    }
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart({});
    showToast("Enjoy your meal! 😋", "success");
  };

  const verifyStudent = (info) => {
    setStudentDiscount(true);
    setStudentInfo(info);
    showToast("Student verified! 10% discount applied 🎓", "success");
  };

  const removeStudentDiscount = () => {
    setStudentDiscount(false);
    setStudentInfo(null);
    showToast("Student discount removed", "info");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f8",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#111827",
      }}
    >
      <style>{`
        @keyframes slideIn { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        * { box-sizing: border-box; margin:0; padding:0; }
        h1,h2,h3,h4,h5 { font-family: Arial, Helvetica, sans-serif; }
        ::-webkit-scrollbar { display: none; }
      `}</style>

      <Header
        searchVal={searchVal}
        onSearch={setSearchVal}
        onHome={() => setPage("home")}
        onOffers={() => setOffersOpen(true)}
        onRestaurants={() => setPage("restaurants")}
        onSignIn={openSignIn}
        cartCount={cartCount}
        onCart={() => setCartOpen(true)}
        isLoggedIn={isLoggedIn}
        loggedInPhone={loggedInPhone}
      />

      {page === "home" && (
        <HomePage
          cart={cart}
          wishlist={wishlist}
          onAdd={addToCart}
          onChangeQty={changeQty}
          onWishlist={toggleWishlist}
          searchVal={searchVal}
          onBrowseRestaurants={() => setPage("restaurants")}
        />
      )}
      {page === "restaurants" && (
        <RestaurantsPage
          onOpenRestaurant={(id) => {
            setCurrentRestId(id);
            setPage("restdetail");
          }}
          reviews={reviews}
          searchVal={searchVal}
        />
      )}
      {page === "restdetail" && currentRestId && (
        <RestaurantDetail
          restId={currentRestId}
          cart={cart}
          onAdd={addToCart}
          onChangeQty={changeQty}
          onBack={() => setPage("restaurants")}
          reviews={reviews}
          onOpenReview={openReview}
          isLoggedIn={isLoggedIn}
        />
      )}

      <footer
        style={{
          background: "#1f2937",
          color: "#9ca3af",
          textAlign: "center",
          padding: 18,
          marginTop: 50,
          fontSize: 13,
        }}
      >
        © 2026 <span style={{ color: "#ff5722" }}>MealMate</span>. All rights
        reserved. Made with ❤️ for foodies.
      </footer>

      <CartPanel
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
        studentDiscount={studentDiscount}
        onProceed={openCheckout}
      />

      <SignInModal
        open={signinOpen}
        onClose={() => setSigninOpen(false)}
        onLogin={handleLogin}
      />
      <OffersModal
        open={offersOpen}
        onClose={() => setOffersOpen(false)}
        studentDiscount={studentDiscount}
        studentInfo={studentInfo}
        onVerify={verifyStudent}
        onRemove={removeStudentDiscount}
      />
      <ReviewModal
        open={reviewOpen}
        onClose={() => setReviewOpen(false)}
        restId={reviewRestId}
        isLoggedIn={isLoggedIn}
        onSubmit={submitReview}
      />
      <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cart={cart}
        studentDiscount={studentDiscount}
        onSuccess={handleOrderSuccess}
      />

      <Toast toast={toast} />
    </div>
  );
}
