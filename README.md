# 🍔 Food Delivery App – React Native & Sanity.io

A modern, high-performance food delivery application clone, built with **React Native (Expo)** and powered by **Sanity.io** as a Headless CMS.

This project delivers a seamless food ordering experience, featuring dynamic data fetching, real-time cart management, and a fully responsive design tailored for the Turkish market





---

## ✨ Features

### 🛠️ Backend & Content Management (Sanity.io)
*   **Headless CMS**: All categories, featured groups, restaurants, and dishes are managed via [Sanity Studio](https://www.sanity.io/).
*   **GROQ Queries**: High-performance data fetching with relationship resolving (dereferencing) for nested restaurant data.
*   **Dynamic Image Processing**: Uses `@sanity/image-url` to serve optimized, auto-scaled images directly from the Sanity CDN.
*   **Real-time Updates**: Reflect content changes (names, prices, descriptions) instantly in the app without redeploying.

### 🛍️ Core Functionality
*   **🏠 Dynamic Home Screen**: Fetches live categories and featured restaurant rows (e.g., "Fast Food", "Yakınındakiler").
*   **🍴 Detailed Restaurant Pages**: Displays restaurant info, ratings, and a complete menu list of dishes.
*   **🛒 Advanced Cart System**: Add/remove items with real-time quantity tracking and total price calculation.
*   **💰 Localized Pricing**: Full integration of **TL (Turkish Lira)** currency and Turkish labels ("Yakınında", "değerlendirme", "Menü").

### 🎨 UI/UX & Design
*   **📱 Fully Responsive Design**: Custom scaling utilities ensuring the UI looks premium on every device from small Androids to large iPhones.
*   **✨ Animations**: Integrated **Lottie** animations for order preparation and delivery bike simulation.
*   **📍 Map Integration**: Real-time delivery tracking screens using **react-native-maps**.
*   **Icons**: Sleek, vector icons powered by `react-native-feather`.

### ⚙️ State Management
*   **🔄 Redux**: Centralized state management for the shopping cart.
*   **🎯 Consistent ID Matching**: Optimized to work with Sanity's unique system fields (`_id`).

---

## 🛠️ Tech Stack

| Frontend | State Management | Backend (CMS) |
| :--- | :--- | :--- |
| **React Native (Expo ~54)** | **Redux (^5.0)** | **Sanity.io** |
| **React 19** | **React Redux** | **GROQ Query Language** |
| **React Navigation (^7.0)** | **Redux Thunk** | **Sanity CDN** |

**Other libraries**: `lottie-react-native`, `react-native-maps`, `react-native-svg`, `react-native-feather`.

---

## 💻 Quick Setup

### 1. Clone the repository
```bash
git clone [https://github.com/CoderRoninn/react-native-food-delivery]
cd food_delivery_app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Sanity (Optional)
The app is pre-configured to connect to the project dataset. To manage your own content:
*   Navigate to your sanity folder: `cd ../food-delivery-sanity`
*   Run the studio: `npm run dev`

### 4. Run the Mobile App
```bash
npm start
```
*   **Android**: Press `a` (or scan QR in Expo Go)
*   **iOS**: Press `i` (or scan QR in Expo Go)

---

## 📁 Project Structure

```text
food_delivery_full_stack_app/
├── food_delivery_app/        # Frontend: React Native (Expo)
│   ├── sanity.js             # Sanity client & image-url config
│   ├── redux/                # Redux state management
│   │   ├── actions/          # Cart actions
│   │   ├── reducers/         # Cart state logic
│   │   └── selectors/        # Data getters
│   ├── src/
│   │   ├── api/              # Sanity GROQ queries
│   │   ├── components/       # Reusable UI components
│   │   ├── navigator/        # Navigation logic
│   │   ├── screens/          # App screens
│   │   └── utils/            # Responsive scaling utilities
│   └── assets/               # Lottie & static assets
│
└── food_delivery_sanity/     # Backend: Sanity.io Studio (CMS)
    ├── schemaTypes/          # Data schemas (category, dish, featured, restaurant)
    ├── static/               # Sanity studio static assets
    ├── sanity.config.js      # Main project configuration
    └── package.json          # Sanity dependencies & scripts
```

---

## 📱 Responsive Design
The app uses a custom scaling system located in `src/utils/responsive.js`. It calculates dimensions based on a base width of 375px, ensuring consistent layouts across all screen resolutions and aspect ratios.

---

## 🤝 Contributing
This is an educational clone project developed to demonstrate best practices in React Native and Sanity.io integration. Suggestions, improvements, and contributions are welcome!




