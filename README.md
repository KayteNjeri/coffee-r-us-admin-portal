# ☕ Coffee R Us Admin Portal

A React Single Page Application (SPA) for managing an e-commerce coffee store. This project demonstrates Advanced React concepts such as statemanagement through Hooks, event handling, client-side routing, form handling, and CRUD operations using a simulated REST API powered by JSON Server.

---

## 🚀 Project Overview

Coffee R Us Admin Portal provides administrators with the ability to manage coffee products through an intuitive interface.

### Key Features

* View available coffee products
* Add new products
* Update product prices
* Delete products
* Search products dynamically
* Navigate seamlessly between pages using React Router

The application uses a mock backend powered by JSON Server.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* JSON Server
* JavaScript (ES6+)
* CSS3

### Backend

* JSON Server ([Coffee Products](http://localhost:3001/coffee))


---

## 📁 Project Structure


```text
coffee-r-us-admin-portal/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── AddProductForm.jsx
│   │   ├── AdminPortal.jsx
│   │   ├── Home.jsx
│   │   ├── NavBar.jsx
│   │   ├── ProductCard.jsx
│   │   └── Shop.jsx
│   │
│   ├── hooks/
│   │   └── useCoffee.js
│   │
│   ├── tests/
│   │   ├── AddProductForm.test.jsx
│   │   ├── App.test.jsx
│   │   ├── Home.test.jsx
│   │   ├── ProductCard.test.jsx
│   │   └── Shop.test.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── setupTests.js
│
├── db.json
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

---

### Folder Overview

- **components/** – Reusable React UI components.
- **hooks/** – Custom React hooks such as `useCoffee`.
- **tests/** – Unit tests written with Vitest and React Testing Library.
- **assets/** – Static assets such as images and icons.
- **db.json** – database used by JSON Server.
- **App.jsx** – Main application component and routing configuration.
- **main.jsx** – Application entry point.
- **setupTests.js** – Testing configuration and setup.

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/KayteNjeri/coffee-r-us-admin-portal.git
cd coffee-r-us-admin-portal
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Mock Backend

```bash
npx json-server db.json --port 3001
```

The API will be available at:

```text
http://localhost:3001/coffee
```

### 4. Start the React Application

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📦 Sample Database Structure

```json
{
  "coffee": [
    {
      "id": "1",
      "name": "Vanilla bean",
      "description": "Medium Roast, nutty flavor",
      "origin": "Columbia",
      "price": 10
    },
    {
      "id": "2",
      "name": "House Blend",
      "description": "Dark Roast, Rich flavor",
      "origin": "Vietnam",
      "price": 12
    },
  ]
}
```

---

## 🌐 Application Pages

### 🏠 Home Page

* Welcome page for Coffee R Us
* Provides navigation to the Shop and Admin Portal

### ☕ Shop Page

* Displays all coffee products
* Search products by name
* View product information

### 🛠️ Admin Portal

* Add new coffee products (POST request)
* Edit product prices (PATCH request)
* Delete existing products (DELETE request)
* Manage store inventory

---

## ⚛️ React Concepts Demonstrated

### Standard React Hooks

* `useState` – Local state management
* `useEffect` – Data fetching and side effects
* `useId` – form accessibility

### Custom Hooks

* `useCoffee` – Reusable product-fetching logic

### React Router

* Route-based navigation

### Component Architecture

* Reusable UI components
* Props-based communication
* State lifting

---

## 🔄 CRUD Operations

| Action         | Method | Endpoint    |
| -------------- | ------ | ----------- |
| Get Products   | GET    | /coffee     |
| Add Product    | POST   | /coffee     |
| Update Product | PATCH  | /coffee/:id |
| Delete Product | DELETE | /coffee/:id |

---

## 🧪 Testing

Unit tests are implemented using:

* Vitest
* React Testing Library

### Tested Functionality

* Component rendering
* Form interactions
* Search functionality
* Route navigation
* User interactions

Run tests with:

```bash
npx vitest
```

---

## 🎯 Learning Outcomes

This project demonstrates:

* Component-based architecture
* React Hooks and Custom Hooks
* REST API integration
* CRUD operations
* Dynamic rendering
* Form handling and validation
* State management
* Client-side routing
* Unit testing with Vitest

---

## 🔮 Future Improvements

Potential enhancements include:

* Authentication and authorization (login/logout)
* Role-based access control
* Product categories and advanced filtering
* Pagination
* Responsive mobile design

---

## 👩🏽‍💻 Author

**Coffee R Us Admin Portal**

Built as part of a React assessment project to demonstrate modern frontend development concepts and practices.

---

## 📄 License

This project is licensed under the MIT License.
