import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Input, Button, Table, message } from "antd";
import {
  UserGet,
  UserPost,
  UserUpdate,
  UserRemove,
  StaffTotalRevenueGet,
} from "../../Api/CoreApi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { FaUser } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import Staff_Transactions from "../Staff_Panel/Staff_Transactions"
import { VscGraph } from "react-icons/vsc";
import User_Reg from "../../Authentication/User/User_Reg";
import './Staff_Panel.css';

function Staff_Panel() {
  const baseurl = 'http://127.0.0.1:8000/'
  const Navigate = useNavigate();
  const [form] = Form.useForm();
  const intid = localStorage.getItem('user_id')
  const int_id = String(intid)
  // const int_id = (id);
  // console.log( int_id, "********* int_id ********");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [staff, setStaff] = useState([]);
  const [cmonth_revenue, setCMonth_revenue] = useState([]);
  const [pop, setPop] = useState(null)
  const [userref, setUserRef] = useState([]);
  console.log(staff, '***** staff *****')


  const get = async () => {
    const staff_response = await UserGet();

    const filter_current_staff = staff_response.filter((i) => i.id === int_id && i.role === 'staff');
    console.log(staff_response, '***** filter_current_staff *****')

    setStaff(filter_current_staff);
    form.setFieldsValue(filter_current_staff[0]);

    const userref_response = await UserGet();
    const filter_ref_user = userref_response.filter(
      (i) => i.ref === filter_current_staff[0].refer);
    // console.log(filter_ref_user,'********* filter_ref_user ********')
    setUserRef(filter_ref_user);

    const StaffTotalRevenueGet_response1 = await StaffTotalRevenueGet();
    const StaffTotalRevenueGet_response = StaffTotalRevenueGet_response1.filter(i => i.staff_id === int_id)

    const filteredUsers_Jan = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "01"
    );
    const total_amount_1 = filteredUsers_Jan.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Jan")
        ? prev.map(item =>
          item.month === "Jan" ? { month: "Jan", amount: total_amount_1 } : item
        )
        : [...prev, { month: "Jan", amount: total_amount_1 }]
    );


    const filteredUsers_feb = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "02"
    );
    const total_amount_2 = filteredUsers_feb.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Feb")
        ? prev.map(item =>
          item.month === "Feb" ? { month: "Feb", amount: total_amount_2 } : item
        )
        : [...prev, { month: "Feb", amount: total_amount_2 }]
    );

    const filteredUsers_march = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "03"
    );
    const total_amount_March = filteredUsers_march.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "March")
        ? prev.map(item =>
          item.month === "March" ? { month: "March", amount: total_amount_March } : item
        )
        : [...prev, { month: "March", amount: total_amount_March }]
    );

    const filteredUsers_april = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "04"
    );
    const total_amount_april = filteredUsers_april.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "April")
        ? prev.map(item =>
          item.month === "April" ? { month: "April", amount: total_amount_april } : item
        )
        : [...prev, { month: "April", amount: total_amount_april }]
    );


    const filteredUsers_may = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "05"
    );
    const total_amount = filteredUsers_may.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    // console.log(amount,'******* amount ******')
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "May")
        ? prev.map(item =>
          item.month === "May" ? { month: "May", amount: total_amount } : item
        )
        : [...prev, { month: "May", amount: total_amount }]
    );


    const filteredUsers_jun = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "06"
    );
    const total_amount_06 = filteredUsers_jun.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Jun")
        ? prev.map(item =>
          item.month === "Jun" ? { month: "Jun", amount: total_amount_06 } : item
        )
        : [...prev, { month: "Jun", amount: total_amount_06 }]
    );


    const filteredUsers_Jully = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "07"
    );
    const total_amount_07 = filteredUsers_Jully.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Jully")
        ? prev.map(item =>
          item.month === "Jully" ? { month: "Jully", amount: total_amount_07 } : item
        )
        : [...prev, { month: "Jully", amount: total_amount_07 }]
    );




    const filteredUsers_Aug = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "08"
    );
    const total_amount_08 = filteredUsers_Aug.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Aug")
        ? prev.map(item =>
          item.month === "Aug" ? { month: "Aug", amount: total_amount_08 } : item
        )
        : [...prev, { month: "Aug", amount: total_amount_08 }]
    );


    const filteredUsers_Sept = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "09"
    );
    const total_amount_09 = filteredUsers_Sept.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Sept")
        ? prev.map(item =>
          item.month === "Sept" ? { month: "Sept", amount: total_amount_09 } : item
        )
        : [...prev, { month: "Sept", amount: total_amount_09 }]
    );


    const filteredUsers_Oct = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "10"
    );
    const total_amount_10 = filteredUsers_Oct.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Oct")
        ? prev.map(item =>
          item.month === "Oct" ? { month: "Oct", amount: total_amount_10 } : item
        )
        : [...prev, { month: "Oct", amount: total_amount_10 }]
    );

    const filteredUsers_Nov = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "11"
    );
    const total_amount_11 = filteredUsers_Nov.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Nov")
        ? prev.map(item =>
          item.month === "Nov" ? { month: "Nov", amount: total_amount_11 } : item
        )
        : [...prev, { month: "Nov", amount: total_amount_11 }]
    );

    const filteredUsers_Dec = StaffTotalRevenueGet_response.filter(
      (i) => i.month === "12"
    );
    const total_amount_12 = filteredUsers_Dec.map(i => i.staff_amount).reduce((total, current) => total + current, 0);
    setCMonth_revenue(prev =>
      prev.some(item => item.month === "Dec")
        ? prev.map(item =>
          item.month === "Dec" ? { month: "Dec", amount: total_amount_12 } : item
        )
        : [...prev, { month: "Dec", amount: total_amount_12 }]
    );

  }

  const todayMonth = new Date().toLocaleString('en-US', { month: 'long' });
  // console.log(todayMonth,'******** todayMonth ******')
  const current_month = cmonth_revenue.filter(i => i.month === todayMonth)
  // console.log(current_month, '****** todayMonth ******')

  useEffect(() => {
    get();
  }, []);

  const updatestaff = async (i) => {
    try {
      const response = await UserUpdate(int_id, i);
      if (response) {  // Ensure response is valid
        const staff_filter = response.filter(i => i.id === int_id)
        setStaff(staff_filter);
        message.success('Success');
      } else {
        message.error('Update failed!'); // Handle failure case
      }
    } catch (error) {
      console.error('Error updating staff:', error);
      message.error('Something went wrong!');
    }
  };

  const log_out = () => {
    localStorage.removeItem('user_id')
    Navigate('/Staff_Login')
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="staff-panel-container">
      <div className="app-header">
        <Link to='/Home_Page_wLog' className="header-logo-link">
          <p className="header-logo-text">Ristey</p>
        </Link>

        <div className="header-nav">
          {intid ? (
            <Link to='/Staff_Panel' className="header-nav-link">
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
          <Button className="sidebar-btn active">Dashboard</Button>
        </Link>
        <Link to='/Staff_Added_User'>
          <Button className="sidebar-btn">User</Button>
        </Link>
        <Link to='/Staff_Transactions'>
          <Button className="sidebar-btn ">Transaction</Button> {/* Mark active link */}
        </Link>
        <Link to='/Staff_Withdrawals'>
          <Button className="sidebar-btn">Withdrawal</Button>
        </Link>
        <Button className="sidebar-btn" onClick={log_out}>
          Log Out
        </Button>
      </div>

      <div className="main-content1">
        <div className="profile-section11">
          <div className="profile-card" style={{margin: '0'}}>
            <div className="profile-pic-container">
              {staff.length > 0 && staff[0].pic ? (
                <img className="profile-pic" src={`${baseurl}${staff[0].pic}`} alt="Staff" />
              ) : (
                <div className="profile-pic-placeholder">
                  <FaUser size={80} />
                </div>
              )}
            </div>
            <Form form={form} onFinish={updatestaff} layout="vertical" className="profile-form">
              <Form.Item name="username" label='Name'>
                <Input />
              </Form.Item>
              <Form.Item name="password" label='Password'>
                <Input type="password" />
              </Form.Item>
              <Form.Item name="balance" label='Balance'>
                <Input readOnly />
              </Form.Item>
              {/* <Form.Item name="disttrict" label='District'>
              <Input />
            </Form.Item> */}
              <Form.Item className="profile-form-actions">
                <Button type="primary" htmlType="submit">Save</Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        <div className="stats-section">
          <Link to='/Staff_Added_User' className="stat-card-link">
            <div className="stat-card">
              <FaUser className="stat-icon" />
              <p className="stat-value">{userref.length}</p>
              <p className="stat-label">Total Users</p>
            </div>
          </Link>

          <div className="stat-card">
            <FaRupeeSign className="stat-icon" />
            <p className="stat-value">{current_month[0]?.amount || "N/A"}</p>
            <p className="stat-label">Revenue ({current_month[0]?.month || "Current Month"})</p>
          </div>

          {pop === null ? (
            <div className="stat-card clickable-card" onClick={() => setPop('pop')}>
              <GrTransaction className="stat-icon large-icon" />
              <p className="stat-label">View Transactions Graph</p>
            </div>
          ) : (
            <div className="stat-card clickable-card" onClick={() => setPop(null)}>
              <VscGraph className="stat-icon large-icon" />
              <p className="stat-label">View Revenue Chart</p>
            </div>
          )}
        </div>

        {pop === null && cmonth_revenue.length > 0 && (
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cmonth_revenue} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8">
                  <LabelList dataKey="amount" position="top" style={{ fontSize: '12px', fill: '#000' }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {pop === 'pop' && (
          <div className="transactions-placeholder">
            {/* <p>Transaction Details / Graph would show here</p> */}
            {/* For example, you could render the <Staff_Transactions /> component here */}
            {/* <Staff_Transactions /> */}
            <ResponsiveContainer width="100%" height={300}>
              {/* Replace with actual transaction graph/data if you have one */}
              <BarChart data={[{ name: "Mock Tx", value: 100 }]} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#82ca9d">
                  <LabelList dataKey="value" position="top" style={{ fontSize: '12px', fill: '#000' }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p style={{ textAlign: 'center', marginTop: '20px' }}>Transaction View (Placeholder)</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Staff_Panel


// import React from 'react'

// function Staff_Panel() {
//   return (
//     <div>Staff_Panel</div>
//   )
// }

// export default Staff_Panel