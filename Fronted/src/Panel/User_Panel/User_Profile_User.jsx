import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Select,
  Row,
  Col,
  Image,
  message,
  Upload,
  Layout,
  Dropdown,
  Menu,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";

import {
  FaFacebook,
  FaIndianRupeeSign,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  UserGet,
  UserUpdate,
  UserDataGet,
  UserDataUpdate,
  UserImagesGet,
  UserImagesPost,
  UserImagesUpdate,
  UserImagesRemove,
  UserData_Array_Update,
} from "../../Api/CoreApi";
import { useParams, Link, useNavigate } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import user_image from "../../Assets/wedding1.jpg";
import { SiGmail } from "react-icons/si";
import { UploadOutlined } from "@ant-design/icons";
import { FaTrash } from "react-icons/fa";
import "../User_Panel/User_Profile_User.css";
import { CameraOutlined, WindowsFilled } from "@ant-design/icons";

const { Option } = Select; // Destructure Option from Select
const { Header, Content } = Layout;

function User_Profile_User() {
  const Navigate = useNavigate();
  const [form] = Form.useForm();

  const baseurl = "http://127.0.0.1:8000/";
  const id = localStorage.getItem("user_id");
  // const id = useParams();
  const int_id = String(id);
  // console.log(int_id,'**** int_id')

  const [activeTab, setActiveTab] = useState(null);
  const [file, setFile] = useState(null); // Store file object
  console.log(file, "******** file *********");

  const [User, setUser] = useState([]);
  const [obj, setObj] = useState([]);
  const [image, setImage] = useState([]);
  console.log(User, "******* User ********");

  const get_user = async () => {
    const response = await UserGet();
    const filter = response.filter((i) => i.id === int_id);
    setUser(filter);
    // console.log(filter, '****** filter *****')
    setObj(filter[0]);
    const response1 = await UserDataGet();
    const filter_data = response1.filter((i) => i.User_id === int_id);
    console.log(filter_data, "******* filter_data ******");

    const user_name = filter.map((i) => i.username).join(", ");
    const user_password = filter.map((i) => i.password).join(", ");
    const user_balance = filter.map((i) => i.balance).join(", ");

    const data_id = filter_data.map((i) => i.User_id).join(", ");

    // const merged = { ...filter, ...filter_data };
    // const user_combine_get = { "username": user_name, "password": user_password }

    const add = {
      ...filter_data[0],
      // User_id: data_id,
      username: user_name,
      password: user_password,
      balance: user_balance,
    };
    form.setFieldsValue(add);
    setUser([add]);

    console.log(add, "******* data_id ******");
  };

  const get_user_image = async () => {
    const response = await UserImagesGet();
    const filter = response.filter((i) => i.user_id === int_id);
    console.log(filter, "***** filter *****");
    setImage(filter);
  };
  useEffect(() => {
    get_user();
    get_user_image();
  }, []);

  const submit = async (value) => {
    const response = await UserUpdate(id, value);
    const response1 = await UserDataUpdate(id, value);
    message.success("Success");
    get_user();
    // console.log(value, "**** value ******");
  };

  const Login_update = async (value) => {
    const response = await UserUpdate(id, value);
    message.success("Success");
    get_user();
  };

  const img_update = async (value) => {
    const formData = new FormData();

    Object.entries(value).forEach(([key, val]) => {
      formData.append(key, val);
    });

    const response = await UserUpdate(id, formData);
    setImage(response);
    // console.log(response, '********** formData *************')
    message.success("Success");
    get_user();
  };

  const user_img_post = async (value) => {
    const formData = new FormData();

    formData.append("user_id", id);
    Object.entries(value).forEach(([key, val]) => {
      formData.append(key, val);
    });

    console.log(value, "********** Post Image *************");

    const response = await UserImagesPost(formData);
    const filter = response.filter((i) => i.user_id === int_id);
    setImage(filter);
    console.log(response, "********** formData *************");
    message.success("Success");
    get_user();
  };

  const user_img_delete = async (value) => {
    console.log(value, "********** value *************");

    const response = await UserImagesRemove(value);
    const filter = response.filter((i) => i.user_id === int_id);
    setImage(filter);
    message.success("Success");
    get_user();
  };

  const handleLogout = () => {
    localStorage.clear();

    // localStorage.removeItem("user_id");
    Navigate("/User_Login");
  };

  const menu = (
    <Menu>
      <Menu.Item key="3">
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  const handlecoverImage = async (info) => {
    const file = info.file.originFileObj || info.file;
    if (!file) return;
    const formData = new FormData();
    formData.append("cover_img", file); // ✅ match your Django backend field name

    try {
      const response = await UserDataUpdate(int_id, formData);

      const filter = response.filter((i) => i.User_id === int_id);
      setUser(filter);
      console.log("✅ Upload success:", response);
    } catch (err) {
      console.error("❌ Upload failed:", err);
    }
  };

  return (
    <>
      <Layout
        style={{
          paddingTop: "65px",
          overflow: "hidden",
        }}
      >
        {/* Fixed Header */}
        <Header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            zIndex: 1000,
            backgroundColor: "#1da1f2",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ color: "white" }}>Restay</h1>
          </div>

          <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
            <MenuOutlined
              style={{ fontSize: "22px", color: "white", cursor: "pointer" }}
            />
          </Dropdown>
        </Header>

        {/* Scrollable Content */}
      </Layout>
      <div className="user-profile-container">
        {User.map((i) => (
          <Card className="profile-card" key={i.user_id}>
            {/* <Image className="cover-image" src={user_image} /> */}

            <div className="profile-image-container">
              <div className="cover-image-wrapper">
                <Image
                  className="cover-image"
                  src={`${baseurl}${i.cover_img}`}
                  preview={true}
                />
              </div>

              <Upload
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handlecoverImage}
              >
                <Button className="camera-icon" icon={<CameraOutlined />} />
              </Upload>
            </div>

            <Card className="profile-picture-card">
              <img
                className="profile-picture"
                src={`${baseurl}${i.pic}`}
                alt="profile"
              />
            </Card>

            <Form>
              <Form.Item className="upload-button-container">
                <Upload
                  beforeUpload={(file) => {
                    img_update({ pic: file }); // ✅ Send the actual file
                    return false; // Prevent auto upload
                  }}
                  showUploadList={false}
                >
                  <Button
                    className="upload-button"
                    icon={<UploadOutlined className="upload-icon" />}
                  />
                </Upload>
              </Form.Item>
            </Form>

            <h2 className="user-name">
              {i.firstname} 
            </h2>

            <div className="social-icons">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `https://yourdomain.com/${i.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp"
              >
                <FaWhatsapp />
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  `https://yourdomain.com/${i.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <FaFacebook />
              </a>

              <a
                href={`${i.instagram}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
              >
                <FaInstagram />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  `https://yourdomain.com/${i.id}`
                )}&text=Check%20this%20out!`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon twitter"
              >
                <FaTwitter />
              </a>
            </div>

            <Card className="tabs-container">
              <div className="tab-buttons">
                <Button
                  className="tab-button"
                  onClick={() => setActiveTab(null)}
                >
                  Gallery
                </Button>
                <Button
                  className="tab-button"
                  onClick={() => setActiveTab("profile")}
                >
                  Profile
                </Button>
                <Button
                  className="tab-button"
                  onClick={() => setActiveTab("Login_Details")}
                >
                  Login Details
                </Button>
                <Button
                  className="tab-button"
                  onClick={() => setActiveTab("family")}
                >
                  Family Details
                </Button>
                <Button
                  className="tab-button"
                  onClick={() => setActiveTab("address")}
                >
                  Address Detail
                </Button>
                <Button
                  className="tab-button"
                  onClick={() => setActiveTab("education")}
                >
                  Educations
                </Button>
              </div>

              {activeTab === null && (
                <div className="gallery-grid">
                  <Form>
                    <Form.Item style={{ marginLeft: "10px", marginTop: "0px" }}>
                      <Upload
                        beforeUpload={(file) => {
                          user_img_post({ images: file }); // ✅ Send the actual file
                          return false; // Prevent auto upload
                        }}
                        showUploadList={false}
                      >
                        <Button
                          style={{ width: "50px" }}
                          icon={<UploadOutlined style={{ fontSize: "22px" }} />}
                        ></Button>
                      </Upload>
                    </Form.Item>
                  </Form>
                  {image.map((img, index) => (
                    <div key={index} className="gallery-item">
                      <p>
                        <Image
                          className="gallery-image"
                          src={`${baseurl}${img.images}`}
                          alt="Gallery"
                        />
                        <Button
                          onClick={() => user_img_delete(img.id)}
                          style={{
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          <FaTrash style={{ color: "red", fontSize: "15px" }} />
                        </Button>
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="form-section">
                  <Form
                    onFinish={submit}
                    form={form}
                    initialValues={form}
                    layout="vertical"
                  >
                    <Row gutter={[24, 24]}>
                      <Col xs={24} sm={12}>
                        <Form.Item label="Full Name" name="firstname">
                          <Input />
                        </Form.Item>

                        <Form.Item label="Date of Birth" name="dob">
                          <Input type="date" />
                        </Form.Item>

                        <Form.Item label="Age" name="age">
                          <Input type="number" min={18} max={100} />
                        </Form.Item>

                        <Form.Item label="Gender" name="gender">
                          <Input readOnly />
                        </Form.Item>

                        <Form.Item label="Caste" name="caste">
                          <Input readOnly />
                        </Form.Item>

                        <Form.Item label="Religion" name="religion">
                          <Input readOnly />
                          {/* <Select placeholder="Select Religion" readOnly>
                            <Option value="hindu">Hindu</Option>
                            <Option value="muslim">Muslim</Option>
                            <Option value="christian">Christian</Option>
                            <Option value="sikh">Sikh</Option>
                            <Option value="jain">Jain</Option>
                            <Option value="buddhist">Buddhist</Option>
                            <Option value="other">Other</Option>
                          </Select> */}
                        </Form.Item>

                        <Form.Item label="Marital Status" name="marrige_status">
                          <Select placeholder="Select Marital Status">
                            <Option value="unmarried">Unmarried</Option>
                            <Option value="married">Married</Option>
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={12}>
                        <Form.Item label="Contact Number" name="contact">
                          <Input type="tel" maxLength={10} />
                        </Form.Item>

                        <Form.Item label="Email Address" name="email">
                          <Input type="email" />
                        </Form.Item>

                        <Form.Item name="job_type" label="Job Type">
                          <Select placeholder="Select Job Type">
                            <Option value="government">Government</Option>
                            <Option value="private">Private</Option>
                            <Option value="unemployed">Unemployed</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item name="salary" label="Salary">
                          <Input type="number" placeholder="Salary" />
                        </Form.Item>

                        <Form.Item
                          label="About Me (Profile Description)"
                          name="description"
                        >
                          <Input.TextArea
                            rows={4}
                            placeholder="Write something about yourself..."
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={24} className="form-submit-button-container">
                        <Button type="primary" htmlType="submit">
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              )}

              {/* Login Details Tab */}
              {activeTab === "Login_Details" && (
                <div className="form-section">
                  <Form
                    onFinish={Login_update}
                    form={form}
                    initialValues={form}
                    layout="vertical"
                  >
                    <Row gutter={[24, 24]}>
                      <Col xs={24} sm={12}>
                        <Form.Item label="Username" name="username">
                          <Input />
                        </Form.Item>

                        <Form.Item label="Password" name="password">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={24} className="form-submit-button-container">
                        <Button type="primary" htmlType="submit">
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              )}

              {/* Family Details Tab */}
              {activeTab === "family" && (
                <div className="form-section">
                  <Form
                    onFinish={submit}
                    form={form}
                    initialValues={form}
                    layout="vertical"
                  >
                    <Row gutter={[24, 24]}>
                      <Col xs={24} sm={12}>
                        <Form.Item label="Mother's Name" name="mother_name">
                          <Input />
                        </Form.Item>

                        <Form.Item
                          label="Mother's Occupation"
                          name="mother_occupation"
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item label="Father's Name" name="father_name">
                          <Input />
                        </Form.Item>

                        <Form.Item
                          label="Father's Occupation"
                          name="father_occupation"
                        >
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={12}>
                        <Form.Item label="Number of Brothers" name="brother">
                          <Input type="number" min="0" />
                        </Form.Item>

                        <Form.Item
                          label="Number of Married Brothers"
                          name="brother_marrige"
                        >
                          <Input type="number" min="0" />
                        </Form.Item>

                        <Form.Item label="Number of Sisters" name="sister">
                          <Input type="number" min="0" />
                        </Form.Item>

                        <Form.Item
                          label="Number of Married Sisters"
                          name="sister_marrige"
                        >
                          <Input type="number" min="0" />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={24} className="form-submit-button-container">
                        <Button type="primary" htmlType="submit">
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              )}

              {/* Address Details Tab */}
              {activeTab === "address" && (
                <div className="form-section">
                  <Form
                    onFinish={submit}
                    form={form}
                    initialValues={form}
                    layout="vertical"
                  >
                    <Row gutter={[24, 24]}>
                      <Col xs={24} sm={12}>
                        <Form.Item label="Country" name="country">
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={12}>
                        <Form.Item label="State" name="state">
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={12}>
                        <Form.Item label="District" name="district">
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={12}>
                        <Form.Item label="City" name="city">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={24} className="form-submit-button-container">
                        <Button type="primary" htmlType="submit">
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              )}

              {/* Education Details Tab */}
              {activeTab === "education" && (
                <div className="form-section">
                  <Form
                    onFinish={submit}
                    form={form}
                    initialValues={form}
                    layout="vertical"
                  >
                    <Row gutter={[24, 24]}>
                      <Col xs={24} sm={6}>
                        <Form.Item
                          label="University/College/School"
                          name="university"
                        >
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={6}>
                        <Form.Item label="Course / Qualification" name="course">
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={6}>
                        <Form.Item
                          label="Education Level"
                          name="education_level"
                        >
                          <Select placeholder="Select your education level">
                            <Option value="high_school">High School</Option>
                            <Option value="bachelor">Bachelor’s Degree</Option>
                            <Option value="master">Master’s Degree</Option>
                            <Option value="phd">Ph.D.</Option>
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={6}>
                        <Form.Item label="Field of Study" name="field_of_study">
                          <Select placeholder="Select your field of study">
                            <Option value="government">Government</Option>
                            <Option value="private">Private</Option>
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={6}>
                        <Form.Item label="Job Title" name="job_title">
                          <Input placeholder="E.g. Software Engineer, Teacher, etc." />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={6}>
                        <Form.Item label="Job Type" name="job_type">
                          <Select placeholder="Select your job type">
                            <Option value="full_time">Full-time</Option>
                            <Option value="part_time">Part-time</Option>
                            <Option value="freelance">Freelance</Option>
                            <Option value="unemployed">Unemployed</Option>
                            <Option value="student">Student</Option>
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={6}>
                        <Form.Item label="Income Range" name="income_range">
                          <Select placeholder="Select your income range">
                            <Option value="0-1L">0 - 1 Lakh</Option>
                            <Option value="1L-5L">1 Lakh - 5 Lakh</Option>
                            <Option value="5L-10L">5 Lakh - 10 Lakh</Option>
                            <Option value="10L+">10 Lakh & Above</Option>
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={6}>
                        {/* You can keep this empty or add more fields if needed */}
                      </Col>

                      <Col span={24} className="form-submit-button-container">
                        <Button type="primary" htmlType="submit">
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              )}
            </Card>
          </Card>
        ))}
      </div>
    </>
  );
}

export default User_Profile_User;
