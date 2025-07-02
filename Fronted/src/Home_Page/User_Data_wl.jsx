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
  const Navigate = useNavigate();

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
            <Link to="/User_Login">
              <p className="header-auth-link-signup">Login </p>
            </Link>
          </div>
        )}
      </div>
      <div className="content-padding">
        {data.map((i) => (
          <Card className="user-card" key={i.User_id}>
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
                  <Button
                    style={{ height: "33px", width: "100px" }}
                    onClick={() => id_navigate(i.User_id)}
                  >
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
