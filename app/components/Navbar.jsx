import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-transparent backdrop-blur-sm z-50">
      <div className="container">
        <div className="flex justify-between items-center py-5 bg-transparent">
          <div className="logo">
            <Link href="/">
              <div className="flex gap-2 items-center">
                <span className="text-2xl">
                  <FaShoppingCart />
                </span>{" "}
                <div className="font-bold text-xl">QUICKCART.</div>
              </div>
            </Link>
          </div>
          <div className="nav-links">
            <ul className="flex items-center gap-5">
              <li>
                <Link
                  className="text-lg opacity-55 hover:opacity-100 transition"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg opacity-55 hover:opacity-100 transition"
                  href="/shop"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg opacity-55 hover:opacity-100 transition"
                  href="#about"
                  
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg opacity-55 hover:opacity-100 transition"
                  href="#contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg"
                  href="/login"
                >
                  <button className="bg-blue-400 px-2 py-1 rounded-lg text-white uppercase">Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
