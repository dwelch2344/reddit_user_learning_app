import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useLogin } from "../hooks";
import Auth from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const [handleLogin, { error }] = useLogin();
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleLogin(formState);
    setFormState({
      email: "",
      password: "",
    });
  };

  return Auth.loggedin() ? (
    <div>ooops.... you're already logged in</div>
  ) : (
    <section className="page-container">
      <div className="form-card">
        <h3> Log In </h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            className="form-input"
            placeholder="EMAIL"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="PASSWORD"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className={formState.email.length < 3 ? "disabled" : ""}
            disabled={formState.email.length < 3 ? true : false}
          >
            Submit
          </button>
        </form>

        {!error ? (
          <p className="error-placeholder">place holder error message</p>
        ) : (
          <p className="error">{error.message}</p>
        )}
        <button className="form-back-btn" onClick={() => navigate("/")}>
          &larr; BACK
        </button>
      </div>
    </section>
  );
};

export default Login;
