import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const isFormValid = () => {
    return (
        email != '' &&
        password != ''
    );
  };

  const handleLogin = () => {
    if (isFormValid()) {
        axios.post('http://3001/api/auth/login', {
            'email' : email,
            'password' : password,
        })
        .then(result => {
          setToken("this is a test token");
          navigate("/dashboard", { replace: true });
        })
        .catch(err => console.log(err));
    } else {
        console.log('Form is not valid');
    }
  };

  return (
    <>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                name="email"
                className={`form-control`}
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={e => { setEmail(e.target.value); isFormValid() }}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                className={`form-control`}
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={e => { setPassword(e.target.value); isFormValid() }}
            />
        </div>
        <button type="button" onClick={handleLogin} disabled={!isFormValid()}>Créer mon compte</button>
    </>
);
}

export default LoginForm