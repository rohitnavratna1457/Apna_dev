// // // src/components/ProtectedRoute.js
// // import React from "react";
// // import { Navigate } from "react-router-dom";

// // const ProtectedRoute = ({ children, allowedRoles }) => {
// //   const user = JSON.parse(localStorage.getItem("user")); // should include { role: "admin" | "staff" | "user" }

// //   if (!user) return <Navigate to="/User_Login" replace />;
// //   if (!allowedRoles.includes(user.role)) return <Navigate to="/" replace />;

// //   return children;
// // };

// // export default ProtectedRoute;






//  <Routes>
//           <Route path="/" element={<Home_Page_WLog />} />
//           <Route path="/Header" element={<Header />} />
//           <Route path="/Admin_Login" element={<Admin_Login />} />
//           <Route path="/Admin_Reg" element={<Admin_Reg />} />
//           <Route path="/Staff_Login" element={<Staff_Login />} />
//           <Route path="/Staff_Reg" element={<Staff_Reg />} />
//           <Route path="/User_Login" element={<User_Login />} />
//           <Route path="/User_Reg" element={<User_Reg />} />
//           <Route path="/User_Reg/:id" element={<User_Reg />} />
//           <Route path="/Home_Page_Log" element={<Home_Page_Log />} />

//           {/* Admin Protected Routes */}
//           <Route
//             path="/Admin_Panel"
//             element={
//               <ProtectedRoute allowedRoles={["admin"]}>
//                 <Admin_Panel />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/Staff_Tables"
//             element={
//               <ProtectedRoute allowedRoles={["admin"]}>
//                 <Staff_Tables />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/User_Tables"
//             element={
//               <ProtectedRoute allowedRoles={["admin"]}>
//                 <User_Tables />
//               </ProtectedRoute>
//             }
//           />
         
//           <Route
//             path="/Staff_Panel"
//             element={
//               <ProtectedRoute allowedRoles={["staff"]}>
//                 <Staff_Panel />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/Staff_Transactions"
//             element={
//               <ProtectedRoute allowedRoles={["staff"]}>
//                 <Staff_Transactions />
//               </ProtectedRoute>
//             }
//           />
         
//           <Route
//             path="/User_Panel"
//             element={
//               <ProtectedRoute allowedRoles={["user"]}>
//                 <User_Panel />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/User_Recharge"
//             element={
//               <ProtectedRoute allowedRoles={["user"]}>
//                 <User_Recharge />
//               </ProtectedRoute>
//             }
//           />
          
//           <Route path="/Test" element={<Test />} />
//           <Route path="/Reset" element={<Reset />} />
//         </Routes> 