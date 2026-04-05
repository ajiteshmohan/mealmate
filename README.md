# 🍽️ MealMate — Food Delivery Web App

A full-featured food delivery web application built with **React + Vite**. Browse restaurants, explore menus, manage your cart, and place orders — all in one seamless experience.

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/food-delivery-app.git

# Navigate into the project
cd food-delivery-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 📁 Project Structure

```
food-delivery-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx          # Main app component (all pages + logic)
│   ├── main.jsx         # React entry point
│   ├── index.css        # Global reset styles
│   └── App.css          # App-level styles
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## ✨ Features

### 🏠 Home Page
- Hero banner with call-to-action buttons
- Browse by category chips (Burgers, Pizza, Biryani, etc.)
- Food grid with sort (price, rating)
- Search across food items and restaurants

### 🏪 Restaurants Page
- Filter by cuisine type, open now, top rated
- Restaurant cards with ratings, delivery time, promo tags

### 🍛 Restaurant Detail Page
- Cover image with restaurant info overlay
- Grouped menu sections (Starters, Mains, Desserts, etc.)
- Sticky sidebar navigation
- Customer reviews section

### 🛒 Cart
- Slide-in cart panel
- Quantity controls, item removal
- Bill breakdown (subtotal, delivery, GST, discounts)
- Free delivery on orders above ₹300

### 🔐 Sign In
- Phone number + OTP flow (3 steps)
- Auto-fills demo OTP for easy testing

### 🎁 Offers
- VIT Student verification form
- 10% discount on verified student accounts

### ✍️ Reviews
- Star rating + text review
- Requires login to submit

### 🧾 Checkout
- Order summary with full bill
- Payment method selection (UPI, Card, COD)
- Delivery address input
- Order success screen with live tracking steps

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React 19 | UI framework |
| Vite 8 | Build tool & dev server |
| ESLint | Code linting |
| Inline CSS (style props) | Styling (no external CSS library) |

---

## 📦 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

---

## ⚙️ Configuration

### Fix Full-Width Layout
Vite's default CSS adds max-width constraints. Make sure your `src/index.css` contains:

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #root {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
```

And clear out `src/App.css` completely.

---

## 🗂️ Data

All food items (28) and restaurants (8) are stored as static arrays in `App.jsx`. No backend or API is required — the app is fully client-side.

---

## 🔮 Future Improvements

- [ ] Backend integration (Node.js / Firebase)
- [ ] User authentication with JWT
- [ ] Real OTP via SMS (Twilio / MSG91)
- [ ] Order history page
- [ ] Admin dashboard
- [ ] Dark mode
- [ ] Mobile responsive improvements

---

## 👨‍💻 Author

Built with ❤️ for foodies.

---

## 📄 License

This project is for educational purposes.
