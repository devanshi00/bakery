import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = ({ products, addToCart }) => {
  const { category } = useParams(); // Get category from the URL
  const categories = ["Cakes", "Macarons", "Croissants"];
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    if (category && categories.includes(category)) {
      setFilteredProducts(products.filter((product) => product.category === category));
    } else {
      setFilteredProducts(products); // Show all products if no category
    }
  }, [category, products]);

  return (
    <div className="product-page">
      <h2>{category ? `${category} Products` : "All Products"}</h2>
      
      {filteredProducts.length === 0 ? (
        <p>No products available in this category.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ₹{product.price.toFixed(2)}</p>
              <p>Available Quantity: {product.quantity}</p>
              <button
                onClick={() => addToCart(product)}
                disabled={product.quantity <= 0}
              >
                {product.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
