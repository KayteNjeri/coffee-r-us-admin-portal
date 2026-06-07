import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

function Shop () {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    //GET request to fetch coffee products from the server
    useEffect(() => {
        fetch("http://localhost:3001/coffee")
            .then(r => {
                if (!r.ok){
                    throw new Error("failed to fetch coffee products")
                }
                return r.json();
                })
            .then(coffeeProducts => setProducts(coffeeProducts))
            .catch(error => console.error(error.message));
    }, []);

    //Update product from ProductCard component
    const handleUpdateCoffeeProduct = (updatedCoffeeProduct) => {
        setProducts((prev) => 
            prev.map((product) => 
            product.id === updatedCoffeeProduct.id 
        ? updatedCoffeeProduct : product
        ));
    };

    //Delete product from ProductCard component
    const handleDeleteCoffeeProduct = (deletedProductId) => {
        setProducts((prev) => 
            prev.filter((product) => product.id !== deletedProductId)
        );
        };

    //Filter products based on search term
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
return (
        <section className="coffee-collection">
            <h2>Shop</h2>

    {/* Search */}
        <input 
        type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

    {/* Product Cards */}
        <div className="product-listing">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                        onUpdateCoffeeProduct={handleUpdateCoffeeProduct}
                        onDeleteCoffeeProduct={handleDeleteCoffeeProduct}
                    />
                ))
            ) : (
                <p>No coffee products found.</p>
            )}
        </div>
        </section>
    );
}

export default Shop;