import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Productpage from "./pages/Productpage";
import Cart from "./pages/Cart";
import Ordercom from "./pages/Ordercom";
import Checkout from "./pages/Checkout";
import { CartContainer } from "./context/Cartcontext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Addproduct from "./pages/addproduct";


const App = () => {
  return (
    <div>
      <CartContainer>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<Productpage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-complete" element={<Ordercom />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Addproduct" element={<Addproduct />} />
            
          </Routes>
          <Footer />
        </Router>
      </CartContainer>
    </div>
  );
};

export default App;
