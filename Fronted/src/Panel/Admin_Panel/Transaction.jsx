import React, { useEffect, useState } from 'react';
import Staff_Transaction from './Staff_Transaction';
import User_Transaction from './User_Transaction';
import { Button } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { MenuOutlined } from '@ant-design/icons'; // Import icon for toggle button
import './TransactionPage.css';

function Transaction() {
    const admin_id = localStorage.getItem('user_id');
    const Navigate = useNavigate();
    const location = useLocation();

    const admin_role = localStorage.getItem('role')

    const permission = () => {
        if (admin_role === null || admin_role != 'admin') {
            Navigate('/')
        }
    }

    const [pop, setPop] = useState('staff');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Close sidebar when a navigation link is clicked (useful on mobile)
    // or when route changes
    useEffect(() => {
        permission()
        if (isSidebarOpen && window.innerWidth < 769) { // 769 to match CSS breakpoint
            setIsSidebarOpen(false);
        }
    }, [location.pathname]); // Re-run when path changes


    const log_out = () => {
        localStorage.removeItem('user_id');
        Navigate('/Admin_Login');
    };

    const sidebarLinks = [
        { path: '/Admin_Panel', label: 'Dashboard' },
        { path: '/Staff_Tables', label: 'Staff' },
        { path: '/User_Tables', label: 'User' },
        { path: '/Transaction', label: 'Transaction' },
        { path: '/Withdrawal', label: 'Withdrawal' },
        { path: '/Post_Commission', label: 'Commissions' },
    ];

    useEffect(() => {
        if (!admin_id) {
            Navigate('/Admin_Login');
        }
    }, [admin_id, Navigate]);

    return (
        <div className="transaction-page-container">
            <div className="transaction-page-header">
                {/* Sidebar Toggle Button - visible on mobile */}


                <Link to='/Home_Page_wLog' className="transaction-page-header-logo-link">
                    <p className="transaction-page-header-logo-text">Ristey</p>
                </Link>

                <div className="transaction-page-header-auth-links">
                    {admin_id ? (
                        <Link to='/Admin_Panel' className="transaction-page-header-nav-link">
                            <p className="transaction-page-header-nav-text">Profile</p>
                        </Link>
                    ) : (
                        <>
                            <Link to='/User_Reg/885695' className="transaction-page-header-nav-link">
                                <p className="transaction-page-header-nav-text">Sign Up</p>
                            </Link>
                            <Link to='/User_Login' className="transaction-page-header-nav-link">
                                <p className="transaction-page-header-nav-text">Login</p>
                            </Link>
                        </>
                    )}
                </div>
                <Button
                    className="sidebar-toggle-btn" // Class from TransactionPage.css
                    type="text" // Makes it look like an icon button
                    icon={<MenuOutlined />} // Ant Design icon
                    onClick={toggleSidebar}
                />
            </div>

            {/* Sidebar: class 'open' is added conditionally */}
            <div className={`transaction-page-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                {sidebarLinks.map(link => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`transaction-page-sidebar-link ${location.pathname === link.path ? 'active' : ''}`}
                    // onClick={isSidebarOpen && window.innerWidth < 769 ? toggleSidebar : undefined} // Close on mobile click
                    >
                        <Button className="transaction-page-sidebar-button">
                            {link.label}
                        </Button>
                    </Link>
                ))}
                <Button className="transaction-page-sidebar-button logout-btn" onClick={log_out}>
                    Log Out
                </Button>
            </div>

            {/* Main Content Area */}
            <div className="transaction-page-main-content">
                <div className="transaction-toggle-cards-container">
                    <div
                        className={`transaction-toggle-card ${pop === 'staff' ? 'active' : ''}`}
                        onClick={() => setPop('staff')}
                    >
                        <FaUserAlt className="transaction-toggle-card-icon" />
                        <p className="transaction-toggle-card-label">Staff Transaction</p>
                    </div>
                    <div
                        className={`transaction-toggle-card ${pop === 'user' ? 'active' : ''}`}
                        onClick={() => setPop('user')}
                    >
                        <FaUserAlt className="transaction-toggle-card-icon" />
                        <p className="transaction-toggle-card-label">User Transaction</p>
                    </div>
                </div>

                {pop === 'staff' && (
                    <div className="transaction-details-section">
                        <p className="transaction-details-title">Staff Transaction Details</p>
                        <Staff_Transaction />
                    </div>
                )}
                {pop === 'user' && (
                    <div className="transaction-details-section">
                        <p className="transaction-details-title">User Transaction Details</p>
                        <User_Transaction />
                    </div>
                )}
            </div>

            {/* Overlay for mobile: shown when sidebar is open */}
            {isSidebarOpen && <div className={`mobile-sidebar-overlay active`} onClick={toggleSidebar}></div>}
        </div>
    );
}

export default Transaction;