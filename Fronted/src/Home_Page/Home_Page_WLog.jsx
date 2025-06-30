// // // import React, { useState, useEffect } from "react";
// // // import { FaSearch } from "react-icons/fa";
// // // import { Form, Select, Input, Button, Spin, Card } from "antd";
// // // import Swal from "sweetalert2";
// // // import { Link } from "react-router-dom";
// // // import CardSlider from "../Header/CardSlider";
// // // import { UserDataGetwt, User_StateGet, User_CasteGet } from "../Api/CoreApi";
// // // import Footer from "../Footer/Footer";
// // // import About from "../About/About";
// // // import "../Home_Page/Home_Page_WLog.css";

// // // const { Option } = Select;

// // // const Home_Page_WLog = () => {
// // //   const baseurl = "http://127.0.0.1:8000/";

// // //   const [statedata, setStatedata] = useState([]);
// // //   const [state, setState] = useState([]);
// // //   const [inputstate, setinputState] = useState([]);
// // //   const [currentdict, setCurrentDict] = useState([]);
// // //   const [caste, setCurrentcastet] = useState([]);
// // //   const [data, setData] = useState([]);
// // //   console.log(data, "******** data *******");

// // //   const get = async () => {
// // //     const response = await User_StateGet();
// // //     const state_map = response.map((i) => i.state);
// // //     setStatedata(response);
// // //     setState(state_map);
// // //   };

// // //   const dist = async () => {
// // //     const dist_map_data = statedata.filter((i) => i.state === inputstate);
// // //     const dist_array = dist_map_data.map((i) => i.district);
// // //     setCurrentDict(dist_array[0]);

// // //     const response1 = await User_CasteGet();
// // //     // console.log(response1, "******** response1 *******");
// // //     const filter_caste = response1.filter((i) => i.state === inputstate);
// // //     const caste_array = filter_caste.map((i) => i.caste);
// // //     setCurrentcastet(caste_array[0]);
// // //   };

// // //   useEffect(() => {
// // //     get();
// // //   }, []);

// // //   useEffect(() => {
// // //     dist();
// // //   }, [inputstate]);

// // //   const search = async (value) => {
// // //     const response = await UserDataGetwt();

// // //     console.log(response,'******** search *******')

// // //     const filter = response.filter((i) => {
// // //       return (
// // //         (!value.gender || i.gender === value.gender) &&
// // //         (!value.minage || i.age >= value.minage) &&
// // //         (!value.maxage || i.age <= value.maxage) &&
// // //         (!value.state || i.state === value.state) &&
// // //         (!value.caste || i.caste === value.caste) &&
// // //         (!value.district || i.disttrict === value.district) &&
// // //         (!value.religion || i.religion === value.religion)
// // //       );
// // //     });
// // //     setData(filter.slice(0, 8));
// // //     console.log(filter, "******** value *******");
// // //   };

// // //   return (
// // //     <div className="home-container">
// // //       {/* Hero Section */}
// // //       <div className="hero-section">
// // //         <div className="overlay"></div>
// // //         <div className="hero-content">
// // //           <h1 className="logo11">
// // //             {/* <marquee behavior="alternate" direction="right"> */}
// // //             Metromonials
// // //             {/* </marquee> */}
// // //           </h1>
// // //           <p className="description1">
// // //             {/* <marquee behavior="scroll" direction="right"> */}
// // //             "Discover endless possibilities for love with SWAYAMWARA
// // //             Matrimonials — Where perfect matches are made!" {/* </marquee> */}
// // //           </p>
// // //           <Link to="/User_Reg/885695" target="_blank">
// // //             <button className="register-btn">Sign Up!</button>
// // //           </Link>
// // //         </div>
// // //         <div className="top-links">
// // //           <Link to="/User_Reg/885695">Sign Up</Link> ||{" "}
// // //           <Link to="/User_Login">Login</Link>
// // //         </div>
// // //       </div>

