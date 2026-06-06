import React from 'react'

function Dashboard() {
  return (
    <div>
      {/* import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
          role,
        }
      );

      console.log(res.data);

      // Token Store
      localStorage.setItem(
        "token",
        res.data.token
      );

      // User Store
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successfully");

      navigate("/dashboard");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="input-field"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="input-field"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <select
          className="input-field"
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        >
          <option value="">
            Select Role
          </option>
          <option value="admin">
            Admin
          </option>
          <option value="user">
            User
          </option>
          <option value="student">
            Student
          </option>
        </select>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login; */}

dashboard
    </div>
  )
}

export default Dashboard