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
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { Spin } from "antd";
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

const { Option } = Select;

function Staff_Reg() {
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
  const [isLoading, setIsLoading] = useState(false);

  // const [ref, setRef] = useState([])

  const [district, setDistrict] = useState([]);
  const [state, setState] = useState([]);
  const [caste, setCaste] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(file, "****** file ******");

  const handleStateChange = async (value) => {
    setState(setState);
    const response = await User_StateGet();
    console.log(response);
    const filter = response.filter((i) => i.state === value);
    const datamap = filter.map((i) => i.district);
    setDistrict(datamap);
  };

  // const handlereligionChange = async (value) => {
  //   const response = await User_CasteGet()
  //   const filter = response.filter(i => i.religion === value || i.state === state)
  //   const mapcaste = filter.map(i => i.caste)
  //   setCaste(mapcaste.sort())
  //   console.log(response, '99999', mapcaste)
  // }

  const send = async (value) => {
    try {
      setIsLoading(true); // Start loader

      const response = await User_send_otp(value);
      console.log(value, "********* value ******");

      if (response.message === "Email already exists.") {
        message.error("Email already exists.");
      } else {
        message.success("Check Your Email");
        setEmail_pop(1);
        form.setFieldsValue(value);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      message.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Stop loader in all cases
    }
  };

  const verify = async (value) => {
    const response = await User_verify_otp(value);
    // const email = response.email
    const user_id1 = response.user_id;
    // const mail = ({ email: email })
    // setData(mail)
    localStorage.setItem("user_id", user_id1);
    console.log(value, "********* value ******");
    setEmail_pop(2);
  };

  // const username = async (value) => {
  //   const data = { ...value, staff: "staff" };
  //   const formData = new FormData();
  //   formData.append("pic", file);
  //   formData.append("role", "staff");

  //   Object.entries(data).forEach(([key, val]) => {
  //     formData.append(key, val);
  //   });
  //   const response = await UserRegUpdate(user_id, formData);
  //   const user_filter = response.filter((i) => i.id === user_id);
  //   console.log(user_filter, "****** user_filter *****");
  //   console.log(value, "****** value *****");
  //   if (response) {
  //     Navigate("/Staff_Login");
  //   }
  //   // window.location.reload();
  // };

  const username = async (value) => {
    setIsLoading(true); // Start loader
    try {
      const data = { ...value, staff: "staff" };
      const formData = new FormData();
      formData.append("pic", file);
      formData.append("role", "staff");

      Object.entries(data).forEach(([key, val]) => {
        formData.append(key, val);
      });

      const response = await UserRegUpdate(user_id, formData);
      const user_filter = response.filter((i) => i.id === user_id);

      console.log(user_filter, "****** user_filter *****");
      console.log(value, "****** value *****");

      if (response) {
        Navigate("/Staff_Login");
      }
    } catch (error) {
      console.error("Error during update:", error);
      message.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Stop loader
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        // padding: '20px'
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2>Staff Signup Form</h2>
        </div>

        {email_pop === 0 && (
          <Spin spinning={isLoading} tip="Sending OTP...">
            <Form onFinish={send} layout="vertical">
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Please input your email" }]}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  block
                  loading={isLoading}
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </Spin>
        )}
        {email_pop === 1 && (
          <Form
            onFinish={verify}
            form={form}
            initialValues={form}
            layout="vertical"
          >
            <Form.Item name="email" label="Email">
              <Input type="email" readOnly />
            </Form.Item>
            <Form.Item
              name="otp"
              label="OTP"
              rules={[{ required: true, message: "Please input OTP" }]}
            >
              <Input type="number" placeholder="Enter OTP" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" block>
                Verify
              </Button>
            </Form.Item>
          </Form>
        )}
        {email_pop === 2 && (
          <Spin spinning={isLoading} tip="Submitting...">
            <Form
              onFinish={username}
              form={form}
              initialValues={form}
              layout="vertical"
            >
              <Form.Item label="Profile Picture" required>
                <Upload
                  beforeUpload={(file) => {
                    setFile(file);
                    form.setFieldsValue({ pic: file.name });
                    return false;
                  }}
                  showUploadList={false}
                >
                  <Button icon={<UploadOutlined />}>Choose File</Button>
                </Upload>
                <Form.Item name="pic" noStyle>
                  <Input
                    style={{ marginTop: 8 }}
                    disabled
                    placeholder="No file selected"
                  />
                </Form.Item>
              </Form.Item>

              <Form.Item
                name="username"
                label="Username"
                rules={[
                  { required: true, message: "Please enter your username" },
                ]}
              >
                <Input placeholder="Enter username" />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password placeholder="Enter password" />
              </Form.Item>

              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: "Please select gender" }]}
              >
                <Select placeholder="Select gender">
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
              </Form.Item>

              <Form.Item name="state">
                <Select
                  placeholder="State"
                  onChange={handleStateChange}
                  style={{ width: "200px", marginTop: "5px", height: "35px" }}
                >
                  <Select.Option value="andhra_pradesh">
                    Andhra Pradesh
                  </Select.Option>

                  <Select.Option value="arunachal_pradesh">
                    Arunachal Pradesh
                  </Select.Option>
                  <Select.Option value="assam">Assam</Select.Option>
                  <Select.Option value="bihar">Bihar</Select.Option>

                  <Select.Option value="Chhattisgarh">
                    Chhattisgarh
                  </Select.Option>
                  <Select.Option value="goa">Goa</Select.Option>
                  <Select.Option value="gujarat">Gujarat</Select.Option>
                  <Select.Option value="haryana">Haryana</Select.Option>

                  <Select.Option value="himachal_pradesh">
                    Himachal Pradesh
                  </Select.Option>
                  <Select.Option value="jharkhand">Jharkhand</Select.Option>
                  <Select.Option value="karnataka">Karnataka</Select.Option>
                  <Select.Option value="kerala">Kerala</Select.Option>

                  <Select.Option value="madhya_pradesh">
                    Madhya Pradesh
                  </Select.Option>

                  <Select.Option value="maharashtra">Maharashtra</Select.Option>
                  <Select.Option value="manipur">Manipur</Select.Option>
                  <Select.Option value="meghalaya">Meghalaya</Select.Option>
                  <Select.Option value="mizoram">Mizoram</Select.Option>
                  <Select.Option value="nagaland">Nagaland</Select.Option>
                  <Select.Option value="odisha">Odisha</Select.Option>
                  <Select.Option value="punjab">Punjab</Select.Option>
                  <Select.Option value="rajasthan">Rajasthan</Select.Option>
                  <Select.Option value="sikkim">Sikkim</Select.Option>
                  <Select.Option value="tamil_nadu">Tamil Nadu</Select.Option>
                  <Select.Option value="telangana">Telangana</Select.Option>
                  <Select.Option value="tripura">Tripura</Select.Option>

                  <Select.Option value="uttar_pradesh">
                    Uttar Pradesh
                  </Select.Option>

                  <Select.Option value="uttarakhand">Uttarakhand</Select.Option>

                  <Select.Option value="west_bengal">West Bengal</Select.Option>
                  {/* Union Territories */}

                  <Select.Option value="andaman_nicobar">
                    Andaman and Nicobar Islands
                  </Select.Option>
                  <Select.Option value="chandigarh">Chandigarh</Select.Option>

                  <Select.Option value="dadra_nagar_haveli_daman_diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </Select.Option>
                  <Select.Option value="delhi">Delhi</Select.Option>

                  <Select.Option value="jammu_kashmir">
                    Jammu and Kashmir
                  </Select.Option>
                  <Select.Option value="ladakh">Ladakh</Select.Option>

                  <Select.Option value="lakshadweep">Lakshadweep</Select.Option>
                  <Select.Option value="puducherry">Puducherry</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="disttrict"
                label="District"
                rules={[{ required: true, message: "Please select district" }]}
              >
                <Select placeholder="Select district">
                  {district.length > 0 &&
                    district[0]?.map((item, index) => (
                      <Option key={index} value={item}>
                        {item}
                      </Option>
                    ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="contact"
                label="Whatsapp Number"
                rules={[
                  { required: true, message: "Please enter contact number" },
                ]}
              >
                <Input placeholder="Enter Whatsapp Number" />
              </Form.Item>

              <Form.Item>
                <Button htmlType="submit" type="primary" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Spin>
        )}
      </Card>
    </div>
  );
}

export default Staff_Reg;
