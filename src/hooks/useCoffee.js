import { useState, useEffect } from "react";

function useCoffee() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/coffee")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch coffee products");
        }
        return r.json();
      })
      .then((coffeeProducts) => {
        setProducts(coffeeProducts);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return { products, setProducts };
}

export default useCoffee;