import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/Cartcontext";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const cartContext = useContext(CartContext);
  const { cartItems } = cartContext;

  const cartItemCount = cartItems.length;
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <img
              src="https://www.svgrepo.com/show/487843/store-sign.svg"
              className="h-8 mr-3 shadow-lg "
              alt="Flowbite Logo"
            />
            <span className="ml-3 text-xl">Final Project</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <HashLink to="/#products" className="mr-5 hover:text-white">
              Product
            </HashLink>
            <HashLink to="/#contact" className="mr-5 hover:text-white">
              Contact
            </HashLink>
            <Link to="/login" className="mr-5 hover:text-white">
              Login
            </Link>
          </nav>
          <Link to="/cart">
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 relative">
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {cartItemCount > 0 && (
                  <span className="cart-badge absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
