// // // // import React, { useEffect, useState } from 'react'
// // // // import { Form, Input, Button, Card } from 'antd';
// // // // import { FaIndianRupeeSign } from "react-icons/fa6";

// // // // function User_Profile() {
// // // //     const [activeTab, setActiveTab] = useState('education');

// // // //     const User = [{
// // // //         "id": 1,
// // // //         "username": "Neha Vishvakarma",
// // // //         "caste": "Garg",
// // // //         "gender": "Female",
// // // //         "age": 21,
// // // //         "password": "123",
// // // //         "qualifications": "graduate",
// // // //         "family": [{ "mother": "yes", "mother_name": "mummy" }, { "father": "yes", "father_name": "papa" }, { "brother": "brother_name" }, { "sister": "sister_name" }],
// // // //         "kundli": "manglik",
// // // //         "job": "yes",
// // // //         "IaActive": "1",
// // // //         "balance": 100,
// // // //         "city": "Raipur",
// // // //         "Village": "Raipur",
// // // //         "disttrict": "Raipur",
// // // //         "state": "C.G.",
// // // //         "country": "india",
// // // //         "full_address": "Raipur",

// // // //         image: 'https://photosgreet.com/wp-content/uploads/ddd5e16d0fa25d3c110b9d95c2530224.jpg'
// // // //     }]

// // // //     const submit = (value) => {
// // // //         console.log(value, '**** value ******')

// // // //     }
// // // //     return (
// // // //         <div style={{ paddingTop: '70px' }}>
// // // //             <div>
// // // //                 <Card style={{ width: '200px', height: '100%', boxShadow: '1px 0.5px 4px gray', position: 'fixed',marginTop:'-10px' }}>
// // // //                     <p style={{ textAlign: 'center', fontSize: '18px', width: '190px', marginLeft: '-20px' }}>Home</p>
// // // //                     <p style={{ textAlign: 'center', fontSize: '18px', width: '190px', marginLeft: '-20px' }}>Profile</p>
// // // //                     <p style={{ textAlign: 'center', fontSize: '18px', width: '190px', marginLeft: '-20px' }}>Partner</p>
// // // //                     <p style={{ textAlign: 'center', fontSize: '18px', width: '190px', marginLeft: '-20px' }}>Amount</p>
// // // //                     <p style={{ textAlign: 'center', fontSize: '18px', width: '190px', marginLeft: '-20px' }}>Transactions</p>
// // // //                     <p style={{ textAlign: 'center', fontSize: '18px', width: '190px', marginLeft: '-20px' }}>About Us</p>
// // // //                     <p style={{ textAlign: 'center', fontSize: '18px', width: '190px', marginLeft: '-20px' }}>Contact Us</p>
// // // //                     <p style={{ textAlign: 'center', fontSize: '18px', width: '190px', marginLeft: '-20px' }}>Privacy Policy</p>
// // // //                     <p style={{ textAlign: 'center', fontSize: '18px', width: '190px', marginLeft: '-20px' }}>Logout</p>
// // // //                 </Card>
// // // //                 {User.map(i => (
// // // //                     <div>
// // // //                         <p style={{ marginTop: '-22px', position: 'fixed', marginLeft: '89.5%', fontSize: '16px', zIndex: '9999' }}><FaIndianRupeeSign /></p>
// // // //                         <p style={{ marginTop: '-25px', position: 'fixed', marginLeft: '91%', fontSize: '17px', zIndex: '9999' }}>{i.balance}</p>
// // // //                     </div>
// // // //                 ))}
// // // //             </div>
// // // //             <Card style={{ marginLeft: '300px', width: '1300px',marginTop:'10px' }}>
// // // //                 <img style={{ height: '250px', width: '100%' }} src='https://photosgreet.com/wp-content/uploads/ddd5e16d0fa25d3c110b9d95c2530224.jpg' />

// // // //                 {/* <Card style={{ marginTop:'-100px',marginLeft: '30px', width: '300px', display: 'flex',height:'100px',borderRadius:'50px' }}>
// // // //                     <p><img style={{ width: '100px', height: '100px', borderRadius: '50px' }} src='https://photosgreet.com/wp-content/uploads/ddd5e16d0fa25d3c110b9d95c2530224.jpg' /></p>
// // // //                     <h2 style={{ marginTop: '30px',marginLeft:'10px' }}>Naincy Garg</h2>
// // // //                 </Card> */}

// // // //                 <Card style={{ border: '2px solid', width: '200px', marginLeft: '100px', height: '200px', marginTop: '-80px', borderRadius: '50%', zIndex: '999' }}>
// // // //                     <img style={{ marginLeft: '-20px', width: '190px', height: '190px', borderRadius: '50%', marginTop: '-21px' }} src='https://photosgreet.com/wp-content/uploads/ddd5e16d0fa25d3c110b9d95c2530224.jpg' />
// // // //                 </Card>
// // // //                 <h2 style={{ marginTop: '-120px', marginLeft: '340px', fontSize: '25px' }}>Naincy Garg</h2>

