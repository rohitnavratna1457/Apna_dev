// // import React from 'react'
// // import { useState, useEffect } from 'react'
// // import { UserTransactionsGet } from '../../Api/CoreApi'
// // import { useParams, Link, useNavigate } from 'react-router-dom'
// // import { Form, Input, Button, Table } from "antd";

// // function User_Transaction_User() {
// //     const Navigate = useNavigate();

// //     const id = localStorage.getItem('user_id')
// //     const [data, setData] = useState([])
// //     console.log(data, '***** v ******')

// //     const get = async () => {
// //         const response = await UserTransactionsGet()
// //         console.log(response, '**** response *********')
// //         const filter_transaction = response.filter(i => i.user_id === id)
// //         console.log(filter_transaction, '******* filter_transaction ******')

// //         setData(filter_transaction)
// //     }

// //     useEffect(() => {
// //         get()
// //     }, [])

// //     const log_out = () => {
// //         localStorage.removeItem('user_id')
// //         Navigate('/User_Login')
// //     }
// //     return (
// //         <div>
// //             <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
// //                 <Link to='/Home_Page_wLog'>
// //                     <p style={{ fontSize: '30px', color: 'white', marginLeft: '20px', marginTop: '-1px' }}>Ristey</p>
// //                 </Link>

// //                 {id ? (
// //                     <Link to='/User_Panel'>
// //                         <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1300px' }}>Profile</p>
// //                     </Link>
// //                 ) : (
// //                     <div style={{ display: 'flex', gap: '20px' }}>
// //                         <Link to='/User_Reg/885695'>
// //                             <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1200px' }}>Sign Up</p>
// //                         </Link>
// //                         <Link to='/User_Login'>
// //                             <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '30px' }}>Login</p>
// //                         </Link>
// //                     </div>
// //                 )}
// //             </div>
// //             <div style={{ width: "180px", height: '680px', backgroundColor: 'white', position: 'fixed', marginTop: '50px' }}>
// //                 <Link to='/User_Panel'>
// //                     <Button
// //                         style={{
// //                             textAlign: "center",
// //                             color: "black",
// //                             borderRadius: "0px",
// //                             width: "100%",
// //                         }}

// //                     >
// //                         Dashboard
// //                     </Button>
// //                 </Link>
// //                 <Link to='/User_Added_User'>
// //                     <Button
// //                         style={{
// //                             textAlign: "center",
// //                             color: "black",
// //                             borderRadius: "0px",
// //                             width: "100%",
// //                         }}
// //                     >
// //                         User
// //                     </Button>
// //                 </Link>
// //                 <Link to='/User_Recharge'>
// //                     <Button
// //                         style={{
// //                             textAlign: "center",
// //                             color: "black",
// //                             borderRadius: "0px",
// //                             width: "100%",
// //                         }}
// //                     >
// //                         Recharge
// //                     </Button>
// //                 </Link>
// //                 <Link to='/User_Transaction_User'>
// //                     <Button
// //                         style={{
// //                             textAlign: "center",
// //                             color: "black",
// //                             borderRadius: "0px",
// //                             width: "100%",
// //                         }}
// //                     >
// //                         Transaction
// //                     </Button>
// //                 </Link>
// //                 <Link to='/User_Withdrawal_User'>
// //                     <Button
// //                         style={{
// //                             textAlign: "center",
// //                             color: "black",
// //                             borderRadius: "0px",
// //                             width: "100%",
// //                         }}
// //                     >
// //                         Withdrawal
// //                     </Button>
// //                 </Link>
// //                 <Button
// //                     style={{
// //                         textAlign: "center",
// //                         color: "black",
// //                         borderRadius: "0px",
// //                         width: "100%",
// //                     }}
// //                     onClick={log_out}
// //                 >
// //                     Log Out
// //                 </Button>
// //             </div>
// //             <div style={{ marginLeft: '185px', paddingTop: '70px' }}>
// //                 <Table
// //                     columns={[
// //                         { title: "id", dataIndex: "id", key: "id" },
// //                         { title: "User_id", dataIndex: "user_id", key: "user_id" },
// //                         { title: "amount", dataIndex: "amount", key: "amount" },
// //                         { title: "date", dataIndex: "date", key: "date" },
// //                         { title: "type", dataIndex: "type", key: "type" },
// //                         { title: "status", dataIndex: "status", key: "status" }
// //                     ]}
// //                     dataSource={data}
// //                     rowKey="id"
// //                     bordered
// //                     scroll={{ x: true }} // Makes it responsive
// //                 />
// //             </div>
// //         </div>
// //     )
// // }

// // export default User_Transaction_User

// import React, { useState, useEffect } from 'react';
// import { UserTransactionsGet } from '../../Api/CoreApi';
// import { Link, useNavigate } from 'react-router-dom';
// import { Button, Table } from 'antd';

// function User_Transaction_User() {
//   const navigate = useNavigate();

//   const id = localStorage.getItem('user_id');
//   const [data, setData] = useState([]);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const getTransactions = async () => {
//     try {
//       const response = await UserTransactionsGet();
//       const filteredTransactions = response.filter(i => String(i.user_id) === String(id));
//       setData(filteredTransactions);
//     } catch (error) {
//       console.error("Failed to fetch transactions:", error);
//     }
//   };

