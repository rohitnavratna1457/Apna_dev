import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Input, Button, Table, message, } from "antd";
import {
  UserGet,
  UserPost,
  UserUpdate,
  UserRemove,
  UserDataGet,
  UserTotalRevenueGet,
} from "../../Api/CoreApi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { FaUser, FaBars } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import Staff_Transactions from "../Staff_Panel/Staff_Transactions";
import { VscGraph } from "react-icons/vsc";
import User_Reg from "../../Authentication/User/User_Reg";
import User_Apply from "./User_Apply";
import Test from "../../Test";
import "../User_Panel/User_Panel.css";

function User_Panel() {
  const baseurl = "http://127.0.0.1:8000/";
  const Navigate = useNavigate();
  const [form] = Form.useForm();
  const intid = localStorage.getItem("user_id");
  const int_id = String(intid);
  // const int_id = (id);
  console.log(form, "********* form ********");

  const [staff, setStaff] = useState([]);
  const [userdata, setUserdata] = useState([]);

  const [cmonth_revenue, setCMonth_revenue] = useState([]);
  const [pop, setPop] = useState(null);
  const [userref, setUserRef] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar

  console.log(pop, "***** pop *****");

  const get = async () => {
    const user_response = await UserDataGet();
    const filter_current_user = user_response.filter(
      (i) => i.User_id === int_id && i.role === "user"
    );
    setUserdata(filter_current_user);

    const staff_response = await UserGet();

    const filter_current_staff = staff_response.filter(
      (i) => i.id === int_id && i.role === "user"
    );
    // console.log(filter_current_staff, '***** filter_current_staff *****')

    setStaff(filter_current_staff);
    form.setFieldsValue(filter_current_staff[0]);

    const userref_response = await UserGet();
    const filter_ref_user = userref_response.filter(
      (i) => i.ref === filter_current_staff[0].refer
    );
    // console.log(filter_ref_user,'********* filter_ref_user ********')
    setUserRef(filter_ref_user);

    const UserTotalRevenueGet_response1 = await UserTotalRevenueGet();
    const UserTotalRevenueGet_response = UserTotalRevenueGet_response1.filter(
      (i) => i.user_id === int_id
    );
    console.log(
      UserTotalRevenueGet_response,
      "******* UserTotalRevenueGet_response ******"
    );
    const filteredUsers_Jan = UserTotalRevenueGet_response.filter(
      (i) => i.month === "01"
    );
    const total_amount_1 = filteredUsers_Jan
      .map((i) => i.user_amount)
      .reduce((total, current) => total + current, 0);
    setCMonth_revenue((prev) =>
      prev.some((item) => item.month === "Jan")
        ? prev.map((item) =>
            item.month === "Jan"
              ? { month: "Jan", amount: total_amount_1 }
              : item
          )
        : [...prev, { month: "Jan", amount: total_amount_1 }]
    );

    const filteredUsers_feb = UserTotalRevenueGet_response.filter(
      (i) => i.month === "02"
    );
    const total_amount_2 = filteredUsers_feb
      .map((i) => i.user_amount)
      .reduce((total, current) => total + current, 0);
    setCMonth_revenue((prev) =>
      prev.some((item) => item.month === "Feb")
        ? prev.map((item) =>
            item.month === "Feb"
              ? { month: "Feb", amount: total_amount_2 }
              : item
          )
        : [...prev, { month: "Feb", amount: total_amount_2 }]
    );

    const filteredUsers_march = UserTotalRevenueGet_response.filter(
      (i) => i.month === "03"
    );
    const total_amount_March = filteredUsers_march
      .map((i) => i.user_amount)
      .reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue((prev) =>
      prev.some((item) => item.month === "March")
        ? prev.map((item) =>
            item.month === "March"
              ? { month: "March", amount: total_amount_March }
              : item
          )
        : [...prev, { month: "March", amount: total_amount_March }]
    );

    const filteredUsers_april = UserTotalRevenueGet_response.filter(
      (i) => i.month === "04"
    );
    const total_amount_april = filteredUsers_april
      .map((i) => i.user_amount)
      .reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue((prev) =>
      prev.some((item) => item.month === "April")
        ? prev.map((item) =>
            item.month === "April"
              ? { month: "April", amount: total_amount_april }
              : item
          )
        : [...prev, { month: "April", amount: total_amount_april }]
    );

    const filteredUsers_may = UserTotalRevenueGet_response.filter(
      (i) => i.month === "05"
    );
    const total_amount = filteredUsers_may
      .map((i) => i.user_amount)
      .reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue((prev) =>
      prev.some((item) => item.month === "May")
        ? prev.map((item) =>
            item.month === "May" ? { month: "May", amount: total_amount } : item
          )
        : [...prev, { month: "May", amount: total_amount }]
    );

    const filteredUsers_jun = UserTotalRevenueGet_response.filter(
      (i) => i.month === "06"
    );
    const total_amount_06 = filteredUsers_jun
      .map((i) => i.user_amount)
      .reduce((total, current) => total + current, 0);
    setCMonth_revenue((prev) =>
      prev.some((item) => item.month === "Jun")
        ? prev.map((item) =>
            item.month === "Jun"
              ? { month: "Jun", amount: total_amount_06 }
              : item
          )
        : [...prev, { month: "Jun", amount: total_amount_06 }]
    );

    const filteredUsers_Jully = UserTotalRevenueGet_response.filter(
      (i) => i.month === "07"
    );
    const total_amount_07 = filteredUsers_Jully
      .map((i) => i.user_amount)
      .reduce((total, current) => total + current, 0);
    setCMonth_revenue((prev) =>
      prev.some((item) => item.month === "Jully")
        ? prev.map((item) =>
            item.month === "Jully"
              ? { month: "Jully", amount: total_amount_07 }
              : item
          )
        : [...prev, { month: "Jully", amount: total_amount_07 }]
    );

    const filteredUsers_Aug = UserTotalRevenueGet_response.filter(
      (i) => i.month === "08"
    );
    const total_amount_08 = filteredUsers_Aug
      .map((i) => i.user_amount)
      .reduce((total, current) => total + current, 0);
    setCMonth_revenue((prev) =>
      prev.some((item) => item.month === "Aug")
        ? prev.map((item) =>
            item.month === "Aug"
              ? { month: "Aug", amount: total_amount_08 }
              : item
          )
        : [...prev, { month: "Aug", amount: total_amount_08 }]
    );

    const filteredUsers_Sept = UserTotalRevenueGet_response.filter(
      (i) => i.month === "09"
    );
    const total_amount_09 = filteredUsers_Sept
      .map((i) => i.user_amount)
      .reduce((total, current) => total + current, 0);
    setCMonth_revenue((prev) =>
      prev.some((item) => item.month === "Sept")
        ? prev.map((item) =>
            item.month === "Sept"
              ? { month: "Sept", amount: total_amount_09 }
              : item
          )
        : [...prev, { month: "Sept", amount: total_amount_09 }]
    );

    const filteredUsers_Oct = UserTotalRevenueGet_response.filter(
      (i) => i.month === "10"
    );
    const total_amount_10 = filteredUsers_Oct
      .map((i) => i.user_amount)
      .reduce((total, current) => total + current, 0);
    setCMonth_revenue((prev) =>
      prev.some((item) => item.month === "Oct")
        ? prev.map((item) =>
            item.month === "Oct"
              ? { month: "Oct", amount: total_amount_10 }
              : item
          )
        : [...prev, { month: "Oct", amount: total_amount_10 }]
    );

    const filteredUsers_Nov = UserTotalRevenueGet_response.filter(
      (i) => i.month === "11"
    );
    const total_amount_11 = filteredUsers_Nov
      .map((i) => i.user_amount)
      .reduce((total, current) => total + current, 0);
    setCMonth_revenue((prev) =>
      prev.some((item) => item.month === "Nov")
        ? prev.map((item) =>
            item.month === "Nov"
              ? { month: "Nov", amount: total_amount_11 }
              : item
          )
        : [...prev, { month: "Nov", amount: total_amount_11 }]
    );

    const filteredUsers_Dec = UserTotalRevenueGet_response.filter(
      (i) => i.month === "12"
    );
    const total_amount_12 = filteredUsers_Dec
      .map((i) => i.user_amount)
      .reduce((total, current) => total + current, 0);
    setCMonth_revenue((prev) =>
      prev.some((item) => item.month === "Dec")
        ? prev.map((item) =>
            item.month === "Dec"
              ? { month: "Dec", amount: total_amount_12 }
              : item
          )
        : [...prev, { month: "Dec", amount: total_amount_12 }]
    );
  };

  const todayMonth = new Date().toLocaleString("en-US", { month: "long" });
  // console.log(todayMonth,'******** todayMonth ******')
  const current_month = cmonth_revenue.filter((i) => i.month === todayMonth);
  console.log(current_month, "****** todayMonth ******");

  useEffect(() => {
    get();
  }, []);

  const updatestaff = async (i) => {
    try {
      const response = await UserUpdate(int_id, i);
      if (response) {
        // Ensure response is valid
        const staff_filter = response.filter((i) => i.id === int_id);
        setStaff(staff_filter);
        message.success("Success");
      } else {
        message.error("Update failed!"); // Handle failure case
      }
    } catch (error) {
      console.error("Error updating staff:", error);
      message.error("Something went wrong!");
    }
  };

  const log_out = () => {
    localStorage.clear();

    // localStorage.removeItem("user_id");
    Navigate("/User_Login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="top-navbar-left">
          <Button onClick={toggleSidebar} className="sidebar-toggle-button">
            ☰
          </Button>
          <Link to="/Home_Page_wLog" className="navbar-title">
            Ristey
          </Link>
        </div>

        <div className="top-navbar-right">
          {int_id ? (
            <Link to="/User_Panel" className="navbar-link">
              {/* Profile */}
            </Link>
          ) : (
            <div className="navbar-auth-links">
              <Link to="/User_Reg/885695" className="navbar-link">
                Sign Up
              </Link>
              <Link to="/User_Login" className="navbar-link">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Static Sidebar (Always visible, no toggle) */}
      <div className={`sidebar_open ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-buttons">
          <Link to="/User_Panel">
            <Button className="sidebar-button">Dashboard</Button>
          </Link>
          <Link to="/User_Added_User">
            <Button className="sidebar-button">User</Button>
          </Link>
          <Link to="/User_Recharge">
            <Button className="sidebar-button">Recharge</Button>
          </Link>
          <Link to="/User_Transaction_User">
            <Button className="sidebar-button">Transaction</Button>
          </Link>
          <Link to="/User_Withdrawal_User">
            <Button className="sidebar-button">Withdrawal</Button>
          </Link>
          <Button className="sidebar-button" onClick={log_out}>
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-image-wrapper">
            {staff.map((i) => (
              <img
                key={i.id}
                className="profile-image"
                src={`${baseurl}${i.pic}`}
                alt="Profile"
              />
            ))}
          </div>

          <Form form={form} onFinish={updatestaff} className="profile-form">
            <Form.Item
              name="username"
              label="Name"
              rules={[
                { required: true, message: "Please input your name!" },
                {
                  min: 10,
                  max: 16,
                  message: "Name must be exactly 10 characters",
                },
                {
                  validator: (_, value) =>
                    value && value.includes(" ")
                      ? Promise.reject("Spaces are not allowed in the name")
                      : Promise.resolve(),
                },
              ]}
            >
              <Input placeholder="Enter exactly 10 characters (no spaces)" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  pattern: /^[A-Za-z]+$/,
                  message:
                    "Password must contain only alphabet letters (A–Z, a–z)",
                },
              ]}
            >
              <Input.Password placeholder="Enter letters only (A-Z, a-z)" />
            </Form.Item>

            <Form.Item name="balance" label="Balance">
              <Input readOnly />
            </Form.Item>

            <div className="form-buttons">
              <Button htmlType="submit" className="save-button">
                Save
              </Button>
              <Link to="/User_Profile_User">
                <Button className="profile-button">Profile</Button>
              </Link>
            </div>
          </Form>
        </div>

        {/* Cards Section */}
        <div className="cards-section">
          <Link to="/User_Profile_User" className="info-card">
            <p className="card-icon">
              <FaUser />
            </p>
            <p className="card-count">{userref.length}</p>
          </Link>

          <div className="info-card">
            <p className="card-icon">
              <FaRupeeSign />
            </p>
            <p className="card-count">{current_month[0]?.amount || "0"}</p>
            <p className="card-count">{current_month[0]?.month || ""}</p>
          </div>

          <div
            className="info-card"
            onClick={() => setPop(pop === null ? "pop" : null)}
          >
            <p className="card-icon">
              {pop === null ? <GrTransaction /> : <VscGraph />}
            </p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      {pop === null && (
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={cmonth_revenue}
              margin={{ top: 10, right: 30, left: 35, bottom: 5 }}
            >
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8">
                <LabelList
                  dataKey="amount"
                  position="top"
                  className="chart-label-list"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {pop === "pop" && (
        <div lassName="chart-container">
          <User_Apply />
        </div>
      )}
    </div>
  );
}

export default User_Panel;
