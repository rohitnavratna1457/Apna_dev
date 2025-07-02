import React from "react";
import { Form, Button, Input, Card, message } from "antd";
import { UserLogin } from "../../Api/CoreApi";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

import adminAvatar from "./admin.png";

function Admin_login() {
  const Navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await UserLogin(values);
      console.log(response,'******* response ********')

      if (response?.token?.access) {
        localStorage.setItem("access_token", response.token.access);
        localStorage.setItem("refresh_token", response.token.refresh);
        localStorage.setItem("role", response.role);
        localStorage.setItem("user_id", response.user_id);
        localStorage.setItem("ref", response.refer);

        message.success("Login Successful");
        Navigate("/Admin_Panel"); // Or your desired admin route
      } else {
        message.error(
          response?.detail || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("Login API error:", error);
      message.error("An error occurred during login.");
    }
  };

  return (
    <div className="admin-login-container">
      {" "}
      {/* Replaces outer div with inline style */}
      <Card className="admin-login-card">
        {" "}
        {/* Replaces Card with inline style */}
        <div className="login-header">
          <img
            src={adminAvatar} // Your image source
            alt="Admin Avatar"
            className="login-avatar-image"
          />
          <h2 className="login-title">Admin Login</h2>
        </div>
        <Form
          name="admin_login_form"
          onFinish={handleSubmit}
          layout="vertical"
          className="admin-login-form"
        >
          {/* <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter your username!' }]}
          >
           
            <Input placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item> */}

          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please enter your username" },
              {
                min: 5,
                max: 12,
                message: "Username must be between 5 and 12 characters",
              },
              {
                validator: (_, value) =>
                  value && value.includes(" ")
                    ? Promise.reject("Spaces are not allowed in the username")
                    : Promise.resolve(),
              },
            ]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              {
                pattern: /^[A-Za-z0-9@#$%^&*!]+$/,
                message:
                  "Password can include letters, numbers, and @#$%^&*! but no spaces",
              },
              {
                validator: (_, value) =>
                  value && value.includes(" ")
                    ? Promise.reject("Spaces are not allowed in the password")
                    : Promise.resolve(),
              },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item className="login-button-container">
            {/* style={{ display: 'block', margin: '0 auto' }} replaced by className and CSS */}
            <Button
              type="primary"
              htmlType="submit"
              className="login-submit-button"
              block
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Admin_login;
