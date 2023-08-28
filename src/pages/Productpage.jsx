import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../context/cartContext";

/* The code is defining a functional component called `Productpage`. */
/* The code is defining a functional component called `Productpage`. Inside the component, it is using
React hooks such as `useParams`, `useContext`, `useState`, and `useEffect`. */
const Productpage = () => {
  const { id } = useParams();
  const cartContext = useContext(CartContext);
  const { cartItems, addToCart } = cartContext;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://ruby-cheerful-sea-urchin.cyclic.app/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  /* The code block `if (!product) { ... }` is checking if the `product` state variable is null or
  undefined. If it is, it means that the product data is still being fetched from the server, so it
  displays a loading spinner to indicate that the product is loading. Once the product data is
  fetched and the `product` state variable is set, the loading spinner will be replaced with the
  actual product information. */
  if (!product) {
    return (
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-blueuce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Product Loading...
        </span>
      </div>
    );
  }

  return (
    <section className=" text-black h-auto min-h-screen body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg: h-96 object-contain object-center rounded"
            src={product.img}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font dark:text-gray-400 text-black  tracking-widest">
              WATCHES
            </h2>
            <h1 className="dark:text-gray-400 text-black text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>

            <div className="flex pt-20">
              <span className="title-font font-medium text-2xl dark:text-gray-400 text-black">
                ${product.price}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="flex ml-auto text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded"
              >
                Add to Cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productpage;
