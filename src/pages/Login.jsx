import React, { useState } from "react";

/* The code defines a functional component called `Login`. */
const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* The code is making an asynchronous HTTP POST request to the URL
    "https://ruby-cheerful-sea-urchin.cyclic.app/users/login" with the provided `formData`. */
    try {
      const response = await fetch(
        "https://ruby-cheerful-sea-urchin.cyclic.app/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      /* This code block is handling the response from the HTTP POST request. */
      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        localStorage.setItem("jwtToken", token);
        setError(""); // Clear any previous errors
        // You can redirect the user or perform any other actions here
      } else {
        const errorData = await response.json();
        setError(errorData.message || "An error occurred");
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
    <section className="bg-white h-screen flex flex-col justify-center items-center">
      <form class="space-y-4 w-6/12 md:space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="userName"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your username
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="userName"
            value={formData.userName}
            onChange={handleChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          />
        </div>
        <div>
          <label
            htmlFor="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Sign in
        </button>
      </form>

      {error && <div className="text-red-500">{error}</div>}
    </section>
  );
};

export default Login;
