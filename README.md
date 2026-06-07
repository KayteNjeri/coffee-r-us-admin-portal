# ☕ Coffee R Us - Admin Portal

A React Single Page Application (SPA) built for managing an e-commerce coffee store. This project demonstrates modern frontend development concepts including React Hooks, routing, state management, and CRUD operations using a simulated backend. It is built using web technologies. 

---

## 🚀 Project Overview

Coffee R Us Admin Portal allows administrators to:

- View coffee products
- Add new coffee products
- Update product prices
- Delete products
- Search through products dynamically

The application uses a simulated backend powered by **JSON Server**.

---

## 🛠️ Tech Stack

- React (Vite)
- React Router DOM
- JSON Server (Mock API)
- JavaScript (ES6+)
- CSS

---

## 📁 Project Structure
src/
├── components/
│ ├── NavBar.jsx
│ ├──AdminPortal.jsx
│ ├──Home.jsx
│ ├──Shop.jsx
│ ├── ProductCard.jsx
│ ├── ProductListing.jsx
│ ├── AddProductForm.jsx
││
├── hooks/
│ └── useProducts.js
│
├── context/
│ └── ProductContext.jsx
│
├── services/
│ └── api.js
│
├── App.jsx
└── main.jsx


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/coffee-r-us-admin-portal.git
cd coffee-r-us-admin-portal
2. Install dependencies
npm install
3. Start JSON Server (Backend)
npx json-server --watch db.json --port 3001
4. Start React App
npm run dev
📦 Backend (db.json Example)
{
  "coffee": [
    {
      "id": 1,
      "name": "Vanilla Bean",
      "description": "Medium roast with nutty flavor",
      "origin": "Colombia",
      "price": 10
    },
    {
      "id": 2,
      "name": "House Blend",
      "description": "Rich dark roast coffee",
      "origin": "Vietnam",
      "price": 12
    }
  ]
}
🌐 Features
🏠 Home Page
Landing page describing Coffee R Us
Navigation to Shop and Admin Portal
☕ Shop Page
Displays all coffee products
Search functionality
🛠 Admin Portal
Add new coffee products (POST request)
Edit product price (PATCH request)
Delete products (DELETE request)
⚛️ React Concepts Used
useState → local state management
useEffect → data fetching
useRef → DOM access (auto-focus inputs)
useId → form accessibility
useContext → global state sharing
Custom Hooks → reusable logic
React Router → SPA navigation
🔄 CRUD Operations
Action	Method	Endpoint
Get products	GET	/coffee
Add product	POST	/coffee
Update product	PATCH	/coffee/:id
Delete product	DELETE	/coffee/:id
🎯 Learning Outcomes

This project demonstrates:

Component-based architecture
REST API integration
State lifting and management
Dynamic rendering
Form handling in React
Real-world admin dashboard workflow

## Future Improvements
Authentication system (login/logout)
Product categories & filters
Better UI styling (Tailwind / Material UI)
Pagination
Deployment (Github Pages)
👩🏽‍💻 Author

Coffee R Us Admin Portal
Built as part of a React summative assessment project.

📄 License

This project is licenced under the MIT License.


---


