import { Navigate } from "react-router-dom";
import AddProductForm from "./AddProductForm";
import ProductCard from "./ProductCard";

function AdminPortal() {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    
    if (!isAdmin) {
        return <Navigate to="/login" />;
    }

    const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

    const handleAddCoffeeProduct = (newProduct) => {
    console.log("Added:", newProduct);
  };

  return (
    <div className="admin-portal">
        <div className="admin-header">
      <h2>Admin Portal</h2>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>

      <AddProductForm
        onAddCoffeeProduct={handleAddCoffeeProduct}
      />
      <ProductCard
        key={coffee.id}
        coffee={coffee}
        onUpdateCoffeeProduct={handleUpdateCoffeeProduct}
        onDeleteCoffeeProduct={handleDeleteCoffeeProduct}
        isAdmin={true}
      />
    </div>
  );
}

export default AdminPortal;