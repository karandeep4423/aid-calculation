import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuth } from "../../provider/authProvider";

const RegisterForm = () => {
  const { setUser } = useAuth(); // Get setUserData from context
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
      errors.push("Au moins 2 caractères requis");
    if (formData.firstname.length > 50)
      errors.push("Max 50 caractères autorisés");
    if (!/^[a-zA-Z]+$/.test(formData.firstname))
      errors.push("Seuls les caractères alphabétiques sont autorisés");
    setErrors((prev) => ({ ...prev, firstname: errors }));
  };

  const validateLastname = () => {
    let errors = [];
    if (!formData.lastname || formData.lastname.length < 2)
      errors.push("Au moins 2 caractères requis");
    if (formData.lastname.length > 50)
      errors.push("Max 50 caractères autorisés");
    if (!/^[a-zA-Z]+$/.test(formData.lastname))
      errors.push("Seuls les caractères alphabétiques sont autorisés");
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
      gender: !formData.gender
        ? "Le sexe est requis"
        : formData.gender === "monsieur" ||
          formData.gender === "Monsieur" ||
          formData.gender === "Madame" ||
          formData.gender === "madame"
        ? null
        : "Ce n'est pas un sexe valide !",
    }));
  };

  const validatePassword = () => {
    setErrors((prev) => ({
      ...prev,
      password: !formData.password
        ? "Le mot de passe est requis"
        : formData.password.length < 8
        ? "Le mot de passe doit comporter au moins 8 caractères"
        : null,
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
    const { email, firstname, lastname, phone, gender, password } = formData;

    if (email && firstname && lastname && phone && gender && password) {
      setLoader(true);
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`,
          formData
        );
        console.log("result signup", result);
        // Store user data and token in context
        setUser(result.data.user);
        toast.success("Le lien de vérification par e-mail a été envoyé !");
        resetForm();
      } catch (err) {
        toast.error(err.response?.data?.message || "An error occurred");
      } finally {
        setLoader(false); // Ensure loader is always reset in the end
      }
    } else {
      toast.error("Le formulaire n'est pas valide:");
      setLoader(false);
    }
  };

  return (
    <div className="py-10 min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Enregistrez-vous</h2>
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
              placeholder="Entrez votre adresse e-mail"
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
              placeholder="Entrez votre prénom"
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
              placeholder="Entrez votre nom"
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
              placeholder="Entrez le numéro de téléphone"
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
              Sexe
            </label>
            <select
              className={`shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.gender ? "border-red-500" : ""
              }`}
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              onBlur={validateGender}
            >
              <option value="">Sélectionnez le sexe</option>
              <option value="madame">Femme</option>
              <option value="monsieur">Homme</option>
            </select>
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
                Enregistrez-vous
              </button>
            )}
          </div>
          <div className=" my-4 grid grid-cols-3 items-center text-black">
            <hr className="border-black" />
            <p className="text-center text-sm">OU</p>
            <hr className="border-black" />
          </div>{" "}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
          >
            <Link to="/login">Me connecter</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
