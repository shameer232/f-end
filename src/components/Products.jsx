import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* The `Products` component is a functional component in React. It uses the `useState` and `useEffect`
hooks from React to manage state and perform side effects. */
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://ruby-cheerful-sea-urchin.cyclic.app/products/list", {})
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="text-black  body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  const { _id, name, price, img } = product;

  /* The `return` statement in the `ProductCard` component is rendering the JSX code that represents
  the structure and content of a single product card. */
  return (
    <div id="products" className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link to={`/product/${_id}`}>
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt={name}
            className="object-contain object-center w-full h-full block"
            src={img}
          />
        </a>
      </Link>
      <div className="mt-4">
        <h2 className="title-font text-lg font-medium">{name}</h2>
        <p className="mt-1">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Products;