// // //       {/* Search Section */}
// // //       <div className="search-section">
// // //         <Form layout="vertical" className="search-form" onFinish={search}>
// // //           <div className="search-filters">
// // //             <Form.Item
// // //               name="gender"
// // //               label="Gender"
// // //               rules={[{ required: true }]}
// // //             >
// // //               <Select placeholder="Select Gender" allowClear>
// // //                 <Option value="Male">Male</Option>
// // //                 <Option value="Female">Female</Option>
// // //               </Select>
// // //             </Form.Item>

// // //             <Form.Item name="minage" label="Age From">
// // //               <Input type="number" placeholder="Min Age" />
// // //             </Form.Item>

// // //             <Form.Item name="maxage" label="Age To">
// // //               <Input type="number" placeholder="Max Age" />
// // //             </Form.Item>

// // //             <Form.Item
// // //               name="religion"
// // //               label="Religion"
// // //               rules={[{ required: true }]}
// // //             >
// // //               <Select placeholder="Select Religion" allowClear>
// // //                 <Option value="Hindu">Hindu</Option>
// // //                 <Option value="Muslim">Muslim</Option>
// // //                 <Option value="Christian">Christian</Option>
// // //                 <Option value="Sikh">Sikh</Option>
// // //                 <Option value="Other">Other</Option>
// // //               </Select>
// // //             </Form.Item>

// // //             <Form.Item
// // //               label="Select State"
// // //               name="state"
// // //               rules={[{ required: true }]}
// // //               // rules={[{ required: true, message: "Please select your state" }]}
// // //             >
// // //               <Select
// // //                 placeholder="Select your state"
// // //                 onChange={(value) => setinputState(value)}
// // //               >
// // //                 {state.map((state) => (
// // //                   <Option key={state} value={state}>
// // //                     {state}
// // //                   </Option>
// // //                 ))}
// // //               </Select>
// // //             </Form.Item>

// // //             <Form.Item
// // //               label="Select District"
// // //               name="district"
// // //               // rules={[
// // //               //   { required: true, message: "Please select your district" },
// // //               // ]}
// // //             >
// // //               <Select placeholder="Select your district" allowClear>
// // //                 {Array.isArray(currentdict) && currentdict.map ? (
// // //                   currentdict.some(Boolean) ? (
// // //                     currentdict.map((district) => (
// // //                       <Option key={district} value={district}>
// // //                         {district}
// // //                       </Option>
// // //                     ))
// // //                   ) : (
// // //                     <Option disabled value="">
// // //                       No districts available
// // //                     </Option>
// // //                   )
// // //                 ) : (
// // //                   <Option disabled value="">
// // //                     No districts available
// // //                   </Option>
// // //                 )}
// // //               </Select>
// // //             </Form.Item>

// // //             <Form.Item name="caste" label="Caste" rules={[{ required: true }]}>
// // //               <Select
// // //                 placeholder="Select your caste"
// // //                 showSearch
// // //                 allowClear
// // //                 optionFilterProp="children"
// // //                 filterOption={(input, option) =>
// // //                   option?.children?.toLowerCase().includes(input.toLowerCase())
// // //                 }
// // //               >
// // //                 {Array.isArray(caste) && caste.map ? (
// // //                   caste.some(Boolean) ? (
// // //                     caste.map((caste) => (
// // //                       <Option key={caste} value={caste}>
// // //                         {caste}
// // //                       </Option>
// // //                     ))
// // //                   ) : (
// // //                     <Option disabled value="">
// // //                       No caste available
// // //                     </Option>
// // //                   )
// // //                 ) : (
// // //                   <Option disabled value="">
// // //                     No caste available
// // //                   </Option>
// // //                 )}
// // //               </Select>
// // //             </Form.Item>

// // //             <Form.Item>
// // //               <Button
// // //                 type="primary"
// // //                 htmlType="submit"
// // //                 className="Search-Button-Filter"
// // //               >
// // //                 <FaSearch /> Search
// // //               </Button>
// // //             </Form.Item>
// // //           </div>
// // //         </Form>
// // //       </div>

