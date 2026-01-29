# 🍕 Fast React Pizza

Fast React Pizza is a simple and modern pizza ordering web application where users can quickly browse a dynamic pizza menu, add items to a cart, and place an order without creating an account.

---

## 📌 Business Requirements

Fast React Pizza is a simple pizza ordering web application built with the following business goals:

- Users can order **one or more pizzas** from the menu
- No user accounts or login required
  - Users only enter their name before using the app

- The pizza menu is dynamic and must be **loaded from an API**
  - Menu items can change over time

- Users can add multiple pizzas to a cart before placing an order

- Ordering requires only basic customer information:
  - Name
  - Phone number
  - Delivery address

- If possible, GPS location should be provided to make delivery easierg

- Users can mark their order as **Priority**
  - Priority adds an extra **20%** to the total cart price

- Orders are placed by sending a **POST request** to the API containing:
  - Customer data
  - Selected pizzas
  - Cart details
  - Priority status

- Payments are made **on delivery**, so no online payment integration is needed

- Each order receives a unique **Order ID**
  - This ID is shown to the user for later order tracking

- Users should be able to mark an order as **Priority even after it has been placed**
