import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import logo from "./assets/Logo + Text.svg";

import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import { RiShoppingBag2Line } from "react-icons/ri";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Router>
        <header className=" w-[1250px] flex justify-around m-auto mt-3 items-center">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul className="flex gap-3 items-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? " font-bold underline" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "font-bold underline" : ""
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>Our Story</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </nav>
          <div className="flex gap-4 items-center">
            <CiSearch />
            <CiHeart />
            <RiShoppingBag2Line />
            <button className=" w-[80px] h-[40px] bg-black text-white rounded-md">
              Login
            </button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