// // //       {/* Results Section */}
// // //       <div className="results-section1">
// // //         <div className="cards-container1" >
// // //           {data.map((item, index) => (
// // //             <Link
// // //               to={`/User_Data_wl/${item.User_id}`} // 👈 Static link
// // //               key={index}
// // //               style={{ textDecoration: "none", color: "inherit" }}
// // //             >
// // //               <Card
// // //                 bordered={false}
// // //                 className="user-card"
// // //                 hoverable
// // //                 data-aos="zoom-out-down"
// // //               >
// // //                 <div
// // //                   className="user-card-img"
// // //                   style={{ backgroundImage: `url(${baseurl}${item.pic})` }}
// // //                 ></div>
// // //                 <div className="user-card-content">
// // //                   <p className="user-card-job">
// // //                     Name: {item.username} , Age: {item.age}
// // //                   </p>
// // //                   {/* <p className="user-card-job"> Age: {item.age}</p> */}
// // //                   <p className="user-card-job">Job Type: {item.job_type}</p>
// // //                   {/* <p className="user-card-job">Job Type: {item.job_type}</p> */}
// // //                 </div>
// // //               </Card>
// // //             </Link>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <About/>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default Home_Page_WLog;

// // import React, { useState, useEffect } from "react";
// // import { FaSearch } from "react-icons/fa";
// // import { Form, Select, Input, Button, Spin, Card } from "antd";
// // import Swal from "sweetalert2";
// // import { Link } from "react-router-dom";
// // import CardSlider from "../Header/CardSlider";
// // import { UserDataGetwt, User_StateGet, User_CasteGet } from "../Api/CoreApi";
// // import Footer from "../Footer/Footer";
// // import About from "../About/About";
// // import "../Home_Page/Home_Page_WLog.css";

// // const { Option } = Select;

// // const Home_Page_WLog = () => {
// //   const baseurl = "http://127.0.0.1:8000/";

// //   const [statedata, setStatedata] = useState([]);
// //   const [state, setState] = useState([]);
// //   const [inputstate, setinputState] = useState([]);
// //   const [currentdict, setCurrentDict] = useState([]);
// //   const [caste, setCurrentcastet] = useState([]);
// //   const [data, setData] = useState([]);
// //   // console.log(caste, "******** caste *******");

// //   const get = async () => {
// //     const response = await User_StateGet();
// //     const state_map = response.map((i) => i.state);
// //     setStatedata(response);
// //     setState(state_map);
// //   };

// //   const dist = async () => {
// //     const dist_map_data = statedata.filter((i) => i.state === inputstate);
// //     const dist_array = dist_map_data.map((i) => i.district);
// //     setCurrentDict(dist_array[0]);

// //     const response1 = await User_CasteGet();
// //     // console.log(response1, "******** response1 *******");
// //     const filter_caste = response1.filter((i) => i.state === inputstate);
// //     const caste_array = filter_caste.map((i) => i.caste);
// //     setCurrentcastet(caste_array[0]);
// //   };

// //   useEffect(() => {
// //     get();
// //   }, []);

// //   useEffect(() => {
// //     dist();
// //   }, [inputstate]);

// //   const search = async (value) => {
// //     const response = await UserDataGetwt();

// //     const filter = response.filter((i) => {
// //       return (
// //         (!value.gender || i.gender === value.gender) &&
// //         (!value.minage || i.age >= value.minage) &&
// //         (!value.maxage || i.age <= value.maxage) &&
// //         (!value.state || i.state === value.state) &&
// //         (!value.caste || i.caste === value.caste) &&
// //         (!value.district || i.disttrict === value.district) &&
// //         (!value.religion || i.religion === value.religion)
// //       );
// //     });
// //     setData(filter);
// //     // console.log(filter, "******** value *******");
// //   };

