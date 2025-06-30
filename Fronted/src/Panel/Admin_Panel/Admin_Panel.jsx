import React, { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
// GrTransaction is not used in the current JSX
import { PiHandWithdrawFill } from "react-icons/pi";
import { UserGet, UserTransactionsGet, StaffTransactionsGet, AdminTotalRevenueGet } from '../../Api/CoreApi'; // Ensure paths are correct
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import './AdminPanel.css'; // Import the CSS file

// Helper to get month name from month number
const getMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(parseInt(monthNumber, 10) - 1);
    return date.toLocaleString('en-US', { month: 'short' }); // 'short' for Jan, Feb, etc. 'long' for January
};

function Admin_Panel() {
    const admin_id = localStorage.getItem('user_id');
    const Navigate = useNavigate();

    // const [pop, setPop] = useState(null); // Not used in the current JSX

    const [userCount, setUserCount] = useState(0);
    const [staffCount, setStaffCount] = useState(0);
    const [monthlyRevenueData, setMonthlyRevenueData] = useState([]);
    const [currentMonthRevenue, setCurrentMonthRevenue] = useState({ amount: 0, month: '' });
    const [staffPendingWithdrawals, setStaffPendingWithdrawals] = useState(0);
    const [userPendingWithdrawals, setUserPendingWithdrawals] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const fetchData = async () => {
        if (!admin_id) {
            message.warn("Admin ID not found. Please log in.");
            // Navigate('/Admin_Login'); // Optional redirect
            return;
        }
        try {
            // Fetch Users and Staff
            const allUsersResponse = await UserGet();
            setUserCount(allUsersResponse.filter(i => i.role === 'user').length);
            setStaffCount(allUsersResponse.filter(i => i.role === 'staff').length);

            // Fetch Pending Withdrawals
            const staffTransactionResponse = await StaffTransactionsGet();
            setStaffPendingWithdrawals(staffTransactionResponse.filter(i => i.status === 'pending').length);

            const userTransactionResponse = await UserTransactionsGet();
            setUserPendingWithdrawals(userTransactionResponse.filter(i => i.status === 'pending').length);

            // Fetch and process Admin Revenue
            const adminRevenueResponse = await AdminTotalRevenueGet();
            const adminSpecificRevenue = adminRevenueResponse.filter(i => String(i.admin_id) === String(admin_id));

            const revenueByMonth = {};
            adminSpecificRevenue.forEach(item => {
                const monthName = getMonthName(item.month);
                if (!revenueByMonth[monthName]) {
                    revenueByMonth[monthName] = 0;
                }
                revenueByMonth[monthName] += parseFloat(item.admin_amount) || 0;
            });

            const formattedRevenueData = Object.keys(revenueByMonth)
                .map(monthName => ({
                    month: monthName,
                    amount: revenueByMonth[monthName]
                }))
                .sort((a, b) => { // Sort by month order
                    const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
                });
            setMonthlyRevenueData(formattedRevenueData);

            // Get current month's revenue
            const currentMonthShortName = new Date().toLocaleString('en-US', { month: 'short' });
            const currentMonthEntry = formattedRevenueData.find(item => item.month === currentMonthShortName);
            if (currentMonthEntry) {
                setCurrentMonthRevenue({ amount: currentMonthEntry.amount, month: currentMonthEntry.month });
            } else {
                setCurrentMonthRevenue({ amount: 0, month: currentMonthShortName });
            }

        } catch (error) {
            message.error("Failed to fetch dashboard data.");
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [admin_id]); // Re-fetch if admin_id changes (though unlikely from localStorage)

    const log_out = () => {
        localStorage.clear()

        // localStorage.removeItem('Staff'); // Should be 'user_id' or 'access_token', 'role' etc.
        // localStorage.removeItem('user_id');
        // localStorage.removeItem('access_token');
        // localStorage.removeItem('refresh_token');
        // localStorage.removeItem('role');
        // localStorage.removeItem('ref');
        message.success("Logged out successfully.");
        Navigate('/Admin_Login');
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="admin-layout-container"> {/* Consistent layout class */}
            <div className="app-header">
                <Link to='/Home_Page_wLog' className="header-logo-link">
                    <p className="header-logo-text">Ristey</p>
                </Link>
                <div className="header-right-content">
                    <div className="header-nav-wrapper">
                        {admin_id ? (
                            <Link to='/Admin_Panel' className="header-nav-link profile-link">
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
                    <Button className="sidebar-toggle-btn" onClick={toggleSidebar}>☰</Button>
                </div>
            </div>

            <div className={`app-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <Link to='/Admin_Panel'><Button className="sidebar-btn active">Dashboard</Button></Link>
                <Link to='/Staff_Tables'><Button className="sidebar-btn">Staff</Button></Link>
                <Link to='/User_Tables'><Button className="sidebar-btn">User</Button></Link>
                <Link to='/Transaction'><Button className="sidebar-btn">Transaction</Button></Link>
                <Link to='/Withdrawal'><Button className="sidebar-btn">Withdrawal</Button></Link>
                <Link to='/Post_Commission'><Button className="sidebar-btn">Commissions</Button></Link>
                <Button className="sidebar-btn" onClick={log_out}>Log Out</Button>
            </div>

            <div className="main-content admin-panel-content">
                <div className="dashboard-stats-grid">
                    <Link to='/Staff_Tables' className="stat-card-link">
                        <div className="stat-card admin-stat-card">
                            <FaUser className="stat-icon" />
                            <p className="stat-value">{staffCount}</p>
                            <p className="stat-label">Staff</p>
                        </div>
                    </Link>
                    <Link to='/User_Tables' className="stat-card-link">
                        <div className="stat-card admin-stat-card">
                            <FaUser className="stat-icon" />
                            <p className="stat-value">{userCount}</p>
                            <p className="stat-label">Users</p>
                        </div>
                    </Link>
                    <div className="stat-card admin-stat-card"> {/* Not a link */}
                        <FaRupeeSign className="stat-icon" />
                        <p className="stat-value">{currentMonthRevenue.amount.toFixed(2)}</p>
                        <p className="stat-label">Revenue ({currentMonthRevenue.month})</p>
                    </div>
                    <Link to='/Withdrawal' className="stat-card-link">
                        <div className="stat-card admin-stat-card withdrawal-stat-card">
                            <PiHandWithdrawFill className="stat-icon main-withdrawal-icon" />
                            <div className="withdrawal-details">
                                <div>
                                    <p className="withdrawal-sub-label">Staff</p>
                                    <p className="withdrawal-sub-value">{staffPendingWithdrawals}</p>
                                </div>
                                <div>
                                    <p className="withdrawal-sub-label">User</p>
                                    <p className="withdrawal-sub-value">{userPendingWithdrawals}</p>
                                </div>
                            </div>
                            <p className="stat-label main-withdrawal-label">Pending Withdrawals</p>
                        </div>
                    </Link>
                </div>

                <div className="dashboard-chart-container">
                    <h2 className="chart-title">Monthly Revenue Overview</h2>
                    {monthlyRevenueData.length > 0 ? (
                        <ResponsiveContainer width="100%" height={350}> {/* Increased height */}
                            <BarChart data={monthlyRevenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
                                <Legend />
                                <Bar dataKey="amount" fill="rgba(7, 110, 148, 0.8)">
                                    <LabelList dataKey="amount" position="top" style={{ fontSize: '12px', fill: '#333' }} formatter={(value) => value > 0 ? `₹${value.toFixed(0)}` : ''} />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    ) : (
                        <p className="no-data-message">No revenue data available to display.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Admin_Panel;