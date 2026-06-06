// હા, જો User Login ન હોય તો Dashboard Open ન થવું જોઈએ અને સીધું Login Page પર Redirect થવું જોઈએ.

// 1. Login સમયે Token Store કરો
// localStorage.setItem("token", res.data.token);
// 2. Logout Function

// તમારા code માં token define નથી.

// import axios from "axios";
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Admin_dashboard() {

//   const navigate = useNavigate();

//   const logout = async () => {

//     try {

//       const token = localStorage.getItem("token");

//       await axios.post(
//         "http://localhost:3003/logout",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       localStorage.removeItem("token");
//       localStorage.removeItem("user");

//       navigate("/login");

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>

//       <button onClick={logout}>
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Admin_dashboard;
// 3. Protected Route બનાવો
// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {

//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// }

// export default ProtectedRoute;
// 4. App.jsx માં Use કરો
// <Route
//   path="/admin_dashboard"
//   element={
//     <ProtectedRoute>
//       <Admin_dashboard />
//     </ProtectedRoute>
//   }
// />
// 5.Dashboard Component માં Direct Check

// જો Protected Route ના બનાવવું હોય તો:

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Admin_dashboard() {

//   const navigate = useNavigate();

//   useEffect(() => {

//     const token = localStorage.getItem("token");

//     if (!token) {
//       navigate("/login");
//     }

//   }, []);

//   return (
//     <div>
//       Admin Dashboard
//     </div>
//   );
// }
// Complete Flow
// Login Success
//      ↓
// Token localStorage માં Store
//      ↓
// Dashboard Open

// Logout
//      ↓
// Backend Logout API
//      ↓
// localStorage.removeItem("token")
//      ↓
// Navigate("/login")

// User Dashboard URL Hit કરે
//      ↓
// Token Check
//      ↓
// Token નથી
//      ↓
// Login Page



// 222222222222222222222222222222222222222222222222222222222222222222222222222222222

// , Alert ના બદલે Login Page પર જ Error Message બતાવવી વધુ સારી રીત છે.

// Backend માં Status Code આપો
// if (!user) {
//   return res.status(404).json({
//     message: "Oops! User not registered."
//   });
// }

// if (!match) {
//   return res.status(401).json({
//     message: "Oops! Invalid password."
//   });
// }
// Frontend માં Error State બનાવો
// const [error, setError] = useState("");
// Login Function Update કરો
// const loginusers = async (e) => {
//   e.preventDefault();

//   setError("");

//   if (!email || !password) {
//     setError("Please fill all fields");
//     return;
//   }

//   try {

//     const res = await axios.post(
//       "http://localhost:3003/login",
//       {
//         email,
//         password
//       }
//     );

//     localStorage.setItem(
//       "token",
//       res.data.token
//     );

//     const role = res.data.user.role;

//     if (role === "admin") {
//       navigate("/admin_dashboard");
//     } else if (role === "student") {
//       navigate("/student_dashboard");
//     } else {
//       navigate("/user_dashboard");
//     }

//   } catch (error) {

//     setError(
//       error.response?.data?.message ||
//       "Login Failed"
//     );
//   }
// };
// Login Form માં Error Show કરો

// Email Input ઉપર અથવા નીચે:

// {error && (
//   <div className="error-box">
//     {error}
//   </div>
// )}
// CSS
// .error-box{
//   width:100%;
//   background:#ffe5e5;
//   color:#d32f2f;
//   border-left:5px solid red;
//   padding:12px;
//   margin-bottom:15px;
//   border-radius:5px;
//   font-size:14px;
//   font-weight:600;
// }
// Result

// જો User Register ન હોય:

// checkuser Oops! User not registered.

// જો Password ખોટો હોય:

// checkuser Oops! Invalid password.


// 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333


// તમારા code માં 2 problems છે:

// 1. State Name Error

// તમે State બનાવ્યું છે:

// const [Error, setError] = useState("");

// પણ Display કરતાં:

// {error}

// લખ્યું છે.

// React case-sensitive છે.

// સાચું:

// {Error && (
//   <div className="error-box">
//     {Error}
//   </div>
// )}
// 2. catch માં alert ના બદલે setError કરો

// હાલ:

// catch (error) {
//   console.log(error)
//   alert(error+"login Failed")
// }

// સાચું:

// catch (error) {
//   console.log(error);

//   setError(
//     error.response?.data?.message ||
//     "Login Failed"
//   );
// }
// Backend માં Status Code આપો
// if (!user) {
//   return res.status(404).json({
//     message: "User not found"
//   });
// }

// if (!match) {
//   return res.status(401).json({
//     message: "Password does not match"
//   });
// }
// Frontend Login Function
// const loginusers = async (e) => {
//   e.preventDefault();

//   setError("");

//   if (!email || !password) {
//     setError("Please fill all fields");
//     return;
//   }

//   try {

//     const res = await axios.post(
//       "http://localhost:3003/login",
//       {
//         email,
//         password
//       }
//     );

//     localStorage.setItem(
//       "token",
//       res.data.token
//     );

//     const role = res.data.user.role;

//     if (role === "admin") {
//       navigate("/admin_dashboard");
//     } else if (role === "student") {
//       navigate("/student_dashboard");
//     } else {
//       navigate("/user_dashboard");
//     }

//   } catch (error) {

//     setError(
//       error.response?.data?.message ||
//       "Login Failed"
//     );
//   }
// };
// Error Display

// Login button ની ઉપર મૂકો:

// {Error && (
//   <div className="error-box">
//     checkuser {Error}
//   </div>
// )}
// CSS
// .error-box{
//   background:#ffe5e5;
//   color:#d32f2f;
//   border-left:5px solid red;
//   padding:10px;
//   margin-bottom:15px;
//   border-radius:5px;
//   font-weight:600;
// }
// Output

// જો User Register ન હોય:

// checkuser User not found

// જો Password ખોટો હોય:

// checkuser Password does not match

// જો Email/Password ખાલી હોય:

// checkuser Please fill all fields

// આ બધું Login Page પર જ દેખાશે, alert box નહીં આવે.



// // 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222

// હાલમાં તમે માત્ર Token છે કે નથી તે check કરો છો.

// એટલે Student Login કરે પછી Token હોય છે, તેથી URL માં:

// /admin_dashboard

// નાખે તો Admin Dashboard open થઈ જાય છે.

// Solution: Role-Based Protected Route
// Admin Dashboard માં Role Check કરો
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Admin_dashboard() {

//   const navigate = useNavigate();

//   useEffect(() => {

//     const token = localStorage.getItem("token");

//     const user = JSON.parse(
//       localStorage.getItem("user")
//     );

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     if (user?.role !== "admin") {
//       navigate("/login");
//       return;
//     }

//   }, []);

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//     </div>
//   );
// }

// export default Admin_dashboard;
// Student Dashboard
// useEffect(() => {

//   const token = localStorage.getItem("token");

//   const user = JSON.parse(
//     localStorage.getItem("user")
//   );

//   if (!token) {
//     navigate("/login");
//     return;
//   }

//   if (user?.role !== "student") {
//     navigate("/login");
//     return;
//   }

// }, []);
// User Dashboard
// useEffect(() => {

//   const token = localStorage.getItem("token");

//   const user = JSON.parse(
//     localStorage.getItem("user")
//   );

//   if (!token) {
//     navigate("/login");
//     return;
//   }

//   if (user?.role !== "user") {
//     navigate("/login");
//     return;
//   }

// }, []);

// Better Solution (Reusable Component)
// ProtectedRoute.jsx
// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children, role }) {

//   const token = localStorage.getItem("token");

//   const user = JSON.parse(
//     localStorage.getItem("user")
//   );

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   if (user?.role !== role) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// }

// export default ProtectedRoute;
// App.jsx
// <Route
//   path="/admin_dashboard"
//   element={
//     <ProtectedRoute role="admin">
//       <Admin_dashboard />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/student_dashboard"
//   element={
//     <ProtectedRoute role="student">
//       <Student_dashboard />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/user_dashboard"
//   element={
//     <ProtectedRoute role="user">
//       <User_dashboard />
//     </ProtectedRoute>
//   }
// />
// Extra Security (Recommended)

// Frontend check પૂરતું નથી. Backend માં પણ Role Check કરો:

// if (req.user.role !== "admin") {
//   return res.status(403).json({
//     message: "Access Denied"
//   });
// }

// ઉદાહરણ:

// router.get(
//   "/admin-data",
//   verifytoken,
//   verifyAdmin,
//   controller.adminData
// );

// તેથી Student URL બદલીને Admin Page ખોલવાનો પ્રયત્ન કરે તો પણ Backend Data આપશે નહીં.

// સારાંશ:

// Token Check → Login છે કે નહીં.
// Role Check → Admin/Admin, Student/Student, User/User.
// Frontend + Backend બંનેમાં Role Check રાખો. આ Role-Based Authentication કહેવાય છે.


// protected route baanvu chu======================================================================

// હા, તમે backend માં already verifyToken middleware અને role middleware વાપરી રહ્યા છો, જે professional approach છે.

// તમારો flow આવો છે:

// Login
//    ↓
// JWT Generate (role token માં store)
//    ↓
// Frontend token save
//    ↓
// Protected Route
//    ↓
// API Call
//    ↓
// verifyToken
//    ↓
// role("admin") / role("student")
//    ↓
// Response
// Step 1: Login સમયે JWT માં Role Store કરો

// Login Controller:

// const token = jwt.sign(
//   {
//     id: user._id,
//     email: user.email,
//     role: user.role
//   },
//   "secretkey",
//   { expiresIn: "1d" }
// );
// Step 2: Role Middleware

// તમારું role.js

// const role = (allowedRole) => {
//   return (req, res, next) => {

//     if (req.user.role !== allowedRole) {
//       return res.status(403).json({
//         message: "Access Denied"
//       });
//     }

//     next();
//   };
// };

// module.exports = role;
// Step 3: Backend Routes
// router.get(
//   "/admin",
//   verifytoken,
//   role("admin"),
//   (req, res) => {
//     res.json({
//       message: "Welcome Admin"
//     });
//   }
// );

// router.get(
//   "/student",
//   verifytoken,
//   role("student"),
//   (req, res) => {
//     res.json({
//       message: "Welcome Student"
//     });
//   }
// );

// આ already સાચું છે. 

// React માં શું કરવું?

// Frontend માં dashboard open થાય તે પહેલાં backend ને પૂછવું.

// Admin Dashboard
// import { useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function AdminDashboard() {

//   const navigate = useNavigate();

//   useEffect(() => {

//     const checkAdmin = async () => {

//       try {

//         const token = localStorage.getItem("token");

//         await axios.get(
//           "http://localhost:3003/users/admin",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           }
//         );

//       } catch (error) {

//         navigate("/login");

//       }

//     };

//     checkAdmin();

//   }, []);

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//     </div>
//   );
// }

// export default AdminDashboard;


// Student Dashboard
// import { useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function StudentDashboard() {

//   const navigate = useNavigate();

//   useEffect(() => {

//     const checkStudent = async () => {

//       try {

//         const token = localStorage.getItem("token");

//         await axios.get(
//           "http://localhost:3003/users/student",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           }
//         );

//       } catch (error) {

//         navigate("/login");

//       }

//     };

//     checkStudent();

//   }, []);

//   return (
//     <div>
//       <h1>Student Dashboard</h1>
//     </div>
//   );
// }

// export default StudentDashboard;
// Better Solution (Recommended)

// એક ProtectedRoute બનાવો.

// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {

//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// }

// export default ProtectedRoute;

// Routes:

// <Route
//   path="/admin_dashboard"
//   element={
//     <ProtectedRoute>
//       <AdminDashboard />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/student_dashboard"
//   element={
//     <ProtectedRoute>
//       <StudentDashboard />
//     </ProtectedRoute>
//   }
// />
// Real World Flow

// ધારો:

// Admin Login

// JWT:

// {
//   "id":"123",
//   "email":"admin@gmail.com",
//   "role":"admin"
// }

// Admin Dashboard open કરે:

// GET /users/admin
// Authorization: Bearer token

// Backend:

// verifyToken

// ↓

// req.user.role === "admin"

// ↓

//  Access Granted

// જો Admin token લઈને Student API hit કરે:

// GET /users/student

// Backend:

// req.user.role === "admin"

// પણ Route:

// role("student")

// છે.

// ↓

// checkuser 403 Access Denied

// one token overrride thai tenu solution=----------------------------------------------------------------


// હા, આ expected behavior છે.

// તમે એક જ key વાપરી રહ્યા છો:

// localStorage.setItem("token", res.data.token);
// localStorage.setItem("user", JSON.stringify(res.data.user));

// તેથી:

// Admin Login
// ↓
// token = admin_token

// પછી

// Student Login
// ↓
// token = student_token

// પહેલું admin_token overwrite થઈ જશે
// Real-world Application માં શું થાય?

// સામાન્ય રીતે એક browser માં એક જ user logged-in હોય છે.

// Chrome
// → Admin Login

// Firefox
// → Student Login

// Edge
// → User Login

// અથવા

// Chrome Normal Window
// → Admin

// Chrome Incognito
// → Student

// દરેક browser/storage અલગ હોય છે.

// જો તમારે Multiple Tokens Store કરવા હોય

// ત્યારે અલગ keys રાખી શકો:

// localStorage.setItem("adminToken", adminToken);
// localStorage.setItem("studentToken", studentToken);
// localStorage.setItem("userToken", userToken);

// પણ production login system માં આવું સામાન્ય રીતે કરાતું નથી.

// Recommended Flow

// Login પહેલાં જૂનો session remove કરો:

// const loginusers = async (e) => {
//   e.preventDefault();

//   localStorage.removeItem("token");
//   localStorage.removeItem("user");

//   try {

//     const res = await axios.post(
//       "http://localhost:3003/login",
//       { email, password }
//     );

//     localStorage.setItem(
//       "token",
//       res.data.token
//     );

//     localStorage.setItem(
//       "user",
//       JSON.stringify(res.data.user)
//     );

//   } catch (error) {
//     console.log(error);
//   }
// };
// HRMS / Student Management System માટે Best Practice

// એક browser = એક active login

// Admin Login
// ↓
// Admin Token Store

// Logout
// ↓
// Token Remove

// Student Login
// ↓
// Student Token Store

// Logout
// ↓
// Token Remove

// User Login
// ↓
// User Token Store

// આ સૌથી clean અને secure approach છે.

// જો તમારો requirement એવો છે કે એક જ browser માં Admin, Student અને User ત્રણેયના sessions એકસાથે maintain કરવા છે, તો મને કહો. પછી હું Context API + Multiple Token Storage + Role Switching નો architecture step-by-step સમજાવીશ.


// em nai to mane samajvo ke real word producion ma kai rete hoy like jo hu mara browswr ma ek tab malogin thav to mane te batha tab ma hu togin j hoy but to is anothrer to j login no opetion ave to mane samajvo kai rete tai login 


// multi login---------------------------------------------------------------------------------

// હા, real-world production માં સામાન્ય રીતે આ રીતે કામ થાય છે:

// Scenario

// ધારો કે તમે Chrome માં login કરો:

// Tab 1 → Login (Admin)
// ↓
// Token localStorage માં save

// હવે એ જ browser ના બીજા tab માં જાઓ:

// Tab 2 → Dashboard open

// ત્યાં ફરી login કરવાની જરૂર નથી.

// કારણ કે:

// localStorage.getItem("token")

// બધા tabs માટે same હોય છે.

// Real World Flow
// First Time
// User Login
// ↓
// Server JWT આપે
// ↓
// Browser localStorage/Cookie માં save કરે
// ↓
// Dashboard
// New Tab Open
// New Tab
// ↓
// Token Check
// ↓
// Token Exists
// ↓
// Direct Dashboard

// Login Page દેખાડાતી નથી.

// Example: Gmail

// તમે Gmail login કરો:

// Tab 1
// gmail.com
// ↓
// Login

// પછી

// Tab 2
// gmail.com

// ફરી login માંગતું નથી.

// કારણ કે session/cookie already છે.

// React માં કેવી રીતે કરવું?

// Login page load થાય ત્યારે check કરો:

// useEffect(() => {

//   const token = localStorage.getItem("token");

//   if (token) {
//     navigate("/dashboard");
//   }

// }, []);

// એટલે logged-in user login page પર જાય તો સીધો dashboard પર redirect થશે.

// Dashboard માં
// useEffect(() => {

//   const token = localStorage.getItem("token");

//   if (!token) {
//     navigate("/login");
//   }

// }, []);

// એટલે token વગર dashboard open નહીં થાય.

// Logout
// Logout
// ↓
// localStorage.removeItem("token")
// ↓
// All Tabs Lose Access

// કારણ કે token remove થઈ ગયો.

// જો કોઈ tab refresh કરે:

// Dashboard
// ↓
// Token Check
// ↓
// Not Found
// ↓
// Login Page
// Production માં વધુ Common

// ઘણી applications localStorage નહીં પણ HTTP-only Cookies વાપરે છે.

// Examples:

// Google
// Facebook
// Amazon

// Cookie browser automatically મોકલે છે, તેથી security વધુ સારી મળે છે.

// Summary
// One Browser
//    ↓
// One Storage (localStorage/Cookie)
//    ↓
// All Tabs Share Same Login

// Login Once
//    ↓
// Open 10 Tabs
//    ↓
// All Tabs Logged In

// Logout Once
//    ↓
// All Tabs Logged Out

// આ જ behavior production systems માં સામાન્ય રીતે જોવા મળે છે


// role wise=====================================   =====================================================
// હા, production માં સામાન્ય રીતે આવું નથી થતું કે એક જ browser profile માં Admin, Student અને User માટે અલગ-અલગ JWT tokens localStorage માં store કરવામાં આવે.

// સામાન્ય flow:

// Browser
//    ↓
// Current Logged-in User
//    ↓
// One Token
//    ↓
// One Session

// ઉદાહરણ:

// Admin Login
// ↓
// token = admin_token

// પછી Student Login
// ↓
// token = student_token
// ↓
// admin_token replace થઈ જાય

// આ expected behavior છે.

// Real-world Examples

// જો તમે:

// Google Gmail માં login કરો
// પછી બીજા account થી login કરો

// તો browser current session switch કરે છે અથવા account management use કરે છે. JWT systems માં સામાન્ય રીતે current active user નો token જ store થાય છે.

// Multiple Users એકસાથે કેવી રીતે?

// Developers સામાન્ય રીતે:

// Chrome
//   → Admin

// Chrome Incognito
//   → Student

// Firefox
//   → User

// અથવા અલગ browser profiles વાપરે છે.

// તમારા HRMS માટે

// સૌથી યોગ્ય રીત:

// localStorage.setItem("token", res.data.token);
// localStorage.setItem("user", JSON.stringify(res.data.user));

// અને logout:

// localStorage.removeItem("token");
// localStorage.removeItem("user");

// એક user logout થાય પછી બીજો login કરે.

// Exception

// કેટલીક advanced applications multiple accounts support કરે છે, પણ ત્યાં પણ સામાન્ય રીતે:

// અલગ session management
// account switching UI
// refresh tokens
// server-side session tracking

// વાપરવામાં આવે છે.

// શરૂઆતના HRMS/Student Management System project માટે એક browser = એક logged-in user = એક token એ જ professional અને production-style approach છે.
