import React, { useState } from 'react';
import { useId } from 'react';

function AddProductForm({ onAddCoffeeProduct }) {
    const id = useId();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        origin: "",
        price: 0,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
            fetch("http://localhost:3001/coffee")
            .then((r) => r.json())
            .then((products) => {
                const nextId = Math.max(...products.map((p) => Number(p.id)), 0) + 1;

        // Handle form submission logic here
        return fetch("http://localhost:3001/coffee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...formData, id: String(nextId),
        }),
        });
    })
        .then(r => {
            if (!r.ok){
                throw new Error("failed to add a new coffee product")
            }
            return r.json();
            })
        .then(newCoffeeProduct => {
            onAddCoffeeProduct(newCoffeeProduct);

            setFormData({
                name: '',
                description: '',
                origin: '',
                price: 0
            });
        })
        .catch(error => console.error(error.message));
    };

    const handleChange = (event) => {
         const { name, value } = event.target;

    setFormData(prev => ({
        ...prev,
        [name]: name === "price" ? Number(value) : value
    }));
};

    return (
        <div className="add-product-form" >
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Coffee Name</label>
                <input 
                    id="name"
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <label htmlFor="origin">Origin</label>
                <input 
                    id="origin"
                    type="text" 
                    name="origin" 
                    value={formData.origin}
                    onChange={handleChange}
                />

                <label htmlFor="price">Price</label>
                <input 
                    id="price"
                    type="number" 
                    name="price" 
                    value={formData.price}
                    onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddProductForm;