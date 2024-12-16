import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeliveryPage = ({ cartItems, totalPrice, handleCheckout }) => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const placeOrder = () => {
    if (!address || !paymentMethod) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    // Create the order object
    const order = {
      date: new Date().toLocaleDateString(),
      deliveryAddress: address,
      paymentMethod,
      items: cartItems,
      totalPrice,
    };

    // Save the order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    // Optionally call the handleCheckout if needed for further processing
    handleCheckout({ address, paymentMethod });

    // Navigate to the orders page
    navigate("/orders");
  };

  return (
    <div className="delivery-page">
      <h2>Delivery Information</h2>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <textarea
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="input-field"
      />

      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="input-field"
      >
        <option value="">Select Payment Method</option>
        <option value="Credit Card">Credit Card</option>
        <option value="PayPal">PayPal</option>
      </select>

      <button onClick={placeOrder} className="submit-btn">
        Place Order
      </button>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ₹{item.price}</li>
          ))}
          <li><strong>Total: ₹{totalPrice}</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryPage;
