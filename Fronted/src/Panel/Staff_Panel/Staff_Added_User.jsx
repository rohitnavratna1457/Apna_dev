import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Form, Input, Button, Table, Select, message } from "antd";
import {
  UserGet,
  // UserPost, // Not used in the provided adduser function
  UserUpdate,
  UserRemove,
} from "../../Api/CoreApi"; // Make sure path is correct
import User_Reg from "../../Authentication/User/User_Reg"; // Make sure path is correct
import './Staff_Added_User.css'; // Import the CSS file

const { Option } = Select;

function Staff_Added_User() {
  const Navigate = useNavigate();
  const [updateUserForm] = Form.useForm(); // Form instance for update form

  const [user, setuser] = useState([]);
  const [staff, setStaff] = useState([]); // This will hold the current staff member's data
  const [user_form, setuser_form] = useState(null); // 'add', 'update_button', or null
  // updateform state is used to hold data for the update form,
  // but AntD Form's initialValues or setFieldsValue is preferred for pre-filling.
  // const [updateform, setUpdateform] = useState({}); // We'll use updateUserForm.setFieldsValue

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar

  // This 'id' is for the currently logged-in *staff* member
  const staffId = localStorage.getItem('user_id'); // Renamed for clarity

  const get = async () => {
    if (!staffId) {
      message.error("Staff ID not found. Please log in.");
      Navigate('/Staff_Login'); // Or appropriate login page
      return;
    }
    try {
      const allUsersAndStaff = await UserGet(); // Assuming UserGet fetches all users/staff
      const currentStaffMember = allUsersAndStaff.find(i => i.id === staffId); // Find current staff

      if (currentStaffMember) {
        setStaff([currentStaffMember]); // Set staff (expecting an array for map in original code)
        // Assuming currentStaffMember has a 'refer' property to link to users they manage
        if (currentStaffMember.refer) {
          const managedUsers = allUsersAndStaff.filter(i => i.ref === currentStaffMember.refer);
          setuser(managedUsers);
        } else {
          setuser([]); // No referral code, so no users under this staff
          console.warn("Current staff member does not have a 'refer' property.");
        }
      } else {
        message.error("Staff member not found.");
        setStaff([]);
        setuser([]);
      }
    } catch (error) {
      message.error("Failed to fetch data.");
      console.error("Error in get():", error);
    }
  };

  useEffect(() => {
    get();
  }, [staffId]); // Re-fetch if staffId changes (though it's from localStorage)

  // const adduser = async (value) => {
  //   // This function seems to be intended for the User_Reg component to call.
  //   // User_Reg would need to be modified to accept an onSubmit prop.
  //   try {
  //     // Assuming UserPost adds the user and returns the updated list or the new user.
  //     // The current User_Reg might handle its own submission.
  //     // const response = await UserPost(value);
  //     // If UserPost returns all users:
  //     // const userdata = response.filter(i => i.ref === staff[0]?.refer);
  //     // setuser(userdata);
  //     message.success('User addition process initiated (simulated from Staff_Added_User)');
  //     setuser_form(null);
  //     get(); // Re-fetch all users to include the new one
  //   } catch (error) {
  //     message.error('Failed to add user (simulated)');
  //   }
  // };

  const handleUserRegSubmit = async () => {
    // This function would be passed to User_Reg if it needs a callback
    // after its internal submission is complete.
    message.success("User registration successful (from User_Reg component). Refreshing list.");
    setuser_form(null); // Close the form view
    get(); // Refresh the user list
  };

  const update_pass = (record) => {
    updateUserForm.setFieldsValue(record); // Pre-fill the form
    setuser_form("update_button");
  };

  const updateuser = async (values) => {
    try {
      const userIdToUpdate = values.id; // ID comes from the form values (set by setFieldsValue)
      await UserUpdate(userIdToUpdate, values); // API should handle response
      message.success('User updated successfully');
      setuser_form(null);
      get(); // Re-fetch users
    } catch (error) {
      message.error('Failed to update user');
      console.error("Error in updateuser():", error);
    }
  };

  const delete_user = async (record) => {
    try {
      await UserRemove(record.id); // API should handle response
      message.success('User deleted successfully');
      // Optimistically update UI or re-fetch
      setuser(prevUsers => prevUsers.filter(u => u.id !== record.id));
      // Or call get(); if UserRemove doesn't return the updated list
    } catch (error) {
      message.error('Failed to delete user');
      console.error("Error in delete_user():", error);
    }
  };

  const log_out = () => {
    localStorage.removeItem('user_id');
    Navigate('/Staff_Login'); // Ensure this route is correct
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id", fixed: 'left', width: 80 },
    { title: "Username", dataIndex: "username", key: "username", width: 150 },
    { title: "Password", dataIndex: "password", key: "password", width: 150, render: () => '******' },
    { title: "Balance", dataIndex: "balance", key: "balance", width: 100 },
    { title: "District", dataIndex: "disttrict", key: "disttrict", width: 120 },
    {
      title: "Actions",
      key: "actions",
      fixed: 'right',
      width: 180, // Adjusted width
      render: (_, record) => (
        <div className="action-buttons">
          <Button
            type="primary"
            ghost
            onClick={() => update_pass(record)}
          >
            Update
          </Button>
          <Button danger onClick={() => delete_user(record)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="staff-layout-container">
      <div className="app-header">
        <Link to='/Home_Page_wLog' className="header-logo-link">
          <p className="header-logo-text">Ristey</p>
        </Link>
        <div className="header-nav-wrapper"> {/* Wrapper for nav items */}
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

      <div className={`app-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <Link to='/Staff_Panel'>
          <Button className="sidebar-btn">Dashboard</Button>
        </Link>
        <Link to='/Staff_Added_User'>
          <Button className="sidebar-btn active">User</Button>
        </Link>
        <Link to='/Staff_Transactions'>
          <Button className="sidebar-btn">Transaction</Button>
        </Link>
        <Link to='/Staff_Withdrawals'>
          <Button className="sidebar-btn">Withdrawal</Button>
        </Link>
        <Button className="sidebar-btn" onClick={log_out}>
          Log Out
        </Button>
      </div>

      <div className="main-content staff-added-user-content">
        <div className="content-actions">
          {user_form === null && (
            <Button
              type="primary"
              onClick={() => setuser_form("add")}
            >
              Add User
            </Button>
          )}
           {(user_form === "add" || user_form === "update_button") && (
             <Button onClick={() => setuser_form(null)}>
              Cancel
            </Button>
           )}
        </div>

        {user_form === "add" && (
          <div className="form-container add-user-form-container">
            <h2>Add New User</h2>
            {/* User_Reg component handles its own form and submission.
                Pass a callback if this parent component needs to react to submission. */}
            <User_Reg onSuccessfulSubmit={handleUserRegSubmit} staffReferralCode={staff[0]?.refer} />
          </div>
        )}

        {user_form === "update_button" && (
          <div className="form-container update-user-form-container">
            <h2>Update User Details</h2>
            <Form
              form={updateUserForm} // Use the form instance
              // initialValues prop is not strictly needed if setFieldsValue is used effectively
              onFinish={updateuser}
              layout="vertical" // vertical layout is often good for responsiveness
              className="user-update-form" // Class for styling
            >
              <Form.Item label="ID" name="id" rules={[{ required: true }]}>
                <Input readOnly />
              </Form.Item>
              <Form.Item label="Username" name="username" rules={[{ required: true }]}>
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input placeholder="Enter new password (optional)" type="password" />
              </Form.Item>
              <Form.Item label="Balance" name="balance" rules={[{ type: 'number', transform: value => Number(value) }]}>
                <Input type="number" placeholder="Balance" />
              </Form.Item>
              <Form.Item label="District" name="disttrict">
                <Input placeholder="District" />
              </Form.Item>
              <Form.Item className="submit-update-btn-item">
                <Button type="primary" htmlType="submit" className="submit-update-btn">
                  Update User
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}

        <div className="user-table-container">
          <h2>Managed Users</h2>
          <Table
            columns={columns}
            dataSource={user}
            rowKey="id"
            bordered
            scroll={{ x: 'max-content' }}
            className="user-data-table"
          />
        </div>
      </div>
    </div>
  );
}

export default Staff_Added_User;