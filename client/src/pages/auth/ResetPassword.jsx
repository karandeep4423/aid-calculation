import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams(); // Extract the reset token from URL params
  const [password, setPassword] = useState(""); // State to store the password
  const [loader, setLoader] = useState(false); // State to handle the loading spinner
  
  
  const handleResetPassword = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Password validation: Must be at least 8 characters long
    if (!password || password.length < 8) {
      toast.error("Le mot de passe doit comporter au moins 8 caractères !"); // Show error toast
      return; // Exit function if validation fails
    }

    setLoader(true); // Show loader while making the request

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/auth/reset-password/${token}`,
        { password }
      );
      toast.success(response.data.message); // Show success toast
      setPassword("");
    } catch (error) {
      // Handle errors more gracefully and provide feedback from server
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message); // Show specific error message
      } else {
        toast.error("Veuillez réessayer plus tard.");
      }
    } finally {
      setLoader(false); // Always reset the loader after request completes
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Réinitialiser le mot de passe
        </h2>
        <form onSubmit={handleResetPassword}>
          {/* Password Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Entrez le nouveau mot de passe
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
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
                type="submit" // Set to submit since it's a form
              >
                Réinitialiser le mot de passe
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
