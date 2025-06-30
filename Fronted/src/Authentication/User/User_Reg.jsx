// //  Register form
// import React, { useState, useEffect } from "react";
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
//   Col,
//   Row,
// } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import dayjs from "dayjs";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   User_send_otp,
//   User_verify_otp,
//   UserRegUpdate,
//   UserRegPost,
//   UserDataPostwt,
//   UserDataUpdatewl,
//   User_StateGet,
//   User_CasteGet,
// } from "../../Api/CoreApi";
// import { getRenderPropValue } from "antd/es/_util/getRenderPropValue";
// import Loader from "../../Loader/LoaderRes";

// const { Option } = Select;

// function User_Reg() {
//   const Navigate = useNavigate();
//   const admin_id = localStorage.getItem("ref");
//   const reid = useParams();
//   const ref = reid.id;
//   // const ad_ref = admin_id
//   console.log(admin_id, "************* ref *********");
//   const user_id = localStorage.getItem("user_id");
//   const [form] = Form.useForm();
//   const [fileName, setFileName] = useState("");
//   const [file, setFile] = useState(null); // Store file object
//   const [email_pop, setEmail_pop] = useState(0);
//   const [user, setUser] = useState([]);
//   const [data, setData] = useState([]);
//   // const [ref, setRef] = useState([])

//   const [district, setDistrict] = useState([]);
//   const [state, setState] = useState([]);
//   const [caste, setCaste] = useState([]);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [loading, setLoading] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false)
//     }, 1000);

//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   console.log(data, "****** data ******");

//   const handleStateChange = async (value) => {
//     setState(setState);
//     const response = await User_StateGet();
//     const filter = response.filter((i) => i.state === value);
//     const datamap = filter.map((i) => i.district);
//     setDistrict(datamap);
//   };

//   const handlereligionChange = async (value) => {
//     const response = await User_CasteGet();
//     const filter = response.filter(
//       (i) => i.religion === value || i.state === state
//     );
//     const mapcaste = filter.map((i) => i.caste);
//     setCaste(mapcaste.sort());
//     console.log(response, "99999", mapcaste);
//   };

//   const send = async (value) => {
//     const response = await User_send_otp(value);
//     console.log(response, "********* response ******");
//     if (response.message === "Email already exists.") {
//       message.error("Email already exists.");
//     } else {
//       message.success("Check Your Email");
//       setEmail_pop(1);
//       form.setFieldsValue(value);
//     }
//   };

//   const verify = async (value) => {
//     const response = await User_verify_otp(value);
//     const email = response.email;
//     const user_id1 = response.user_id;
//     const mail = { email: email };
//     setData(mail);
//     localStorage.setItem("user_id", user_id1);
//     console.log(response, "********* response ******");
//     setEmail_pop(2);
//   };

//   const username = async (value) => {
//     const response = await UserRegUpdate(user_id, value);
//     const user_filter = response.filter((i) => i.id === user_id);
//     setData(user_filter);
//     setEmail_pop(3);
//     form.setFieldsValue(value);
//   };

//   const profile_details = async (value) => {
//     const gender = value.gender;
//     const disttrict = value.disttrict;
//     const state = value.state;
//     const firstname = value.firstname;
//     const caste = value.caste;

//     const email = data.map((i) => i.email);
//     const refer = data.map((i) => i.refer);
//     const user_name = data.map((i) => i.username);

//     let refValu = ref ? ref : admin_id ? admin_id : "ref";

//     const user_update = {
//       first_name: firstname,
//       gender: gender,
//       disttrict: disttrict,
//       state: state,
//       ref: refValu,
//       caste:caste
//     };
//     // const data = ({ ...value, "User_id": user_id })

//     // console.log("Form values:", value);
//     // console.log("File object:", file);

//     const formData = new FormData();
//     formData.append("pic", file);
//     formData.append("User_id", user_id);
//     formData.append("email", email);
//     // formData.append("ref", ref);
//     let refValue = ref ? ref : admin_id ? admin_id : "ref";
//     formData.append("ref", refValue);
//     formData.append("refer", refer);
//     formData.append("username", user_name);

