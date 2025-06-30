// import React from "react";
// import "../Home_Page/Myprofile.css";
// import profilePlaceholder from "../Assets/wedding2.jpeg";
// import { FaEdit } from "react-icons/fa";
// import React, { useState } from "react";
// const Myprofile = () => {

//     const [profileImage, setProfileImage] = useState(profilePlaceholder);

//     const handleImageUpload = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = () => {
//           setProfileImage(reader.result);
//         };
//         reader.readAsDataURL(file);
//       }
//     };
//   return (
//     <>
//       <div>

//       <div className="profile-card">
//           {/* Profile Image Section */}
//           <div className="profile-image">
//             <img src={profileImage} alt="Profile" />
//             <input
//               type="file"
//               id="upload"
//               accept="image/*"
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//             />
//             <label htmlFor="upload" className="upload-btn">Upload Photo</label>
//           </div>

//           {/* Profile Details Section */}
//           <div className="profile-details">
//             <h2>Rohit Kumar Navratna</h2>
//             <p>23 Yrs, 5' 06" (167 cm)</p>
//             <p>India, Madhya Pradesh, Bhopal</p>
//             <div className="contact">
//               <span className="phone-icon">📞</span>
//               <span className="phone-number">+91-8959225934</span>
//               <span className="edit-icon">✏️</span>
//             </div>
//           </div>

//           {/* Profile Preview Section */}
//           <div className="profile-preview">
//             <p>How your profile looks to others</p>
//             <button className="preview-btn">Profile Preview</button>
//           </div>
//         </div>

//         <div className="profile-container">
//           {/* About Me Section */}
//           <div className="profile-section">
//             <div className="section-header">
//               <h2>About Me</h2>
//               <FaEdit className="edit-icon" />
//             </div>
//             <p>
//               I am currently living in India. I am a smart and dynamic boy who
//               respects his culture very much. I belong to a simple Hindi family.
//             </p>
//           </div>

//           {/* Basic Information Section */}
//           <div className="profile-section">
//             <div className="section-header">
//               <h2>Basics Information</h2>
//               <FaEdit className="edit-icon" />
//             </div>
//             <div className="info-grid">
//               <div>
//                 <p>
//                   <strong>Gender:</strong> Male
//                 </p>
//                 <p>
//                   <strong>Age:</strong> 23
//                 </p>
//                 <p>
//                   <strong>Date of Birth:</strong> 09-Jun-2001
//                 </p>
//                 <p>
//                   <strong>Marital Status:</strong> Never Married
//                 </p>
//                 <p>
//                   <strong>Citizenship:</strong> -
//                 </p>
//                 <p>
//                   <strong>Immigration Status:</strong> -
//                 </p>
//                 <p>
//                   <strong>Height:</strong> 5' 06" (167 cm)
//                 </p>
//                 <p>
//                   <strong>Complexion:</strong> Not Specified
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   <strong>Blood Group:</strong> -
//                 </p>
//                 <p>
//                   <strong>Special Case:</strong> Not Specified
//                 </p>
//                 <p>
//                   <strong>Body Type:</strong> Not Specified
//                 </p>
//                 <p>
//                   <strong>Body Weight:</strong> Not Specified
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Life Style Section */}
//           <div className="profile-section">
//             <div className="section-header">
//               <h2>Life Style</h2>
//               <FaEdit className="edit-icon" />
//             </div>
//             <div className="info-grid">
//               <div>
//                 <p>
//                   <strong>Living Situation:</strong> Not Specified
//                 </p>
//                 <p>
//                   <strong>Diet:</strong> Vegetarian
//                 </p>
//                 <p>
//                   <strong>Smoke:</strong> Not Specified
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   <strong>House Ownership:</strong> Not Specified
//                 </p>
//                 <p>
//                   <strong>Drink:</strong> Not Specified
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Religious Background Section */}
//           <div className="profile-section">
//             <div className="section-header">
//               <h2>Religious Background</h2>
//               <FaEdit className="edit-icon" />
//             </div>
//             <div className="info-grid">
//               <div>
//                 <p>
//                   <strong>Religion:</strong> Hindu
//                 </p>
//                 <p>
//                   <strong>Caste:</strong> Satnami
//                 </p>
//                 <p>
//                   <strong>Sub-Community:</strong> Not Specified
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   <strong>Gothra / Gothram:</strong> Not Specified
//                 </p>
//                 <p>
//                   <strong>Mother Tongue:</strong> Hindi
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Myprofile;

// import React, { useState } from "react";
// import "../Home_Page/Myprofile.css";
// import profilePlaceholder from "../Assets/wedding2.jpeg";
// import { FaEdit } from "react-icons/fa";