// //   return (
// //     <div className="home-container">
// //       {/* Hero Section */}
// //       <div className="hero-section">
// //         <div className="overlay"></div>
// //         <div className="hero-content">
// //           <h1 className="logo11">
// //             {/* <marquee behavior="alternate" direction="right"> */}
// //             Metromonilas
// //             {/* </marquee> */}
// //           </h1>
// //           <p className="description1">
// //             {/* <marquee behavior="scroll" direction="right"> */}
// //             With over SWAYAMWARA is great for finding the perfect Life Partner!
// //             {/* </marquee> */}
// //           </p>
// //           <Link to="/User_Reg/885695" target="_blank">
// //             <button className="register-btn">Register Now!</button>
// //           </Link>
// //         </div>
// //         <div className="top-links">
// //           <Link to="/User_Reg/885695">Sign in</Link> ||{" "}
// //           <Link to="/User_Login">Login</Link>
// //         </div>
// //       </div>

// //       {/* Search Section */}
// //       <div className="search-section">
// //         <Form layout="vertical" className="search-form" onFinish={search}>
// //           <div className="search-filters">
// //             <Form.Item name="gender" label="Gender">
// //               <Select placeholder="Select Gender" allowClear>
// //                 <Option value="Male">Male</Option>
// //                 <Option value="Female">Female</Option>
// //               </Select>
// //             </Form.Item>

// //             <Form.Item name="minage" label="Age From">
// //               <Input type="number" placeholder="Min Age" />
// //             </Form.Item>

// //             <Form.Item name="maxage" label="Age To">
// //               <Input type="number" placeholder="Max Age" />
// //             </Form.Item>

// //             <Form.Item name="religion" label="Religion">
// //               <Select placeholder="Select Religion" allowClear>
// //                 <Option value="Hindu">Hindu</Option>
// //                 <Option value="Muslim">Muslim</Option>
// //                 <Option value="Christian">Christian</Option>
// //                 <Option value="Sikh">Sikh</Option>
// //                 <Option value="Other">Other</Option>
// //               </Select>
// //             </Form.Item>

// //             <Form.Item
// //               label="Select State"
// //               name="state"
// //               // rules={[{ required: true, message: "Please select your state" }]}
// //             >
// //               <Select
// //                 placeholder="Select your state"
// //                 onChange={(value) => setinputState(value)}
// //               >
// //                 {state.map((state) => (
// //                   <Option key={state} value={state}>
// //                     {state}
// //                   </Option>
// //                 ))}
// //               </Select>
// //             </Form.Item>

// //             <Form.Item
// //               label="Select District"
// //               name="district"
// //               // rules={[
// //               //   { required: true, message: "Please select your district" },
// //               // ]}
// //             >
// //               <Select placeholder="Select your district" allowClear>
// //                 {Array.isArray(currentdict) && currentdict.map ? (
// //                   currentdict.some(Boolean) ? (
// //                     currentdict.map((district) => (
// //                       <Option key={district} value={district}>
// //                         {district}
// //                       </Option>
// //                     ))
// //                   ) : (
// //                     <Option disabled value="">
// //                       No districts available
// //                     </Option>
// //                   )
// //                 ) : (
// //                   <Option disabled value="">
// //                     No districts available
// //                   </Option>
// //                 )}
// //               </Select>
// //             </Form.Item>

// //             <Form.Item name="caste" label="Caste">
// //               <Select
// //                 placeholder="Select your caste"
// //                 showSearch
// //                 allowClear
// //                 optionFilterProp="children"
// //                 filterOption={(input, option) =>
// //                   option?.children?.toLowerCase().includes(input.toLowerCase())
// //                 }
// //               >
// //                 {Array.isArray(caste) && caste.map ? (
// //                   caste.some(Boolean) ? (
// //                     caste.map((caste) => (
// //                       <Option key={caste} value={caste}>
// //                         {caste}
// //                       </Option>
// //                     ))
// //                   ) : (
// //                     <Option disabled value="">
// //                       No caste available
// //                     </Option>
// //                   )
// //                 ) : (
// //                   <Option disabled value="">
// //                     No caste available
// //                   </Option>
// //                 )}
// //               </Select>
// //             </Form.Item>

// //             <Form.Item>
// //               <Button
// //                 type="primary"
// //                 htmlType="submit"
// //                 className="Search-Button-Filter"
// //               >
// //                 <FaSearch /> Search
// //               </Button>
// //             </Form.Item>
// //           </div>
// //         </Form>
// //       </div>

