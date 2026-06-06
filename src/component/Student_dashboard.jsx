import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Student_dashboard() {

      const [student, setstudent] = useState(null);
    
      const navigate = useNavigate();

        useEffect(() => {
          const userdata = JSON.parse(localStorage.getItem("user"));
      
          setstudent(userdata);
        }, []);


useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/login");
    return;
  }
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
  
       useEffect(() => {

    const checkstudent = async () => {

      try {

        const token = localStorage.getItem("token");

        await axios.get(
          "http://localhost:3003/users/student",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

      } catch (error) {
          console.log(error);
        navigate("/login");

      }

    };

    checkstudent();

  }, []);

  return (
     <div className="admin-container">
      <div className="admin-card">
        <h1>Welcome user</h1>

        <h2>{student?.name}</h2>

        <p>Manage your HRMS / Student Management System from here.</p>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Student_dashboard