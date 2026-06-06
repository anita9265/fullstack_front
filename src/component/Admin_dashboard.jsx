import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin_dashboard() {
  const [user, setuser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("user"));

    setuser(userdata);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }
  }, []);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem("token");

        await axios.get("http://localhost:3003/users/admin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    };
    checkAdmin();
  }, []);

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:3003/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="admin-container">
      <div className="admin-card">
        <h1>Welcome Admin</h1>

        <h2>{user?.name}</h2>

        <p>Manage your HRMS / Student Management System from here.</p>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Admin_dashboard;