// // // //                 <Card style={{ marginTop: '100px' }}>
// // // //                     <div style={{ columnGap: '20px', display: 'flex', marginTop: '-25px' }}>
// // // //                         <p><Button style={{ width: '100px', height: '40px', fontSize: '18px' }} onClick={() => setActiveTab(null)}>Profile</Button></p>
// // // //                         <p><Button style={{ width: '135px', height: '40px', fontSize: '18px' }} onClick={() => setActiveTab("family")}>Family Details</Button></p>
// // // //                         <p><Button style={{ width: '135px', height: '40px', fontSize: '18px' }} onClick={() => setActiveTab("address")}>Address Detail</Button></p>
// // // //                         <p><Button style={{ width: '100px', height: '40px', fontSize: '18px' }} onClick={() => setActiveTab("kundli")}>Kundli</Button></p>
// // // //                         <p><Button style={{ width: '110px', height: '40px', fontSize: '18px' }} onClick={() => setActiveTab("education")}>Educations</Button></p>
// // // //                     </div>
// // // //                     {activeTab === null && (
// // // //                         <div>
// // // //                             <Form onFinish={submit} initialValues={User[0]}>
// // // //                                 <Form.Item label='Name' name='username' style={{ width: '500px', height: '5px' }}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='Caste' name='caste' style={{ width: '500px', height: '5px' }}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='Age' name='age' style={{ width: '500px', height: '5px' }}>
// // // //                                     <Input type='number' style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='Gender' name='gender' style={{ width: '500px', height: '5px' }}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Button htmlType='submit' style={{ marginLeft: '30%' }}>Save</Button>
// // // //                             </Form>
// // // //                         </div>
// // // //                     )}
// // // //                     {activeTab === 'family' && (
// // // //                         <div>
// // // //                             <Form onFinish={submit}>
// // // //                                 <Form.Item label='Mother' name='mother_name' style={{ width: '500px', height: '5px' }} initialValue={User[0].family[0].mother_name}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='Father' name='father_name' style={{ width: '500px', height: '5px' }} initialValue={User[0].family[1].father_name}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='Brother' name='brother' style={{ width: '500px', height: '5px' }} initialValue={User[0].family[2].brother}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='Sister' name='sister' style={{ width: '500px', height: '5px' }} initialValue={User[0].family[3].sister}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Button htmlType='submit' style={{ marginLeft: '30%' }}>Save</Button>
// // // //                             </Form>
// // // //                         </div>
// // // //                     )}
// // // //                     {activeTab === 'address' && (
// // // //                         <div>
// // // //                             <Form onFinish={submit}>
// // // //                                 <Form.Item label='City/Village' name='city' style={{ width: '500px', height: '5px' }} initialValue={User[0].city}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='disttrict' name='disttrict' style={{ width: '500px', height: '5px' }} initialValue={User[0].disttrict}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='state' name='state' style={{ width: '500px', height: '5px' }} initialValue={User[0].state}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='country' name='country' style={{ width: '500px', height: '5px' }} initialValue={User[0].country}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='full_address' name='full_address' style={{ width: '500px', height: '5px' }} initialValue={User[0].full_address}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Button htmlType='submit' style={{ marginLeft: '30%' }}>Save</Button>
// // // //                             </Form>
// // // //                         </div>
// // // //                     )}
// // // //                     {activeTab === 'kundli' && (
// // // //                         <div>
// // // //                             <Form onFinish={submit}>
// // // //                                 <Form.Item label='City/Village' name='city' style={{ width: '500px', height: '5px' }} initialValue={User[0].city}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='disttrict' name='disttrict' style={{ width: '500px', height: '5px' }} initialValue={User[0].disttrict}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='state' name='state' style={{ width: '500px', height: '5px' }} initialValue={User[0].state}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='country' name='country' style={{ width: '500px', height: '5px' }} initialValue={User[0].country}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='full_address' name='full_address' style={{ width: '500px', height: '5px' }} initialValue={User[0].full_address}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Button htmlType='submit' style={{ marginLeft: '30%' }}>Save</Button>
// // // //                             </Form>
// // // //                         </div>
// // // //                     )}
// // // //                     {activeTab === 'education' && (
// // // //                         <div>
// // // //                             <Form onFinish={submit}>
// // // //                                 <Form.Item label='City/Village' name='ten' style={{ width: '500px', height: '5px' }} initialValue={User[0].qualifications[0].ten}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='disttrict' name='disttrict' style={{ width: '500px', height: '5px' }} initialValue={User[0].disttrict}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='state' name='state' style={{ width: '500px', height: '5px' }} initialValue={User[0].state}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='country' name='country' style={{ width: '500px', height: '5px' }} initialValue={User[0].country}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Form.Item label='full_address' name='full_address' style={{ width: '500px', height: '5px' }} initialValue={User[0].full_address}>
// // // //                                     <Input style={{}} />
// // // //                                 </Form.Item>
// // // //                                 <Button htmlType='submit' style={{ marginLeft: '30%' }}>Save</Button>
// // // //                             </Form>
// // // //                         </div>
// // // //                     )}

