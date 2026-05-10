# Simple E-comerce store - Full-Stack E-commerce Platform

A modern, full-stack e-commerce solution built with a focus on simplicity, featuring a complete administrative dashboard.

## 🚀 Live Demo
[View Live Site](https://simple-e-comerce-store.vercel.app)

## ✨ Features

### **For Customers**
- **Cultural Design**: Ethiopian-inspired UI with national colors (Green, Yellow, Red) and Ethiopic typography support.
- **Product Search**: Dynamic search functionality to find products by name, category, or description.
- **Shopping Cart**: Fully functional cart that persists across sessions using `localStorage`.
- **User Authentication**: Secure registration and login system with password hashing and JWT.
- **Order History**: Personalized view of past purchases and order details.
- **Product Details**: Dedicated pages for in-depth product information.

### **For Administrators**
- **Admin Dashboard**: Secure management area accessible only to authorized users.
- **Product Management**: Interface to add new products with images, pricing, and stock levels.
- **Order Management**: Real-time view of all customer orders across the system.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: SQLite with Sequelize ORM
- **Security**: bcryptjs for hashing, JSON Web Tokens (JWT) for session management
- **Deployment**: Vercel (Serverless Functions)

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gtilahun2121-beep/CodeAlpha_projectName.git
   cd CodeAlpha_projectName
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment**:
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   JWT_SECRET=your_secret_key
   ```

4. **Run the application**:
   ```bash
   npm start
   ```
   Visit `http://localhost:5000` in your browser.

## 📝 Note
This project uses SQLite for demonstration. For production use, it is recommended to migrate to a persistent cloud database like Supabase (PostgreSQL) or MongoDB.

---
Built by [Your Name]
