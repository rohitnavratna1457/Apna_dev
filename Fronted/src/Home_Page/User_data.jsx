

////////////////////////////////////////////////////////////

import { IoSend } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { formatDistanceToNow, parse } from "date-fns";
import { Link } from "react-router-dom";
import {
  UserGet,
  UserUpdate,
  UserImagesGet,
  UserData_Array_Update,
  UserDataGet,
  UserDataUpdate,
  PostChargesGet,
  UserTotalRevenuePost,
  StaffTotalRevenuePost,
  AdminTotalRevenuePost,
  DevTotalRevenuePost,
} from "../Api/CoreApi";
import { formatDistanceToNow as timeAgo } from "date-fns";
// import "../Home_Page/Home_Page.css";

import React, { useEffect, useState } from "react";
import { Card, Image, message, Button } from "antd";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { useParams } from "react-router-dom";
import user_image from "../Assets/wedding1.jpg";
import "../Home_Page/User_Data.css";

function User_data() {
  const id_param = useParams();
  const int_id = String(id_param.id);

  const ref_id = localStorage.getItem("ref");

  const id = localStorage.getItem("user_id");
  const baseurl = "http://127.0.0.1:8000/";

  const [User, setUser] = useState([]); // current user
  const [alluser, setAlluser] = useState([]); // all user
  const [data, setData] = useState([]); // male/Female filterd user
  const [admin, setAdmin] = useState([]); // admin
  const [staff_Json, setStaff_Json] = useState([]); // staff
  const [developer, setDeveloper] = useState([]); // developer
  const [charges, setCharges] = useState([]); // charges
  const [reload, setReload] = useState(0);

  console.log(data, "******** data ********");

  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
  const year = today.getFullYear();
  // const formattedDate = `${year}-${month}-01`; // ✅ Corrected format (No extra quotes)

  const [activeTab, setActiveTab] = useState(null);
  const [image, setImage] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  const iconStyle = {
    fontSize: "25px",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

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
    const filter_female = response_UserDataGet.filter(
      (i) => i.User_id === int_id
    );
    setData(filter_female);

    const response_PostCharges = await PostChargesGet();
    setCharges(response_PostCharges);

    const response_img = await UserImagesGet();
    const filter_img = response_img.filter((i) => i.user_id === int_id);
    setImage(filter_img);
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
    if (User[0].balance > 24) {
      message.success("success");
      const charges_amount = charges.map((i) => i.post_charges);
      const amount = parseInt(charges_amount);
      const user_amount = User[0].balance;

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
      console.log(alluser, "******** all user *********");

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

  const shareUrl = `http://127.0.0.1:8000/${ref_id}`;

  return (
    <>
      <div>
        <div className="header">
          <Link to="/Home_Page_wLog">
            <p className="header-title">Ristey</p>
          </Link>

          {id ? (
            <Link to="/User_panel">
              <p className="header-profile-link">Profile</p>
            </Link>
          ) : (
            <div className="header-auth-links">
              <Link to="/User_Reg/885695">
                <p className="header-auth-link signup">Sign Up</p>
              </Link>
              <Link to="/User_Login">
                <p className="header-auth-link login">Login</p>
              </Link>
            </div>
          )}
        </div>
        <div className="content-padding">
          {data.map((i) => (
            <Card className="user-card" key={i.User_id}>
              {/* <Image className="user-cover-image" src={user_image} />

              <div className="user-profile-pic-container">
                <img
                  className="user-profile-pic"
                  src={`${baseurl}${i.pic}`}
                  alt="profile"
                />

                </div> */}
              <Image
                className=""
                src={`${baseurl}${i.cover_img}`}
                style={{
                  overflow: "hidden",
                  width: "100%", // Responsive width
                  maxWidth: "900px", // Prevents it from exceeding a max size
                  height: "300px", // Maintain aspect ratio naturally
                  aspectRatio: "8 / 3", // Keeps similar proportions to 800x300
                  objectFit: "cover", // Crop nicely
                  display: "block", // Prevent inline spacing
                  margin: "0 auto", // Center the image
                  marginLeft: "35px",
                }}
              />

              <div className="profile-picture-wrapper">
                <img
                  className="profile-picture"
                  src={`${baseurl}${i.pic}`}
                  alt="Profile"
                />
              </div>
              <h2 className="user-username">{i.username}</h2>
              <div className="social-links">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `http://localhost:3000/User_Data_wl/${i.User_id}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link whatsapp"
                >
                  <FaWhatsapp />
                </a>

                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `http://localhost:3000/User_Data_wl/${i.User_id}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link facebook"
                >
                  <FaFacebook />
                </a>

                {/* Instagram (No direct share, just profile or post link) */}
                <a
                  href={`${i.instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link instagram"
                >
                  <FaInstagram />
                </a>

                {/* Twitter */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    `http://localhost:3000/User_Data_wl/${i.User_id}`
                  )}&text=Check%20this%20out!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link twitter"
                >
                  <FaTwitter />
                </a>

                {i.user_apply?.some((u) => u.suser_id === id) ? (
                  <p className="contact-button-container">
                    <Button
                      onClick={() =>
                        (window.location.href = `tel:${i.contact}`)
                      }
                      className="contact-button"
                    >
                      <IoCall className="call-icon" />
                    </Button>
                  </p>
                ) : (
                  <p className="contact-button-container">
                    <Button className="contact-button">
                      <IoSend
                        className="send-icon"
                        onClick={() => alert_popup(i)}
                      />
                    </Button>
                  </p>
                )}
              </div>
              <Card className="tab-card">
                <div className="tab-buttons-container">
                  <p>
                    <Button
                      className="tab-button"
                      onClick={() => setActiveTab(null)}
                    >
                      Gallary
                    </Button>
                  </p>
                  <p>
                    <Button
                      className="tab-button"
                      onClick={() => setActiveTab("profile")}
                    >
                      Profile
                    </Button>
                  </p>
                  <p>
                    <Button
                      className="tab-button family"
                      onClick={() => setActiveTab("family")}
                    >
                      Family Details
                    </Button>
                  </p>
                  <p>
                    <Button
                      className="tab-button address"
                      onClick={() => setActiveTab("address")}
                    >
                      Address
                    </Button>
                  </p>
                  <p>
                    <Button
                      className="tab-button contact"
                      onClick={() => setActiveTab("contact")}
                    >
                      Contact
                    </Button>
                  </p>
                  <p>
                    <Button
                      className="tab-button education"
                      onClick={() => setActiveTab("education")}
                    >
                      Educations
                    </Button>
                  </p>
                </div>
                {activeTab === null && (
                  <div>
                    {/* Image Grid */}
                    <div className="image-grid">
                      {image.map((img, index) => (
                        <div
                          key={index}
                          className="image-grid-item"
                          onClick={() =>
                            setPreviewImage(`${baseurl}${img.images}`)
                          }
                        >
                          <p>
                            <img src={`${baseurl}${img.images}`} alt="Image" />
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Image Preview Modal */}
                    {previewImage && (
                      <div className="image-preview-modal">
                        <button
                          className="image-preview-modal-close-button"
                          onClick={() => setPreviewImage(null)}
                        >
                          ✖
                        </button>
                        <img src={previewImage} alt="Preview" />
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "profile" && (
                  <div className="profile-details-grid">
                    <div className="detail-item">
                      <p className="detail-label">Name:</p>
                      <p className="detail-value">{i.username}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Caste:</p>
                      <p className="detail-value">{i.caste}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Religion:</p>
                      <p className="detail-value">{i.religion}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Date of Birth:</p>
                      <p className="detail-value">{i.dob}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Gender:</p>
                      <p className="detail-value">{i.gender}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Age:</p>
                      <p className="detail-value">{i.age}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Marital Status:</p>
                      <p className="detail-value">{i.marrige_status}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Job:</p>
                      <p className="detail-value">{i.job_title}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Job Type:</p>
                      <p className="detail-value">{i.job_type}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Salary:</p>
                      <p className="detail-value">{i.salary}</p>
                    </div>
                  </div>
                )}

                {activeTab === "family" && (
                  <div className="profile-details-grid">
                    <div className="detail-item">
                      <p className="detail-label">Father</p>
                      <p className="detail-value">{i.father_name}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Mother</p>
                      <p className="detail-value">{i.mother_name}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Brothers</p>
                      <p className="detail-value">{i.brother}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Married Brothers</p>
                      <p className="detail-value">{i.brother_marrige}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Sisters</p>
                      <p className="detail-value">{i.sister}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">Married Sisters</p>
                      <p className="detail-value">{i.sister_marrige}</p>
                    </div>
                  </div>
                )}

                {activeTab === "address" &&
                  (i.user_apply?.some((u) => u.suser_id === id) ? (
                    <div className="profile-details-grid">
                      <div className="detail-item">
                        <p className="detail-label">City/Town</p>
                        <p className="detail-value">{i.city}</p>
                      </div>
                      <div className="detail-item">
                        <p className="detail-label">District</p>
                        <p className="detail-value">{i.district}</p>
                      </div>
                      <div className="detail-item">
                        <p className="detail-label">State</p>
                        <p className="detail-value">{i.state}</p>
                      </div>
                      <div className="detail-item">
                        <p className="detail-label">Country</p>
                        <p className="detail-value">{i.country}</p>
                      </div>
                    </div>
                  ) : (
                    <p>Need to apply</p>
                  ))}

                {activeTab === "contact" &&
                  (i.user_apply?.some((u) => u.suser_id === id) ? (
                    <div className="profile-details-grid">
                      <div className="detail-item">
                        <p className="detail-label">Phone</p>
                        <p className="detail-value">{i.contact}</p>
                      </div>
                      <div className="detail-item">
                        <p className="detail-label">Email</p>
                        <p className="detail-value">{i.email}</p>
                      </div>
                      <div className="detail-item">
                        <p className="detail-label">Instagram</p>
                        <p className="detail-value">----</p>
                      </div>
                      <div className="detail-item">
                        <p className="detail-label">Facebook</p>
                        <p className="detail-value">----</p>
                      </div>
                      <div className="detail-item">
                        <p className="detail-label">Twitter</p>
                        <p className="detail-value">----</p>
                      </div>
                    </div>
                  ) : (
                    <p>Need to apply</p>
                  ))}

                {activeTab === "education" && (
                  <div className="profile-details-grid">
                    <div className="detail-item">
                      <p className="detail-label">Course</p>
                      <p className="detail-value">{i.course}</p>
                    </div>
                    <div className="detail-item">
                      <p className="detail-label">University</p>
                      <p className="detail-value">{i.university}</p>
                    </div>
                  </div>
                )}
              </Card>
            </Card>
          ))}
        </div>
      </div>

      {/* footer section after login */}
      <footer
        style={{
          backgroundColor: "#2c2c2c",
          padding: "15px 10px",
          textAlign: "center",
          // position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <p
          style={{
            color: "#fff",
            fontSize: "14px",
            margin: 0,
          }}
        >
          All Rights Reserved -{" "}
          <a
            href="#"
            style={{
              color: "#88b0f4",
              textDecoration: "none",
            }}
          >
            MatrimonialsIndia
          </a>{" "}
          (2025-2026)
        </p>
      </footer>
    </>
  );
}

export default User_data;