// const MyProfile = () => {
//   const [profileImage, setProfileImage] = useState(profilePlaceholder);
//   const [modalData, setModalData] = useState(null);
//   const [sections, setSections] = useState({
//     "About Me": "I am currently living in India. I am a smart and dynamic boy who respects his culture very much. I belong to a simple Hindi family.",
//     "Basic Information": {
//       Gender: "Male",
//       Age: "23",
//       "Date of Birth": "09-Jun-2001",
//       "Marital Status": "Never Married",
//       Height: "5' 06\" (167 cm)",
//       Complexion: "Not Specified",
//     },
//     "Life Style": { Diet: "Vegetarian", Smoke: "Not Specified", Drink: "Not Specified" },
//     "Religious Background": { Religion: "Hindu", Caste: "Satnami", "Mother Tongue": "Hindi" },
//   });

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleEditClick = (title, details) => {
//     setModalData({ title, details });
//   };

//   const handleSaveChanges = (updatedData) => {
//     setSections((prevSections) => ({
//       ...prevSections,
//       [modalData.title]: updatedData,
//     }));
//     setModalData(null);
//   };

//   return (
//     <div className="profile-wrapper">
//       <div className="profile-card">
//         <div className="profile-image">
//           <img src={profileImage} alt="Profile" />
//           <input type="file" id="upload" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
//           <label htmlFor="upload" className="upload-btn">Upload Photo</label>
//         </div>
//         <div className="profile-details">
//           <h2>Rohit Kumar Navratna</h2>
//           <p>23 Yrs, 5' 06" (167 cm)</p>
//           <p>India, Madhya Pradesh, Bhopal</p>
//           <div className="contact">
//             <span className="phone-icon">📞</span>
//             <span className="phone-number">+91-8959225934</span>
//             <FaEdit className="edit-icon" />
//           </div>
//         </div>
//       </div>
//       <div className="profile-container">
//         {Object.entries(sections).map(([title, details]) => (
//           <ProfileSection key={title} title={title} details={details} onEdit={handleEditClick} />
//         ))}
//       </div>
//       {modalData && <EditModal data={modalData} onSave={handleSaveChanges} onClose={() => setModalData(null)} />}
//     </div>
//   );
// };

// const ProfileSection = ({ title, details, onEdit }) => (
//   <div className="profile-section">
//     <div className="section-header">
//       <h2>{title}</h2>
//       <FaEdit className="edit-icon" onClick={() => onEdit(title, details)} />
//     </div>
//     {typeof details === "string" ? <p>{details}</p> : (
//       <div className="info-grid">
//         {Object.entries(details).map(([key, value]) => (
//           <p key={key}><strong>{key}:</strong> {value}</p>
//         ))}
//       </div>
//     )}
//   </div>
// );

// const EditModal = ({ data, onSave, onClose }) => {
//   const [formData, setFormData] = useState(data.details);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => (typeof prev === "string" ? value : { ...prev, [name]: value }));
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h2>Edit {data.title}</h2>
//         {typeof formData === "string" ? (
//           <textarea value={formData} onChange={handleChange} />
//         ) : (
//           Object.entries(formData).map(([key, value]) => (
//             <div key={key}>
//               <label>{key}</label>
//               <input type="text" name={key} value={value} onChange={handleChange} />
//             </div>
//           ))
//         )}
//         <div className="modal-actions">
//           <button onClick={() => onSave(formData)}>Save</button>
//           <button onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;


import React from "react";
import { useState } from "react";
import { Button, Input, Form } from "antd";

function Myprofile() {
  const User = [
    {
     
    },
  ];

  console.log(User, "******* User *******");

  const [detail, setDetail] = useState(0);
  const [pop, setPop] = useState(1);
  const [pop1, setPop1] = useState(0);

  const [form] = Form.useForm();

  const edit = (value) => {
    form.setFieldsValue(value);
    setPop1(1);
    console.log(value,'***** value ******')
  };

  const edit1 = (value) => {
    form.setFieldsValue(value);
    setPop1(1+1);
    console.log(value,'***** value ******')
  };

  const submit = (value) => {
    console.log(value, "***** value ******");
    setPop1(0);
  };
  return (
    <div>
      {pop === 1 && (
        <div>
          {User.map((i) => (
            <>
              <p>{i.username}</p>
              <Button onClick={() => edit(i)}>Edit</Button>
            </>
          ))}
        </div>
      )}
      {pop1 === 1 && (
        <Form form={form} onFinish={submit}>
          <Form.Item name="username">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Save</Button>
          </Form.Item>
        </Form>
      )}
      {pop === 1 && (
        <div>
          {User.map((i) => (
            <>
              <p>{i.username}</p>
              <Button onClick={() => edit1(i)}>Edit</Button>
            </>
          ))}
        </div>
      )}
      {pop1 === 2 && (
        <Form form={form} onFinish={submit}>
          <Form.Item name="username">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Save</Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}

export default Myprofile;


// import React, { useState } from "react";
// import "../Home_Page/Myprofile.css";
// import profilePlaceholder from "../Assets/wedding2.jpeg";
// import { FaEdit } from "react-icons/fa";

// const profileData = {
//   profile: {
//     name: "Rohit Kumar Navratna",
//     age: 23,
//     height: "5' 06\" (167 cm)",
//     location: {
//       country: "India",
//       state: "Madhya Pradesh",
//       city: "Bhopal",
//     },
//     contact: {
//       phone: "+91-8959225934",
//     },
//     image: profilePlaceholder,
//     about_me:
//       "I am currently living in India. I am a smart and dynamic boy who respects his culture very much. I belong to a simple Hindi family.",
//     basic_information: {
//       gender: "Male",
//       date_of_birth: "09-Jun-2001",
//       marital_status: "Never Married",
//       citizenship: "Not Specified",
//       immigration_status: "Not Specified",
//       complexion: "Not Specified",
//       blood_group: "Not Specified",
//       special_case: "Not Specified",
//       body_type: "Not Specified",
//       body_weight: "Not Specified",
//     },
//     lifestyle: {
//       living_situation: "Not Specified",
//       diet: "Vegetarian",
//       smoke: "Not Specified",
//       house_ownership: "Not Specified",
//       drink: "Not Specified",
//     },
//     religious_background: {
//       religion: "Hindu",
//       caste: "Satnami",
//       sub_community: "Not Specified",
//       gothra: "Not Specified",
//       mother_tongue: "Hindi",
//     },
//   },
// };

// const MyProfile = () => {
//   const [profileImage, setProfileImage] = useState(profileData.profile.image);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         {/* Profile Image Section */}
//         <div className="profile-image">
//           <img src={profileImage} alt="Profile" />
//           <input
//             type="file"
//             id="upload"
//             accept="image/*"
//             onChange={handleImageUpload}
//             style={{ display: "none" }}
//           />
//           <label htmlFor="upload" className="upload-btn">
//             Upload Photo
//           </label>
//         </div>

//         {/* Profile Details Section */}
//         <div className="profile-details">
//           <h2>{profileData.profile.name}</h2>
//           <p>
//             {profileData.profile.age} Yrs, {profileData.profile.height}
//           </p>
//           <p>
//             {profileData.profile.location.city},{" "}
//             {profileData.profile.location.state},{" "}
//             {profileData.profile.location.country}
//           </p>
//           <div className="contact">
//             <span className="phone-icon">📞</span>
//             <span className="phone-number">
//               {profileData.profile.contact.phone}
//             </span>
//             <span className="edit-icon">✏️</span>
//           </div>
//         </div>
//       </div>

//       {/* About Me Section */}
//       <div className="profile-section">
//         <div className="section-header">
//           <h2>About Me</h2>
//           <FaEdit className="edit-icon" />
//         </div>
//         <p>{profileData.profile.about_me}</p>
//       </div>

//       {/* Basic Information Section */}
//       <div className="profile-section">
//         <div className="section-header">
//           <h2>Basic Information</h2>
//           <FaEdit className="edit-icon" />
//         </div>
//         <div className="info-grid">
//           {Object.entries(profileData.profile.basic_information).map(
//             ([key, value]) => (
//               <p key={key}>
//                 <strong>{key.replace(/_/g, " ")}:</strong> {value}
//               </p>
//             )
//           )}
//         </div>
//       </div>

//       {/* Life Style Section */}
//       <div className="profile-section">
//         <div className="section-header">
//           <h2>Life Style</h2>
//           <FaEdit className="edit-icon" />
//         </div>
//         <div className="info-grid">
//           {Object.entries(profileData.profile.lifestyle).map(([key, value]) => (
//             <p key={key}>
//               <strong>{key.replace(/_/g, " ")}:</strong> {value}
//             </p>
//           ))}
//         </div>
//       </div>

//       {/* Religious Background Section */}
//       <div className="profile-section">
//         <div className="section-header">
//           <h2>Religious Background</h2>
//           <FaEdit className="edit-icon" />
//         </div>
//         <div className="info-grid">
//           {Object.entries(profileData.profile.religious_background).map(
//             ([key, value]) => (
//               <p key={key}>
//                 <strong>{key.replace(/_/g, " ")}:</strong> {value}
//               </p>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;
