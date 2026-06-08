import { useState } from "react";
import ProductCard from "./ProductCard";
import useCoffee from "../hooks/useCoffee";

function Shop () {
    const { products, setProducts } = useCoffee();
    const [searchTerm, setSearchTerm] = useState("");
    
    //Update product from ProductCard component
    const handleUpdateCoffeeProduct = (updatedCoffeeProduct) => {
        setProducts((prev) => 
            prev.map((coffee) => 
            coffee.id === updatedCoffeeProduct.id 
        ? updatedCoffeeProduct : coffee
        ));
    };

    //Delete product from ProductCard component
    const handleDeleteCoffeeProduct = (deletedProductId) => {
        setProducts((prev) => 
            prev.filter((coffee) => coffee.id !== deletedProductId)
        );
        };

    //Filter products based on search term
    const filteredProducts = products.filter((coffee) =>
        coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
return (
        <section className="coffee-collection">

    {/* Search */}
        <aside className="sidebar">
            <input
                type="text" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <div className="filters">
            <label>
                <input type="checkbox" />
                <span>Location 1</span>
            </label>
            <label>
                <input type="checkbox" />
                <span>Location 2</span>
            </label>
            <label>
                <input type="checkbox" />
                <span>Location 3</span>
            </label>
            <label>
                <input type="checkbox" />
                <span>Location 4</span>
            </label>
        </div>
        </aside>
    

    {/* Product Cards */}
        <div className="product-listing">
                {filteredProducts.map((coffee) => (
                    <ProductCard 
                        key={coffee.id}
                        coffee={coffee}
                        isAdmin={false}
                        
                    />
                ))
            }
        </div>
        </section>
    );
}

export default Shop;