import React from "react";
import "./App.css";
import { ShopContextProvider } from "./context/shop-context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
     <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" exact Component={Login} />
            <Route path="/cart" element={<Cart />} />
           </Routes>
          <Footer />
        </Router>
        </ShopContextProvider>
      
    </div>
  );
}

export default App;