//     Object.entries(value).forEach(([key, val]) => {
//       formData.append(key, val);
//     });
//     const response = await UserDataPostwt(formData);
//     const response1 = await UserRegUpdate(user_id, user_update);
//     if (response) {
//       message.success("Registration Success");
//       // window.location.reload();
//       Navigate("/User_Login");
//     }
//     console.log(response, "****** response *******");

//     console.log(formData, "****** response1 *******");
//   };

//   if(loading){
//     return  <div style={{ padding: "50px" }}>
//       {loading && <Loader message="Fetching data..." />}
//     </div>
//   }

//   return (

//     <div

//       style={{
//         backgroundImage:
//           "url('https://images.pexels.com/photos/5713682/pexels-photo-5713682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "start",
//         paddingTop: isMobile ? "100px" : "200px",
//       }}
//     >
//       <div
//         style={{
//           width: isMobile ? "90%" : "1100px",
//           backgroundColor: "rgba(255, 255, 255, 0.95)",
//           padding: "30px",
//           borderRadius: "15px",
//           boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
//           marginTop: isMobile ? "-150px" : "-100px",
//           marginTop:"5px"
//         }}
//       >
//         <div style={{ textAlign: "center", marginBottom: 20,marginTop:"40px" }}>
//           <h2>Signup Form</h2>
//         </div>

//         <Card>
//           {email_pop === 0 && (
//             <div
//               style={{
//                 width: "90%", // 90% of the parent/container width
//                 maxWidth: "800px", // max width on large screens
//                 margin: "0 auto",
//               }}
//             >
//               <Form onFinish={send}>
//                 <Form.Item name="email">
//                   <Input
//                     type="email"
//                     placeholder="Enter your email"
//                     size="middle"
//                   />
//                 </Form.Item>
//                 <Form.Item style={{ textAlign: "center" }}>
//                   <Button
//                     htmlType="submit"
//                     size="middle"
//                     style={{
//                       width: "100%", // full width button on small screens
//                       maxWidth: "120px", // limit max button width on bigger screens
//                       color: "green",
//                      border: "1px solid green"
//                     }}
//                   >
//                     Send
//                   </Button>
//                 </Form.Item>
//               </Form>
//             </div>
//           )}

//           {/* OTP VERIFICATION */}
//           {email_pop === 1 && (
//             <div
//               style={{
//                 width: "90%",
//                 maxWidth: "800px",
//                 margin: "0 auto",
//               }}
//             >
//               <Form onFinish={verify} form={form} initialValues={form}>
//                 <Form.Item name="email">
//                   <Input type="email" readOnly size="middle" />
//                 </Form.Item>
//                 <Form.Item name="otp">
//                   <Input type="number" placeholder="Enter OTP" size="middle" />
//                 </Form.Item>
//                 <Form.Item style={{ textAlign: "center" }}>
//                   <Button
//                     htmlType="submit"
//                     size="middle"
//                     style={{
//                       width: "100%",
//                       maxWidth: "120px",
//                     }}
//                   >
//                     Verify
//                   </Button>
//                 </Form.Item>
//               </Form>
//             </div>
//           )}

//           {/* USERNAME & PASSWORD */}
//           {email_pop === 2 && (
//             <Form onFinish={username}>
//               <Form.Item name="username">
//                 <Input placeholder="Enter your username" size="middle" />
//               </Form.Item>
//               <Form.Item name="password">
//                 <Input.Password
//                   placeholder="Enter your password"
//                   size="middle"
//                 />
//               </Form.Item>
//               <Form.Item>
//                 <Button htmlType="submit" size="middle">
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>
//           )}

