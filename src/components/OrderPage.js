import React, { useEffect, useState } from "react";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="order-page page-container">
      <h2>All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className="order-summary">
          {orders.map((order, index) => (
            <div key={index} className="order-card">
              <h3>
                Order {index + 1} - {order.date}
              </h3>
              <p>
                <strong>Delivery Address:</strong> {order.deliveryAddress}
              </p>
              <p>
                <strong>Payment Method:</strong> {order.paymentMethod}
              </p>

              <h4>Items</h4>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.quantity} x ₹{item.price}
                  </li>
                ))}
              </ul>

              <p>
                <strong>Total Price:</strong> ₹{order.totalPrice}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
