import React from "react";
import { Form, Button, Input, Card, message } from "antd";
import { UserLogin } from "../../Api/CoreApi";
import { useNavigate, Link } from "react-router-dom";
import "./LoginForm.css";
import Stufflogo from "./stuff_logo-removebg-preview.png";

function Staff_Login() {
  const Navigate = useNavigate();
  const submit = async (i) => {
    const response = await UserLogin(i);
    if (response.msg === "Login Successful") {
      localStorage.setItem("access_token", response.token.access);
      localStorage.setItem("refresh_token", response.token.refresh);
      localStorage.setItem("role", response.role);
      localStorage.setItem("user_id", response.user_id);
      localStorage.setItem("ref", response.refer);

      message.success("success");
      Navigate("/Staff_Panel");
    } else {
      message.error("try again");
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <div className="logo-container">
          <img src={Stufflogo} alt="Stuff Logo" className="stuff-logo" />
          <h3>Staff Login</h3>
        </div>

        <Form className="login-form" onFinish={submit}>
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
              {
                required: true,
                message: "Please enter your password",
              },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$%^&*!]{8,20}$/,
                message:
                  "Password must be 8-20 characters and include uppercase, lowercase, and a number. Only @#$%^&*! special characters allowed. No spaces.",
              },
            ]}
          >
            <Input.Password placeholder="Enter your password" />

          </Form.Item>

         

          <div style={{ textAlign: "center" }}>
            Don't have an account? <Link to="/Staff_Reg">Register here</Link>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Staff_Login;