// //       {/* Results Section */}
// //       <div className="results-section">
// //         <div className="cards-container">
// //           {data.map((item, index) => (
// //             <Link
// //               to={`/User_Data_wl/${item.User_id}`} // 👈 Static link
// //               key={index}
// //               style={{ textDecoration: "none", color: "inherit" }}
// //             >
// //               <Card
// //                 bordered={false}
// //                 className="user-card"
// //                 hoverable
// //                 data-aos="zoom-out-down"
// //               >
// //                 <div
// //                   className="user-card-img"
// //                   style={{ backgroundImage: `url(${baseurl}${item.pic})` }}
// //                 ></div>
// //                 <div className="user-card-content">
// //                   <p className="user-card-job">
// //                     Name: {item.username} , Age: {item.age}
// //                   </p>
// //                   {/* <p className="user-card-job"> Age: {item.age}</p> */}
// //                   <p className="user-card-job">Job Type: {item.job_type}</p>
// //                   {/* <p className="user-card-job">Job Type: {item.job_type}</p> */}
// //                 </div>
// //               </Card>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>

// //       <About />
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Home_Page_WLog;

// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import { Form, Select, Input, Button, Spin, Card } from "antd";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
// import CardSlider from "../Header/CardSlider";
// import { UserDataGetwt, User_StateGet, User_CasteGet } from "../Api/CoreApi";
// import Footer from "../Footer/Footer";
// import "../Home_Page/Home_Page_WLog.css";
// import About from "../About/About";

// const { Option } = Select;

// const Home_Page_WLog = () => {
//   const baseurl = "http://127.0.0.1:8000/";

//   const [statedata, setStatedata] = useState([]);
//   const [state, setState] = useState([]);
//   const [inputstate, setinputState] = useState([]);
//   const [currentdict, setCurrentDict] = useState([]);
//   const [caste, setCurrentcastet] = useState([]);
//   const [data, setData] = useState([]);
//   // console.log(caste, "******** caste *******");

//   const get = async () => {
//     const response = await User_StateGet();
//     const state_map = response.map((i) => i.state);
//     setStatedata(response);
//     setState(state_map);
//   };

//   const dist = async () => {
//     const dist_map_data = statedata.filter((i) => i.state === inputstate);
//     const dist_array = dist_map_data.map((i) => i.district);
//     setCurrentDict(dist_array[0]);

//     const response1 = await User_CasteGet();
//     // console.log(response1, "******** response1 *******");
//     const filter_caste = response1.filter((i) => i.state === inputstate);
//     const caste_array = filter_caste.map((i) => i.caste);
//     setCurrentcastet(caste_array[0]);
//   };

//   useEffect(() => {
//     get();
//   }, []);

//   useEffect(() => {
//     dist();
//   }, [inputstate]);

//   const search = async (value) => {
//     const response = await UserDataGetwt();

//     const filter = response.filter((i) => {
//       return (
//         (!value.gender || i.gender === value.gender) &&
//         (!value.minage || i.age >= value.minage) &&
//         (!value.maxage || i.age <= value.maxage) &&
//         (!value.state || i.state === value.state) &&
//         (!value.caste || i.caste === value.caste) &&
//         (!value.district || i.disttrict === value.district) &&
//         (!value.religion || i.religion === value.religion)
//       );
//     });
//     setData(filter);
//     // console.log(filter, "******** value *******");
//   };

//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="overlay"></div>
//         <div className="hero-content">
//           <h1 className="logo11">
//             {/* <marquee behavior="alternate" direction="right"> */}
//             Metromonilas
//             {/* </marquee> */}
//           </h1>
//           <p className="description1">
//             {/* <marquee behavior="scroll" direction="right"> */}
//             With over SWAYAMWARA is great for finding the perfect Life Partner!
//             {/* </marquee> */}
//           </p>
//           <Link to="/User_Reg" target="_blank">
//             <button className="register-btn">Register Now!</button>
//           </Link>
//         </div>
//         <div className="top-links">
//           <Link to="/User_Reg">Sign in</Link> ||{" "}
//           <Link to="/User_Login">Login</Link>
//         </div>
//       </div>