// // // //                 </Card>
// // // //             </Card>

// // // //         </div>
// // // //     )
// // // // }

// // // // export default User_Profile
// // // import { useState } from "react";
// // // import { IoCall } from "react-icons/io5";
// // // import { TfiEmail } from "react-icons/tfi";
// // // import { FaWhatsapp } from "react-icons/fa";

// // // const ProfileCard = ({ img }) => {
// // //   const [openSection, setOpenSection] = useState(null);

// // //   const toggleSection = (title) => {
// // //     setOpenSection(openSection === title ? null : title);
// // //   };

// // //   const sections = [
// // //     {
// // //       title: "Personal Details",
// // //       content: ["Name: Sumit Kumar", "Gender: Male", "Address: Raipur", "Qualification: 12th"],
// // //     },
// // //     {
// // //       title: "Religious Details",
// // //       content: ["Religion: Hindu", "Caste: Ahirwar"],
// // //     },
// // //     {
// // //       title: "Career Details",
// // //       content: ["Occupation: Travel/Hospitality", "Location: Pachmarhi"],
// // //     },
// // //     {
// // //       title: "About",
// // //       content: ["My name is Sunita."],
// // //     },
// // //     {
// // //       title: "Family Details",
// // //       content: ["Father's Name: XYZ", "Mother's Name: ABC", "Siblings: 2"],
// // //     },
// // //   ];

// // //   return (
// // //     <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md">
// // //       <div className="flex flex-col items-center">
// // //         <img
// // //           src={img}
// // //           alt="Profile"
// // //           className="w-full max-w-xs sm:max-w-md h-auto rounded-lg shadow-lg"
// // //         />
// // //       </div>

// // //       <div className="text-center mt-4">
// // //         <p className="text-lg font-semibold">Age: 24, 5ft 2 inch - 157 cm</p>
// // //         <p className="text-lg font-semibold">Travel / Hospitality, India</p>
// // //       </div>

// // //       <div className="flex justify-center gap-6 text-2xl mt-4">
// // //         <IoCall className="cursor-pointer text-blue-500 hover:scale-110 transition-transform" />
// // //         <TfiEmail className="cursor-pointer text-red-500 hover:scale-110 transition-transform" />
// // //         <FaWhatsapp className="cursor-pointer text-green-500 hover:scale-110 transition-transform" />
// // //       </div>

// // //       {sections.map((section, index) => (
// // //         <div key={index} className="mt-4 border rounded-lg overflow-hidden">
// // //           <button
// // //             className="w-full text-left p-3 bg-gray-200 text-lg font-semibold hover:bg-gray-300 transition"
// // //             onClick={() => toggleSection(section.title)}
// // //           >
// // //             {section.title}
// // //           </button>
// // //           {openSection === section.title && (
// // //             <div className="p-3 bg-gray-100">
// // //               {section.content.map((item, idx) => (
// // //                 <p key={idx} className="text-gray-700">{item}</p>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default ProfileCard;

// // import React, { useEffect, useState } from "react";
// // import { IoCall } from "react-icons/io5";
// // import { TfiEmail } from "react-icons/tfi";
// // import { FaWhatsapp } from "react-icons/fa";
// // import "./styles.css"; // Import external CSS
// // import data from "./data.json"; // Import JSON data

// // const iconMap = {
// //   IoCall: <IoCall />,
// //   TfiEmail: <TfiEmail />,
// //   FaWhatsapp: <FaWhatsapp />
// // };

// // const ProfileCard = () => {
// //   const [profileData, setProfileData] = useState(null);

// //   useEffect(() => {
// //     setProfileData(data); // Load JSON data
// //   }, []);

// //   if (!profileData) {
// //     return <p>Loading...</p>; // Show loading message while data is fetched
// //   }

// //   return (
// //     <div className="container">
// //       <div>
// //         <img src={profileData.image} alt="Profile" className="profile-img" />
// //       </div>

// //       <div className="details">
// //         <p>Age: {profileData.age}</p>
// //         <p>{profileData.occupation}</p>
// //       </div>

