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
            .then((coffeeProducts) => {
                console.log("coffee Products:", coffeeProducts);
                setProducts(coffeeProducts)
            })
            .catch((error) => console.error(error.message));
    }, []);
 

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