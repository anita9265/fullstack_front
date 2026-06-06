import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Registerp from './component/Registerp'
import Home from './component/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import Admin_dashboard from './component/Admin_dashboard'
import User_dashboard from './component/User_dashboard'
import Student_dashboard from './component/Student_dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Registerp/> } />
        <Route path="/admin_dashboard" element={ <Admin_dashboard/> } />
        <Route path="/user_dashboard" element={ <User_dashboard/> } />
        <Route path="/student_dashboard" element={ <Student_dashboard/> } />
       
      </Routes>
       
      
    </>
  )
}

export default App
