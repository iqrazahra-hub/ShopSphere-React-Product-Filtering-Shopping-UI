ShopSphere – React Product Filtering & Shopping UI

ShopSphere is a modern, responsive React application that showcases a dynamic product catalog with powerful filtering, sorting, and searching capabilities. It demonstrates efficient state management using React Context API and performance optimization with useMemo.

 **Features**
Global Dark/Light Theme using React Context API
 Theme preference persisted with localStorage
 Search products by name
🏷 Filter products by category
 Sort products by price (Low → High / High → Low)
 Optimized filtering and sorting using useMemo
 Shopping Cart with Add to Cart functionality
 Product Details Modal
 Fully Responsive Design (Desktop, Tablet & Mobile)
 Modern UI with smooth hover effects and transitions
 Products loaded from a local JSON file
 Smooth scrolling navigation between sections
 Tech Stack
React.js
React Context API
JavaScript (ES6+)
CSS3
HTML5
Vite
📁 Project Structure
src/
│── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── FilterBar.jsx
│   ├── ProductGrid.jsx
│   ├── ProductCard.jsx
│   ├── Categories.jsx
│   ├── ProductModal.jsx
│   └── Footer.jsx
│
│── context/
│   ├── ThemeContext.jsx
│   └── CartContext.jsx
│
│── data/
│   └── products.json
│
│── App.jsx
│── main.jsx
** Performance Optimizations**
useMemo is used to avoid unnecessary filtering and sorting on every render.
React Context API provides centralized global state management.
Product cards use unique keys for efficient rendering.
Main Sections
Hero Section
Product Search
Category Filter
Price Sorting
Product Grid
Categories
Shopping Cart
Product Details Modal
Footer
 **Learning Objectives**

This project demonstrates:

React Context API
Global State Management
useMemo Optimization
Component-Based Architecture
Responsive Web Design
Search, Filter & Sort Logic
Local JSON Data Handling
Modern React Development Practices
** If you found this project helpful, don't forget to Star the repository!**
