# 🍕 Fast React Pizza

A fast and simple pizza ordering app where users can browse a menu, add items to their cart, and place orders without needing an account.

🔗 **Live Demo:** [fast-react-pizza-green-tau.vercel.app](https://fast-react-pizza-green-tau.vercel.app/)

---

## 📋 Overview

Fast React Pizza is a fully functional food ordering app built with React. Users can enter their name, browse the pizza menu, manage their cart, and place an order with optional priority delivery.

## ✨ Features

- Enter your name to get started — no sign-up required
- Browse a dynamic pizza menu
- Add / remove pizzas from the cart
- Place orders with name, phone number, and address
- Mark orders as **priority** for faster delivery
- Look up any order by order ID

## 🛠️ Tech Stack

- **React** — UI framework
- **React Router v6** — Client-side routing & data loading
- **Redux Toolkit** — Cart and user state management
- **Tailwind CSS** — Styling

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/fast-react-pizza.git

# Navigate into the project
cd fast-react-pizza

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📁 Project Structure

```
src/
├── features/
│   ├── cart/        # Cart slice & components
│   ├── menu/        # Menu fetching & display
│   ├── order/       # Order creation & lookup
│   └── user/        # User slice & input
├── ui/              # Shared UI components
└── App.jsx          # Routes & layout
```
