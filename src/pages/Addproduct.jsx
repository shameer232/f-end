import React, { useState } from "react";

const Addproduct = () => {
  // State to store form input values and messages
  /* The code snippet is using the `useState` hook from React to create and manage state variables in a
  functional component. */
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    img: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ruby-cheerful-sea-urchin.cyclic.app/products/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );

      if (response.ok) {
        const savedProduct = await response.json();
        setMessage(`Product "${savedProduct.name}" has been added.`);

        setProductData({
          name: "",
          price: "",
          img: "",
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      setError("An error occurred while adding the product.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {message && <div className="text-green-500">{message}</div>}
        {error && <div className="text-red-500">{error}</div>}

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Product Name"
            required
          />
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Product Price"
            required
          />
          <input
            type="text"
            name="img"
            value={productData.img}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Product Img"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