//           {/* FULL PROFILE FORM */}
//           {email_pop === 3 && (
//             <Form
//               form={form}
//               onFinish={profile_details}
//               initialValues={form}
//               layout="vertical"
//             >
//               <Row gutter={[16, 16]}>
//                 {/* Image Upload - Full Width */}
//                 <Col span={24}>
//                   <Form.Item label="Profile Picture" required>
//                     <Upload
//                       beforeUpload={(file) => {
//                         setFile(file);
//                         form.setFieldsValue({ pic: file.name });
//                         return false;
//                       }}
//                       showUploadList={false}
//                     >
//                       <Button icon={<UploadOutlined />} size="middle">
//                         Choose File
//                       </Button>
//                     </Upload>
//                     <Form.Item name="pic" noStyle>
//                       <Input
//                         style={{ marginTop: 8 }}
//                         disabled
//                         placeholder="No file selected"
//                         size="middle"
//                       />
//                     </Form.Item>
//                   </Form.Item>
//                 </Col>

//                 {/* All Other Fields in Responsive Columns */}
//                 {[
//                   { name: "firstname", label: "Full Name" },
//                   {
//                     name: "gender",
//                     label: "Gender",
//                     type: "select",
//                     options: ["Male", "Female"],
//                   },
//                   {
//                     name: "state",
//                     label: "State",
//                     type: "select",
//                     options: [
//                       "Andhra Pradesh",
//                       "Arunachal Pradesh",
//                       "Assam",
//                       "Bihar",
//                       "Chhattisgarh",
//                       "Goa",
//                       "Gujarat",
//                       "Haryana",
//                       "Himachal Pradesh",
//                       "Jharkhand",
//                       "Karnataka",
//                       "Kerala",
//                       "Madhya Pradesh",
//                       "Maharashtra",
//                       "Manipur",
//                       "Meghalaya",
//                       "Mizoram",
//                       "Nagaland",
//                       "Odisha",
//                       "Punjab",
//                       "Rajasthan",
//                       "Sikkim",
//                       "Tamil Nadu",
//                       "Telangana",
//                       "Tripura",
//                       "Uttar Pradesh",
//                       "Uttarakhand",
//                       "West Bengal",
//                       "Andaman and Nicobar Islands",
//                       "Chandigarh",
//                       "Dadra and Nagar Haveli and Daman and Diu",
//                       "Delhi",
//                       "Jammu and Kashmir",
//                       "Ladakh",
//                       "Lakshadweep",
//                       "Puducherry",
//                     ],
//                     onChange: handleStateChange,
//                   },
//                   {
//                     name: "disttrict",
//                     label: "District",
//                     type: "select",
//                     dynamic: district?.[0],
//                   },
//                   { name: "city", label: "City" },
//                   {
//                     name: "religion",
//                     label: "Religion",
//                     type: "select",
//                     options: [
//                       "Hindu",
//                       "Muslim",
//                       "Christian",
//                       "Sikh",
//                       "Buddhist",
//                       "Jain",
//                       "Other",
//                     ],
//                     onChange: handlereligionChange,
//                   },
//                   {
//                     name: "caste",
//                     label: "Caste",
//                     type: "select",
//                     dynamic: Array.isArray(caste[0]) ? caste[0] : caste,
//                     searchable: true,
//                   },
//                   { name: "dob", label: "DOB", type: "date" },
//                   { name: "age", label: "Age", type: "number" },
//                   { name: "father_name", label: "Father's Name" },
//                   { name: "mother_name", label: "Mother's Name" },
//                   { name: "brother", label: "No. of Brothers", type: "number" },
//                   {
//                     name: "brother_marrige",
//                     label: "Married Brothers",
//                     type: "number",
//                   },
//                   { name: "sister", label: "No. of Sisters", type: "number" },
//                   {
//                     name: "sister_marrige",
//                     label: "Married Sisters",
//                     type: "number",
//                   },
//                   { name: "university", label: "University/School" },
//                   { name: "course", label: "Course" },
//                   { name: "job_title", label: "Job Title" },
//                   {
//                     name: "job_type",
//                     label: "Job Type",
//                     type: "select",
//                     options: ["Government", "Private", "Unemployed"],
//                   },
//                   {
//                     name: "marrige_status",
//                     label: "Marriage Status",
//                     type: "select",
//                     options: ["Unmarried", "Married"],
//                   },
//                   { name: "salary", label: "Salary", type: "number" },
//                   { name: "contact", label: "WhatsApp Number" },
//                   { name: "instagram", label: "Instagram Link" },
//                 ].map((field, idx) => (
//                   <Col key={field.name} xs={24} sm={12} md={12} lg={6}>
//                     <Form.Item name={field.name} label={field.label}>
//                       {field.type === "select" ? (
//                         <Select
//                           showSearch={field.searchable}
//                           allowClear
//                           placeholder={field.label}
//                           onChange={field.onChange}
//                           size="middle"
//                           optionFilterProp="children"
//                           filterOption={(input, option) =>
//                             option?.children
//                               ?.toLowerCase()
//                               .includes(input.toLowerCase())
//                           }
//                         >
//                           {(field.dynamic || field.options || []).map(
//                             (opt, i) => (
//                               <Option key={i} value={opt}>
//                                 {opt}
//                               </Option>
//                             )
//                           )}
//                         </Select>
//                       ) : field.type === "date" ? (
//                         <Input type="date" size="middle" />
//                       ) : (
//                         <Input
//                           type={field.type || "text"}
//                           placeholder={field.label}
//                           size="middle"
//                         />
//                       )}
//                     </Form.Item>
//                   </Col>
//                 ))}