// //       <div className="icon-container">
// //         {profileData.contactIcons.map((icon, index) => (
// //           <span key={index}>{iconMap[icon]}</span>
// //         ))}
// //       </div>

// //       {profileData.sections.map((section, index) => (
// //         <div key={index} className="section">
// //           <h3>{section.title}</h3>
// //           {section.content.map((item, idx) => (
// //             <p key={idx}>{item}</p>
// //           ))}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ProfileCard;

// //////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { Form, Input, Button, Card, Select, Row, Col, Image } from "antd";
// import {
//   FaFacebook,
//   FaIndianRupeeSign,
//   FaInstagram,
//   FaTwitter,
//   FaWhatsapp,
// } from "react-icons/fa6";
// import { UserGet, UserImagesGet } from "../Api/CoreApi";
// import { useParams } from "react-router-dom";
// import { IoCall } from "react-icons/io5";
// import user_image from "../Assets/wedding1.jpg";
// import { SiGmail } from "react-icons/si";
// import "../Home_Page/User_Profile.css";
// function User_Profile() {
//   const baseurl = "http://127.0.0.1:8000/";
//   const id = useParams();
//   const int_id = String(id.id);
//   // console.log(int_id,'**** int_id')

//   const [activeTab, setActiveTab] = useState(null);
//   const [User, setUser] = useState([]);
//   const [obj, setObj] = useState([]);
//   const [image, setImage] = useState([]);
//   console.log(User, "******* User ********");

//   const get_user = async () => {
//     const response = await UserGet();
//     const filter = response.filter((i) => i.id === int_id);
//     setUser(filter);
//     setObj(filter[0]);
//   };

//   const get_user_image = async () => {
//     const response = await UserImagesGet();
//     const filter = response.filter((i) => i.user_id === int_id);
//     console.log(filter, "***** filter *****");
//     setImage(filter);
//   };
//   useEffect(() => {
//     get_user();
//     get_user_image();
//   }, []);

//   const submit = (value) => {
//     console.log(value, "**** value ******");
//   };

//   return (
//     <div style={{ paddingTop: "70px" }}>
//       {User.map((i) => (
//         <Card
//           style={{ marginLeft: "400px", width: "1000px", marginTop: "10px" }}
//         >
//           <Image style={{ height: "280px", width: "940px" }} src={user_image} />

//           {/* <div>
//             <Card
//               style={{
//                 border: "2px solid",
//                 width: "200px",
//                 marginLeft: "100px",
//                 height: "200px",
//                 marginTop: "-80px",
//                 borderRadius: "50%",
//                 zIndex: "998",
//               }}
//             >
//               <img
//                 style={{
//                   marginLeft: "-20px",
//                   width: "190px",
//                   height: "190px",
//                   borderRadius: "50%",
//                   marginTop: "-21px",
//                 }}
//                 src={`${baseurl}${i.pic}`}
//               />
//             </Card>
//             <h2
//               style={{
//                 marginTop: "-110px",
//                 marginLeft: "340px",
//                 fontSize: "30px",
//                 // fontStyle: "italic",
//               }}
//             >
//               {i.username}
//               <br />
//               <h4
//                 style={{
//                   marginTop: "10px",
//                   fontWeight: "normal",
//                   fontSize: "15px",
//                 }}
//               >
//                 Age: 23, 5ft 7 inch - 172 cm, Software Developer, Raipur, India
//               </h4>
//             </h2>
//             <div
//               style={{
//                 display: "flex",
//                 marginLeft: "350px",
//                 columnGap: "20px",
//                 marginTop: "20px",
//               }}
//             >
//               <p
//                 style={{ ...iconStyle, color: "black" }}
//                 onMouseEnter={(e) => (e.target.style.color = "#25D366")}
//                 onMouseLeave={(e) => (e.target.style.color = "black")}
//               >
//                 <FaWhatsapp />
//               </p>
//               <p
//                 style={{ ...iconStyle, color: "black" }}
//                 onMouseEnter={(e) => (e.target.style.color = "#1877F2")}
//                 onMouseLeave={(e) => (e.target.style.color = "black")}
//               >
//                 <FaFacebook />
//               </p>
//               <p
//                 style={{ ...iconStyle, color: "black" }}
//                 onMouseEnter={(e) => (e.target.style.color = "#E4405F")}
//                 onMouseLeave={(e) => (e.target.style.color = "black")}
//               >
//                 <FaInstagram />
//               </p>
//               <p
//                 style={{ ...iconStyle, color: "black" }}
//                 onMouseEnter={(e) => (e.target.style.color = "#1DA1F2")}
//                 onMouseLeave={(e) => (e.target.style.color = "black")}
//               >
//                 <FaTwitter />
//               </p>
//               <p
//                 style={{ ...iconStyle, color: "black" }}
//                 onMouseEnter={(e) => (e.target.style.color = "#D44638")}
//                 onMouseLeave={(e) => (e.target.style.color = "black")}
//               >
//                 <SiGmail />
//               </p>
//               <p
//                 style={{ ...iconStyle, color: "black" }}
//                 onMouseEnter={(e) => (e.target.style.color = "#34B7F1")}
//                 onMouseLeave={(e) => (e.target.style.color = "black")}
//               >
//                 <IoCall />
//               </p>
//             </div>
//           </div> */}

