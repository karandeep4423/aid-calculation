import React, { useState, useEffect } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [emailError, setEmailError] = useState(null);
  const [firstnameError, setFirstnameError] = useState([]);
  const [lastnameError, setLastnameError] = useState([]);
  const [phoneError, setPhoneError] = useState(null);
  const [genderError, setGenderError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [touchedFields, setTouchedFields] = useState({
    email: false,
    firstname: false,
    lastname: false,
    phone: false,
    gender: false,
    password: false,
  });

  useEffect(() => {
    if (touchedFields.email) {
      validateEmail();
    }
  }, [email, touchedFields.email]);

  useEffect(() => {
    if (touchedFields.firstname) {
      validateFirstname();
    }
  }, [firstname, touchedFields.firstname]);

  useEffect(() => {
    if (touchedFields.lastname) {
      validateLastname();
    }
  }, [lastname, touchedFields.lastname]);

  useEffect(() => {
    if (touchedFields.phone) {
      validatePhone();
    }
  }, [phone, touchedFields.phone]);

  useEffect(() => {
    if (touchedFields.gender) {
      validateGender();
    }
  }, [gender, touchedFields.gender]);

  useEffect(() => {
    if (touchedFields.password) {
      validatePassword();
    }
  }, [password, touchedFields.password]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setTouchedFields({ ...touchedFields, email: true });
  };

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
    setTouchedFields({ ...touchedFields, firstname: true });
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
    setTouchedFields({ ...touchedFields, lastname: true });
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setTouchedFields({ ...touchedFields, phone: true });
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setTouchedFields({ ...touchedFields, gender: true });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setTouchedFields({ ...touchedFields, password: true });
  };

  const validateEmail = () => {
    setEmailError(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
        ? null
        : "Invalid email format"
    );
  };

  const validateFirstname = () => {
    let errors = [];
    if (firstname.length < 2) errors.push("au moins 2 chars");
    if (firstname.length > 50) errors.push("max 50 chars");
    if (!/^[a-zA-Z]+$/.test(firstname)) errors.push("charsters alphabetic");
    setFirstnameError(errors);
  };

  const validateLastname = () => {
    let errors = [];
    if (lastname.length < 2) errors.push("au moins 2 chars");
    if (lastname.length > 50) errors.push("max 50 chars");
    if (!/^[a-zA-Z]+$/.test(lastname)) errors.push("charsters alphabetic");
    setLastnameError(errors);
  };

  const validatePhone = () => {
    setPhoneError(
      /^(0|\+33)[1-9]\d{8}$/.test(phone) ? null : "Phone is required"
    );
  };

  const validateGender = () => {
    setGenderError(gender.length > 0 ? null : "Gender is required");
  };

  const validatePassword = () => {
    setPasswordError(password.length > 0 ? null : "Password is required");
  };

  const isFormValid = () => {
    console.log(!emailError);
    console.log(firstnameError.length === 0);
    console.log(lastnameError.length === 0);
    console.log(!phoneError);
    console.log(!genderError);
    console.log(!passwordError);
    return (
      !emailError &&
      firstnameError.length === 0 &&
      lastnameError.length === 0 &&
      !phoneError &&
      !genderError &&
      !passwordError
    );
  };

  const handleRegister = () => {
    if (isFormValid()) {
      axios
        .post("http://localhost:3000/api/auth/signup", {
          email: email,
          firstname: firstname,
          lastname: lastname,
          phone: phone,
          gender: gender,
          password: password,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    } else {
      console.log("Form is not valid");
    }
  };

  return (
    // <>
    //     <div className="form-group">
    //         <label htmlFor="email">Email</label>
    //         <input
    //             name="email"
    //             className={`form-control ${emailError ? 'is-invalid' : ''}`}
    //             id="email"
    //             placeholder="Enter email"
    //             value={email}
    //             onChange={handleEmailChange}
    //             onBlur={validateEmail}
    //         />
    //         <div className="invalid-feedback">{emailError}</div>
    //     </div>
    //     <div className="form-group">
    //         <label htmlFor="firstname">First Name</label>
    //         <input
    //             name="firstname"
    //             className={`form-control ${firstnameError ? 'is-invalid' : ''}`}
    //             id="firstname"
    //             placeholder="Enter first name"
    //             value={firstname}
    //             onChange={handleFirstnameChange}
    //             onBlur={validateFirstname}
    //         />
    //         <div className="invalid-feedback">
    //             {firstnameError.map((err, index) => (
    //                 <React.Fragment key={index}>
    //                     <p>{err}</p>
    //                     <br />
    //                 </React.Fragment>
    //             ))}
    //         </div>
    //     </div>
    //     <div className="form-group">
    //         <label htmlFor="lastname">Last Name</label>
    //         <input
    //             name="lastname"
    //             className={`form-control ${lastnameError ? 'is-invalid' : ''}`}
    //             id="lastname"
    //             placeholder="Enter last name"
    //             value={lastname}
    //             onChange={handleLastnameChange}
    //             onBlur={validateLastname}
    //         />
    //         <div className="invalid-feedback">{lastnameError}</div>
    //     </div>
    //     <div className="form-group">
    //         <label htmlFor="phone">Phone</label>
    //         <input
    //             name="phone"
    //             className={`form-control ${phoneError ? 'is-invalid' : ''}`}
    //             id="phone"
    //             placeholder="Enter phone"
    //             value={phone}
    //             onChange={handlePhoneChange}
    //             onBlur={validatePhone}
    //         />
    //         <div className="invalid-feedback">{phoneError}</div>
    //     </div>
    //     <div className="form-group">
    //         <label htmlFor="gender">Gender</label>
    //         <input
    //             name="gender"
    //             className={`form-control ${genderError ? 'is-invalid' : ''}`}
    //             id="gender"
    //             placeholder="Enter gender"
    //             value={gender}
    //             onChange={handleGenderChange}
    //             onBlur={validateGender}
    //         />
    //         <div className="invalid-feedback">{genderError}</div>
    //     </div>
    //     <div className="form-group">
    //         <label htmlFor="password">Password</label>
    //         <input
    //             type="password"
    //             name="password"
    //             className={`form-control ${passwordError ? 'is-invalid' : ''}`}
    //             id="password"
    //             placeholder="Enter password"
    //             value={password}
    //             onChange={handlePasswordChange}
    //             onBlur={validatePassword}
    //         />
    //         <div className="invalid-feedback">{passwordError}</div>
    //     </div>
    //     <button type="button" onClick={handleRegister} disabled={!isFormValid()}>Créer mon compte</button>
    // </>
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-center text-lg mb-4">
        Souhaitez vous créer recevoir vos résultats par mail ? N'attendez pas
        plus, créez votre compte en une minute !
      </h2>
      <form onSubmit={handleRegister}>
        <div className="flex justify-center mb-4">
          <button
            type="button"
            className={`px-4 py-2 mx-1 border ${
              gender === "Monsieur" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setGender("Monsieur")}
          >
            Monsieur
          </button>
          <button
            type="button"
            className={`px-4 py-2 mx-1 border ${
              gender === "Madame" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setGender("Madame")}
          >
            Madame
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Prénom</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nom</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Numéro de téléphone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="mt-2 text-sm">
            <p>✓ Un caractère en minuscule</p>
            <p>✓ Un caractère en majuscule</p>
            <p>✓ Un chiffre</p>
            <p>✓ 10 caractères minimum</p>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Créer mon compte
        </button>
        <div className="text-center mt-4">
          <button className="text-blue-500 hover:underline">
            Je possède déjà un compte
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
