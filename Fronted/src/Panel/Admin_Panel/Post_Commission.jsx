import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, InputNumber } from 'antd'; // Added InputNumber
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import { PostChargesGet, PostChargesUpdate } from '../../Api/CoreApi'; // Ensure path is correct
import './Post_Commission.css'; // Import the new CSS file

function Post_Commission() {
    const navigate = useNavigate();
    const location = useLocation(); // For active sidebar link
    const admin_id = localStorage.getItem('user_id');

    // charges state is not strictly needed if form directly uses API response for initial values
    // const [charges, setCharges] = useState(null); 
    const [form] = Form.useForm();
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
    const [initialLoading, setInitialLoading] = useState(true); // To manage initial data load

    const fetchCharges = async () => {
        setInitialLoading(true);
        try {
            const response = await PostChargesGet();
            if (response && response.length > 0) {
                // Assuming the API returns an array and we need the first item
                form.setFieldsValue(response[0]);
                // setCharges(response[0]); // If you still want to store it
            } else {
                message.warn('No commission data found or invalid response.');
                // Optionally set default values if response is empty
                // form.setFieldsValue({ post_charges: 0, staff_commission: 0 });
            }
        } catch (error) {
            console.error("Error fetching post charges:", error);
            message.error('Failed to load commission data.');
        }
        setInitialLoading(false);
    };

    useEffect(() => {
        if (admin_id) {
            fetchCharges();
        } else {
            // navigate('/Admin_Login'); // Consider redirecting
            console.warn("Admin ID not found. Commission data not loaded.");
            setInitialLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [admin_id, form]); // form dependency is to ensure setFieldsValue works after form is ready

    const handleUpdateCharges = async (values) => {
        try {
            // Ensure values are numbers if your API expects numbers
            const payload = {
                ...values,
                post_charges: parseFloat(values.post_charges) || 0,
                staff_commission: parseFloat(values.staff_commission) || 0,
            };
            // Assuming PostChargesUpdate expects the ID and the payload
            await PostChargesUpdate(payload.id, payload);
            message.success("Post charges updated successfully!");
            // Optionally re-fetch or assume form reflects latest data
            // await fetchCharges(); 
        } catch (error) {
            console.error("Error updating post charges:", error);
            message.error("Failed to update post charges!");
        }
    };

    const handleLogout = () => {
        localStorage.clear()

        // Corrected: Remove 'user_id' which is used for admin_id
        // localStorage.removeItem('user_id'); 
        // localStorage.removeItem('Staff'); // If 'Staff' was also used
        navigate('/Admin_Login');
    };

    // Sidebar toggle function
    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    // Effect to handle initial sidebar state based on window width and resize events
    useEffect(() => {
        const handleResize = () => {
            // Basic resize handling, can be made more sophisticated
            // if (window.innerWidth > 768 && !isSidebarOpen) setIsSidebarOpen(true);
            // if (window.innerWidth <= 768 && isSidebarOpen) setIsSidebarOpen(false);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Effect to close sidebar on navigation (mobile)
    useEffect(() => {
        if (isSidebarOpen && window.innerWidth <= 768) {
            setIsSidebarOpen(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    const sidebarLinks = [
        { path: '/Admin_Panel', label: 'Dashboard' },
        { path: '/Staff_Tables', label: 'Staff' },
        { path: '/User_Tables', label: 'User' },
        { path: '/Transaction', label: 'Transaction' },
        { path: '/Withdrawal', label: 'Withdrawal' },
        { path: '/Post_Commission', label: 'Commissions' },
    ];

    if (initialLoading && admin_id) { // Show loading state only if admin_id exists
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading...</div>;
    }

    return (
        <div className="commission-page-container">
            <div className="commission-header">
                <div className="header-left-content">
                    <Link to='/Home_Page_wLog' className="header-logo-link">
                        <p className="commission-header-logo">Ristey</p>
                    </Link>
                </div>
                <Button className="sidebar-toggle-btn" onClick={toggleSidebar}>☰</Button>
                <div className="commission-header-auth-links">
                    {admin_id ? (
                        <Link to='/Admin_Panel' className="header-nav-link">
                            <p>Profile</p>
                        </Link>
                    ) : (
                        <>
                            <Link to='/User_Reg/885695' className="header-nav-link">
                                <p>Sign Up</p>
                            </Link>
                            <Link to='/User_Login' className="header-nav-link">
                                <p>Login</p>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <div className={`commission-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                {sidebarLinks.map(link => (
                    <Link key={link.path} to={link.path}>
                        <Button
                            className={`commission-sidebar-button ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.label}
                        </Button>
                    </Link>
                ))}
                <Button className="commission-sidebar-button" onClick={handleLogout}>Log Out</Button>
            </div>

            <div className={`commission-main-content ${isSidebarOpen && window.innerWidth <= 768 ? 'sidebar-open-mobile-push' : ''}`}>
                <h2 className="commission-form-title">Manage Post Commissions</h2>
                <div className="commission-form-container">
                    <Form form={form} onFinish={handleUpdateCharges} layout="horizontal" className="commission-form">
                        <Form.Item
                            name='id'
                            label='ID'
                            rules={[{ required: true, message: 'ID is required' }]} // ID usually should be present
                        >
                            <Input readOnly />
                        </Form.Item>
                        <Form.Item
                            name='post_charges'
                            label='Post Charges'
                            rules={[{ required: true, message: 'Please input post charges!' }]}
                        >
                            <InputNumber min={0} step={0.01} stringMode style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item
                            name='staff_commission'
                            label='Staff Commission (%)'
                            rules={[{ required: true, message: 'Please input staff commission!' }]}
                        >
                            <InputNumber min={0} max={100} step={0.1} stringMode style={{ width: '100%' }} formatter={value => `${value}%`} parser={value => value.replace('%', '')} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType='submit' className="commission-form-submit-button">Save Changes</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            {isSidebarOpen && window.innerWidth <= 768 && (
                <div className="mobile-sidebar-overlay active" onClick={toggleSidebar}></div>
            )}
        </div>
    );
}

export default Post_Commission;