//           <div className="profile-container">
//             <Card className="profile-card">
//               <img
//                 src={`${baseurl}${i.pic}`}
//                 alt="Profile"
//                 className="profile-image"
//               />
//             </Card>

//             <div className="info-container">
//               <div className="username">{i.username}</div>
//               <div className="details">
//                 Age: 23, 5ft 7in - 172 cm, Software Developer, Raipur, India
//               </div>

//               <div className="icons-container">
//                 <p className="icon whatsapp">
//                   <FaWhatsapp />
//                 </p>
//                 <p className="icon facebook">
//                   <FaFacebook />
//                 </p>
//                 <p className="icon instagram">
//                   <FaInstagram />
//                 </p>
//                 <p className="icon twitter">
//                   <FaTwitter />
//                 </p>
//                 <p className="icon gmail">
//                   <SiGmail />
//                 </p>
//                 <p className="icon call">
//                   <IoCall />
//                 </p>
//               </div>
//             </div>
//           </div>

//           <Card style={{ marginTop: "40px" }}>
//             <div>
//               <div
//                 style={{
//                   columnGap: "20px",
//                   display: "flex",
//                   marginTop: "-25px",
//                 }}
//               >
//                 <p>
//                   <Button
//                     style={{ width: "100px", height: "40px", fontSize: "18px" }}
//                     onClick={() => setActiveTab(null)}
//                   >
//                     Gallary
//                   </Button>
//                 </p>

//                 <p>
//                   <Button
//                     style={{ width: "100px", height: "40px", fontSize: "18px" }}
//                     onClick={() => setActiveTab("profile")}
//                   >
//                     Profile
//                   </Button>
//                 </p>
//                 <p>
//                   <Button
//                     style={{ width: "135px", height: "40px", fontSize: "18px" }}
//                     onClick={() => setActiveTab("family")}
//                   >
//                     Family Details
//                   </Button>
//                 </p>
//                 <p>
//                   <Button
//                     style={{ width: "135px", height: "40px", fontSize: "18px" }}
//                     onClick={() => setActiveTab("address")}
//                   >
//                     Address Detail
//                   </Button>
//                 </p>
//                 <p>
//                   <Button
//                     style={{ width: "100px", height: "40px", fontSize: "18px" }}
//                     onClick={() => setActiveTab("kundli")}
//                   >
//                     Kundli
//                   </Button>
//                 </p>
//                 <p>
//                   <Button
//                     style={{ width: "110px", height: "40px", fontSize: "18px" }}
//                     onClick={() => setActiveTab("education")}
//                   >
//                     Educations
//                   </Button>
//                 </p>
//               </div>
//               {activeTab === null && (
//                 <div
//                   style={{
//                     display: "flex",
//                     flexWrap: "wrap",
//                     columnGap: "10px",
//                     rowGap: "10px",
//                     paddingTop: "10px",
//                   }}
//                 >
//                   {image.map((i, index) => (
//                     <div key={index} style={{ width: "calc(25% - 8px)" }}>
//                       <p>
//                         <img
//                           style={{
//                             height: "180px",
//                             width: "100%",
//                             objectFit: "cover",
//                           }}
//                           src={`${baseurl}${i.images}`}
//                           alt="Image"
//                         />
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* profile :---------- */}

//               {activeTab === "profile" && (
//                 <div
//                   style={{
//                     marginTop: "20px",
//                     marginLeft: "20px",
//                     width: "80%",
//                   }}
//                 >
//                   <Form onFinish={submit} initialValues={obj} layout="vertical">
//                     <Row gutter={24}>
//                       {/* Left Column */}
//                       <Col xs={24} sm={12}>
//                         {/* Name */}
//                         <Form.Item label="Full Name" name="full_name">
//                           <Input />
//                         </Form.Item>

//                         {/* Age */}
//                         <Form.Item label="Age" name="age">
//                           <Input type="number" min="18" max="100" />
//                         </Form.Item>

//                         {/* Gender */}
//                         <Form.Item label="Gender" name="gender">
//                           <Select>
//                             <Select.Option value="male">Male</Select.Option>
//                             <Select.Option value="female">Female</Select.Option>
//                             <Select.Option value="other">Other</Select.Option>
//                           </Select>
//                         </Form.Item>

