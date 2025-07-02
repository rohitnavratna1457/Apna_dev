import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Form, Input, Button, Table, Select, message } from "antd";
// import { MenuOutlined } from '@ant-design/icons'; // Optional: if you want to use icon for toggle
import {
  UserGet,
  UserPost,
  UserUpdate,
  UserRemove,
} from "../../Api/CoreApi"; // Ensure this path is correct
import User_Reg from "../../Authentication/User/User_Reg"; // Ensure this path is correct
import "./User_Tables.css"; // Import the CSS file
const { Option } = Select;

function User_Tables() {
  const admin_id = localStorage.getItem('user_id');
  const navigate = useNavigate();
  const location = useLocation();

  const admin_role = localStorage.getItem('role')

  const permission = () => {
    if (admin_role === null || admin_role != 'admin') {
      navigate('/')
    }
  }

  const [users, setUsers] = useState([]);
  const [userFormVisible, setUserFormVisible] = useState(null);
  const [updateFormInitialValues, setUpdateFormInitialValues] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768); // Default open on desktop, closed on mobile

  const fetchUsers = async () => {
    try {
      const response = await UserGet();
      if (Array.isArray(response)) {
        const userFilter = response.filter(i => i.role === 'user');
        setUsers(userFilter);
      } else {
        console.error("UserGet did not return an array:", response);
        setUsers([]);
        message.error('Failed to load user data: Invalid response.');
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      message.error('Error fetching user data.');
    }
  };

  useEffect(() => {
    permission()
    if (admin_id) {
      fetchUsers();
    } else {
      // navigate('/Admin_Login'); // Consider redirecting
      console.warn("Admin ID not found. User data not loaded.");
    }
  }, [admin_id]);

  // Sidebar toggle function
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Effect to handle initial sidebar state based on window width and resize events
  useEffect(() => {
    const handleResize = () => {
      // Automatically open sidebar on desktop, close on mobile,
      // but only if the user hasn't manually toggled it for the current session (more advanced)
      // For simplicity here, we just set based on width.
      // A more complex logic could involve checking if it was manually closed on desktop.
      if (window.innerWidth > 768) {
        // setIsSidebarOpen(true); // You might want this if you want it to always reopen on resize to desktop
      } else {
        // setIsSidebarOpen(false); // And always close on resize to mobile
      }
    };

    window.addEventListener('resize', handleResize);
    // Call handler right away so state is correct on initial load
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // Effect to close sidebar on navigation (mobile)
  useEffect(() => {
    if (isSidebarOpen && window.innerWidth <= 768) {
      // Only close if navigating away and it's currently open on mobile
      setIsSidebarOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); // Dependency: location.pathname


  const handleAddUser = async (values) => {
    const dataWithRole = { ...values, role: 'user' };
    try {
      await UserPost(dataWithRole);
      await fetchUsers();
      setUserFormVisible(null);
      message.success('User added successfully');
    } catch (error) {
      console.error("Error adding user:", error);
      message.error('Failed to add user');
    }
  };

  const openUpdateForm = (record) => {
    setUpdateFormInitialValues(record);
    setUserFormVisible("update_button");
  };

  const handleUpdateUser = async (values) => {
    try {
      const id = values.id;
      await UserUpdate(id, values);
      await fetchUsers();
      setUserFormVisible(null);
      setUpdateFormInitialValues(null);
      message.success('User updated successfully');
    } catch (error) {
      console.error("Error updating user:", error);
      message.error('Failed to update user');
    }
  };

  const handleDeleteUser = async (record) => {
    try {
      const id = record.id;
      await UserRemove(id);
      await fetchUsers();
      message.success('User deleted successfully');
    } catch (error) {
      console.error("Error deleting user:", error);
      message.error('Failed to delete user');
    }
  };

  const handleLogout = () => {
    localStorage.clear()

    // localStorage.removeItem('user_id');
    navigate('/Admin_Login');
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id", sorter: (a, b) => a.id - b.id },
    { title: "Username", dataIndex: "username", key: "username", sorter: (a, b) => (a.username || "").localeCompare(b.username || "") },
    { title: "Password", dataIndex: "password", key: "password", render: () => "********" },
    { title: "Balance", dataIndex: "balance", key: "balance", sorter: (a, b) => parseFloat(a.balance) - parseFloat(b.balance), render: (text) => text != null ? parseFloat(text).toFixed(2) : 'N/A' },
    { title: "District", dataIndex: "district", key: "district", sorter: (a, b) => (a.district || "").localeCompare(b.district || "") },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="table-actions">
          <Button onClick={() => openUpdateForm(record)}>Update</Button>
          <Button danger onClick={() => handleDeleteUser(record)}>Delete</Button>
          <Link to={`/User_Charts/${record.id}`}><Button type="default">Details</Button></Link>
        </div>
      ),
    },
  ];

  const sidebarLinks = [
    { path: '/Admin_Panel', label: 'Dashboard' },
    { path: '/Staff_Tables', label: 'Staff' },
    { path: '/User_Tables', label: 'User' },
    { path: '/Transaction', label: 'Transaction' },
    { path: '/Withdrawal', label: 'Withdrawal' },
    { path: '/Post_Commission', label: 'Commissions' },
  ];

  return (
    <div className="user-page-container">
      <div className="user-header">
        <div className="header-left-content">
          <Link to='/Home_Page_wLog' className="header-logo-link">
            <p className="user-header-logo">Ristey</p>
          </Link>
        </div>
        {/* Toggle button is placed before auth links for typical mobile layout (hamburger on left or right end) */}
        {/* For hamburger on right: move it after auth-links div */}
        <Button className="sidebar-toggle-btn" onClick={toggleSidebar}>☰</Button> {/* MOVED for better control */}

        <div className="user-header-auth-links">
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

      {/* Sidebar: class 'open' is added conditionally */}
      {/* The sidebar is a direct child of user-page-container, and a sibling to user-main-content */}
      <div className={`user-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {sidebarLinks.map(link => (
          <Link key={link.path} to={link.path}>
            <Button
              className={`user-sidebar-button ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Button>
          </Link>
        ))}
        <Button className="user-sidebar-button" onClick={handleLogout}>Log Out</Button>
      </div>

      {/* Main Content Area */}
      {/* The class 'sidebar-open-mobile-push' is for mobile if you want push instead of overlay */}
      <div className={`user-main-content ${isSidebarOpen && window.innerWidth <= 768 ? 'sidebar-open-mobile-push' : ''}`}>
        {userFormVisible === null && (
          <div className="add-user-button-container">
            <Button
              type="primary"
              className="add-user-button"
              onClick={() => setUserFormVisible("add")}
            >
              Add User
            </Button>
          </div>
        )}

        {userFormVisible === "add" && (
          <div className="form-section">
            <h3 className="form-title">Add New User</h3>
            <User_Reg
              onFinish={handleAddUser}
              onCancel={() => setUserFormVisible(null)}
            />
          </div>
        )}

        {userFormVisible === "update_button" && updateFormInitialValues && (
          <div className="form-section">
            <h3 className="form-title">Update User</h3>
            <Form
              className="user-form"
              initialValues={updateFormInitialValues}
              onFinish={handleUpdateUser}
              layout="vertical"
            >
              <Form.Item label="ID" name="id"><Input readOnly /></Form.Item>
              <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input username!' }]}>
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item label="Password" name="password" rules={[{ message: 'Password can be updated here. Min 6 characters.', min: 6 }]}>
                <Input.Password placeholder="Enter new password or leave blank" />
              </Form.Item>
              <Form.Item label="Balance" name="balance" rules={[{ required: true, message: 'Please input balance!' }, { type: 'number', transform: value => Number(value), message: 'Balance must be a number' }]}>
                <Input type="number" placeholder="Balance" />
              </Form.Item>
              <Form.Item label="District" name="district" rules={[{ required: true, message: 'Please input district!' }]}>
                <Input placeholder="District" />
              </Form.Item>
              <Form.Item>
                <Button className="user-form-submit-button" type="primary" htmlType="submit">Update</Button>
                <Button style={{ marginLeft: '8px' }} onClick={() => { setUserFormVisible(null); setUpdateFormInitialValues(null); }}>Cancel</Button>
              </Form.Item>
            </Form>
          </div>
        )}

        <div className="user-table-container">
          <h3 className="table-title">User List</h3>
          <Table
            columns={columns}
            dataSource={users}
            rowKey="id"
            bordered
            scroll={{ x: true }}
            className="user-table"
            pagination={{ pageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }}
          />
        </div>
        {/* Overlay for mobile: shown when sidebar is open and on mobile */}
        {isSidebarOpen && window.innerWidth <= 768 && (
          <div className="mobile-sidebar-overlay active" onClick={toggleSidebar}></div>
        )}
      </div>
    </div>
  );
}

export default User_Tables;