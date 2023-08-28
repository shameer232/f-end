import React, { useState, useContext } from "react";
import CartContext from "../context/Cartcontext";
import { useNavigate } from "react-router";

const Checkout = () => {
  /* The code snippet is defining a functional component called `Checkout` in JavaScript React. */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    address: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { cartItems } = useContext(CartContext);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* The code snippet is performing an asynchronous operation to submit the form data to a server for
    checkout. */
    try {
      const total = cartItems.reduce((acc, item) => acc + item.price, 0);
      const response = await fetch(
        "https://ruby-cheerful-sea-urchin.cyclic.app/orders/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            products: cartItems.map((item) => item.title),
            total,
            ...formData,
          }),
        }
      );
      /* The code snippet is handling the form submission in the `handleSubmit` function. */

      if (response.ok) {
        const result = await response.json();
        setMessage(result.message);
        setFormData({
          firstName: "",
          lastName: "",
          number: "",
          address: "",
        });
        Navigate("/order-complete");
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setError("An error occurred while processing your request.");
    }
  };

  /**
   * The handleChange function updates the formData state by setting the value of the input field with
   * the corresponding name.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <label
            htmlFor="firstName"
            className="leading-7 text-sm text-gray-600"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="First Name"
            required
          />
          <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Last Name"
            required
          />
          <label htmlFor="number" className="leading-7 text-sm text-gray-600">
            Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Number"
            required
          />
          <label htmlFor="Address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Address"
            required
          />
        </div>
        {/* Display success or error messages */}
        {message && <div className="text-green-500">{message}</div>}
        {error && <div className="text-red-500">{error}</div>}

        {/* ... Rest of your form ... */}

        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Check Out
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
