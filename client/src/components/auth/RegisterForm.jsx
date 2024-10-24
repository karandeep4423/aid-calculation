import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth } from "../../provider/authProvider";

const RegisterForm = () => {
  const { setUserData } = useAuth(); // Get setUserData from context
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    gender: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    firstname: [],
    lastname: [],
    phone: null,
    gender: null,
    password: null,
  });

  const [touchedFields, setTouchedFields] = useState({
    email: false,
    firstname: false,
    lastname: false,
    phone: false,
    gender: false,
    password: false,
  });
  useEffect(() => {
    if (touchedFields.email) validateEmail();
  }, [formData.email, touchedFields.email]);

  useEffect(() => {
    if (touchedFields.firstname) validateFirstname();
    console.log("Validating useffect firstname:", formData.firstname);
  }, [formData.firstname, touchedFields.firstname]);

  useEffect(() => {
    if (touchedFields.lastname) validateLastname();
  }, [formData.lastname, touchedFields.lastname]);

  useEffect(() => {
    if (touchedFields.phone) validatePhone();
  }, [formData.phone, touchedFields.phone]);

  useEffect(() => {
    if (touchedFields.gender) validateGender();
  }, [formData.gender, touchedFields.gender]);

  useEffect(() => {
    if (touchedFields.password) validatePassword();
  }, [formData.password, touchedFields.password]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setTouchedFields({ ...touchedFields, [name]: true });
  };

  const validateEmail = () => {
    setErrors((prev) => ({
      ...prev,
      email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        formData.email
      )
        ? null
        : "Invalid email format",
    }));
  };

  const validateFirstname = () => {
    let errors = [];
    if (formData.firstname.length < 2)
      errors.push("At least 2 characters required");
    if (formData.firstname.length > 50)
      errors.push("Max 50 characters allowed");
    if (!/^[a-zA-Z]+$/.test(formData.firstname))
      errors.push("Only alphabetic characters allowed");
    setErrors((prev) => ({ ...prev, firstname: errors }));
  };

  const validateLastname = () => {
    let errors = [];
    if (!formData.lastname || formData.lastname.length < 2)
      errors.push("At least 2 characters required");
    if (formData.lastname.length > 50) errors.push("Max 50 characters allowed");
    if (!/^[a-zA-Z]+$/.test(formData.lastname))
      errors.push("Only alphabetic characters allowed");
    setErrors((prev) => ({ ...prev, lastname: errors }));
  };

  const validatePhone = () => {
    setErrors((prev) => ({
      ...prev,
      phone: /^(0|\+33)[1-9]\d{8}$/.test(formData.phone)
        ? null
        : "Invalid phone format",
    }));
  };

  const validateGender = () => {
    setErrors((prev) => ({
      ...prev,
      gender: formData.gender.length > 0 ? null : "Gender is required",
    }));
  };

  const validatePassword = () => {
    setErrors((prev) => ({
      ...prev,
      password: formData.password.length > 0 ? null : "Password is required",
    }));
  };

  const isFormValid = () => {
    return (
      !errors.email &&
      errors.firstname.length === 0 &&
      errors.lastname.length === 0 &&
      !errors.phone &&
      !errors.gender &&
      !errors.password
    );
  };

  // Function to reset formData to its initial empty state
  const resetForm = () => {
    setFormData({
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      gender: "",
      password: "",
    });
    setTouchedFields({
      email: false,
      firstname: false,
      lastname: false,
      phone: false,
      gender: false,
      password: false,
    });
  };

  //Register form data
  const handleRegister = async () => {
    if (isFormValid()) {
      setLoader(true);
      try {
        const result = await axios.post(
          "http://localhost:3001/api/auth/signup",
          formData
        );
        console.log("result signup", result);
        // Store user data and token in context
        setUserData(result.data.user);
        toast.success("Email verification link has been sent!");
        resetForm();
      } catch (err) {
        toast.error(err.response?.data?.message || "An error occurred");
      } finally {
        setLoader(false); // Ensure loader is always reset in the end
      }
    } else {
      toast.error("Form is not valid");
      setLoader(false);
    }
  };

  return (
    <div className="py-10 min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Registre</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              onBlur={validateEmail}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstname"
            >
              Prénom
            </label>
            <input
              className={`shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.firstname.length ? "border-red-500" : ""
              }`}
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Enter first name"
              value={formData.firstname}
              onChange={handleChange}
              onBlur={validateFirstname}
            />
            {errors.firstname.length > 0 && (
              <p className="text-red-500 text-xs italic">
                {errors.firstname.map((error, index) => (
                  <div key={index}>
                    {error}
                    <br />
                  </div>
                ))}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastname"
            >
              Nom
            </label>
            <input
              className={`shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.lastname.length ? "border-red-500" : ""
              }`}
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Enter last name"
              value={formData.lastname}
              onChange={handleChange}
              onBlur={validateLastname}
            />
            {errors.lastname.length > 0 && (
              <p className="text-red-500 text-xs italic">
                {errors.lastname.map((error, index) => (
                  <div key={index}>
                    {error}
                    <br />
                  </div>
                ))}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block  text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className={`shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.phone ? "border-red-500" : ""
              }`}
              id="phone"
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              onBlur={validatePhone}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">{errors.phone}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <input
              className={`shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.gender ? "border-red-500" : ""
              }`}
              id="gender"
              type="text"
              name="gender"
              placeholder="Enter gender"
              value={formData.gender}
              onChange={handleChange}
              onBlur={validateGender}
            />
            {errors.gender && (
              <p className="text-red-500 text-xs italic">{errors.gender}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              className={`shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              onBlur={validatePassword}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            {loader == true ? (
              <button
                className="w-full cursor-not-allowed bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleRegister}
                disabled={!isFormValid()}
              >
                <ClipLoader className="mt-1" color="white" size={28} />
              </button>
            ) : (
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleRegister}
                disabled={!isFormValid()}
              >
                Register
              </button>
            )}
          </div>
          <div className=" my-4 grid grid-cols-3 items-center text-black">
            <hr className="border-black" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-black" />
          </div>{" "}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            <Link to="/login">Login Here</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
