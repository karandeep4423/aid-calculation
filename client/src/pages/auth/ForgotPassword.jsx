import React, { useState } from "react";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate email format
  const validateEmail = () => {
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    setErrors((prev) => ({
      ...prev,
      email: isValid ? null : "Format d'e-mail invalide",
    }));
    return isValid;
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    // Check if the email is valid before sending the request
    if (!validateEmail()) {
      return;
    }

    setLoader(true);

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/forgot-password`, { email:email.trim().toLowerCase() });
      toast.success("Lien de réinitialisation du mot de passe envoyé à votre adresse e-mail");
      setEmail("");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Veuillez réessayer plus tard.");
      }
    } finally {
      setLoader(false); // Reset loader in both success and error cases
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Mot de passe oublié
        </h2>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Adresse Email
            </label>
            <input
              type="email"
              id="email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail} // Validate on blur (optional)
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-2">{errors.email}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            {loader ? (
              <button
                className="w-full cursor-not-allowed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                disabled
              >
                <ClipLoader className="mt-1" color="white" size={28} />
              </button>
            ) : (
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Mot de passe oublié
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
