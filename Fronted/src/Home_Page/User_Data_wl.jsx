

////////////////////////////////////////////////////////////

import { IoSend } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { formatDistanceToNow, parse } from "date-fns";
import { Link } from "react-router-dom";
import { UserDataGetwt, UserImage_wt } from "../Api/CoreApi";
import "../Home_Page/User_Data_wl.css";

// import { UserDataGetwt, UserImage_wt } from "../Api/CoreApi";

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
import { useParams, useNavigate } from "react-router-dom";
import user_image from "../Assets/wedding1.jpg";

function User_data() {
  const Navigate = useNavigate()

  const id_param = useParams();
  const int_id = String(id_param.id);

  const id = localStorage.getItem("user_id");
  const baseurl = "http://127.0.0.1:8000/";

  const [data, setData] = useState([]); // male/Female filterd user
  console.log(data, "******** data ********");

  const user_get = async () => {
    if (id) {
      Navigate(`/User_Data/${int_id}`);
    }
    const response = await UserDataGetwt();
    const filter = response.filter((i) => i.User_id === int_id);
    setData(filter);

    const response_img = await UserImage_wt();
    const filter_img = response_img.filter((i) => i.User_id === int_id);
    setImage(filter_img);
  };

  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
  const year = today.getFullYear();
  // const formattedDate = `${year}-${month}-01`; // ✅ Corrected format (No extra quotes)

  const [activeTab, setActiveTab] = useState(null);
  const [image, setImage] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    user_get();
  }, []);

  const id_navigate = (value) => {
    console.log(value, "********* value *********");
    localStorage.setItem("id_navigate", value);
  };
  return (
    // <div>
    //   <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(7, 110, 148,1)', position: 'fixed', zIndex: '999', display: 'flex' }}>
    //     <Link to='/Home_Page_wLog'>
    //       <p style={{ fontSize: '30px', color: 'white', marginLeft: '20px', marginTop: '-1px' }}>Ristey</p>
    //     </Link>

    //     {id ? (
    //       <Link to='/User_panel'>
    //         <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1300px' }}>Profile</p>
    //       </Link>
    //     ) : (
    //       <div style={{ display: 'flex', gap: '20px' }}>
    //         <Link to='/User_Reg/885695'>
    //           <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '1200px' }}>Sign Up</p>
    //         </Link>
    //         <Link to='/User_Login'>
    //           <p style={{ fontSize: '15px', color: 'white', marginTop: '13px', marginLeft: '30px' }}>Login</p>
    //         </Link>
    //       </div>
    //     )}
    //   </div>
    //   <div style={{ paddingTop: "50px" }}>

    //     {data.map((i) => (
    //       <Card
    //         style={{ marginLeft: "280px", width: "1000px", height: '900px', marginTop: "10px" }}
    //       >
    //         <Image style={{ height: "280px", width: "940px" }} src={user_image} />

    //         <Card
    //           style={{
    //             // border: "2px solid",
    //             width: "200px",
    //             height: "200px",
    //             marginLeft: "100px",
    //             marginTop: "-80px",
    //             borderRadius: "50%",
    //             overflow: "hidden", // ensure image stays within the circle
    //             zIndex: "998",
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             paddingTop: '8px'
    //           }}
    //         >
    //           <img
    //             style={{
    //               // border:'2px solid',
    //               width: "190px",
    //               height: "190px",
    //               objectFit: "cover",
    //               borderRadius: "50%",
    //             }}
    //             src={`${baseurl}${i.pic}`}
    //             alt="profile"
    //           />
    //         </Card>
    //         <h2
    //           style={{
    //             marginTop: "-110px",
    //             marginLeft: "340px",
    //             fontSize: "25px",
    //           }}
    //         >
    //           {i.username}
    //         </h2>

    //         <div
    //           style={{
    //             display: "flex",
    //             marginLeft: "330px",
    //             columnGap: "20px",
    //             marginTop: "10px",
    //           }}
    //         >

    //           <a
    //             href={`https://wa.me/?text=${encodeURIComponent(`http://localhost:3000/User_data/${i.refer}`)}`}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             style={{
    //               fontSize: "28px",
    //               marginRight: "20px",
    //               cursor: "pointer",
    //               color: "black",
    //             }}
    //             onMouseEnter={(e) => (e.target.style.color = "#25D366")}
    //             onMouseLeave={(e) => (e.target.style.color = "black")}
    //           >
    //             <FaWhatsapp />
    //           </a>

    //           {/* Facebook */}
    //           <a
    //             href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`http://localhost:3000/User_data/${i.refer}`)}`}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             style={{
    //               fontSize: "28px",
    //               marginRight: "20px",
    //               cursor: "pointer",
    //               color: "black",
    //             }}
    //             onMouseEnter={(e) => (e.target.style.color = "#1877F2")}
    //             onMouseLeave={(e) => (e.target.style.color = "black")}
    //           >
    //             <FaFacebook />
    //           </a>

    //           {/* Instagram (No direct share, just profile or post link) */}
    //           <a
    //             href={`${i.instagram}/`}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             style={{
    //               fontSize: "28px",
    //               marginRight: "20px",
    //               cursor: "pointer",
    //               color: "black",
    //             }}
    //             onMouseEnter={(e) => (e.target.style.color = "#E4405F")}
    //             onMouseLeave={(e) => (e.target.style.color = "black")}
    //           >
    //             <FaInstagram />
    //           </a>

    //           {/* Twitter */}
    //           <a
    //             href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`http://localhost:3000/User_data/${i.refer}`)}&text=Check%20this%20out!`}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             style={{
    //               fontSize: "28px",
    //               marginRight: "20px",
    //               cursor: "pointer",
    //               color: "black",
    //             }}
    //             onMouseEnter={(e) => (e.target.style.color = "#1DA1F2")}
    //             onMouseLeave={(e) => (e.target.style.color = "black")}
    //           >
    //             <FaTwitter />
    //           </a>

    //         </div>

    //         <p style={{ marginTop: "-40px", marginLeft: "585px" }}>
    //           <Link to='/User_Login'><Button style={{ height: "33px", width: "100px" }} onClick={() => id_navigate(i.User_id)}>
    //             Login
    //           </Button></Link>
    //         </p>
    //         {/* )} */}

    //         {/* {"link":'https://www.google.com'} */}
    //         <Card style={{ marginTop: "60px", height: '350px' }}>
    //           <div
    //             style={{ columnGap: "10px", display: "flex", marginTop: "-25px" }}
    //           >
    //             <p>
    //               <Button
    //                 style={{ width: "100px", height: "40px", fontSize: "18px" }}
    //                 onClick={() => setActiveTab(null)}
    //               >
    //                 Gallary
    //               </Button>
    //             </p>

    //             <p>
    //               <Button
    //                 style={{ width: "100px", height: "40px", fontSize: "18px" }}
    //                 onClick={() => setActiveTab("profile")}
    //               >
    //                 Profile
    //               </Button>
    //             </p>
    //             <p>
    //               <Button
    //                 style={{ width: "135px", height: "40px", fontSize: "18px" }}
    //                 onClick={() => setActiveTab("family")}
    //               >
    //                 Family Details
    //               </Button>
    //             </p>
    //             <p>
    //               <Button
    //                 style={{ width: "135px", height: "40px", fontSize: "18px" }}
    //                 onClick={() => setActiveTab("address")}
    //               >
    //                 Address
    //               </Button>
    //             </p>
    //             <p>
    //               <Button
    //                 style={{ width: "135px", height: "40px", fontSize: "18px" }}
    //                 onClick={() => setActiveTab("contact")}
    //               >
    //                 Contact
    //               </Button>
    //             </p>
    //             <p>

    //             </p>
    //             <p>
    //               <Button
    //                 style={{ width: "110px", height: "40px", fontSize: "18px" }}
    //                 onClick={() => setActiveTab("education")}
    //               >
    //                 Educations
    //               </Button>
    //             </p>
    //           </div>
    //           {activeTab === null && (
    //             <div>
    //               {/* Image Grid */}
    //               <div
    //                 style={{
    //                   display: "flex",
    //                   flexWrap: "wrap",
    //                   columnGap: "10px",
    //                   rowGap: "10px",
    //                   paddingTop: "10px",
    //                 }}
    //               >
    //                 {image.map((i, index) => (
    //                   <div
    //                     key={index}
    //                     style={{ width: "calc(25% - 8px)", cursor: "pointer" }}
    //                     onClick={() => setPreviewImage(`${baseurl}${i.images}`)}
    //                   >
    //                     <p>
    //                       <img
    //                         style={{
    //                           height: "180px",
    //                           width: "100%",
    //                           objectFit: "cover",
    //                           borderRadius: "8px",
    //                         }}
    //                         src={`${baseurl}${i.images}`}
    //                         alt="Image"
    //                       />
    //                     </p>
    //                   </div>
    //                 ))}
    //               </div>

    //               {/* Image Preview Modal */}
    //               {previewImage && (
    //                 <div
    //                   style={{
    //                     position: "fixed",
    //                     top: 0,
    //                     left: 0,
    //                     width: "100%",
    //                     height: "100%",
    //                     background: "rgba(0, 0, 0, 0.8)",
    //                     display: "flex",
    //                     justifyContent: "center",
    //                     alignItems: "center",
    //                     zIndex: 1000,
    //                     flexDirection: "column",
    //                   }}
    //                 >
    //                   {/* Close Button (X) */}
    //                   <button
    //                     onClick={() => setPreviewImage(null)}
    //                     style={{
    //                       position: "absolute",
    //                       top: "20px",
    //                       right: "30px",
    //                       fontSize: "24px",
    //                       color: "white",
    //                       background: "transparent",
    //                       border: "none",
    //                       cursor: "pointer",
    //                     }}
    //                   >
    //                     ✖
    //                   </button>

    //                   {/* Enlarged Preview Image */}
    //                   <img
    //                     src={previewImage}
    //                     alt="Preview"
    //                     style={{
    //                       width: "min(100vw, 700px)", // Ensures it doesn't exceed 700px or 90% of viewport width
    //                       height: "min(100vh, 700px)", // Ensures it doesn't exceed 700px or 90% of viewport height
    //                       borderRadius: "5px",
    //                       boxShadow: "0 4px 16px rgba(255,255,255,0.3)",
    //                       objectFit: "contain",
    //                     }}
    //                   />
    //                 </div>
    //               )}
    //             </div>
    //           )}

    //           {activeTab === "profile" && (
    //             <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
    //               <div>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Name : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Caste : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Religion : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Date Of Birth : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Gender : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Age : </p>
    //               </div>
    //               <div style={{ marginLeft: '180px', marginTop: '-206px' }}>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.username}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.caste}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.religion}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.dob}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.gender}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.age}</p>
    //               </div>
    //               <div style={{ marginLeft: '380px', marginTop: '-207px' }}>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Marrige Status : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Job :  </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Job Type : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Salary : </p>

    //               </div>
    //               <div style={{ marginLeft: '580px', marginTop: '-138px' }}>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.marrige_status}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.job_title}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.job_type}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.salary}</p>

    //               </div>
    //             </div>
    //           )}

    //           {activeTab === "family" && (
    //             <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
    //               <div>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Father : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Mother : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Brothers : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Married : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Sisters : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Married : </p>
    //               </div>
    //               <div style={{ marginLeft: '180px', marginTop: '-206px' }}>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.father_name}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.mother_name}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.brother}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.brother_marrige}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.sister}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.sister_marrige}</p>
    //               </div>
    //             </div>
    //           )}
    //           {activeTab === "address" && (
    //             <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
    //               {i.user_apply.some((u) => u.suser_id === id) ? (
    //                 <>
    //                   <div>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>City/Town : </p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>District : </p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>State : </p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>Country : </p>
    //                   </div>
    //                   <div style={{ marginLeft: '180px', marginTop: '-137px' }}>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>{i.city}</p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>{i.disttrict}</p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>{i.state}</p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>{i.country}</p>
    //                   </div>
    //                 </>
    //               ) : (
    //                 <p>Need to Login</p>
    //               )}
    //             </div>
    //           )}

    //           {activeTab === "contact" && (
    //             <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
    //               {i.user_apply.some((u) => u.suser_id === id) ? (
    //                 <>
    //                   <div >
    //                     <p style={{ color: 'black', fontSize: '20px' }}>Phone : </p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>Email : </p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>Instagram : </p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>Facebook : </p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>Twitter : </p>

    //                   </div>
    //                   <div style={{ marginLeft: '180px', marginTop: '-171px' }}>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>{i.contact}</p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>{i.email}</p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>----</p>
    //                     <p style={{ color: 'black', fontSize: '20px' }}>----</p>
    //                   </div>
    //                 </>
    //               ) : (
    //                 <p>Need to Login</p>
    //               )}
    //             </div>
    //           )}

    //           {/* {activeTab === "kundli" && (
    //           <div>
    //             <Form onFinish={submit} initialValues={obj}>
    //               <Form.Item
    //                 label="City/Village"
    //                 name="city"
    //                 style={{ width: "500px", height: "5px" }}
    //                 // initialValue={User[0].city}
    //               >
    //                 <Input style={{}} />
    //               </Form.Item>
    //               <Form.Item
    //                 label="disttrict"
    //                 name="disttrict"
    //                 style={{ width: "500px", height: "5px" }}
    //                 // initialValue={User[0].disttrict}
    //               >
    //                 <Input style={{}} />
    //               </Form.Item>
    //               <Form.Item
    //                 label="state"
    //                 name="state"
    //                 style={{ width: "500px", height: "5px" }}
    //                 // initialValue={User[0].state}
    //               >
    //                 <Input style={{}} />
    //               </Form.Item>
    //               <Form.Item
    //                 label="country"
    //                 name="country"
    //                 style={{ width: "500px", height: "5px" }}
    //                 // initialValue={User[0].country}
    //               >
    //                 <Input style={{}} />
    //               </Form.Item>
    //               <Form.Item
    //                 label="full_address"
    //                 name="full_address"
    //                 style={{ width: "500px", height: "5px" }}
    //                 // initialValue={User[0].full_address}
    //               >
    //                 <Input style={{}} />
    //               </Form.Item>
    //               <Button htmlType="submit" style={{ marginLeft: "30%" }}>
    //                 Save
    //               </Button>
    //             </Form>
    //           </div>
    //         )} */}

    //           {activeTab === "education" && (
    //             <div style={{ marginTop: "20px", marginLeft: "20px", width: "80%" }}>
    //               <div >
    //                 <p style={{ color: 'black', fontSize: '20px' }}>Course : </p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>University : </p>
    //               </div>
    //               <div style={{ marginLeft: '180px', marginTop: '-67px' }}>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.course}</p>
    //                 <p style={{ color: 'black', fontSize: '20px' }}>{i.university}</p>

    //               </div>
    //             </div>
    //           )}
    //         </Card>
    //       </Card>
    //     ))}
    //   </div>
    // </div>

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
              <p className="header-auth-link-signup">Sign Up</p>
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
                  `http://localhost:3000/User_data/${i.User_id}`
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
                  `http://localhost:3000/User_data/${i.User_id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link facebook"
              >
                <FaFacebook />
              </a>

              {/* Instagram */}
              <a
                href={i.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link instagram"
              >
                <FaInstagram />
              </a>

              {/* Twitter */}
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  `http://localhost:3000/User_data/${i.User_id}`
                )}&text=Check%20this%20out!`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link twitter"
              >
                <FaTwitter />
              </a>

              {/* Call Button or Login Link */}
              {i.user_apply?.some((u) => u.suser_id === id) ? (
                <Button
                  onClick={() => (window.location.href = `tel:${i.contact}`)}
                  className="contact-button"
                >
                  <IoCall className="call-icon" />
                </Button>
              ) : (
                <Link to="/User_Login" className="login-link">
                  <Button style={{ height: "33px", width: "100px" }} onClick={() => id_navigate(i.User_id)}>
                    Login
                  </Button>
                </Link>
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

              {/* {activeTab === "profile" && (
                <div className="profile-details-container">
                  <div>
                    <p className="detail-label-column">Name : </p>
                    <p className="detail-value-column">{i.username}</p>
                    <p className="detail-label-column">Caste : </p>
                    <p className="detail-value-column">{i.caste}</p>
                    <p className="detail-label-column">Religion : </p>
                    <p className="detail-value-column">{i.religion}</p>
                    <p className="detail-label-column">Date Of Birth : </p>
                    <p className="detail-value-column">{i.dob}</p>
                    <p className="detail-label-column">Gender : </p>
                    <p className="detail-value-column">{i.gender}</p>
                    <p className="detail-label-column">Age : </p>
                    <p className="detail-value-column">{i.age}</p>
                  </div>
                  <div className="profile-details-right-column">
                    <p className="detail-label-column">Marrige Status : </p>
                    <p className="profile-details-right-value-column">
                      {i.marrige_status}
                    </p>
                    <p className="detail-label-column">Job : </p>
                    <p className="profile-details-right-value-column">
                      {i.job_title}
                    </p>
                    <p className="detail-label-column">Job Type : </p>
                    <p className="profile-details-right-value-column">
                      {i.job_type}
                    </p>
                    <p className="detail-label-column">Salary : </p>
                    <p className="profile-details-right-value-column">
                      {i.salary}
                    </p>
                  </div>
                </div>
              )} */}

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
  );
}

export default User_data;
