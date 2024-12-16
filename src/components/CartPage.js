import "./CartPage.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cartItems, decrementQuantity, incrementQuantity, removeFromCart }) => {
  const navigate = useNavigate();

  // Calculate subtotal, tax, and total
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.05; // 5% tax rate
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <section className="cart-header">
        <h2>Your Shopping Cart</h2>
        <p>Review your items before proceeding to checkout.</p>
      </section>

      {/* Display cart items or empty message */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>₹{item.price.toFixed(2)}</p>

                {/* Quantity control buttons */}
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>

                {/* Remove button */}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Display pricing details */}
      <div className="total-container">
        <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
        <p>Tax (5%): ₹{tax.toFixed(2)}</p>
        <p>Total: ₹{total.toFixed(2)}</p>
      </div>

      {/* Cart action buttons */}
      <div className="cart-actions">
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button onClick={() => navigate("/delivery")} disabled={cartItems.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
