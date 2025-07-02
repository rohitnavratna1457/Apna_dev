import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Headerbaar from "./Header/Headerbaar";
import Footer from "./Footer/Footer";
import Admin_Reg from "./Authentication/Admin/Admin_Reg";
import Admin_Login from "./Authentication/Admin/Admin_Login";
import Staff_Reg from "./Authentication/Staff/Staff_Reg";
import Staff_Login from "./Authentication/Staff/Staff_Login";
import Staff_Refer from "./Authentication/Staff/Staff_Refer";
import User_Reg from "./Authentication/User/User_Reg";
import User_Login from "./Authentication/User/User_Login";
import Home_Page_Log from "./Home_Page/Home_Page_Log";
import Home_Page_WLog from "./Home_Page/Home_Page_WLog";
import User_Data_wl from "./Home_Page/User_Data_wl";

import User_data from "./Home_Page/User_data";
import User_Profile from "./Home_Page/User_Profile";

import Admin_Panel from "./Panel/Admin_Panel/Admin_Panel";
import Staff_Tables from "./Panel/Admin_Panel/Staff_Tables";
import Staff_Charts from "./Panel/Admin_Panel/Staff_Charts";
import Staff_Transaction from "./Panel/Admin_Panel/Staff_Transaction";
import Staff_Withdrawal from "./Panel/Admin_Panel/Staff_Withdrawal";
import User_Withdrawal from "./Panel/Admin_Panel/User_Withdrawal";
import User_Tables from "./Panel/Admin_Panel/User_Tables";
import User_Charts from "./Panel/Admin_Panel/User_Charts";
import User_Transaction from "./Panel/Admin_Panel/User_Transaction";
import Transaction from "./Panel/Admin_Panel/Transaction";
import Withdrawal from "./Panel/Admin_Panel/Withdrawal";
import Post_Commission from "./Panel/Admin_Panel/Post_Commission";

import Staff_Panel from "./Panel/Staff_Panel/Staff_Panel";
import Staff_Transactions from "./Panel/Staff_Panel/Staff_Transactions";
import Staff_Added_User from "./Panel/Staff_Panel/Staff_Added_User";
import Staff_Withdrawals from "./Panel/Staff_Panel/Staff_Withdrawals";
import Staff_Bank_Details from "./Panel/Staff_Panel/Staff_Bank_Details";

import User_Panel from "./Panel/User_Panel/User_Panel";
import User_Added_User from "./Panel/User_Panel/User_Added_User";
import User_Transaction_User from "./Panel/User_Panel/User_Transaction_User";
import User_Withdrawal_User from "./Panel/User_Panel/User_Withdrawal_User";
import User_Profile_User from "./Panel/User_Panel/User_Profile_User";
import User_Recharge from "./Panel/User_Panel/User_Recharge";
import User_Apply from "./Panel/User_Panel/User_Apply";
import User_Bank_Details from "./Panel/User_Panel/User_Bank_Details";
import Test from "./Test";
import ProtectedRoute from "./Proctected_Routes/Proctected"; // adjust path
import Unauthorized from "./Proctected_Routes/Unauthorized";
import Reset from "./Reset";

function App() {
  const id = localStorage.getItem("user_id");
  const role = localStorage.getItem("role");
  console.log(role, "****** role *******");



  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/Admin_Reg" element={<Admin_Reg />} />
          <Route path="/Admin_Login" element={<Admin_Login />} />
          <Route path="/Staff_Reg" element={<Staff_Reg />} />
          <Route path="/Staff_Login" element={<Staff_Login />} />
          {/* <Route path="/:id" element={<Staff_Refer />} /> */}
          <Route path="/User_Reg" element={<User_Reg />} />
          <Route path="/User_Reg/:id" element={<User_Reg />} />
          <Route path="/User_Login" element={<User_Login />} />
          {/* <Route path="/" element={<Home_Page_WLog />} /> */}
          <Route path="/User_Data_wl/:id" element={<User_Data_wl />} />
{/* 
          {(role === "admin" || role === "staff" || role === "user") && (
            <> */}
              <Route path="/Home_Page_Log" element={<Home_Page_Log />} />
              <Route path="/User_data/:id" element={<User_data />} />
              <Route path="/User_Profile" element={<User_Profile />} />
              <Route path="/User_Profile/:id" element={<User_Profile />} />
            {/* </>
          )} */}

          {/* {role == "admin" && (
            <> */}
              <Route path="/Admin_Panel" element={<Admin_Panel />} />
              <Route path="/Staff_Tables" element={<Staff_Tables />} />
              <Route path="/Staff_Charts/:id" element={<Staff_Charts />} />
              <Route
                path="/Staff_Transaction"
                element={<Staff_Transaction />}
              />
              <Route path="/Staff_Withdrawal" element={<Staff_Withdrawal />} />
              <Route path="/User_Withdrawal" element={<User_Withdrawal />} />
              <Route path="/User_Tables" element={<User_Tables />} />
              <Route path="/User_Charts/:id" element={<User_Charts />} />
              <Route path="/User_Transaction" element={<User_Transaction />} />
              <Route path="/Transaction" element={<Transaction />} />
              <Route path="/Withdrawal" element={<Withdrawal />} />
              <Route path="/Post_Commission" element={<Post_Commission />} />
            {/* </>
          )} */}
          {/* {role == "staff" && (
            <> */}
              <Route path="/Staff_Panel" element={<Staff_Panel />} />
              <Route
                path="/Staff_Transactions"
                element={<Staff_Transactions />}
              />
              <Route
                path="/Staff_Withdrawals"
                element={<Staff_Withdrawals />}
              />
              <Route path="/Staff_Added_User" element={<Staff_Added_User />} />
              <Route
                path="/Staff_Bank_Details"
                element={<Staff_Bank_Details />}
              />
            {/* </>
          )} */}
{/* 
          {role == "user" && (
            <> */}
              <Route path="/User_Panel" element={<User_Panel />} />
              <Route path="/User_Added_User" element={<User_Added_User />} />
              <Route
                path="/User_Transaction_User"
                element={<User_Transaction_User />}
              />
              <Route
                path="/User_Withdrawal_User"
                element={<User_Withdrawal_User />}
              />
              <Route
                path="/User_Profile_User"
                element={<User_Profile_User />}
              />
              <Route path="/User_Recharge" element={<User_Recharge />} />
              <Route path="/User_Apply" element={<User_Apply />} />
              <Route
                path="/User_Bank_Details"
                element={<User_Bank_Details />}
              />
            {/* </>
          )} */}

          <Route path="/Test" element={<Test />} />

          <Route path="/Reset" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
