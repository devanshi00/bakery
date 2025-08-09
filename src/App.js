import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import DeliveryPage from "./components/DeliveryPage";
import OrderPage from "./components/OrderPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage"; 
import { UserProvider } from './components/UserContext';
import "./App.css";

// Initial Products Data (Only the products you want to show)
const initialProductsData = [
  // Cakes
  {
    id: 4,
    name: "Customized Engagement Cake",
    description: "Beautiful multi-tier engagement cake with elegant roses and personalized decorations.",
    price: 2500.0,
    image: require("./assets/images/img/choco.jpg"),
    quantity: 15,
    category: "Cakes",
  },
  {
    id: 5,
    name: "Premium Cheesecake",
    description: "Rich and creamy cheesecake with your choice of toppings - perfect for celebrations.",
    price: 1800.0,
    image: require("./assets/images/img/strawberry.jpg"),
    quantity: 8,
    category: "Cakes",
  },
  {
    id: 6,
    name: "Birthday Special Cake",
    description: "Customized birthday cake with your choice of flavors and decorations.",
    price: 1600.0,
    image: require("./assets/images/img/mango.jpg"),
    quantity: 12,
    category: "Cakes",
  },
  {
    id: 7,
    name: "Classic Vanilla Cake",
    description: "Moist vanilla cake with buttercream frosting - a timeless favorite.",
    price: 1200.0,
    image: require("./assets/images/img/vanila.png"),
    quantity: 20,
    category: "Cakes",
  },
  {
    id: 8,
    name: "Spiced Carrot Cake",
    description: "Moist carrot cake with cream cheese frosting and warm spices.",
    price: 1400.0,
    image: require("./assets/images/img/carot.jpeg"),
    quantity: 10,
    category: "Cakes",
  },
  {
    id: 9,
    name: "Red Velvet Delight",
    description: "Classic red velvet cake with cream cheese frosting - elegant and delicious.",
    price: 1700.0,
    image: require("./assets/images/img/velvet.jpg"),
    quantity: 9,
    category: "Cakes",
  },
  {
    id: 10,
    name: "Lemon Pound Cake",
    description: "A moist pound cake with a zesty lemon flavor and glaze.",
    price: 1200.0,
    image: require("./assets/images/img/lemon.jpg"),
    quantity: 10,
    category: "Cakes",
  },
  {
    id: 11,
    name: "Pineapple Upside Down Cake",
    description: "A moist cake with caramelized pineapple slices on top.",
    price: 1400.0,
    image: require("./assets/images/img/pinde.jpg"),
    quantity: 8,
    category: "Cakes",
  },
  {
    id: 12,
    name: "Coffee Cake",
    description: "A cake with a rich coffee flavor and cinnamon crumb topping.",
    price: 1350.0,
    image: require("./assets/images/img/coffee.jpg"),
    quantity: 12,
    category: "Cakes",
  },

  // Macarons
  {
    id: 13,
    name: "Dessert Jar - Chocolate",
    description: "Layered chocolate dessert jar with rich ganache and cake layers.",
    price: 250.0,
    image: require("./assets/images/img/macr.jpg"),
    quantity: 25,
    category: "Dessert Jars",
  },
  {
    id: 14,
    name: "Dessert Jar - Strawberry",
    description: "Fresh strawberry layered dessert jar with cream and cake.",
    price: 220.0,
    image: require("./assets/images/img/mac.jpg"),
    quantity: 30,
    category: "Dessert Jars",
  },  {
    id: 20,
    name: "Dessert Jar - Lemon",
    description: "Zesty lemon dessert jar with tangy lemon curd and vanilla cake.",
    price: 230.0,
    image: require("./assets/images/img/lemon.webp"),
    quantity: 18,
    category: "Dessert Jars",
  },
  {
    id: 17,
    name: "Macaron - Salted Caramel",
    description: "A delicious macaron filled with salted caramel.",
    price: 490.0,
    image: require("./assets/images/img/sal.jpg"),
    quantity: 25,
    category: "Macarons",
  },
  {
    id: 16,
    name: "Macaron - Vanilla",
    description: "A classic macaron with a smooth vanilla filling.",
    price: 460.0,
    image: require("./assets/images/img/whit.webp"),
    quantity: 15,
    category: "Macarons",
  },
 
  {
    id: 18,
    name: "Macaron - Mango",
    description: "A tropical macaron filled with mango flavor.",
    price: 510.0,
    image: require("./assets/images/img/mango.webp"),
    quantity: 20,
    category: "Macarons",
  },
  {
    id: 19,
    name: "Macaron - Coffee",
    description: "A macaron with a rich coffee flavor.",
    price: 470.0,
    image: require("./assets/images/img/coffe.webp"),
    quantity: 22,
    category: "Macarons",
  },{
    id: 21,
    name: "Macaron - Pistachio-Rose",
    description: "A macaron with pistachio and rose flavor.",
    price: 550.0,
    image: require("./assets/images/img/ro.webp"),
    quantity: 20,
    category: "Macarons",
  },
  {
    id: 15,
    name: "Macaron - Chocolate",
    description: "A rich chocolate macaron with a creamy filling.",
    price: 480.0,
    image: require("./assets/images/img/macrr.jpg"),
    quantity: 20,
    category: "Macarons",
  },
  

  // Croissants

  {
    id: 22,
    name: "Gourmet Brownie Box",
    description: "Premium brownies with chocolate decorations and artistic toppings.",
    price: 800.0,
    image: require("./assets/images/img/cros.avif"),
    quantity: 20,
    category: "Brownies",
  }, {
    id: 27,
    name: "Chocolate Fudge Brownies",
    description: "Rich chocolate fudge brownies with premium chocolate ganache.",
    price: 600.0,
    image: require("./assets/images/img/mat.webp"),
    quantity: 17,
    category: "Brownies",
  },

  {
    id: 23,
    name: "Walnut Brownies",
    description: "Fudgy brownies loaded with crunchy walnuts and chocolate chips.",
    price: 650.0,
    image: require("./assets/images/img/cho.webp"),
    quantity: 15,
    category: "Brownies",
  },
  {
    id: 24,
    name: "Decorated Cupcakes",
    description: "Beautiful cupcakes with chocolate frosting and decorative toppings.",
    price: 150.0,
    image: require("./assets/images/img/almond.webp"),
    quantity: 18,
    category: "Cupcakes",
  },  {
    id: 28,
    name: "Vanilla Cupcakes",
    description: "Classic vanilla cupcakes with buttercream frosting.",
    price: 120.0,
    image: require("./assets/images/img/van.avif"),
    quantity: 19,
    category: "Cupcakes",
  },
 
  {
    id: 26,
    name: "Croissant - Strawberry",
    description: "A strawberry-filled croissant with icing sugar.",
    price: 440.0,
    image: require("./assets/images/img/cr.jpg"),
    quantity: 25,
    category: "Croissants",
  },
 
  {
    id: 29,
    name: "Croissant - Lemon",
    description: "A croissant filled with tangy lemon cream.",
    price: 460.0,
    image: require("./assets/images/img/le.jpg"),
    quantity: 20,
    category: "Croissants",
  },
  {
    id: 30,
    name: "Croissant - Caramel",
    description: "A croissant filled with caramel and a crunchy topping.",
    price: 500.0,
    image: require("./assets/images/img/c.webp"),
    quantity: 18,
    category: "Croissants",
  }, {
    id: 25,
    name: "Croissant - Raspberry",
    description: "A raspberry-filled croissant with a sweet glaze.",
    price: 450.0,
    image: require("./assets/images/img/st.jpg"),
    quantity: 22,
    category: "Croissants",
  },
];


