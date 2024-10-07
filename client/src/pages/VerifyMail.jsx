import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To access the token from URL params
import axios from "axios";

const VerifyMail = () => {
  // Get the token from the URL
  const { token } = useParams();
  // State to manage the verification status and messages
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log("token", token);

  const verifyEmail = async () => {
    try {
      // Send the verification request to the backend
      const response = await axios.get(
        `http://localhost:3001/api/auth/verify-account/${token}`
      );
      // Update message and stop loading
      setMessage(response.data.message);
      setLoading(false);
    } catch (err) {
      // Handle errors (e.g., invalid token or expired token)
      setError(true);
      setMessage(err.response?.data?.message || "An error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="h-screen gap-10 flex justify-center items-center flex-col">
      <h1 className="text-center text-4xl">Email verification</h1>
      {message == null ? (
        <button
          onClick={verifyEmail}
          className="hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-medium px-4 py-3 rounded-full bg-sky-500 text-white transition-all duration-300"
        >
          Click here to verify
        </button>
      ) : (
        <p className="text-5xl">{message}</p>
      )}
    </div>
  );
};

export default VerifyMail;
