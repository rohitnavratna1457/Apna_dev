import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StaffTransactionsGet } from '../../Api/CoreApi'; // StaffTransactionsUpdate is not used
import { Link } from 'react-router-dom';
import { Button, Table, message } from "antd"; // Added message for potential feedback
import './Staff_Transactions.css'; // Import the CSS file

function Staff_Transactions() {
    const Navigate = useNavigate();

    const staffId = localStorage.getItem('user_id'); // Renamed for clarity, assuming this is staff's ID
    // const int_id = String(staffId); // No longer explicitly needed if API handles string/number comparison well

    const [data, setData] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar

    const staff_role = localStorage.getItem('role')

    const permission = () => {
        if (staff_role === null || staff_role != 'staff') {
            Navigate('/')
        }
    }

    const getTransactions = async () => {
        if (!staffId) {
            message.warn("Staff ID not found. Please log in.");
            // Navigate('/Staff_Login'); // Optional: redirect if no ID
            return;
        }
        try {
            const response = await StaffTransactionsGet();
            // Ensure comparison is robust (e.g., both as strings or numbers)
            const filter_data = response.filter(i => String(i.staff_id) === String(staffId));
            setData(filter_data);
        } catch (error) {
            message.error("Failed to fetch transactions.");
            console.error("Error fetching transactions:", error);
        }
    };

    useEffect(() => {
        permission()
        getTransactions();
    }, [staffId]); // Re-fetch if staffId changes (though unlikely from localStorage within component lifecycle)

    const log_out = () => {
        localStorage.removeItem('user_id');
        message.success("Logged out successfully.");
        Navigate('/Staff_Login'); // Or your staff login route
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const columns = [
        { title: "ID", dataIndex: "id", key: "id", width: 80, fixed: 'left' },
        { title: "Staff ID", dataIndex: "staff_id", key: "staff_id", width: 100 },
        { title: "Amount", dataIndex: "amount", key: "amount", width: 120, render: (amount) => `₹${parseFloat(amount).toFixed(2)}` },
        { title: "Date", dataIndex: "date", key: "date", width: 150, render: (date) => new Date(date).toLocaleDateString() },
        { title: "Type", dataIndex: "type", key: "type", width: 100 },
        { title: "Status", dataIndex: "status", key: "status", width: 100 },
    ];

    return (
        <div className="staff-layout-container"> {/* Use a consistent main layout class */}
            <div className="app-header">
                <Link to='/Home_Page_wLog' className="header-logo-link">
                    <p className="header-logo-text">Ristey</p>
                </Link>

                <div className="header-right-content">
                    <div className="header-nav-wrapper">
                        {staffId ? (
                            <Link to='/Staff_Panel' className="header-nav-link profile-link">
                                <p>Profile</p>
                            </Link>
                        ) : (
                            <div className="header-auth-links">
                                <Link to='/User_Reg/885695' className="header-nav-link">
                                    <p>Sign Up</p>
                                </Link>
                                <Link to='/User_Login' className="header-nav-link">
                                    <p>Login</p>
                                </Link>
                            </div>
                        )}
                    </div>
                    <Button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                        ☰
                    </Button>
                </div>
            </div>

            <div className={`app-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <Link to='/Staff_Panel'>
                    <Button className="sidebar-btn">Dashboard</Button>
                </Link>
                <Link to='/Staff_Added_User'>
                    <Button className="sidebar-btn">User</Button>
                </Link>
                <Link to='/Staff_Transactions'>
                    <Button className="sidebar-btn active">Transaction</Button> {/* Mark active link */}
                </Link>
                <Link to='/Staff_Withdrawals'>
                    <Button className="sidebar-btn">Withdrawal</Button>
                </Link>
                <Button className="sidebar-btn" onClick={log_out}>
                    Log Out
                </Button>
            </div>

            <div className="main-content staff-transactions-content">
                <h1 className="page-title">Staff Transactions</h1>
                <div className="transactions-table-container">
                    <Table
                        columns={columns}
                        dataSource={data}
                        rowKey="id"
                        bordered
                        scroll={{ x: 'max-content' }} // Crucial for table responsiveness
                        className="transactions-data-table"
                        pagination={{ pageSize: 10 }} // Example pagination
                    />
                </div>
            </div>
        </div>
    );
}

export default Staff_Transactions;