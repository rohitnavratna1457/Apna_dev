import React, { useEffect, useState } from "react";
import { Button, Card, message, Pagination } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Home_Page_Log.css";

import {
  UserGet,
  UserUpdate,
  UserData_Array_Update,
  UserDataGet,
  UserDataUpdate,
  PostChargesGet,
  UserTotalRevenuePost,
  StaffTotalRevenuePost,
  DevTotalRevenuePost,
  AdminTotalRevenuePost,
} from "../Api/CoreApi";
import { formatDistanceToNow as timeAgo } from "date-fns";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineWork } from "react-icons/md";

function Home_Page_Log() {
  const id = localStorage.getItem("user_id");
  const baseurl = "http://127.0.0.1:8000/";

  const [user, setUser] = useState([]); // current user
  const [alluser, setAlluser] = useState([]); // all user
  const [data, setData] = useState([]); // male/Female filterd user
  const [admin, setAdmin] = useState([]); // admin
  const [staff_Json, setStaff_Json] = useState([]); // staff
  const [developer, setDeveloper] = useState([]); // developer
  const [charges, setCharges] = useState([]); // charges
  const [reload, setReload] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 12;

  console.log(user, "**** user ******");
  console.log(data, "**** data ******");

  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
  const year = today.getFullYear();
  // const formattedDate = `${year}-${month}-01`; // ✅ Corrected format (No extra quotes)

  const user_get = async () => {
    const response = await UserGet();

    const alluser_filter = response.filter((i) => i.role === "user");
    setAlluser(alluser_filter);

    const admin_filter = response.filter((i) => i.role === "admin");
    setAdmin(admin_filter);

    const staff_filter = response.filter((i) => i.role === "staff");
    setStaff_Json(staff_filter);

    const developer_filter = response.filter((i) => i.role === "developer");
    setDeveloper(developer_filter);

    const current_user = response.filter((i) => i.id === id);
    setUser(current_user); // current

    const response_UserDataGet = await UserDataGet();
    console.log(response_UserDataGet, "****** response_UserDataGet *******8");
    const user_caste = current_user.map((i) => i.caste);
    const user_caste_str = String(user_caste);
    console.log(user_caste, "***** user_caste *****");
    const user_geder = current_user.map((i) => i.gender);
    const user_geder_str = String(user_geder);
    // console.log(user_geder_str,'* user_geder_str *****')
    // const user_caste = current_user.map(i=>i.caste)
    console.log(user_geder_str, "***** user_geder_str ***");
    if (user_geder_str == "Male") {
      const filter_female = response_UserDataGet.filter(
        (i) => i.gender === "Female" && i.caste === user_caste_str
      );
      console.log(filter_female, "******** filter_female ********");

      setData(filter_female);
    } else {
      const filter_male = response_UserDataGet.filter(
        (i) => i.gender === "Male" && i.caste === user_caste_str
      );

      setData(filter_male);
    }

    const response_PostCharges = await PostChargesGet();
    setCharges(response_PostCharges);
  };

  useEffect(() => {
    user_get();
  }, [reload]);

  const alert_popup = (i) => {
    if (window.confirm("Are you sure?")) {
      distribute(i);
    }
  };

  const distribute = async (value) => {
    const data_id = value.User_id;
    const today = new Date().toLocaleDateString();
    if (user[0].balance > 24) {
      message.success("success");
      const charges_amount = charges.map((i) => i.post_charges);
      const amount = parseInt(charges_amount);
      const user_amount = user[0].balance;

      const commision = charges.map((i) => i.staff_commission);

      const reduce_balance = parseInt(user_amount) - parseInt(amount); // send user API
      const fix_user_amount = { balance: reduce_balance };

      const response1 = await UserUpdate(id, fix_user_amount);

      console.log(
        response1,
        "****** (1) user_reduce_balance Main okkkkkkk ******"
      ); // ok
      const current_admin = response1.filter((i) => i.role === "admin");
      const current_staff = response1.filter((i) => i.role === "staff");
      const current_dev = response1.filter((i) => i.role === "developer");
      const current_user = response1.filter((i) => i.id === id);
      setAdmin(current_admin);
      setStaff_Json(current_staff);
      setDeveloper(current_dev);
      setAlluser(response1);
      setUser(current_user);

      const plateform_charge = (amount * 2) / 100; // plateform charge $2 = $98
      const after_pateform_charge = amount - plateform_charge;

      const staffCommision =
        (parseInt(after_pateform_charge) * parseInt(commision)) / 100; // send Staff 98 ka 15% = 14.7 == 83.3
      const staff_Commision = parseInt(staffCommision);

      //////////////////////////////// Staff Commossion ////////////////////////////////////////////

      const filter_staff = staff_Json.filter((i) => i.refer === value.ref);

      const str = filter_staff.map((i) => i.id);
      const staff_id = String(str);
      if (filter_staff.length === 1) {
        const staff_balance = filter_staff.map((i) => i.balance);
        const add = parseInt(staff_Commision) + parseInt(staff_balance); // send Staff API 14
        const fix_staff_amount = { balance: add };

        const response2 = await UserUpdate(staff_id, fix_staff_amount);
        console.log(
          response2,
          "***** (2) refer_staff_commission okkkkk ******"
        ); // ok
        const current_admin = response2.filter((i) => i.role === "admin");
        const current_staff = response2.filter((i) => i.role === "staff");
        const current_dev = response2.filter((i) => i.role === "developer");
        const current_user = response2.filter((i) => i.id === id);
        setAdmin(current_admin);
        setStaff_Json(current_staff);
        setDeveloper(current_dev);
        setAlluser(response2);
        setUser(current_user);

        value.user_apply.push({
          suser_id: id,
          // ruser_id: data_id,
          // amount: amount,
          // date: today,
          // staff_id: staff_id,
        });
        delete value.pic;
        delete value.cover_img;

        const response3 = await UserData_Array_Update(data_id, value);
        setData(response3);
        console.log(
          response3,
          "****** (2,1) User_Array_Staff_commisssion okkkkk *******"
        );

        const staffrev = {
          suser_id: id,
          ruser_id: data_id,
          staff_amount: staff_Commision,
          total_amount: amount,
          date: today,
          month: month,
          staff_id: staff_id,
        };

        const adminresponse5 = await StaffTotalRevenuePost(staffrev);
        console.log(adminresponse5, "****** Stafftotal revenue okkkkk *******");
      }

      ///////////////////////////// Developer ////////////////////////////////

      const after_staff_Commision =
        parseInt(after_pateform_charge) - parseInt(staff_Commision); // 83.3

      const int_dev_commision = (after_staff_Commision * 15) / 100; // send developer  12
      const dev_commision = parseInt(int_dev_commision);
      const dev_id = developer.map((i) => i.id);
      const developer_id = String(dev_id);

      const developer_balance = developer.map((i) => i.balance);
      const add_developer_balance =
        parseInt(developer_balance) + parseInt(dev_commision);
      const fix_developer_amount = { balance: add_developer_balance };

      const response3 = await UserUpdate(developer_id, fix_developer_amount);
      const current_admin3 = response3.filter((i) => i.role === "admin");
      const current_staff3 = response3.filter((i) => i.role === "staff");
      const current_dev3 = response3.filter((i) => i.role === "developer");
      const current_user3 = response3.filter((i) => i.id === id);
      setAdmin(current_admin3);
      setStaff_Json(current_staff3);
      setDeveloper(current_dev3);
      setAlluser(response3);
      setUser(current_user3);
      console.log(response3, "***** (3) Dev_commission Main okkkkkk ******"); // ok

      ////////////////// DevTotalRevenue //////////////////////////

      const devrev = {
        suser_id: id,
        ruser_id: data_id,
        dev_amount: dev_commision,
        total_amount: amount,
        date: today,
        month: month,
        dev_id: developer_id,
      };

      const devresponse5 = await DevTotalRevenuePost(devrev);

      console.log(devresponse5, "****** devtotal revenue okkkkk *******");

      const filter_Dev = developer.filter((i) => i.refer === value.ref);
      if (filter_Dev.length === 1) {
        const parse_add =
          parseInt(staff_Commision) + parseInt(add_developer_balance); // send Dev API 14
        const add = parseInt(parse_add);
        const fix_Dev_amount = { balance: add };

        const response4 = await UserUpdate(developer_id, fix_Dev_amount);
        const current_admin4 = response4.filter((i) => i.role === "admin");
        const current_staff4 = response4.filter((i) => i.role === "staff");
        const current_dev4 = response4.filter((i) => i.role === "developer");
        const current_user4 = response4.filter((i) => i.id === id);
        setAdmin(current_admin4);
        setStaff_Json(current_staff4);
        setDeveloper(current_dev4);
        setAlluser(response4);
        setUser(current_user4);
        console.log(response4, "***** (3,1) refer_Dev_commission ******"); // ok

        value.user_apply.push({
          suser_id: id,
          // ruser_id: data_id,
          // amount: amount,
          // date: today,
          // dev_id: developer_id,
        });
        delete value.pic;

        const response5 = await UserData_Array_Update(data_id, value);
        setData(response5);
        console.log(
          response5,
          "***** (3,2) UserData_Array_Update_Dev_commission /////  okkkkk ******"
        ); // ok

        const devrev = {
          suser_id: id,
          ruser_id: data_id,
          dev_amount: dev_commision,
          total_amount: amount,
          date: today,
          month: month,
          dev_id: developer_id,
        };

        const devresponse5 = await DevTotalRevenuePost(devrev);
        console.log(devresponse5, "****** devtotal revenue okkkkk *******");
      }

      //////////////////////// Admin Commission ///////////////////////////////

      const admincommision = after_staff_Commision - dev_commision; // send admin 71
      const admin_commision = parseInt(admincommision);
      const admin_scom_adcom = admin_commision + staff_Commision;
      const adminid = admin.map((i) => i.id);
      const admin_id = String(adminid);
      const Admin_balance = admin.map((i) => i.balance);
      const add_Admin_balance =
        parseInt(Admin_balance) + parseInt(admin_commision);
      const fix_admin_amount = { balance: add_Admin_balance };

      const response6 = await UserUpdate(admin_id, fix_admin_amount);
      const current_admin6 = response6.filter((i) => i.role === "admin");
      const current_staff6 = response6.filter((i) => i.role === "staff");
      const current_dev6 = response6.filter((i) => i.role === "developer");
      const current_user6 = response6.filter((i) => i.id === id);
      setAdmin(current_admin6);
      setStaff_Json(current_staff6);
      setDeveloper(current_dev6);
      setAlluser(response6);
      setUser(current_user6);
      console.log(response6, "***** (4) Admin_Commission Main ////// *****"); // ok

      const filter_admin = admin.filter(
        (i) => i.refer === value.ref && i.role === "admin"
      );
      if (filter_admin.length === 1) {
        const parse_add =
          parseInt(staff_Commision) + parseInt(add_Admin_balance); // send Dev API 14
        const add = parseInt(parse_add);
        const fix_admin_amount = { balance: add };

        const response7 = await UserUpdate(admin_id, fix_admin_amount);
        // const admin_filter = response7.filter(i => i.role === 'admin')
        const current_admin7 = response7.filter((i) => i.role === "admin");
        const current_staff7 = response7.filter((i) => i.role === "staff");
        const current_dev7 = response7.filter((i) => i.role === "developer");
        const current_user7 = response7.filter((i) => i.id === id);
        setAdmin(current_admin7);
        setStaff_Json(current_staff7);
        setDeveloper(current_dev7);
        setAlluser(response7);
        setUser(current_user7);
        console.log(response7, "***** (4,1) refer_Admin_Commission ******"); // ok

        value.user_apply.push({
          suser_id: id,
          // ruser_id: data_id,
          // amount: amount,
          // date: today,
          // admin_id: admin_id,
        });
        delete value.pic;

        const response8 = await UserData_Array_Update(data_id, value);
        console.log(
          response8,
          "***** (4,1) UserData_Array_Update_Admin_Commission ******"
        ); // ok
        setData(response8);

        const adminrev = {
          suser_id: id,
          ruser_id: data_id,
          admin_amount: admin_scom_adcom,
          total_amount: amount,
          date: today,
          month: month,
          admin_id: admin_id,
        };

        const adminresponse11 = await AdminTotalRevenuePost(adminrev);
        console.log(
          adminresponse11,
          "****** (5,3) Admintotal revenue okkkkkkk *******"
        );
      } else {
        const adminrev = {
          suser_id: id,
          ruser_id: data_id,
          admin_amount: admin_commision,
          total_amount: amount,
          date: today,
          month: month,
          admin_id: admin_id,
        };

        const adminresponse11 = await AdminTotalRevenuePost(adminrev);
        console.log(
          adminresponse11,
          "****** (5,3) Admintotal revenue okkkkkkk *******"
        );
      }

      const filter_user = alluser.filter(
        (i) => i.refer === value.ref && i.role === "user"
      );
      console.log(filter_user, "******** all user *********");

      const alluser__id = filter_user.map((i) => i.id);
      const alluser_id = String(alluser__id);
      const filter_user_balance = filter_user.map((i) => i.balance);

      const alluser_balance = parseInt(filter_user_balance);
      if (filter_user.length === 1) {
        const add = parseInt(staff_Commision) + parseInt(alluser_balance); // send Dev API 14
        const fix_user_amount = { balance: add };
        console.log(fix_user_amount, "******* fix_user_amount *******");
        const response9 = await UserUpdate(alluser_id, fix_user_amount);
        console.log(
          response9,
          "***** (5) refer_User_commission Okkkkkkkkk ******"
        ); // ok
        const current_admin9 = response9.filter((i) => i.role === "admin");
        const current_staff9 = response9.filter((i) => i.role === "staff");
        const current_dev9 = response9.filter((i) => i.role === "developer");
        const current_user9 = response9.filter((i) => i.id === id);
        setAdmin(current_admin9);
        setStaff_Json(current_staff9);
        setDeveloper(current_dev9);
        setAlluser(response9);
        setUser(current_user9);

        value.user_apply.push({
          suser_id: id,
          // ruser_id: data_id,
          // amount: amount,
          // date: today,
          // user_id: alluser_id,
        });
        delete value.pic;

        const response10 = await UserData_Array_Update(data_id, value);
        setData(response10);

        console.log(
          response10,
          "***** (5,1) UserData_Array_Update_User_commission Okkkkkkkkk *****"
        );

        const userrev = {
          suser_id: id,
          ruser_id: data_id,
          user_amount: staff_Commision,
          total_amount: amount,
          date: today,
          month: month,
          user_id: alluser_id,
        };

        const userresponse11 = await UserTotalRevenuePost(userrev);
        console.log(
          userresponse11,
          "****** (5,3) Admintotal revenue okkkkkkk *******"
        );
      }

      // setReload(1);
    } else {
      message.error("need to aad balance");
      setReload(1);
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine grid columns based on width
  let gridColumns = "repeat(4, 1fr)";
  if (windowWidth <= 600) {
    gridColumns = "1fr";
  } else if (windowWidth <= 1024) {
    gridColumns = "repeat(2, 1fr)";
  }

  // Responsive margins for header links
  let profileMarginLeft =
    windowWidth > 1300 ? "1300px" : windowWidth > 900 ? "800px" : "20px";
  let signUpMarginLeft =
    windowWidth > 1200 ? "1200px" : windowWidth > 900 ? "700px" : "20px";

  // Slice data for current page
  const currentData = data.slice(
    (currentPage - 1) * profilesPerPage,
    currentPage * profilesPerPage
  );
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "50px",
          background: "#1976d2", // Fixed: needs to be a string
          position: "fixed",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <Link to="/Home_Page_wLog">
          <p
            style={{
              fontSize: "30px",
              color: "white",
              margin: 0,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Ristey
          </p>
        </Link>

        {id ? (
          <Link to="/User_panel">
            <p
              style={{
                fontSize: "15px",
                color: "white",
                margin: 0,
                cursor: "pointer",
              }}
            >
              Profile
            </p>
          </Link>
        ) : (
          <div style={{ display: "flex", gap: "30px" }}>
            <Link to="/User_Reg/885695">
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  margin: 0,
                  cursor: "pointer",
                }}
              >
                Sign Up
              </p>
            </Link>
            <Link to="/User_Login">
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  margin: 0,
                  cursor: "pointer",
                }}
              >
                Login
              </p>
            </Link>
          </div>
        )}
      </div>

      {/*  */}

      <div style={{ paddingTop: "60px" }}>
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#333",
              marginTop: "20px",
            }}
          >
            Matching profile
          </h1>
        </div>

        <div
          style={{
            height: "80px",
            display: "flex",
            justifyContent: "center",
            marginLeft: windowWidth > 300 ? "300px" : "20px",
          }}
        ></div>

        <div style={{ paddingBottom: "40px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: gridColumns,
              gap: "20px",
              maxWidth: "1700px",
              margin: "0 auto",
              padding: "0 15px",
              boxSizing: "border-box",
            }}
          >
            {currentData.map((i) => (
              <div
                key={i.User_id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "1px 0.5px 6px rgba(0,0,0,0.2)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <Link
                  to={`/User_data/${i.User_id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                    display: "flex",
                    gap: "15px",
                    flexDirection: windowWidth < 600 ? "column" : "row",
                    alignItems: windowWidth < 600 ? "center" : "flex-start",
                  }}
                >
                  <img
                    src={`${baseurl}${i.pic}`}
                    alt={i.firstname ? `${i.firstname}'s pic` : "User pic"}
                    style={{
                      width: "170px",
                      height: "240px",
                      marginTop: "10px",
                      borderRadius: "10px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "6px",
                      marginTop: windowWidth < 600 ? "10px" : "0",
                      textAlign: windowWidth < 600 ? "center" : "left",
                    }}
                  >
                    <p style={{ margin: 0, fontSize: "24px", color: "#222" }}>
                      {i.firstname}  
                    </p>
                    <p style={{ margin: 0, fontSize: "16px", color: "#555" }}>
                      Age: {i.age}
                    </p>
                    <p style={{ margin: 0, fontSize: "16px", color: "#555" }}>
                      {i.religion}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "16px",
                        color: "#555",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        justifyContent:
                          windowWidth < 600 ? "center" : "flex-start",
                      }}
                    >
                      <PiStudentFill style={{ fontSize: "18px" }} />
                      {i.course}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "16px",
                        color: "#555",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        justifyContent:
                          windowWidth < 600 ? "center" : "flex-start",
                      }}
                    >
                      <MdOutlineWork style={{ fontSize: "18px" }} />
                      {i.job_title}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "16px",
                        color: "#555",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        justifyContent:
                          windowWidth < 600 ? "center" : "flex-start",
                      }}
                    >
                      <FaLocationDot style={{ fontSize: "18px" }} />
                      {i.disttrict}
                    </p>
                    <p
                      style={{
                        marginTop: "8px",
                        fontSize: "14px",
                        color: "gray",
                        textAlign: windowWidth < 600 ? "center" : "left",
                      }}
                    >
                      {i.create_date && !isNaN(new Date(i.create_date))
                        ? timeAgo(new Date(i.create_date), {
                            addSuffix: true,
                          }).replace("about ", "")
                        : "Invalid date"}
                    </p>
                  </div>
                </Link>

                <div
                  style={{
                    marginTop: "15px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "10px",
                  }}
                >
                  {i.user_apply?.some((u) => u.suser_id === id) ? (
                    <button
                      onClick={() =>
                        (window.location.href = `tel:${i.contact}`)
                      }
                      style={{
                        height: "36px",
                        width: "110px",
                        cursor: "pointer",
                      }}
                    >
                      <IoCall style={{ fontSize: "18px" }} />
                      Call
                    </button>
                  ) : (
                    <button
                      onClick={() => alert_popup(i)}
                      style={{
                        height: "36px",
                        width: "110px",
                        cursor: "pointer",
                      }}
                    >
                      <IoSend style={{ fontSize: "22px" }} />
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Ant Design Pagination */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                gridColumn: "1 / -1",
              }}
            >
              <Pagination
                current={currentPage}
                pageSize={profilesPerPage}
                total={data.length}
                onChange={(page) => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_Page_Log;
