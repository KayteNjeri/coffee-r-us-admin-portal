import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AddProductForm from "./components/AddProductForm";
import Shop from "./components/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/adminportal" element={<AddProductForm />} />
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
