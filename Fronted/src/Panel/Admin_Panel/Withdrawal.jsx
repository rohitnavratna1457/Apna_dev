import React, { useEffect, useState } from 'react';
import Staff_Withdrawal from './Staff_Withdrawal';
import User_Withdrawal from './User_Withdrawal';
import { Button } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { MenuOutlined } from '@ant-design/icons';
import './Withdrawal.css';

function Withdrawal() {
    const admin_id = localStorage.getItem('user_id');
    const navigate = useNavigate();
    const location = useLocation();

    const [pop, setPop] = useState('staff');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Close sidebar when clicking outside
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('mobile-sidebar-overlay')) {
            setIsSidebarOpen(false);
        }
    };

    // Close sidebar on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close sidebar when route changes
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location.pathname]);

    const log_out = () => {
        localStorage.clear()

        // localStorage.removeItem('user_id');
        navigate('/Admin_Login');
    };

    // Sidebar navigation links
    const sidebarLinks = [
        { path: '/Admin_Panel', label: 'Dashboard' },
        { path: '/Staff_Tables', label: 'Staff' },
        { path: '/User_Tables', label: 'User' },
        { path: '/Transaction', label: 'Transaction' },
        { path: '/Withdrawal', label: 'Withdrawal' },
        { path: '/Post_Commission', label: 'Commissions' },
    ];

    return (
        <div className="withdrawal-page-container">
            {/* Header */}
            <div className="withdrawal-header">
                <Link to='/Home_Page_wLog' className="withdrawal-header-logo-link">
                    <p className="withdrawal-header-logo">Ristey</p>
                </Link>

                <div className="withdrawal-header-auth-links">
                    {admin_id ? (
                        <Link to='/Admin_Panel' className="withdrawal-header-nav-link">
                            <p>Profile</p>
                        </Link>
                    ) : (
                        <>
                            <Link to='/User_Reg/885695' className="withdrawal-header-nav-link">
                                <p>Sign Up</p>
                            </Link>
                            <Link to='/User_Login' className="withdrawal-header-nav-link">
                                <p>Login</p>
                            </Link>
                        </>
                    )}
                </div>

                <Button
                    className="sidebar-toggle-btn"
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={toggleSidebar}
                />
            </div>

            {/* Sidebar */}
            <div className={`withdrawal-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                {sidebarLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`withdrawal-sidebar-link ${isActive ? 'active' : ''}`}
                        >
                            <Button className="withdrawal-sidebar-button">
                                {link.label}
                            </Button>
                        </Link>
                    );
                })}
                <Button
                    className="withdrawal-sidebar-button logout-btn"
                    onClick={log_out}
                >
                    Log Out
                </Button>
            </div>

            {/* Main Content */}
            <div className="withdrawal-main-content">
                <div className="withdrawal-toggle-cards-container">
                    <div
                        className={`withdrawal-toggle-card ${pop === 'staff' ? 'active' : ''}`}
                        onClick={() => setPop('staff')}
                    >
                        <FaUserAlt className="withdrawal-toggle-card-icon" />
                        <p className="withdrawal-toggle-card-label">Staff Withdrawal</p>
                    </div>
                    <div
                        className={`withdrawal-toggle-card ${pop === 'user' ? 'active' : ''}`}
                        onClick={() => setPop('user')}
                    >
                        <FaUserAlt className="withdrawal-toggle-card-icon" />
                        <p className="withdrawal-toggle-card-label">User Withdrawal</p>
                    </div>
                </div>

                <div className="withdrawal-content-area">
                    {pop === 'staff' && <Staff_Withdrawal />}
                    {pop === 'user' && <User_Withdrawal />}
                </div>
            </div>

            {/* Overlay for mobile sidebar */}
            <div
                className={`mobile-sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
                onClick={handleOverlayClick}
            />
        </div>
    );
}

export default Withdrawal;