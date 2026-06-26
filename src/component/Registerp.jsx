import React, { useEffect, useState } from "react";
import api from "./service/api";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Registerp() {

  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [role,setrole]=useState("");
  const navigate=useNavigate();
   
     useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get('/register');
        // setUsers(res.data);
        console.log("GET Data:", res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  
     const registerUsers = async (e) => {
          e.preventDefault();
       if (!name || !email || !password || !role) {
      alert("Please fill all fields");
      return;
    }
      try {
        const res = await api.post('/register',{name,email,password,role});
        // setUsers(res.data);
        console.log("GET Data:", res.data);
        alert("register successfully...")
        setname("")
        setpassword("")
        setemail("")
        setrole("")
        navigate("/login")

      } catch (error) {
        console.error(error);
         alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
      }
    };  

  return (
    <div className="register-container">
  <div className="register-box">
    <h2>Create Account</h2>

    <input
      type="text"
      placeholder="Enter Full Name"
      className="input-field"
    value={name}
      onChange={(e)=>setname(e.target.value)}
    />

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

    <select
     className="input-field"
     value={role}
     onChange={(e)=>setrole(e.target.value)}

    >
      <option value="">Select Role</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
      <option value="student">Student</option>
    </select>

    <button className="register-btn" onClick={registerUsers}>
      Register
    </button>

    <p className="login-text">
      Already have an account?{" "}
      <span>
        <Link to="/login">Login</Link>
      </span>
    </p>
  </div>
</div>
  );
}

export default Registerp;