import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Added useLocation
import { Form, Input, Button, Table, message } from "antd";
import { MenuOutlined } from '@ant-design/icons'; // For the toggle button icon
import {
  UserGet,
  UserPost,
  UserUpdate,
  UserRemove,
} from "../../Api/CoreApi"; // Ensure this path is correct
import Staff_Reg from "../../Authentication/Staff/Staff_Reg"; // Ensure this path is correct
import "./Staff_Tables.css"; // Import the CSS file

function Staff_Tables() {
  const admin_id = localStorage.getItem('user_id');
  const Navigate = useNavigate();
  const location = useLocation(); // Hook to get current URL path

  const [staff, setStaff] = useState([]);
  const [staff_form, setStaff_form] = useState(null);
  const [updateform, setUpdateform] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

  const get = async () => {
    try {
      const staff_response = await UserGet();
      if (Array.isArray(staff_response)) {
        const Staff_Filter = staff_response.filter(i => i.role === 'staff');
        setStaff(Staff_Filter);
      } else {
        console.error("UserGet did not return an array:", staff_response);
        setStaff([]);
        message.error('Failed to load staff data: Invalid response.');
      }
    } catch (error) {
      console.error("Error fetching staff:", error);
      message.error('Error fetching staff data.');
    }
  };

  useEffect(() => {
    if (admin_id) {
      get();
    } else {
      // Navigate('/Admin_Login');
      console.warn("Admin ID not found. Staff data not loaded.");
    }
  }, [admin_id]);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when a navigation link is clicked (useful on mobile)
  useEffect(() => {
    if (isSidebarOpen && window.innerWidth < 769) { // 769 to match CSS breakpoint for mobile
      setIsSidebarOpen(false);
    }
  }, [location.pathname]); // Re-run when path changes

  const addstaff = async (value) => {
    const data = ({ ...value, "role": 'staff' });
    try {
      await UserPost(data);
      await get();
      setStaff_form(null);
      message.success('Staff added successfully');
    } catch (error) {
      console.error("Error adding staff:", error);
      message.error('Failed to add staff');
    }
  };

  const update_pass = (record) => {
    setUpdateform(record);
    setStaff_form("update_button");
  };

  const updatestaff = async (values) => {
    try {
      const id = values.id;
      await UserUpdate(id, values);
      await get();
      setStaff_form(null);
      setUpdateform(null);
      message.success('Staff updated successfully');
    } catch (error) {
      console.error("Error updating staff:", error);
      message.error('Failed to update staff');
    }
  };

  const delete_staff = async (record) => {
    try {
      const id = record.id;
      await UserRemove(id);
      await get();
      message.success('Staff deleted successfully');
    } catch (error) {
      console.error("Error deleting staff:", error);
      message.error('Failed to delete staff');
    }
  };

  const log_out = () => {
    localStorage.clear()

    // localStorage.removeItem('user_id');
    Navigate('/Admin_Login');
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id", sorter: (a, b) => a.id - b.id },
    { title: "Username", dataIndex: "username", key: "username", sorter: (a, b) => a.username.localeCompare(b.username) },
    { title: "Password", dataIndex: "password", key: "password", render: () => "********" },
    { title: "Balance", dataIndex: "balance", key: "balance", sorter: (a, b) => parseFloat(a.balance) - parseFloat(b.balance), render: (text) => text != null ? parseFloat(text).toFixed(2) : 'N/A' },
    { title: "District", dataIndex: "disttrict", key: "disttrict", sorter: (a, b) => (a.disttrict || "").localeCompare(b.disttrict || "") },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="table-actions">
          <Button onClick={() => update_pass(record)}>Update</Button>
          <Button danger onClick={() => delete_staff(record)}>Delete</Button>
          <Link to={`/Staff_Charts/${record.id}`}><Button type="default">Details</Button></Link>
        </div>
      ),
    },
  ];

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
    <div className="staff-page-container">
      <div className="staff-header">
        <div className="header-right-content"> {/* Wrapper for toggle and logo */}

          <Link to='/Home_Page_wLog' className="header-logo-link"> {/* Added class for styling */}
            <p className="staff-header-logo">Ristey</p>
          </Link>
        </div>
        <div className="staff-header-auth-links">
          {admin_id ? (
            <Link to='/Admin_Panel' className="header-nav-link"> {/* Added class for styling */}
              <p>Profile</p>
            </Link>
          ) : (
            <>
              <Link to='/User_Reg/885695' className="header-nav-link"> {/* Added class for styling */}
                <p>Sign Up</p>
              </Link>
              <Link to='/User_Login' className="header-nav-link"> {/* Added class for styling */}
                <p>Login</p>
              </Link>
            </>
          )}
        </div>
        <Button className="sidebar-toggle-btn" onClick={toggleSidebar}>☰</Button>
      </div>

      {/* Sidebar: class 'open' is added conditionally */}
      <div className={`staff-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {sidebarLinks.map(link => (
          <Link key={link.path} to={link.path}>
            <Button
              className={`staff-sidebar-button ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Button>
          </Link>
        ))}
        <Button className="staff-sidebar-button" onClick={log_out}>Log Out</Button>
      </div>

      {/* Main Content Area */}
      {/* The class 'sidebar-open-mobile-push' is optional if you want content to push instead of overlay */}
      <div className={`staff-main-content ${isSidebarOpen && window.innerWidth < 769 ? 'sidebar-open-mobile-push' : ''}`}>
        {staff_form === null && (
          <div className="add-staff-button-container">
            <Button
              type="primary"
              className="add-staff-button"
              onClick={() => setStaff_form("add")}
            >
              Add Staff
            </Button>
          </div>
        )}

        {staff_form === "add" && (
          <div className="form-section">
            <h3 className="form-title">Add New Staff</h3>
            <Staff_Reg
              onFinish={addstaff}
              onCancel={() => setStaff_form(null)}
            />
          </div>
        )}

        {staff_form === "update_button" && updateform && (
          <div className="form-section">
            <h3 className="form-title">Update Staff</h3>
            <Form
              className="staff-form"
              initialValues={updateform}
              onFinish={updatestaff}
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
              <Form.Item label="District" name="disttrict" rules={[{ required: true, message: 'Please input district!' }]}>
                <Input placeholder="District" />
              </Form.Item>
              <Form.Item>
                <Button className="staff-form-submit-button" type="primary" htmlType="submit">Update</Button>
                <Button style={{ marginLeft: '8px' }} onClick={() => { setStaff_form(null); setUpdateform(null); }}>Cancel</Button>
              </Form.Item>
            </Form>
          </div>
        )}

        <div className="staff-table-container">
          <h3 className="table-title">Staff List</h3>
          <Table
            columns={columns}
            dataSource={staff}
            rowKey="id"
            bordered
            scroll={{ x: true }}
            className="staff-table"
            pagination={{ pageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '50'] }}
          />
        </div>
        {/* Overlay for mobile: shown when sidebar is open */}
        {isSidebarOpen && <div className="mobile-sidebar-overlay" onClick={toggleSidebar}></div>}
      </div>
    </div>
  );
}

export default Staff_Tables;