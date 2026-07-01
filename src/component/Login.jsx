import React, { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import api from "./service/api";

  function Login() {

    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[Error,setError]=useState("");
    const navigate=useNavigate();

    const loginusers=async (e)=>{
        e.preventDefault();
        setError("");
    if ( !email || !password ) {
        setError("Please fill all fields");
        return;
      }  
      try {

        const res=await api.post("/login",{email,password});
    
    alert("login successfully");
  console.log("Response:", res.data);
        localStorage.setItem("token", res.data.token);

        localStorage.setItem("user",JSON.stringify(res.data.user));

        const role = res.data.user.role;
        console.log(role)
        if (role === "admin") {
          navigate("/admin_dashboard");
        } else if (role === "student") {
          navigate("/student_dashboard");
        } else {
          navigate("/user_dashboard");
        }

        setemail("");
        setpassword("");

      } 
        catch (error) {
        console.log(error);
     
        setError(
          error.response?.data?.message ||
          "Login Failed"
        );
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="input-field"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="input-field"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
        />

        <button className="login-btn" onClick={loginusers}>Login</button>
        <p className="signup-text">
          Don't have an account?{" "}
          <span>
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;


