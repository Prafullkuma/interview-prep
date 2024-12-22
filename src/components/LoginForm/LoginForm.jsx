import React, { useState } from "react";
import "./style.css";
import cartImage from "../../assets/cart.svg";
import user from "../../assets/user.svg";
import password from "../../assets/lock.svg";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMesg, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  let error = {};

  const runValidation = () => {
    if (formData.email.length === 0) {
      error.email = "Email required";
    }
    if (formData.password.length === 0) {
      error.password = "Password required";
    }
  };
  const handleSubmit = () => {
    runValidation();
    if (Object.keys(error).length === 0) {
      console.log(formData, "FORM DATA");
    } else {
      setError(error);
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    if (name === "email") {
      const newItems = { ...errorMesg };
      delete newItems.email;
      setError(newItems);
    }

    if (name === "password") {
      const newItems = { ...errorMesg };
      delete newItems.password;
      setError(newItems);
    }
  };

  return (
    <div className="login-container">
      <div className="wrapper">
        <img src={cartImage} alt="cart-icon" height={"98"} width={"119"} />
        <div className="content">
          <input
            name="email"
            value={formData.email}
            className="input"
            type="text"
            placeholder="Enter email"
            onFocus={handleFocus}
            onChange={handleChange}
          />
          <img
            src={user}
            alt="cart-icon"
            className="img-src"
            height={"20"}
            width={"20"}
          />
          <p className="error-msg">{errorMesg.email}</p>
        </div>
        <div className="content">
          <input
            name="password"
            className="input"
            type="password"
            onFocus={handleFocus}
            value={formData.password}
            placeholder="Enter password"
            onChange={handleChange}
          />
          <img
            src={password}
            className="img-src"
            alt="cart-icon"
            height={"20"}
            width={"20"}
          />
          <p className="error-msg">{errorMesg.password}</p>
        </div>
        <button className="button" onClick={handleSubmit}>
          {" "}
          Login{" "}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
