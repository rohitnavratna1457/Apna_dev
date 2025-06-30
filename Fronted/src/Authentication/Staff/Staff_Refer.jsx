

// import React, { useState } from "react";
// import {
//   Form,
//   Card,
//   Button,
//   Input,
//   Steps,
//   Upload,
//   Select,
//   DatePicker,
//   message,
// } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import dayjs from "dayjs";
// import { Link } from "react-router-dom";
// import { User_send_otp, User_verify_otp, UserPost } from "../../Api/CoreApi";

// const { Option } = Select;

// function Staff_Refer() {
//   const [data, setData] = useState([]);
//   console.log(data, "******* data *******");
//   const [otp, setOtp] = useState(2);
//   const [phoneSent, setPhoneSent] = useState(false);
//   const [aadharSent, setAadharSent] = useState(false);
//   const [form] = Form.useForm(); // Form instance for inline updates

//   const send_otp = async (values) => {
//     setData((prev) => ({ ...prev, ...values }));
//     // if (Object.keys(values).length === 1) {
//     //   const response = await User_send_otp(values);
//     //   if (response.message === "OTP sent successfully") {
//     //     // console.log(values, "***send*****");
//     //     // console.log(response, "***revive*****");
//     //     setPhoneSent(true);
//     //   } else {
//     //     message.error("OTP send failed");
//     //   }
//     // } else {
//     //   const response = await User_verify_otp(values);
//     //   console.log(values, "***revive*****");
//     //   console.log(response, "***revive*****");
//     //   if (response.message === "OTP verified successfully") {
//     //     // console.log(values, "***send*****");
//     //     // console.log(response, "***revive*****");
//     //     setOtp(otp + 1);
//     //   } else {
//     //     message.error("OTP send failed");
//     //   }
//     // }

//     setOtp(otp + 1);
//   };

//   const send_aadhar = (values) => {
//     if (Object.keys(values).length === 1) {
//       console.log(values, "***send*****");
//       setData((prev) => ({ ...prev, ...values }));
//       setAadharSent(true);
//     } else {
//       console.log(values, "***revive*****");
//       setOtp(otp + 1);
//     }
//   };

//   // const profile_details = async(values) => {
//   //   const response = await UserPost(values);

//   //   console.log(values, "***send*****");
//   //   console.log(response, "***send*****");

//   //   setOtp(otp + 1);
//   // };

//   const [file, setFile] = useState(null); // Store uploaded file

//   const profile_details = async (values) => {
//     const formData = new FormData();
//     formData.append("pic", file); // Append image file
//     formData.append("username", values.username);
//     formData.append("lastname", values.lastname);
//     formData.append("password", values.password);
//     formData.append("caste", values.caste);
//     formData.append("dob", values.dob);
//     formData.append("gender", values.gender);
//     formData.append("email", values.email);

//     console.log(values, "****** formData ******");
//     setData((prev) => ({ ...prev, ...values }));
//     setOtp(otp + 1);

//     // const response = await UserPost(formData);

//     // if (response) {
//     //   message.success("Profile details submitted!");
//     //   setOtp(otp + 1);
//     // } else {
//     //   message.error("Submission failed!");
//     // }
//   };

//   // const address_details = async(values) => {
//   //   setData((prev) => ({ ...prev, ...values }));
//   //   console.log(values, "***send*****");
//   //   const response = await UserPost(data);
//   //   console.log(response,'******* response **********')

//   //   // setOtp(otp + 1);
//   // };

//   const address_details = async (values) => {
//     // ✅ Immediately merge new values with existing data
//     const updatedData = { ...data, ...values };
//     setData(updatedData); // Update state asynchronously

//     // ✅ Use FormData for API submission
//     const formData = new FormData();

//     if (!file) {
//       message.error("Please upload a valid file.");
//       return;
//     }

//     formData.append("pic", file); // ✅ Append the actual file object
//     formData.append("username", updatedData.username);
//     formData.append("lastname", updatedData.lastname);
//     formData.append("password", updatedData.password);
//     formData.append("caste", updatedData.caste);
//     formData.append("dob", updatedData.dob);
//     formData.append("gender", updatedData.gender);
//     formData.append("email", updatedData.email);
//     formData.append("phone", updatedData.phone);
//     formData.append("aadhar", updatedData.aadhar);
//     formData.append("address", updatedData.address || ""); // ✅ Handle undefined case

//     console.log([...formData.entries()], "****** FormData Content ******");

//     try {
//       const response = await UserPost(formData);
//       console.log(response, "******* response **********");

//       if (response) {
//         message.success("Address details submitted!");
//         // setOtp(otp + 1);
//       } else {
//         message.error("Submission failed!");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       message.error("Something went wrong!");
//     }
//   };

//   const pre = () => setOtp(otp - 1);

//   return (
//     <div
//       style={{
//         backgroundImage:
//           "url('https://img.freepik.com/free-vector/abstract-beautiful-mandala-design-background_1055-2471.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         paddingTop: "200px",
//       }}
//     >
//       <div
//         style={{
//           width: "600px",
//           padding: "30px",
//           marginTop: "-350px",
//           borderRadius: "15px",
//           background: "rgba(255, 255, 255, 0.85)",
//           boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         <div style={{ textAlign: "center" }}>
//           <h2>Signup Form </h2>
//           <br />
//         </div>
//         <Steps
//           current={otp - 1}
//           size="small"
//           style={{ marginBottom: "30px" }}
//           items={[
//             { title: "Phone Verification" },
//             { title: "Aadhar Verification" },
//             { title: "Personal Details" },
//             { title: "Address" },
//           ]}
//         />

