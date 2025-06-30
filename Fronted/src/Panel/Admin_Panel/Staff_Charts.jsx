import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import Staff_Transaction from "./Staff_Transaction";
import { VscGraph } from "react-icons/vsc";

function Staff_Charts() {
  const admin_id = localStorage.getItem('user_id')
  const Navigate = useNavigate();
  const [form] = Form.useForm();
  const id = useParams();
  const int_id = (String(id.id))
  const [staff, setStaff] = useState([]);
  const [cmonth_revenue, setCMonth_revenue] = useState([]);
  const [pop, setPop] = useState(null)


  const [userref, setUserRef] = useState([]);

  console.log(cmonth_revenue, "********* cmonth_revenue ********");

  const get = async () => {
    const staff_response = await UserGet();
    const filter_current_staff = staff_response.filter((i) => i.id === int_id);
    setStaff(filter_current_staff);
    form.setFieldsValue(filter_current_staff[0]);

    const userref_response = await UserGet();
    const filter_ref_user = userref_response.filter(
      (i) => i.ref === filter_current_staff[0].refer
    );
    console.log(filter_ref_user, '********* filter_ref_user ********')
    setUserRef(filter_ref_user);

    const total_revenue_response = await StaffTotalRevenueGet();
    console.log(total_revenue_response, '********* total_revenue_response ********')

    //   const filteredUsers = total_revenue_response.filter(
    //     (i) => i.month === "2025-01-01"
    //   );

    //   console.log(filteredUsers, '*** data YYY')


    //   const data = filteredUsers.map(i => i.user)

    //   const filterdata = data[0].filter(i => i.staff === int_id)
    //   const filteramount = filterdata.map(i => i.amount)
    //   const total = filteramount.reduce((a, b) => a + b, 0);
    //   setCMonth_revenue([{ month: "Jan", amount: total }])


    //   const filteredUsers_feb = total_revenue_response.filter(
    //     (i) => i.month === "2025-02-01"
    //   );
    //   const data_feb = filteredUsers_feb.map(i => i.user)
    //   const filterdata_feb = data_feb[0].filter(i => i.staff === int_id)
    //   console.log(data_feb, '****** data_Dec ********')

    //   const filteramount_feb = filterdata_feb.map(i => i.amount)
    //   const total_feb = filteramount_feb.reduce((a, b) => a + b, 0);
    //   setCMonth_revenue(prevState => [
    //     ...prevState.filter(item => item.month !== "Feb"), // "Feb" ko hatao agar already hai
    //     { month: "Feb", amount: total_feb } // Naya object add karo
    //   ]);


    //   const filteredUsers_march = total_revenue_response.filter(
    //     (i) => i.month === "2025-03-01"
    //   );

    //   const data_march = filteredUsers_march.map(i => i.user)

    //   const filterdata_march = data_march[0].filter(i => i.staff === int_id)
    //   const filteramount_march = filterdata_march.map(i => i.staff_amount)
    //   const total_march = filteramount_march.reduce((a, b) => a + b, 0);
    //   console.log(total_march, '******* data*******')
    //   const fix_staff_amount = { balance: total_march };
    //   const response2 = await UserUpdate(int_id, fix_staff_amount);

    //   setCMonth_revenue(prevState => [
    //     ...prevState.filter(item => item.month !== "March"), // "march" ko hatao agar already hai
    //     { month: "March", staff_amount: total_march } // Naya object add karo
    //   ]);


    //   const filteredUsers_april = total_revenue_response.filter(
    //     (i) => i.month === "2025-04-01"
    //   );
    //   const data_april = filteredUsers_april.map(i => i.user)
    //   const filterdata_april = data_april[0].filter(i => i.staff === int_id)
    //   const filteramount_april = filterdata_april.map(i => i.amount)
    //   const total_april = filteramount_april.reduce((a, b) => a + b, 0);
    //   setCMonth_revenue(prevState => [
    //     ...prevState.filter(item => item.month !== "April"), // "April" ko hatao agar already hai
    //     { month: "April", amount: total_april } // Naya object add karo
    //   ]);


    //   const filteredUsers_may = total_revenue_response.filter(
    //     (i) => i.month === "2025-05-01"
    //   );
    //   const data_may = filteredUsers_may.map(i => i.user)
    //   const filterdata_may = data_may[0].filter(i => i.staff === int_id)
    //   const filteramount_may = filterdata_may.map(i => i.amount)
    //   const total_may = filteramount_may.reduce((a, b) => a + b, 0);
    //   setCMonth_revenue(prevState => [
    //     ...prevState.filter(item => item.month !== "May"), // "May" ko hatao agar already hai
    //     { month: "May", amount: total_may } // Naya object add karo
    //   ]);


    //   const filteredUsers_jun = total_revenue_response.filter(
    //     (i) => i.month === "2025-06-01"
    //   );
    //   const data_jun = filteredUsers_jun.map(i => i.user)
    //   const filterdata_jun = data_jun[0].filter(i => i.staff === int_id)
    //   const filteramount_jun = filterdata_jun.map(i => i.amount)
    //   const total_jun = filteramount_jun.reduce((a, b) => a + b, 0);
    //   setCMonth_revenue(prevState => [
    //     ...prevState.filter(item => item.month !== "Jun"), // "Jun" ko hatao agar already hai
    //     { month: "Jun", amount: total_jun } // Naya object add karo
    //   ]);

    //   const filteredUsers_Jully = total_revenue_response.filter(
    //     (i) => i.month === "2025-07-01"
    //   );
    //   const data_Jully = filteredUsers_Jully.map(i => i.user)
    //   const filterdata_Jully = data_Jully[0].filter(i => i.staff === int_id)
    //   const filteramount_Jully = filterdata_Jully.map(i => i.amount)
    //   const total_Jully = filteramount_Jully.reduce((a, b) => a + b, 0);
    //   setCMonth_revenue(prevState => [
    //     ...prevState.filter(item => item.month !== "Jully"), // "Jully" ko hatao agar already hai
    //     { month: "Jully", amount: total_Jully } // Naya object add karo
    //   ]);


    //   const filteredUsers_Aug = total_revenue_response.filter(
    //     (i) => i.month === "2025-08-01"
    //   );
    //   const data_Aug = filteredUsers_Aug.map(i => i.user)
    //   const filterdata_Aug = data_Aug[0].filter(i => i.staff === int_id)
    //   const filteramount_Aug = filterdata_Aug.map(i => i.amount)
    //   const total_Aug = filteramount_Aug.reduce((a, b) => a + b, 0);
    //   setCMonth_revenue(prevState => [
    //     ...prevState.filter(item => item.month !== "Aug"), // "Aug" ko hatao agar already hai
    //     { month: "Aug", amount: total_Aug } // Naya object add karo
    //   ]);


    //   const filteredUsers_Sept = total_revenue_response.filter(
    //     (i) => i.month === "2025-09-01"
    //   );
    //   const data_Sept = filteredUsers_Sept.map(i => i.user)
    //   const filterdata_Sept = data_Sept[0].filter(i => i.staff === int_id)
    //   const filteramount_Sept = filterdata_Sept.map(i => i.amount)
    //   const total_Sept = filteramount_Sept.reduce((a, b) => a + b, 0);
    //   setCMonth_revenue(prevState => [
    //     ...prevState.filter(item => item.month !== "Sept"), // "Sept" ko hatao agar already hai
    //     { month: "Sept", amount: total_Sept } // Naya object add karo
    //   ]);


    //   const filteredUsers_Oct = total_revenue_response.filter(
    //     (i) => i.month === "2025-10-01"
    //   );
    //   const data_Oct = filteredUsers_Oct.map(i => i.user)
    //   const filterdata_Oct = data_Oct[0].filter(i => i.staff === int_id)
    //   const filteramount_Oct = filterdata_Oct.map(i => i.amount)
    //   const total_Oct = filteramount_Oct.reduce((a, b) => a + b, 0);
    //   setCMonth_revenue(prevState => [
    //     ...prevState.filter(item => item.month !== "Oct"), // "Oct" ko hatao agar already hai
    //     { month: "Oct", amount: total_Oct } // Naya object add karo
    //   ]);

    //   const filteredUsers_Nov = total_revenue_response.filter(
    //     (i) => i.month === "2025-11-01"
    //   );
    //   const data_Nov = filteredUsers_Nov.map(i => i.user)
    //   const filterdata_Nov = data_Nov.filter(i => i.staff === int_id)
    //   const filteramount_Nov = filterdata_Nov.map(i => i.amount)
    //   const total_Nov = filteramount_Nov.reduce((a, b) => a + b, 0);
    //   setCMonth_revenue(prevState => [
    //     ...prevState.filter(item => item.month !== "Nov"), // "Nov" ko hatao agar already hai
    //     { month: "Nov", amount: total_Nov } // Naya object add karo
    //   ]);

    //   const filteredUsers_Dec = total_revenue_response.filter(
    //     (i) => i.month === "2025-12-01"
    //   );
    //   const data_Dec = filteredUsers_Dec.map(i => i.user)

    //   const filterdata_Dec = data_Dec.filter(i => i.staff === int_id)
    //   const filteramount_Dec = filterdata_Dec.map(i => i.amount)
    //   const total_Dec = filteramount_Dec.reduce((a, b) => a + b, 0);
    //   setCMonth_revenue(prevState => [
    //     ...prevState.filter(item => item.month !== "Dec"), // "Dec" ko hatao agar already hai
    //     { month: "Dec", amount: total_Dec } // Naya object add karo
    //   ]);
    // };



    // const todayMonth = new Date().toLocaleString('en-US', { month: 'long' });

    // const current_month = cmonth_revenue.filter(i => i.month === todayMonth)
    // console.log(current_month, '***** date ******')

    const filteredUsers_Jan = total_revenue_response.filter(
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


    const filteredUsers_feb = total_revenue_response.filter(
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

    const filteredUsers_march = total_revenue_response.filter(
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

    const filteredUsers_april = total_revenue_response.filter(
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


    const filteredUsers_may = total_revenue_response.filter(
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


    const filteredUsers_jun = total_revenue_response.filter(
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


    const filteredUsers_Jully = total_revenue_response.filter(
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




    const filteredUsers_Aug = total_revenue_response.filter(
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


    const filteredUsers_Sept = total_revenue_response.filter(
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


    const filteredUsers_Oct = total_revenue_response.filter(
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

    const filteredUsers_Nov = total_revenue_response.filter(
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

    const filteredUsers_Dec = total_revenue_response.filter(
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
  console.log(current_month, '**** current_month **')

  useEffect(() => {
    get();
  }, []);


  const blockstaff = async () => {
    const active = ({ active: 0 })
    console.log(active, '**** active *****')

    try {
      const response = await UserUpdate(int_id, active);
      if (response) {  // Ensure response is valid
        setStaff(response);
        message.success('Success');
      } else {
        message.error('Update failed!'); // Handle failure case
      }
    } catch (error) {
      console.error('Error updating staff:', error);
      message.error('Something went wrong!');
    }
  };

  const updatestaff = async (i) => {
    try {
      const response = await UserUpdate(int_id, i);
      if (response) {  // Ensure response is valid
        setStaff(response);
        message.success('Success');
      } else {
        message.error('Update failed!'); // Handle failure case
      }
    } catch (error) {
      console.error('Error updating staff:', error);
      message.error('Something went wrong!');
    }
  };

  const deletestaff = async () => {
    const response = await UserRemove(int_id);
    Navigate("/Staff_Details");
    message.success('success')
  };


  const log_out = () => {
    localStorage.clear()

    // localStorage.removeItem('user_id')
    Navigate('/Admin_Login')
  }



  return (
    <div>
      <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
        <Link to='/Home_Page_wLog'>
          <p style={{ fontSize: '30px', color: 'white', marginLeft: '20px', marginTop: '-1px' }}>Ristey</p>
        </Link>

        {admin_id ? (
          <Link to='/Admin_Panel'>
            <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1300px' }}>Profile</p>
          </Link>
        ) : (
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to='/User_Reg/885695'>
              <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1200px' }}>Sign Up</p>
            </Link>
            <Link to='/User_Login'>
              <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '30px' }}>Login</p>
            </Link>
          </div>
        )}
      </div>
      <div style={{ width: "180px", height: '680px', backgroundColor: 'white', position: 'fixed', marginTop: '50px' }}>
        <Link to='/Admin_Panel'>
          <Button
            style={{
              textAlign: "center",
              color: "black",
              borderRadius: "0px",
              width: "100%",
            }}

          >
            Dashboard
          </Button>
        </Link>
        <Link to='/Staff_Tables'>
          <Button
            style={{
              textAlign: "center",
              color: "black",
              borderRadius: "0px",
              width: "100%",
            }}
          >
            Staff
          </Button>
        </Link>
        <Link to='/User_Tables'>
          <Button
            style={{
              textAlign: "center",
              color: "black",
              borderRadius: "0px",
              width: "100%",
            }}
          >
            User
          </Button>
        </Link>
        <Link to='/Transaction'>
          <Button
            style={{
              textAlign: "center",
              color: "black",
              borderRadius: "0px",
              width: "100%",
            }}
          >
            Transaction
          </Button>
        </Link>
        <Link to='/Withdrawal'>
          <Button
            style={{
              textAlign: "center",
              color: "black",
              borderRadius: "0px",
              width: "100%",
            }}
          >
            Withdrawal
          </Button>
        </Link>
        <Link to='/Post_Commission'>
          <Button
            style={{
              textAlign: "center",
              color: "black",
              borderRadius: "0px",
              width: "100%",
            }}
          >
            Commisions
          </Button>
        </Link>
        <Button
          style={{
            textAlign: "center",
            color: "black",
            borderRadius: "0px",
            width: "100%",
          }}
          onClick={log_out}>
          Log Out
        </Button>
      </div>
      <div style={{ display: "flex", marginLeft: '200px', paddingTop: '70px' }}>
        <div style={{ width: "300px", height: "500px", borderRadius: '10px', backgroundColor: 'white', boxShadow: "1px 0.5px 4px gray" }}>
          <div>
            <div
              style={{
                border: "2px solid",
                width: "60%",
                textAlign: "center",
                marginLeft: "20%",
                height: "150px",
                borderRadius: "20px",
                marginTop: '10px'
              }}
            >
              <p style={{ textAlign: 'center', fontSize: '120px' }}><FaUser /></p>
            </div><br />
            <Form form={form} onFinish={updatestaff} style={{ marginLeft: '10px' }}>
              <Form.Item style={{ marginTop: "10px" }} name="username" label='Name'>
                <Input style={{ border: "none", marginLeft: '23px', width: '210px' }} />
              </Form.Item>
              <Form.Item style={{ marginTop: "-20px" }} name="password" label='Password'>
                <Input style={{ border: "none", marginLeft: '-1px', width: '210px' }} />
              </Form.Item>
              <Form.Item style={{ marginTop: "-20px" }} name="balance" label='Balance'>
                <Input style={{ border: "none", marginLeft: '12px', width: '210px' }} />
              </Form.Item>
              {/* <Form.Item style={{ marginTop: "-20px" }} name="disttrict" label='Disttrict'>
                <Input style={{ border: "none", marginLeft: '16px', width: '210px' }} />
              </Form.Item> */}
              <div
                style={{
                  display: "flex",
                  columnGap: "30px",
                  marginLeft: "10px",
                }}
              >
                <Form.Item>
                  <Button onClick={blockstaff}>Block</Button>
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit">Save</Button>
                </Form.Item>
                <Form.Item>
                  <Button onClick={deletestaff}>Delete</Button>
                </Form.Item>
              </div>
              {/* <p style={{fontSize:'22px',marginTop:'30px',marginLeft:'10px',color:'black'}}>Name : {i.username}</p>
                    <p style={{fontSize:'22px',marginTop:'10px',marginLeft:'10px',color:'black'}}>Balance : {i.balance}</p>
                    <p style={{fontSize:'22px',marginTop:'10px',marginLeft:'10px',color:'black'}}>Disttrict : {i.disttrict}</p>
                    <p style={{fontSize:'22px',marginTop:'10px',marginLeft:'10px',color:'black'}}>password : {i.password}</p> */}
            </Form>
          </div>
        </div>
        <div
          style={{
            // border: "2px solid",
            width: "280px",
            height: "170px",
            marginLeft: "50px",
            borderRadius: '5px',
            backgroundColor: 'white',
            boxShadow: "1px 0.5px 4px gray"
          }}
        >
          <p style={{ textAlign: 'center', fontSize: '40px' }}><FaUser /></p>
          <p style={{ textAlign: 'center', fontSize: '30px' }}>{userref.length}</p>
        </div>
        <div
          style={{
            // border: "2px solid",
            width: "280px",
            height: "170px",
            marginLeft: "50px",
            borderRadius: '5px',
            backgroundColor: 'white',
            boxShadow: "1px 0.5px 4px gray"
          }}
        >
          <p style={{ textAlign: 'center', fontSize: '40px' }}><FaRupeeSign /></p>
          <p style={{ textAlign: 'center', fontSize: '30px' }}>{current_month[0]?.amount || ""}</p>
          <p style={{ textAlign: 'center', fontSize: '30px' }}>{current_month[0]?.month || ""}</p>
        </div>
        {pop === null && (
          <div
            style={{
              // border: "2px solid",
              width: "280px",
              height: "170px",
              marginLeft: "50px",
              borderRadius: '5px',
              backgroundColor: 'white',
              boxShadow: "1px 0.5px 4px gray"
            }}
            onClick={() => setPop('pop')}
          >
            <p style={{ textAlign: 'center', fontSize: '40px', marginTop: '50px' }}><GrTransaction /></p>
          </div>
        )}

        {pop === 'pop' && (
          <div
            style={{
              // border: "2px solid",
              width: "280px",
              height: "170px",
              marginLeft: "50px",
              borderRadius: '5px',
              backgroundColor: 'white',
              boxShadow: "1px 0.5px 4px gray"
            }}
            onClick={() => setPop(null)}
          >
            <p style={{ textAlign: 'center', fontSize: '40px', marginTop: '50px' }}><VscGraph /></p>
          </div>
        )}

      </div>
      {pop === null && (
        <ResponsiveContainer width="80%" height={300} style={{ marginTop: '150px', marginLeft: '190px' }}>
          <BarChart data={cmonth_revenue} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8">
              <LabelList dataKey="amount" position="top" style={{ fontSize: '12px', fill: '#000' }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
      {pop === 'pop' && (
        <p style={{ marginTop: '-300px', marginLeft: '520px' }}><Staff_Transaction /></p>
      )}
    </div>
  );
}

export default Staff_Charts;


// import React from 'react'

// function Staff_Charts() {
//   return (
//     <div>Staff_Charts</div>
//   )
// }

// export default Staff_Charts