function App() {
  useEffect(() => {
    localStorage.removeItem("products");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("orders");

    localStorage.setItem("products", JSON.stringify(initialProductsData));
  }, []);

  const [products, setProducts] = useState(initialProductsData);
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === id);
  
      // If the item is found in the cart, restore its quantity in the products list
      if (itemToRemove) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + itemToRemove.quantity }  // Add removed quantity
              : product
          )
        );
      }
  
      // Remove the item from the cart
      return prevItems.filter((item) => item.id !== id);
    });
  };
  

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = (deliveryDetails) => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const newOrder = {
      items: cartItems,
      totalPrice,
      deliveryAddress: deliveryDetails.address,
      paymentMethod: deliveryDetails.paymentMethod,
      date: new Date().toLocaleString(),
    };

    setCartItems([]);
    localStorage.setItem("cartItems", JSON.stringify([]));
    alert("Order placed successfully!");
  };

  return (
    <UserProvider>
      <Router>
        <Header cartItems={cartItems} />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products"
              element={<ProductPage products={products} addToCart={addToCart} />}
            />
            <Route
              path="/products/:category"
              element={
                <ProductPage
                  products={products}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  decrementQuantity={decrementQuantity}
                  incrementQuantity={incrementQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route
              path="/delivery"
              element={
                <DeliveryPage
                  cartItems={cartItems}
                  totalPrice={totalPrice}
                  handleCheckout={handleCheckout}
                />
              }
            />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;