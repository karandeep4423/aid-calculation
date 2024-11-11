import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import {useAuth} from '../../provider/authProvider';
const LoginForm = () => {
  const { setToken } = useAuth(); // Get setUserData from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoader(true);
    if (email && password) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {
          email: email,
          password: password,
        })
        .then((result) => {
          console.log("result", result);
          setLoader(false);
          toast.success("Login successfully!");
          setToken(result.data.token);
          localStorage.setItem("userDetails", JSON.stringify(result.data.user));
          navigate("/dashboard", { replace: true });
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          setLoader(false);
        });
    } else {
      setLoader(false);
      toast.error("Form is not valid");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            value={email}
            className="shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="username@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Mot de passe
          </label>
          <input
            value={password}
            className="shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <Link
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/forgot-password"
          >
            Mot de passe oublié ?
          </Link>
        </div>
        {loader == true ? (
          <button
            onClick={handleLogin}
            className="bg-blue-500 cursor-not-allowed hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            <ClipLoader className="mt-1" color="white" size={28} />
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            Me Connecter
          </button>
        )}
        <div className=" my-4 grid grid-cols-3 items-center text-black">
          <hr className="border-black" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-black" />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="button"
        >
          <Link to="/register">Register Here</Link>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