//                         {/* Caste */}
//                         <Form.Item label="Caste" name="caste">
//                           <Input />
//                         </Form.Item>

//                         {/* Religion */}
//                         <Form.Item label="Religion" name="religion">
//                           <Select>
//                             <Select.Option value="hindu">Hindu</Select.Option>
//                             <Select.Option value="muslim">Muslim</Select.Option>
//                             <Select.Option value="christian">
//                               Christian
//                             </Select.Option>
//                             <Select.Option value="sikh">Sikh</Select.Option>
//                             <Select.Option value="jain">Jain</Select.Option>
//                             <Select.Option value="buddhist">
//                               Buddhist
//                             </Select.Option>
//                             <Select.Option value="other">Other</Select.Option>
//                           </Select>
//                         </Form.Item>

//                         {/* Marital Status */}
//                         <Form.Item label="Marital Status" name="marital_status">
//                           <Select>
//                             <Select.Option value="single">Single</Select.Option>
//                             <Select.Option value="married">
//                               Married
//                             </Select.Option>
//                             <Select.Option value="divorced">
//                               Divorced
//                             </Select.Option>
//                             <Select.Option value="widowed">
//                               Widowed
//                             </Select.Option>
//                           </Select>
//                         </Form.Item>
//                       </Col>

//                       {/* Right Column */}
//                       <Col xs={24} sm={12}>
//                         {/* Height */}
//                         <Form.Item label="Height (in cm)" name="height">
//                           <Input type="number" min="100" max="250" />
//                         </Form.Item>

//                         {/* Weight */}
//                         <Form.Item label="Weight (in kg)" name="weight">
//                           <Input type="number" min="30" max="200" />
//                         </Form.Item>

//                         {/* Blood Group */}
//                         <Form.Item label="Blood Group" name="blood_group">
//                           <Select>
//                             <Select.Option value="A+">A+</Select.Option>
//                             <Select.Option value="A-">A-</Select.Option>
//                             <Select.Option value="B+">B+</Select.Option>
//                             <Select.Option value="B-">B-</Select.Option>
//                             <Select.Option value="O+">O+</Select.Option>
//                             <Select.Option value="O-">O-</Select.Option>
//                             <Select.Option value="AB+">AB+</Select.Option>
//                             <Select.Option value="AB-">AB-</Select.Option>
//                           </Select>
//                         </Form.Item>

//                         {/* Mother Tongue */}
//                         <Form.Item label="Mother Tongue" name="mother_tongue">
//                           <Input />
//                         </Form.Item>

//                         {/* Contact Number */}
//                         <Form.Item label="Contact Number" name="contact_number">
//                           <Input type="tel" maxLength={10} />
//                         </Form.Item>

//                         {/* Email */}
//                         <Form.Item label="Email Address" name="email">
//                           <Input type="email" />
//                         </Form.Item>
//                       </Col>
//                     </Row>

//                     {/* About Me Section */}
//                     <Form.Item
//                       label="About Me (Profile Description)"
//                       name="about_me"
//                     >
//                       <Input.TextArea
//                         rows={4}
//                         placeholder="Write something about yourself..."
//                       />
//                     </Form.Item>

//                     {/* Submit Button */}
//                     <Row>
//                       <Col
//                         span={24}
//                         style={{ textAlign: "center", marginTop: "10px" }}
//                       >
//                         <Button type="primary" htmlType="submit">
//                           Save
//                         </Button>
//                       </Col>
//                     </Row>
//                   </Form>
//                 </div>
//               )}

//               {/* family :---------- */}

//               {activeTab === "family" && (
//                 <div
//                   style={{
//                     marginTop: "20px",
//                     marginLeft: "20px",
//                     width: "80%",
//                   }}
//                 >
//                   <Form onFinish={submit} initialValues={obj} layout="vertical">
//                     <Row gutter={24}>
//                       {/* Left Column */}
//                       <Col xs={24} sm={12}>
//                         {/* Mother's Name */}
//                         <Form.Item label="Mother's Name" name="mother_name">
//                           <Input />
//                         </Form.Item>

//                         {/* Mother's Occupation */}
//                         <Form.Item
//                           label="Mother's Occupation"
//                           name="mother_occupation"
//                         >
//                           <Input />
//                         </Form.Item>

//                         {/* Father's Name */}
//                         <Form.Item label="Father's Name" name="father_name">
//                           <Input />
//                         </Form.Item>

//                         {/* Father's Occupation */}
//                         <Form.Item
//                           label="Father's Occupation"
//                           name="father_occupation"
//                         >
//                           <Input />
//                         </Form.Item>