//       {/* Search Section */}
//       <div className="search-section">
//         <Form layout="vertical" className="search-form" onFinish={search}>
//           <div className="search-filters">
//             <Form.Item
//               name="gender"
//               label="Gender"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please select your gender",
//                 },
//               ]}
//             >
//               <Select placeholder="Select Gender" allowClear>
//                 <Option value="Male">Male</Option>
//                 <Option value="Female">Female</Option>
//               </Select>
//             </Form.Item>

//             <Form.Item name="minage" label="Age From">
//               <Input type="number" placeholder="Min Age" />
//             </Form.Item>

//             <Form.Item name="maxage" label="Age To">
//               <Input type="number" placeholder="Max Age" />
//             </Form.Item>

//             <Form.Item
//               name="religion"
//               label="Religion"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please select your religion",
//                 },
//               ]}
//             >
//               <Select placeholder="Select Religion" allowClear>
//                 <Option value="Hindu">Hindu</Option>
//                 <Option value="Muslim">Muslim</Option>
//                 <Option value="Christian">Christian</Option>
//                 <Option value="Sikh">Sikh</Option>
//                 <Option value="Other">Other</Option>
//               </Select>
//             </Form.Item>

//             <Form.Item
//               label="Select State"
//               name="state"
//               rules={[{ required: true, message: "Please select your state" }]}
//             >
//               <Select
//                 placeholder="Select your state"
//                 onChange={(value) => setinputState(value)}
//               >
//                 {state.map((state) => (
//                   <Option key={state} value={state}>
//                     {state}
//                   </Option>
//                 ))}
//               </Select>
//             </Form.Item>

//             <Form.Item
//               label="Select District"
//               name="district"

//             >
//               <Select placeholder="Select your district" allowClear>
//                 {Array.isArray(currentdict) && currentdict.map ? (
//                   currentdict.some(Boolean) ? (
//                     currentdict.map((district) => (
//                       <Option key={district} value={district}>
//                         {district}
//                       </Option>
//                     ))
//                   ) : (
//                     <Option disabled value="">
//                       No districts available
//                     </Option>
//                   )
//                 ) : (
//                   <Option disabled value="">
//                     No districts available
//                   </Option>
//                 )}
//               </Select>
//             </Form.Item>

//             <Form.Item
//               name="caste"
//               label="Caste"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please select your caste",
//                 },
//               ]}
//             >
//               <Select
//                 placeholder="Select your caste"
//                 showSearch
//                 allowClear
//                 optionFilterProp="children"
//                 filterOption={(input, option) =>
//                   option?.children?.toLowerCase().includes(input.toLowerCase())
//                 }
//               >
//                 {Array.isArray(caste) && caste.map ? (
//                   caste.some(Boolean) ? (
//                     caste.map((caste) => (
//                       <Option key={caste} value={caste}>
//                         {caste}
//                       </Option>
//                     ))
//                   ) : (
//                     <Option disabled value="">
//                       No caste available
//                     </Option>
//                   )
//                 ) : (
//                   <Option disabled value="">
//                     No caste available
//                   </Option>
//                 )}
//               </Select>
//             </Form.Item>

//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="Search-Button-Filter"
//               >
//                 <FaSearch /> Search
//               </Button>
//             </Form.Item>
//           </div>
//         </Form>
//       </div>

