import { useState } from "react";
import { Links } from "react-router-dom";

function ProductCard({ coffee, onUpdateCoffeeProduct, onDeleteCoffeeProduct }) {
    const [newPrice, setNewPrice] = useState(coffee.price);

    const handleUpdate = () => {
        fetch(`http://localhost:3001/coffee/${product.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                price: newPrice
             }),
        })
            .then(r => {
                if (!r.ok){
                    throw new Error("failed to update the coffee product")
                }
                return r.json();
                })
            .then((updatedCoffeePrice) => {onUpdateCoffeeProduct(updatedCoffeePrice);
            })
            .catch(error => console.error(error.message));
        };

    const handleDelete = () => {
        fetch(`http://localhost:3001/coffee/${product.id}`, {
            method: "DELETE"
        })
        .then(r => {
            if (!r.ok){
                throw new Error("failed to delete the coffee product")
            }
            onDeleteCoffeeProduct(product.id);
        })
        .catch(error => console.error(error.message));
    };
    
    return (
        <div className="product-card">
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>
            <p><strong>Origin:</strong> {coffee.origin}</p>
            <p><strong>Price:</strong> ${coffee.price.toFixed(2)}</p>

            <input 
                type="number" 
                value={newPrice} 
                onChange={(e) => setNewPrice(e.target.value)}
            />

            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default ProductCard;