//   useEffect(() => {
//     getTransactions();
//   }, []);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     if (window.innerWidth <= 768) setSidebarOpen(false);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const log_out = () => {
//     localStorage.removeItem('user_id');
//     navigate('/User_Login');
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const columns = [
//     { title: 'ID', dataIndex: 'id', key: 'id' },
//     { title: 'User ID', dataIndex: 'user_id', key: 'user_id' },
//     { title: 'Amount', dataIndex: 'amount', key: 'amount' },
//     { title: 'Date', dataIndex: 'date', key: 'date' },
//     { title: 'Type', dataIndex: 'type', key: 'type' },
//     { title: 'Status', dataIndex: 'status', key: 'status' },
//   ];

//   return (
//     <div>
//       {/* Top Navbar */}
//       <div className="top-navbar">
//         <div className="top-navbar-left">
//           <Button onClick={toggleSidebar} className="sidebar-toggle-button">☰</Button>
//           <Link to="/Home_Page_wLog">
//             <p className="navbar-title">Ristey</p>
//           </Link>
//         </div>

//         {id ? (
//           <Link to="/User_Panel" className="navbar-link">Profile</Link>
//         ) : (
//           <div className="navbar-auth-links">
//             <Link to="/User_Reg/885695" className="navbar-link">Sign Up</Link>
//             <Link to="/User_Login" className="navbar-link">Login</Link>
//           </div>
//         )}
//       </div>

//       {/* Sidebar */}
//       <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//         <div className="sidebar-buttons">
//           <Link to="/User_Panel"><Button className="sidebar-button">{sidebarOpen ? 'Dashboard' : 'D'}</Button></Link>
//           <Link to="/User_Added_User"><Button className="sidebar-button">{sidebarOpen ? 'User' : 'U'}</Button></Link>
//           <Link to="/User_Recharge"><Button className="sidebar-button">{sidebarOpen ? 'Recharge' : 'R'}</Button></Link>
//           <Link to="/User_Transaction_User"><Button className="sidebar-button">{sidebarOpen ? 'Transaction' : 'T'}</Button></Link>
//           <Link to="/User_Withdrawal_User"><Button className="sidebar-button">{sidebarOpen ? 'Withdrawal' : 'W'}</Button></Link>
//           <Button className="sidebar-button" onClick={log_out}>{sidebarOpen ? 'Log Out' : 'L'}</Button>
//         </div>
//       </div>

//       {/* Main Content */}
//       {/* <br /><br /> */}
//       <div style={{ padding: '70px' }}>
//         <Table
//           columns={columns}
//           dataSource={data}
//           rowKey="id"
//           bordered
//           scroll={{ x: true }}
//           pagination={{ pageSize: 10 }}
//         />
//       </div>
//     </div>
//   );
// }

// export default User_Transaction_User;

import React, { useState, useEffect } from "react";
import { UserTransactionsGet } from "../../Api/CoreApi";
import { Link, useNavigate } from "react-router-dom";
import { SwapOutlined } from "@ant-design/icons"; // add this along with others

import { Button, Table } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  ReloadOutlined,
  TransactionOutlined,
  LogoutOutlined,
  DollarOutlined,
} from "@ant-design/icons";

function User_Transaction_User() {
  const navigate = useNavigate();

  const id = localStorage.getItem("user_id");
  const [data, setData] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const getTransactions = async () => {
    try {
      const response = await UserTransactionsGet();
      const filteredTransactions = response.filter(
        (i) => String(i.user_id) === String(id)
      );
      setData(filteredTransactions);
    } catch (error) {
      console.error("Failed to fetch transactions:", error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (window.innerWidth <= 768) setSidebarOpen(false);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const log_out = () => {
    localStorage.clear()

    // localStorage.removeItem("user_id");
    navigate("/User_Login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const columns = [
    // { title: 'ID', dataIndex: 'id', key: 'id' },
    // { title: 'User ID', dataIndex: 'user_id', key: 'user_id' },
    {
      title: "ID",
      key: "id",
      render: (text, record, index) => index + 1,
    },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  const containerStyle = {
    padding: "70px 20px",
    marginLeft: isMobile ? "0px" : "200px",
    overflowX: "auto",
    transition: "all 0.3s ease",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  };

  return (
    <div>
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="top-navbar-left">
          <Button onClick={toggleSidebar} className="sidebar-toggle-button">
            ☰
          </Button>
          <Link to="/Home_Page_wLog" className="navbar-title">
            Ristey
          </Link>
        </div>

        <div className="top-navbar-right">
          {id ? (
            <Link to="/User_Panel" className="navbar-link">
              Profile
            </Link>
          ) : (
            <div className="navbar-auth-links">
              <Link to="/User_Reg/885695" className="navbar-link">
                Sign Up
              </Link>
              <Link to="/User_Login" className="navbar-link">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Static Sidebar (Always visible, no toggle) */}
      <div className={`sidebar_open ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-buttons">
          <Link to="/User_Panel">
            <Button className="sidebar-button">Dashboard</Button>
          </Link>
          <Link to="/User_Added_User">
            <Button className="sidebar-button">User</Button>
          </Link>
          <Link to="/User_Recharge">
            <Button className="sidebar-button">Recharge</Button>
          </Link>
          <Link to="/User_Transaction_User">
            <Button className="sidebar-button">Transaction</Button>
          </Link>
          <Link to="/User_Withdrawal_User">
            <Button className="sidebar-button">Withdrawal</Button>
          </Link>
          <Button className="sidebar-button" onClick={log_out}>
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      {/* <br /><br /> */}
      <div style={containerStyle}>
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          bordered
          size="middle"
          scroll={{ x: "max-content" }}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
}

export default User_Transaction_User;
