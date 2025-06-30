import React, { useState } from "react";
import { Form, Button, Input, Card, Typography, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserLogin, User_forget_password } from "../../Api/CoreApi";

const { Title, Text } = Typography;

function User_Login() {
  const id_navigate = localStorage.getItem("id_navigate");
  const navigate = useNavigate();
  const [forget, setForget] = useState(1);

  const submit = async (values) => {
    const response = await UserLogin(values);

    if (response?.token?.access) {
      localStorage.setItem("access_token", response.token.access);
      localStorage.setItem("refresh_token", response.token.refresh);
      localStorage.setItem("role", response.role);
      localStorage.setItem("user_id", response.user_id);
      localStorage.setItem("ref", response.refer);
      message.success("Login Successful");

      // navigate(id_navigate ? `/User_Data/${id_navigate}` : "/Home_Page_Log");
      if (id_navigate) {
        navigate(`/User_Data/${id_navigate}`);
      } else {
        navigate("/Home_Page_Log");
      }
    } else {
      message.error("Invalid Credentials");
    }
  };

  const forget_password = async (values) => {
    await User_forget_password(values);
    message.success("Check your mail 📩");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url('https://images.pexels.com/photos/5713682/pexels-photo-5713682.jpeg?auto=compress&cs=tinysrgb&w=600') center/cover no-repeat`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: 500,
          padding: 24,
          borderRadius: 12,
          backgroundColor: "rgba(255,255,255,0.95)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Title level={3}>{forget === 1 ? "Login" : "Forgot Password"}</Title>
        </div>

        {forget === 1 ? (
          <Form layout="vertical" onFinish={submit}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username" },
                {
                  min: 5,
                  max: 16,
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

            {/* <Form.Item
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
            </Form.Item> */}
            <Form.Item
              label="Password"
              name="password"
              extra="Must be at least 8 characters and include uppercase, lowercase, and a number."
              hasFeedback
              rules={[
                { required: true, message: "Please enter your password" },
                // {
                //   pattern:
                //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@#$%^&*!]{8,20}$/,
                //   message:
                //     "Password must be 8-20 characters and include uppercase, lowercase, and a number. Only @#$%^&*! special characters allowed. No spaces.",
                // },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to="/User_Reg">Don't have an account?</Link>
              <Text
                style={{ color: "#1890ff", cursor: "pointer" }}
                onClick={() => setForget(2)}
              >
                Forgot password?
              </Text>
            </div>
          </Form>
        ) : (
          <Form layout="vertical" onFinish={forget_password}>
            <Form.Item
              label="Email"
              name="recipient"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input placeholder="Enter the your Email" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Send Reset Link
              </Button>
            </Form.Item>

            <div style={{ textAlign: "center", marginTop: 8 }}>
              <Button type="link" onClick={() => setForget(1)}>
                Back to Login
              </Button>
            </div>
          </Form>
        )}
      </Card>
    </div>
  );
}
export default User_Login;