//                 <Col span={24}>
//                   <Form.Item>
//                     <Button type="primary" htmlType="submit" size="middle">
//                       Save
//                     </Button>
//                   </Form.Item>
//                 </Col>
//               </Row>
//             </Form>
//           )}
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default User_Reg;

import React, { useState, useEffect } from "react";
import {
  Form,
  Card,
  Button,
  Input,
  Steps,
  Upload,
  Select,
  DatePicker,
  message,
  Col,
  Row,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useParams, useNavigate } from "react-router-dom";
import {
  User_send_otp,
  User_verify_otp,
  UserRegUpdate,
  UserRegPost,
  UserDataPostwt,
  UserDataUpdatewl,
  User_StateGet,
  User_CasteGet,
} from "../../Api/CoreApi";
import { Spin } from "antd";

import { getRenderPropValue } from "antd/es/_util/getRenderPropValue";

const { Option } = Select;

function User_Reg() {
  const Navigate = useNavigate();
  const admin_id = localStorage.getItem("ref");
  const reid = useParams();
  const ref = reid.id;
  // const ad_ref = admin_id
  console.log(admin_id, "************* ref *********");
  const user_id = localStorage.getItem("user_id");
  const [form] = Form.useForm();
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null); // Store file object
  const [email_pop, setEmail_pop] = useState(0);
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  // const [ref, setRef] = useState([])

  const [district, setDistrict] = useState([]);
  const [state, setState] = useState([]);
  const [caste, setCaste] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // --- 1. ADD LOADING STATE ---
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(data, "****** data ******");

  const handleStateChange = async (value) => {
    setState(setState);
    const response = await User_StateGet();
    const filter = response.filter((i) => i.state === value);
    const datamap = filter.map((i) => i.district);
    setDistrict(datamap);
  };

  const handlereligionChange = async (value) => {
    const response = await User_CasteGet();
    const filter = response.filter(
      (i) => i.religion === value || i.state === state
    );
    const mapcaste = filter.map((i) => i.caste);
    setCaste(mapcaste.sort());
    console.log(response, "99999", mapcaste);
  };

  // --- 2. UPDATE THE 'send' FUNCTION ---
  const send = async (value) => {
    setIsLoading(true); // Start loader
    try {
      const response = await User_send_otp(value);
      console.log(response, "********* response ******");
      if (response.message === "Email already exists.") {
        message.error("Email already exists.");
      } else {
        message.success("Check Your Email");
        setEmail_pop(1);
        form.setFieldsValue(value);
      }
    } catch (error) {
      console.error("OTP send error:", error);
      message.error("Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false); // Stop loader
    }
  };

  // const verify = async (value) => {
  //   const response = await User_verify_otp(value);
  //   const email = response.email;
  //   const user_id1 = response.user_id;
  //   const mail = { email: email };
  //   setData(mail);
  //   localStorage.setItem("user_id", user_id1);
  //   console.log(response, "********* response ******");
  //   setEmail_pop(2);
  // };
  const verify = async (value) => {
    setIsLoading(true); // Start loader before API call

    try {
      const response = await User_verify_otp(value);

      const email = response.email;
      const user_id1 = response.user_id;
      const mail = { email: email };
      setData(mail);
      localStorage.setItem("user_id", user_id1);
      console.log(response, "********* response ******");

      setEmail_pop(2);
    } catch (error) {
      console.error("OTP verification failed:", error);
      // Optional: show error message to user
    } finally {
      setIsLoading(false); // Stop loader in finally block to ensure it always runs
    }
  };

  const username = async (value) => {
    const response = await UserRegUpdate(user_id, value);
    const user_filter = response.filter((i) => i.id === user_id);
    setData(user_filter);
    setEmail_pop(3);
    form.setFieldsValue(value);
  };

  // const profile_details = async (value) => {
  //   console.log(value, "****** value ********");
  //   console.log(data, "**** Data *******");
  //   const gender = value.gender;
  //   const disttrict = value.disttrict;
  //   const state = value.state;
  //   const firstname = value.firstname;
  //   const caste = value.caste;
  //   const contact = value.contact;

  //   const email = data.map((i) => i.email);
  //   const refer = data.map((i) => i.refer);
  //   const user_name = data.map((i) => i.username);

  //   let refValu = ref ? ref : admin_id ? admin_id : "ref";

  //   const user_update = {
  //     first_name: firstname,
  //     gender: gender,
  //     disttrict: disttrict,
  //     state: state,
  //     ref: refValu,
  //     caste: caste,
  //     contact: contact,
  //   };

  //   const formData = new FormData();
  //   formData.append("pic", file);
  //   formData.append("User_id", user_id);
  //   formData.append("email", email);
  //   // formData.append("ref", ref);
  //   let refValue = ref ? ref : admin_id ? admin_id : "ref";
  //   formData.append("ref", refValue);
  //   formData.append("refer", refer);
  //   formData.append("username", user_name);

  //   Object.entries(value).forEach(([key, val]) => {
  //     formData.append(key, val);
  //   });
  //   const response = await UserDataPostwt(formData);
  //   const response1 = await UserRegUpdate(user_id, user_update);
  //   if (response) {
  //     message.success("Registration Success");
  //     // window.location.reload();
  //     Navigate("/User_Login");
  //   }

  //   console.log(user_update, "****** user_update *******");

  // };

  const profile_details = async (value) => {
    setIsLoading(true); // Start loader
    try {
      console.log(value, "****** value ********");
      console.log(data, "**** Data *******");

      const gender = value.gender;
      const disttrict = value.disttrict;
      const state = value.state;
      const firstname = value.firstname;
      const caste = value.caste;
      const contact = value.contact;

      const email = data.map((i) => i.email);
      const refer = data.map((i) => i.refer);
      const user_name = data.map((i) => i.username);

      let refValu = ref ? ref : admin_id ? admin_id : "ref";

      const user_update = {
        first_name: firstname,
        gender: gender,
        disttrict: disttrict,
        state: state,
        ref: refValu,
        caste: caste,
        contact: contact,
      };

      const formData = new FormData();
      formData.append("pic", file);
      formData.append("User_id", user_id);
      formData.append("email", email);
      formData.append("ref", refValu);
      formData.append("refer", refer);
      formData.append("username", user_name);

      Object.entries(value).forEach(([key, val]) => {
        formData.append(key, val);
      });

      const response = await UserDataPostwt(formData);
      const response1 = await UserRegUpdate(user_id, user_update);

      if (response) {
        message.success("Registration Success");
        Navigate("/User_Login");
      }

      console.log(user_update, "****** user_update *******");
    } catch (error) {
      console.error("Error in profile_details:", error);
      message.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Stop loader
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5713682/pexels-photo-5713682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        paddingTop: isMobile ? "100px" : "200px",
      }}
    >
      <div
        style={{
          width: isMobile ? "90%" : "1100px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          marginTop: isMobile ? "-150px" : "-100px",
          marginTop: "5px",
        }}
      >
        <div
          style={{ textAlign: "center", marginBottom: 20, marginTop: "40px" }}
        >
          <h2>Signup Form</h2>
        </div>

        <Card>
          {email_pop === 0 && (
            <Spin spinning={isLoading} tip="Sending OTP..." size="large">
              <div
                style={{
                  width: "90%",
                  maxWidth: "800px",
                  margin: "0 auto",
                  padding: "24px", // Optional for spacing inside the form
                  background: "#fff", // Optional: white background for better contrast
                  borderRadius: "8px", // Optional: rounded corners
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Optional: subtle shadow
                }}
              >
                <Form onFinish={send}>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email" },
                    ]}
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      size="middle"
                      disabled={isLoading} // disable input while loading
                    />
                  </Form.Item>
                  <Form.Item style={{ textAlign: "center" }}>
                    <Button
                      htmlType="submit"
                      size="middle"
                      loading={isLoading}
                      disabled={isLoading}
                      style={{
                        width: "100%",
                        maxWidth: "120px",
                        color: "green",
                        border: "1px solid green",
                      }}
                    >
                      Send
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Spin>
          )}

          {/* OTP VERIFICATION */}
          {email_pop === 1 && (
            <div
              style={{
                width: "90%",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <Form onFinish={verify} form={form} initialValues={form}>
                <Form.Item name="email">
                  <Input type="email" readOnly size="middle" />
                </Form.Item>
                <Form.Item name="otp">
                  <Input type="number" placeholder="Enter OTP" size="middle" />
                </Form.Item>
                <Form.Item style={{ textAlign: "center" }}>
                  <Button
                    htmlType="submit"
                    size="middle"
                    style={{
                      width: "100%",
                      maxWidth: "120px",
                    }}
                  >
                    Verify
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}

          {/* USERNAME & PASSWORD */}
          {email_pop === 2 && (
            <div
              style={{
                width: "90%",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <Form onFinish={username} layout="vertical">
                <Form.Item name="username" label="Username">
                  <Input placeholder="Enter your username" size="middle" />
                </Form.Item>

                {/* --- UPDATED PASSWORD FIELD --- */}
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please create a password!",
                    },
                    {
                      min: 8,
                      message: "Password must be at least 8 characters long!",
                    },
                    {
                      pattern: /[A-Z]/,
                      message:
                        "Password must contain at least one uppercase letter.",
                    },
                    {
                      pattern: /[a-z]/,
                      message:
                        "Password must contain at least one lowercase letter.",
                    },
                    {
                      pattern: /[0-9]/,
                      message: "Password must contain at least one number.",
                    },
                  ]}
                  extra="Must be at least 8 characters and include uppercase, lowercase, and a number."
                  hasFeedback // This adds a green checkmark icon when validation passes
                >
                  <Input.Password
                    placeholder="Create your password"
                    size="middle"
                  />
                </Form.Item>
                {/* --- END OF UPDATE --- */}

                <Form.Item style={{ textAlign: "center", paddingTop: "10px" }}>
                  <Button
                    htmlType="submit"
                    size="middle"
                    style={{
                      width: "100%",
                      maxWidth: "120px",
                    }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}

          {/* FULL PROFILE FORM */}
          {email_pop === 3 && (
            <Spin spinning={isLoading} tip="Saving profile..." size="large">
              <Form
                form={form}
                onFinish={profile_details}
                initialValues={form}
                layout="vertical"
              >
                <Row gutter={[16, 16]}>
                  {/* Image Upload - Full Width */}
                  <Col span={24}>
                    <Form.Item label="Profile Picture" required>
                      <Upload
                        beforeUpload={(file) => {
                          setFile(file);
                          form.setFieldsValue({ pic: file.name });
                          return false;
                        }}
                        showUploadList={false}
                      >
                        <Button icon={<UploadOutlined />} size="middle">
                          Choose File
                        </Button>
                      </Upload>
                      <Form.Item name="pic" noStyle>
                        <Input
                          style={{ marginTop: 8 }}
                          disabled
                          placeholder="No file selected"
                          size="middle"
                        />
                      </Form.Item>
                    </Form.Item>
                  </Col>

                  {/* All Other Fields in Responsive Columns */}
                  {[
                    { name: "firstname", label: "Full Name" },
                    {
                      name: "gender",
                      label: "Gender",
                      type: "select",
                      options: ["Male", "Female"],
                    },
                    {
                      name: "state",
                      label: "State",
                      type: "select",
                      options: ["Chhattisgarh"],
                      onChange: handleStateChange,
                    },
                    {
                      name: "disttrict",
                      label: "District",
                      type: "select",
                      dynamic: district?.[0],
                    },
                    { name: "city", label: "City" },
                    {
                      name: "religion",
                      label: "Religion",
                      type: "select",
                      options: [
                        "Hindu",
                        "Muslim",
                        "Christian",
                        "Sikh",
                        "Buddhist",
                        "Jain",
                        "Other",
                      ],
                      onChange: handlereligionChange,
                    },
                    {
                      name: "caste",
                      label: "Caste",
                      type: "select",
                      dynamic: Array.isArray(caste[0]) ? caste[0] : caste,
                      searchable: true,
                    },
                    { name: "dob", label: "DOB", type: "date" },
                    { name: "age", label: "Age", type: "number" },
                    { name: "father_name", label: "Father's Name" },
                    { name: "mother_name", label: "Mother's Name" },
                    {
                      name: "brother",
                      label: "No. of Brothers",
                      type: "number",
                    },
                    {
                      name: "brother_marrige",
                      label: "Married Brothers",
                      type: "number",
                    },
                    { name: "sister", label: "No. of Sisters", type: "number" },
                    {
                      name: "sister_marrige",
                      label: "Married Sisters",
                      type: "number",
                    },
                    { name: "university", label: "University/School" },
                    { name: "course", label: "Course" },
                    { name: "job_title", label: "Job Title" },
                    {
                      name: "job_type",
                      label: "Job Type",
                      type: "select",
                      options: ["Government", "Private", "Unemployed"],
                    },
                    {
                      name: "marrige_status",
                      label: "Marriage Status",
                      type: "select",
                      options: ["Unmarried", "Married"],
                    },
                    { name: "salary", label: "Salary", type: "number" },
                    { name: "contact", label: "WhatsApp Number" },
                    { name: "instagram", label: "Instagram Link" },
                  ].map((field, idx) => (
                    <Col key={field.name} xs={24} sm={12} md={12} lg={6}>
                      <Form.Item name={field.name} label={field.label}>
                        {field.type === "select" ? (
                          <Select
                            showSearch={field.searchable}
                            allowClear
                            placeholder={field.label}
                            onChange={field.onChange}
                            size="middle"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                              option?.children
                                ?.toLowerCase()
                                .includes(input.toLowerCase())
                            }
                          >
                            {(field.dynamic || field.options || []).map(
                              (opt, i) => (
                                <Option key={i} value={opt}>
                                  {opt}
                                </Option>
                              )
                            )}
                          </Select>
                        ) : field.type === "date" ? (
                          <Input type="date" size="middle" />
                        ) : (
                          <Input
                            type={field.type || "text"}
                            placeholder={field.label}
                            size="middle"
                          />
                        )}
                      </Form.Item>
                    </Col>
                  ))}

                  <Col span={24}>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" size="middle">
                        Save
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Spin>
          )}
        </Card>
      </div>
    </div>
  );
}

export default User_Reg;