//         <Card
//           style={{
//             background: "rgba(255, 255, 255, 0.9)",
//             borderRadius: "10px",
//             boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
//             textAlign: "center",
//           }}
//         >
//           {otp === 1 && (
//             <Form form={form} onFinish={send_otp} style={{ width: "100%" }}>
//               <Form.Item name="phone" label="Phone">
//                 <Input disabled={phoneSent} />
//               </Form.Item>
//               {!phoneSent ? (
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   // onClick={handleSendPhone}
//                 >
//                   Send OTP
//                 </Button>
//               ) : (
//                 <>
//                   <Form.Item name="otp" label="Enter OTP">
//                     <Input />
//                   </Form.Item>
//                   <Button type="primary" htmlType="submit">
//                     Verify & Next
//                   </Button>
//                 </>
//               )}
//             </Form>
//           )}

//           {otp === 2 && (
//             <Form form={form} onFinish={send_aadhar} style={{ width: "100%" }}>
//               <Form.Item name="aadhar" label="Aadhar Number">
//                 <Input disabled={aadharSent} />
//               </Form.Item>
//               {!aadharSent ? (
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   // onClick={handleSendAadhar}
//                 >
//                   Send OTP
//                 </Button>
//               ) : (
//                 <>
//                   <Form.Item name="aadharOtp" label="Enter OTP">
//                     <Input />
//                   </Form.Item>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                     }}
//                   >
//                     <Button onClick={pre}>Back</Button>
//                     <Button type="primary" htmlType="submit">
//                       Verify & Next
//                     </Button>
//                   </div>
//                 </>
//               )}
//             </Form>
//           )}

//           {otp === 3 && (
//             <Form
//               form={form}
//               onFinish={profile_details}
//               style={{ width: "100%" }}
//             >
//               {/* Profile Picture Upload */}
//               {/* <Form.Item name="pic" label="Profile Picture">
//                 <Upload
//                   beforeUpload={(file) => {
//                     form.setFieldsValue({ pic: file.name }); // ✅ Inline Update with File Name
//                     return false;
//                   }}
//                   showUploadList={false}
//                 >
//                   <Button icon={<UploadOutlined />}>Upload</Button>
//                 </Upload>
//                 <Input style={{ marginTop: "5px" }} disabled />
//               </Form.Item> */}

//               <Form.Item name="pic" label="Profile Picture">
//                 <Upload
//                   beforeUpload={(file) => {
//                     form.setFieldsValue({ pic: file.name }); // Show filename in input
//                     setFile(file); // Store file object in state
//                     return false; // Prevent default upload behavior
//                   }}
//                   showUploadList={false}
//                 >
//                   <Button icon={<UploadOutlined />}>Upload</Button>
//                 </Upload>
//                 {/* <Input style={{ marginTop: "5px" }} disabled /> */}
//               </Form.Item>

//               <Form.Item name="username" label="First Name">
//                 <Input />
//               </Form.Item>
//               <Form.Item name="lastname" label="Last Name">
//                 <Input />
//               </Form.Item>
//               <Form.Item name="password" label="Password">
//                 <Input type="number" />
//               </Form.Item>
//               <Form.Item name="caste" label="Caste">
//                 <Select placeholder="Select">
//                   <Option value="Male">Sc</Option>
//                   <Option value="Female">St</Option>
//                   <Option value="Other">Obc</Option>
//                 </Select>
//               </Form.Item>
//               {/* Inline Date Picker Formatting */}
//               <Form.Item name="dob" label="Date of Birth">
//                 <DatePicker
//                   style={{ width: "100%" }}
//                   format="YYYY-MM-DD"
//                   onChange={(date) =>
//                     form.setFieldsValue({
//                       dob: date ? dayjs(date).format("YYYY-MM-DD") : null,
//                     })
//                   } // ✅ Inline Update
//                 />
//               </Form.Item>

//               <Form.Item name="gender" label="Gender">
//                 <Select placeholder="Select">
//                   <Option value="Male">Male</Option>
//                   <Option value="Female">Female</Option>
//                   <Option value="Other">Other</Option>
//                 </Select>
//               </Form.Item>

//               <Form.Item name="email" label="Email">
//                 <Input />
//               </Form.Item>

//               <div style={{ display: "flex", justifyContent: "space-between" }}>
//                 <Button onClick={pre}>Back</Button>
//                 <Button type="primary" htmlType="submit">
//                   Next
//                 </Button>
//               </div>
//             </Form>
//           )}

//           {otp === 4 && (
//             <Form
//               form={form}
//               onFinish={address_details}
//               style={{ width: "100%" }}
//             >
//               <Form.Item name="address" label="Address">
//                 <Input />
//               </Form.Item>
//               <div style={{ display: "flex", justifyContent: "space-between" }}>
//                 <Button onClick={pre}>Back</Button>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//               </div>

//               <br />
//               <div style={{ textAlign: "center" }}>
//                 <h5>
//                   Already have an account? Signup & Login
//                 </h5>
//                 <br />
//               </div>
//             </Form>
//           )}
//           <br />
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default Staff_Refer


// import React, { useEffect } from 'react'
// import Home_Page_WLog from '../../Header/Header'
// function Staff_Refer() {
  
//   return (
//     <div>
//       {/* <h1>
//         Invalid Url
//       </h1> */}
//       {/* <h1><Home_Page_WLog/></h1> */}
//       fffffffff
//     </div>
//   )
// }

// export default Staff_Refer


import React, { useEffect, useState } from 'react';
import Home_Page_WLog from '../../Header/Header';

function Staff_Refer() {
  

  

  return (
    <div >
      <Home_Page_WLog />
     
    </div>
  );
}

export default Staff_Refer;