//       {/* Results Section */}
//       <div className="results-section">
//         <div className="cards-container">
//           {data.map((item, index) => (
//             <Link
//               to={`/User_Data_wl/${item.User_id}`} // 👈 Static link
//               key={index}
//               style={{ textDecoration: "none", color: "inherit" }}
//             >
//               <Card
//                 bordered={false}
//                 className="user-card"
//                 hoverable
//                 data-aos="zoom-out-down"
//               >
//                 <div
//                   className="user-card-img"
//                   style={{ backgroundImage: `url(${baseurl}${item.pic})` }}
//                 ></div>
//                 <div className="user-card-content">
//                   <p className="user-card-job">
//                     Name: {item.username} , Age: {item.age}
//                   </p>
//                   {/* <p className="user-card-job"> Age: {item.age}</p> */}
//                   <p className="user-card-job">Job Type: {item.job_type}</p>
//                   {/* <p className="user-card-job">Job Type: {item.job_type}</p> */}
//                 </div>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Additional Components */}
//       <About />
//       <Footer />
//     </div>
//   );
// };

// export default Home_Page_WLog;

// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import { Form, Select, Input, Button, Spin, Card } from "antd";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
// import CardSlider from "../Header/CardSlider";
// import { UserDataGetwt, User_StateGet, User_CasteGet } from "../Api/CoreApi";
// import Footer from "../Footer/Footer";
// import "../Home_Page/Home_Page_WLog.css";
// import About from "../About/About";

// const { Option } = Select;

// const Home_Page_WLog = () => {
//   const baseurl = "http://127.0.0.1:8000/";

//   const [statedata, setStatedata] = useState([]);
//   const [state, setState] = useState([]);
//   const [inputstate, setinputState] = useState([]);
//   const [currentdict, setCurrentDict] = useState([]);
//   const [caste, setCurrentcastet] = useState([]);
//   const [data, setData] = useState([]);
//   // console.log(caste, "******** caste *******");

//   const get = async () => {
//     const response = await User_StateGet();
//     const state_map = response.map((i) => i.state);
//     setStatedata(response);
//     setState(state_map);
//   };

//   const dist = async () => {
//     const dist_map_data = statedata.filter((i) => i.state === inputstate);
//     const dist_array = dist_map_data.map((i) => i.district);
//     setCurrentDict(dist_array[0]);

//     const response1 = await User_CasteGet();
//     // console.log(response1, "******** response1 *******");
//     const filter_caste = response1.filter((i) => i.state === inputstate);
//     const caste_array = filter_caste.map((i) => i.caste);
//     setCurrentcastet(caste_array[0]);
//   };

//   useEffect(() => {
//     get();
//   }, []);

//   useEffect(() => {
//     dist();
//   }, [inputstate]);

//   const search = async (value) => {
//     const response = await UserDataGetwt();

//     const filter = response.filter((i) => {
//       return (
//         (!value.gender || i.gender === value.gender) &&
//         (!value.minage || i.age >= value.minage) &&
//         (!value.maxage || i.age <= value.maxage) &&
//         (!value.state || i.state === value.state) &&
//         (!value.caste || i.caste === value.caste) &&
//         (!value.district || i.disttrict === value.district) &&
//         (!value.religion || i.religion === value.religion)
//       );
//     });
//     setData(filter);
//     // console.log(filter, "******** value *******");
//   };

//   return (
//     <div className="home-container">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="overlay"></div>
//         <div className="hero-content">
//           <h1 className="logo11">
//             {/* <marquee behavior="alternate" direction="right"> */}
//             Metromonilas
//             {/* </marquee> */}
//           </h1>
//           <p className="description1">
//             {/* <marquee behavior="scroll" direction="right"> */}
//             With over SWAYAMWARA is great for finding the perfect Life Partner!
//             {/* </marquee> */}
//           </p>
//           <Link to="//User_Reg/885695" target="_blank">
//             <button className="register-btn">Register Now!</button>
//           </Link>
//         </div>
//         <div className="top-links">
//           <Link to="//User_Reg/885695">Sign in</Link> ||{" "}
//           <Link to="/User_Login">Login</Link>
//         </div>
//       </div>

//       {/* Search Section */}
//       <div className="search-section">
//         <Form layout="vertical" className="search-form" onFinish={search}>
//           <div className="search-filters">
//             <Form.Item name="gender" label="Gender">
//               <Select placeholder="Select Gender" allowClear>
//                 <Option value="Male">Male</Option>
//                 <Option value="Female">Female</Option>
//               </Select>
//             </Form.Item>

