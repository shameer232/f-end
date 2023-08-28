import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router";

/* The code is defining a functional component called `Register`. */
const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const Navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    /* The code block you provided is handling the registration process when the user submits the
   registration form. */
    try {
      const response = await fetch(
        "https://ruby-cheerful-sea-urchin.cyclic.app/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, password }),
        }
      );

      if (response.ok) {
        console.log("Registration successful");
        Navigate("/");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      setErrorMessage("An error occurred during registration");
    }
  };
  return (
    <section className="bg-white h-screen  flex flex-col justify-center items-center">
      <form onSubmit={handleRegister} className="w-6/12">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 dark:text-red-400 pb-6">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Register;