//                         {/* Family Type */}
//                         <Form.Item label="Family Type" name="family_type">
//                           <Select>
//                             <Select.Option value="joint">
//                               Joint Family
//                             </Select.Option>
//                             <Select.Option value="nuclear">
//                               Nuclear Family
//                             </Select.Option>
//                           </Select>
//                         </Form.Item>
//                       </Col>

//                       {/* Right Column */}
//                       <Col xs={24} sm={12}>
//                         {/* Number of Brothers */}
//                         <Form.Item
//                           label="Number of Brothers"
//                           name="number_of_brothers"
//                         >
//                           <Input type="number" min="0" />
//                         </Form.Item>

//                         {/* Number of Sisters */}
//                         <Form.Item
//                           label="Number of Sisters"
//                           name="number_of_sisters"
//                         >
//                           <Input type="number" min="0" />
//                         </Form.Item>

//                         {/* Family Status */}
//                         <Form.Item label="Family Status" name="family_status">
//                           <Select>
//                             <Select.Option value="middle_class">
//                               Middle Class
//                             </Select.Option>
//                             <Select.Option value="upper_middle_class">
//                               Upper Middle Class
//                             </Select.Option>
//                             <Select.Option value="rich">Rich</Select.Option>
//                             <Select.Option value="affluent">
//                               Affluent
//                             </Select.Option>
//                           </Select>
//                         </Form.Item>

//                         {/* Family Income */}
//                         <Form.Item
//                           label="Family Income (Annual ₹)"
//                           name="family_income"
//                         >
//                           <Input type="number" />
//                         </Form.Item>
//                       </Col>
//                     </Row>

//                     {/* Submit Button */}
//                     <Row>
//                       <Col
//                         span={24}
//                         style={{ textAlign: "center", marginTop: "10px" }}
//                       >
//                         <Button type="primary" htmlType="submit">
//                           Save
//                         </Button>
//                       </Col>
//                     </Row>
//                   </Form>
//                 </div>
//               )}

//               {activeTab === "address" && (
//                 <div
//                   style={{
//                     marginTop: "20px",
//                     marginLeft: "20px",
//                     width: "80%",
//                   }}
//                 >
//                   <Form onFinish={submit} initialValues={obj} layout="vertical">
//                     <Row gutter={24}>
//                       {/* Left Column */}
//                       <Col xs={24} sm={12}>
//                         {/* House/Flat Number */}
//                         <Form.Item
//                           label="House/Flat Number"
//                           name="house_number"
//                         >
//                           <Input />
//                         </Form.Item>

//                         {/* Street Address */}
//                         <Form.Item label="Street Address" name="street_address">
//                           <Input />
//                         </Form.Item>

//                         {/* City/Village */}
//                         <Form.Item label="City/Village" name="city">
//                           <Input />
//                         </Form.Item>

//                         {/* District */}
//                         <Form.Item label="District" name="district">
//                           <Input />
//                         </Form.Item>

//                         {/* State */}
//                         <Form.Item label="State" name="state">
//                           <Input />
//                         </Form.Item>
//                       </Col>

//                       {/* Right Column */}
//                       <Col xs={24} sm={12}>
//                         {/* Country */}
//                         <Form.Item label="Country" name="country">
//                           <Input />
//                         </Form.Item>

//                         {/* Pincode / ZIP Code */}
//                         <Form.Item label="Pincode / ZIP Code" name="pincode">
//                           <Input type="number" />
//                         </Form.Item>

//                         {/* Landmark (Optional) */}
//                         <Form.Item label="Landmark (Optional)" name="landmark">
//                           <Input />
//                         </Form.Item>

//                         {/* Full Address */}
//                         <Form.Item label="Full Address" name="full_address">
//                           <Input.TextArea rows={2} />
//                         </Form.Item>
//                       </Col>
//                     </Row>

//                     {/* Submit Button */}
//                     <Row>
//                       <Col
//                         span={24}
//                         style={{ textAlign: "center", marginTop: "10px" }}
//                       >
//                         <Button type="primary" htmlType="submit">
//                           Save
//                         </Button>
//                       </Col>
//                     </Row>
//                   </Form>
//                 </div>
//               )}

//               {/* Kundi :---------- */}
//               {activeTab === "kundli" && (
//                 <div
//                   style={{
//                     marginTop: "20px",
//                     marginLeft: "20px",
//                     width: "80%",
//                   }}
//                 >
//                   <Form onFinish={submit} initialValues={obj} layout="vertical">
//                     <Row gutter={24}>
//                       {/* Left Column */}
//                       <Col xs={24} sm={12}>
//                         <Form.Item label="Full Name" name="name">
//                           <Input />
//                         </Form.Item>

//                         <Form.Item label="Date of Birth" name="date_of_birth">
//                           <Input type="date" />
//                         </Form.Item>