//             <Form.Item name="minage" label="Age From">
//               <Input type="number" placeholder="Min Age" />
//             </Form.Item>

//             <Form.Item name="maxage" label="Age To">
//               <Input type="number" placeholder="Max Age" />
//             </Form.Item>

//             <Form.Item name="religion" label="Religion">
//               <Select placeholder="Select Religion" allowClear>
//                 <Option value="Hindu">Hindu</Option>
//                 <Option value="Muslim">Muslim</Option>
//                 <Option value="Christian">Christian</Option>
//                 <Option value="Sikh">Sikh</Option>
//                 <Option value="Other">Other</Option>
//               </Select>
//             </Form.Item>

//             <Form.Item
//               label="Select State"
//               name="state"
//               rules={[{ required: true, message: "Please select your state" }]}
//             >
//               <Select
//                 placeholder="Select your state"
//                 onChange={(value) => setinputState(value)}
//               >
//                 {state.map((state) => (
//                   <Option key={state} value={state}>
//                     {state}
//                   </Option>
//                 ))}
//               </Select>
//             </Form.Item>

//             <Form.Item
//               label="Select District"
//               name="district"
//               // rules={[
//               //   { required: true, message: "Please select your district" },
//               // ]}
//             >
//               <Select placeholder="Select your district" allowClear>
//                 {Array.isArray(currentdict) && currentdict.map ? (
//                   currentdict.some(Boolean) ? (
//                     currentdict.map((district) => (
//                       <Option key={district} value={district}>
//                         {district}
//                       </Option>
//                     ))
//                   ) : (
//                     <Option disabled value="">
//                       No districts available
//                     </Option>
//                   )
//                 ) : (
//                   <Option disabled value="">
//                     No districts available
//                   </Option>
//                 )}
//               </Select>
//             </Form.Item>

//             <Form.Item
//               name="caste"
//               label="Caste"
//               rules={[{ required: true, message: "Please select your state" }]}
//             >
//               <Select
//                 placeholder="Select your caste"
//                 showSearch
//                 allowClear
//                 optionFilterProp="children"
//                 filterOption={(input, option) =>
//                   option?.children?.toLowerCase().includes(input.toLowerCase())
//                 }
//               >
//                 {Array.isArray(caste) && caste.map ? (
//                   caste.some(Boolean) ? (
//                     caste.map((caste) => (
//                       <Option key={caste} value={caste}>
//                         {caste}
//                       </Option>
//                     ))
//                   ) : (
//                     <Option disabled value="">
//                       No caste available
//                     </Option>
//                   )
//                 ) : (
//                   <Option disabled value="">
//                     No caste available
//                   </Option>
//                 )}
//               </Select>
//             </Form.Item>

//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="Search-Button-Filter"
//               >
//                 <FaSearch /> Search
//               </Button>
//             </Form.Item>
//           </div>
//         </Form>
//       </div>

//       {/* Results Section */}
//       <div className="results-section">
//         <div className="cards-container">
//           {data.map((item, index) => (
//             <Link
//               to={`/User_Data_wl/${item.User_id}`} // 👈 Static link
//               key={index}
//               style={{ textDecoration: "none", color: "inherit" }}
//             >
//               <Card
//                 bordered={false}
//                 className="user-card"
//                 hoverable
//                 data-aos="zoom-out-down"
//               >
//                 <div
//                   className="user-card-img"
//                   style={{ backgroundImage: `url(${baseurl}${item.pic})` }}
//                 ></div>
//                 <div className="user-card-content">
//                   <p className="user-card-job">
//                     Name: {item.username} , Age: {item.age}
//                   </p>
//                   {/* <p className="user-card-job"> Age: {item.age}</p> */}
//                   <p className="user-card-job">Job Type: {item.job_type}</p>
//                   {/* <p className="user-card-job">Job Type: {item.job_type}</p> */}
//                 </div>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Additional Components */}
//       <About />
//       <Footer />
//     </div>
//   );
// };

// export default Home_Page_WLog;
