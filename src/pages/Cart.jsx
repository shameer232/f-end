import React from "react";
import { useContext } from "react";
import CartContext from "../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  /* The code is using the `useContext` hook to access the `CartContext` object. */
  const cartContext = useContext(CartContext);
  const { cartItems, addToCart, removeFromCart } = cartContext;
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length ? (
            cartItems.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-32 p-4">
                  <img src={item.img} alt={item.name} />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {item.price}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-white text-center py-4">
                Cart Is Empty.
              </td>
            </tr>
          )}
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-32 p-4"></td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Total
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              ${subtotal}
            </td>
            <td className="px-6 py-4">
              <Link
                to="/checkout"
                className="font-medium text-black hover:underline"
              >
                Checkout
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