//                         <Form.Item label="Time of Birth" name="time_of_birth">
//                           <Input type="time" />
//                         </Form.Item>

//                         <Form.Item label="Place of Birth" name="place_of_birth">
//                           <Input />
//                         </Form.Item>

//                         <Form.Item label="District" name="district">
//                           <Input />
//                         </Form.Item>

//                         <Form.Item label="State" name="state">
//                           <Input />
//                         </Form.Item>
//                       </Col>

//                       {/* Right Column */}
//                       <Col xs={24} sm={12}>
//                         <Form.Item label="Country" name="country">
//                           <Input />
//                         </Form.Item>

//                         <Form.Item label="Gender" name="gender">
//                           <Select>
//                             <Select.Option value="male">Male</Select.Option>
//                             <Select.Option value="female">Female</Select.Option>
//                             <Select.Option value="other">Other</Select.Option>
//                           </Select>
//                         </Form.Item>

//                         <Form.Item label="Time Zone" name="time_zone">
//                           <Input />
//                         </Form.Item>

//                         <Form.Item label="Ayanamsa" name="ayanamsa">
//                           <Select>
//                             <Select.Option value="lahiri">Lahiri</Select.Option>
//                             <Select.Option value="raman">Raman</Select.Option>
//                             <Select.Option value="kp">KP</Select.Option>
//                           </Select>
//                         </Form.Item>

//                         <Form.Item label="Full Address" name="full_address">
//                           <Input />
//                         </Form.Item>
//                       </Col>
//                     </Row>

//                     {/* Submit Button */}
//                     <Row>
//                       <Col
//                         span={24}
//                         style={{ textAlign: "center", marginTop: "10px" }}
//                       >
//                         <Button type="primary" htmlType="submit">
//                           Save
//                         </Button>
//                       </Col>
//                     </Row>
//                   </Form>
//                 </div>
//               )}

//               {/* education :---------- */}

//               {activeTab === "education" && (
//                 <div
//                   style={{
//                     marginTop: "20px",
//                     marginLeft: "20px",
//                     width: "80%",
//                   }}
//                 >
//                   <Form onFinish={submit} initialValues={obj} layout="vertical">
//                     <Row gutter={24}>
//                       <Col xs={24} sm={12}>
//                         {/* Highest Qualification */}
//                         <Form.Item
//                           label="Highest Qualification"
//                           name="highest_qualification"
//                         >
//                           <Select>
//                             <Select.Option value="high_school">
//                               High School
//                             </Select.Option>
//                             <Select.Option value="intermediate">
//                               Intermediate
//                             </Select.Option>
//                             <Select.Option value="bachelor">
//                               Bachelor's Degree
//                             </Select.Option>
//                             <Select.Option value="master">
//                               Master's Degree
//                             </Select.Option>
//                             <Select.Option value="phd">Ph.D.</Select.Option>
//                             <Select.Option value="other">Other</Select.Option>
//                           </Select>
//                         </Form.Item>

//                         {/* University/Board Name */}
//                         <Form.Item
//                           label="University/Board Name"
//                           name="university_board"
//                         >
//                           <Input />
//                         </Form.Item>

//                         {/* Passing Year */}
//                         <Form.Item label="Passing Year" name="passing_year">
//                           <Input type="number" min="1900" max="2025" />
//                         </Form.Item>

//                         {/* Occupation */}
//                         <Form.Item label="Occupation" name="occupation">
//                           <Input />
//                         </Form.Item>

//                         {/* Annual Income */}
//                         <Form.Item
//                           label="Annual Income (in ₹)"
//                           name="annual_income"
//                         >
//                           <Input type="number" />
//                         </Form.Item>
//                       </Col>
//                       {/* Left Column */}
//                       <Col xs={24} sm={12}>
//                         {/* City/Village */}

//                         {/* District */}
//                         <Form.Item label="District" name="district">
//                           <Input />
//                         </Form.Item>

//                         {/* State */}
//                         <Form.Item label="State" name="state">
//                           <Input />
//                         </Form.Item>

//                         {/* Country */}
//                         <Form.Item label="Country" name="country">
//                           <Input />
//                         </Form.Item>

//                         {/* Full Address */}
//                         <Form.Item label="Full Address" name="full_address">
//                           <Input />
//                         </Form.Item>
//                       </Col>

//                       {/* Right Column */}
//                     </Row>

//                     {/* Submit Button */}
//                     <Row>
//                       <Col
//                         span={24}
//                         style={{ textAlign: "center", marginTop: "10px" }}
//                       >
//                         <Button type="primary" htmlType="submit">
//                           Save
//                         </Button>
//                       </Col>
//                     </Row>
//                   </Form>
//                 </div>
//               )}
//             </div>
//           </Card>
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default User_Profile;
