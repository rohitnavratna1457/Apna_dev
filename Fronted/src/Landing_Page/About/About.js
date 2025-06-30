// import React from "react";
// import "../About/About.css";
// import img from "../Menubar_Page/wedding.jpg";

// const About = () => {
//   return (
//     <>
//       <div className="about-container">
//         <h2 className="about-title">About Us</h2>
//         <p className="about-description">
//           We are a forward-thinking tech company dedicated to providing the best
//           services and products to help businesses grow in the digital era. Our
//           team works tirelessly to create innovative solutions that make a real
//           difference for our clients.
//         </p>
//       </div>

//       <div className="about-us-container">
//         <div className="text-section">
//           <h2 className="title">Who We Are</h2>
//           <p className="description">
//             Based in Raipur Chhattisgarh, Supreme-Care is one of the largest,
//             advanced, and trusted private multi-specialty hospitals in the
//             state.
//           </p>
//           <p className="description">
//             A 300 bedded hospital empowered by state-of-the-art diagnostic,
//             therapeutic, and intensive care facilities, Supreme-Care is a beacon
//             of hope and health for patients around the world, attracting a
//             diverse demographic of regional, domestic, and international
//             patients.
//           </p>
//           <div className="highlights">
//             <div className="highlight-item">
//               <span className="icon">🔹</span> Over Two Decades of Trusted
//               Services
//             </div>
//             <div className="highlight-item">
//               <span className="icon">🔹</span> 75 Dedicated ICU Beds
//             </div>
//             <div className="highlight-item">
//               <span className="icon">🔹</span> Serving 10,000+ Marriges Annually
//             </div>
//             <div className="highlight-item">
//               <span className="icon">🔹</span> "Metromonials with Human Touch"
//               Ideology
//             </div>
//             <div className="highlight-item">
//               <span className="icon">🔹</span> Highly Advanced Infrastructure
//             </div>
//           </div>
//         </div>
//         <div className="image-section">
//           <img src={img} alt="Medical staff and patient" className="image" />
//         </div>
//       </div>
//       <div className="about-info">
//         <div className="section">
//           <h3 className="section-title">Our Mission</h3>
//           <p className="section-description">
//             Our mission is to empower businesses of all sizes by providing
//             powerful, intuitive, and easy-to-use solutions that make managing
//             and scaling your business a breeze. We believe that technology
//             should be accessible, simple, and effective.
//             Our mission is to empower businesses of all sizes by providing
//             powerful, intuitive, and easy-to-use solutions that make managing
//             and scaling your business a breeze. We believe that technology
//             should be accessible, simple, and effective. Our mission is to
//             empower businesses of all sizes by providing powerful, intuitive,
//             and easy-to-use solutions that make managing and scaling your
//             business a breeze. We believe that technology should be accessible,
//             simple, and effective. Our mission is to empower businesses of all
//             sizes by providing powerful, intuitive, and easy-to-use solutions
//             that make managing and scaling your business a breeze. We believe
           
//             that technology should be accessible, simple, and effective.
//             {/* <img src={img} alt="Medical staff and patient" className="image" /> */}

//           </p> 

//         </div>

//         <div className="section">
//           <h3 className="section-title">Our Vision</h3>
//           <p className="section-description">
//             To become a leading provider of digital solutions that transform the
//             way businesses operate globally. We aim to inspire change, foster
//             innovation, and promote a culture of growth and success. Our mission
//             is to empower businesses of all sizes by providing powerful,
//             intuitive, and easy-to-use solutions that make managing and scaling
//             your business a breeze. We believe that technology should be
//             accessible, simple, and effective. Our mission is to empower
//             businesses of all sizes by providing powerful, intuitive, and
//             easy-to-use solutions that make managing and scaling your business a
//             breeze. We believe that technology should be accessible, simple, and
//             effective.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;
<div className={styles.profileContainer}>
      {User.map((user, index) => (
        <Card key={index} className={styles.userCard}>
          <img className={styles.bannerImage} src={user_image} alt="User Banner" />

          <Card className={styles.profilePicCard}>
            <img
              className={styles.profilePicture}
              src={`${baseurl}${user.pic}`}
              alt="User Profile"
            />
          </Card>

          <h2 className={styles.username}>{user.username}</h2>
          <h4 className={styles.userDetails}>
            Age: 23, 5ft 7 inch - 172 cm, Software Developer, Raipur, India
          </h4>

          <div className={styles.socialIcons}>
            <p className={styles.icon}>
              <FaWhatsapp />
            </p>
            <p className={styles.icon}>
              <FaFacebook />
            </p>
            <p className={styles.icon}>
              <FaInstagram />
            </p>
            <p className={styles.icon}>
              <FaTwitter />
            </p>
            <p className={styles.icon}>
              <SiGmail />
            </p>
            <p className={styles.icon}>
              <IoCall />
            </p>
          </div>

          <Card className={styles.tabsCard}>
            <div className={styles.tabButtons}>
              <Button
                className={activeTab === null ? styles.activeTabButton : styles.tabButton}
                onClick={() => setActiveTab(null)}
              >
                Gallery
              </Button>
              <Button
                className={activeTab === 'profile' ? styles.activeTabButton : styles.tabButton}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </Button>
              <Button
                className={activeTab === 'family' ? styles.activeTabButton : styles.tabButton}
                onClick={() => setActiveTab('family')}
              >
                Family Details
              </Button>
              <Button
                className={activeTab === 'address' ? styles.activeTabButton : styles.tabButton}
                onClick={() => setActiveTab('address')}
              >
                Address Detail
              </Button>
              <Button
                className={activeTab === 'kundli' ? styles.activeTabButton : styles.tabButton}
                onClick={() => setActiveTab('kundli')}
              >
                Kundli
              </Button>
              <Button
                className={activeTab === 'education' ? styles.activeTabButton : styles.tabButton}
                onClick={() => setActiveTab('education')}
              >
                Educations
              </Button>
            </div>

            {activeTab === null && (
              <div className={styles.galleryGrid}>
                {image.map((img, imgIndex) => (
                  <div key={imgIndex} className={styles.galleryItem}>
                    <img
                      className={styles.galleryImage}
                      src={`${baseurl}${img.images}`}
                      alt={`Gallery Image ${imgIndex + 1}`}
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className={formStyles.formSection}>
                <Form onFinish={submit} initialValues={obj} layout="vertical">
                  <Row gutter={24}>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Full Name" name="full_name">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Age" name="age">
                        <Input type="number" min="18" max="100" />
                      </Form.Item>
                      <Form.Item label="Gender" name="gender">
                        <Select>
                          <Select.Option value="male">Male</Select.Option>
                          <Select.Option value="female">Female</Select.Option>
                          <Select.Option value="other">Other</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="Caste" name="caste">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Religion" name="religion">
                        <Select>
                          <Select.Option value="hindu">Hindu</Select.Option>
                          <Select.Option value="muslim">Muslim</Select.Option>
                          <Select.Option value="christian">Christian</Select.Option>
                          <Select.Option value="sikh">Sikh</Select.Option>
                          <Select.Option value="jain">Jain</Select.Option>
                          <Select.Option value="buddhist">Buddhist</Select.Option>
                          <Select.Option value="other">Other</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="Marital Status" name="marital_status">
                        <Select>
                          <Select.Option value="single">Single</Select.Option>
                          <Select.Option value="married">Married</Select.Option>
                          <Select.Option value="divorced">Divorced</Select.Option>
                          <Select.Option value="widowed">Widowed</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Height (in cm)" name="height">
                        <Input type="number" min="100" max="250" />
                      </Form.Item>
                      <Form.Item label="Weight (in kg)" name="weight">
                        <Input type="number" min="30" max="200" />
                      </Form.Item>
                      <Form.Item label="Blood Group" name="blood_group">
                        <Select>
                          <Select.Option value="A+">A+</Select.Option>
                          <Select.Option value="A-">A-</Select.Option>
                          <Select.Option value="B+">B+</Select.Option>
                          <Select.Option value="B-">B-</Select.Option>
                          <Select.Option value="O+">O+</Select.Option>
                          <Select.Option value="O-">O-</Select.Option>
                          <Select.Option value="AB+">AB+</Select.Option>
                          <Select.Option value="AB-">AB-</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="Mother Tongue" name="mother_tongue">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Contact Number" name="contact_number">
                        <Input type="tel" maxLength={10} />
                      </Form.Item>
                      <Form.Item label="Email Address" name="email">
                        <Input type="email" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item label="About Me (Profile Description)" name="about_me">
                    <Input.TextArea rows={4} placeholder="Write something about yourself..." />
                  </Form.Item>
                  <Row>
                    <Col span={24} className={formStyles.submitButtonContainer}>
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            )}

            {activeTab === 'family' && (
              <div className={formStyles.formSection}>
                <Form onFinish={submit} initialValues={obj} layout="vertical">
                  <Row gutter={24}>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Mother's Name" name="mother_name">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Mother's Occupation" name="mother_occupation">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Father's Name" name="father_name">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Father's Occupation" name="father_occupation">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Family Type" name="family_type">
                        <Select>
                          <Select.Option value="joint">Joint Family</Select.Option>
                          <Select.Option value="nuclear">Nuclear Family</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Number of Brothers" name="number_of_brothers">
                        <Input type="number" min="0" />
                      </Form.Item>
                      <Form.Item label="Number of Sisters" name="number_of_sisters">
                        <Input type="number" min="0" />
                      </Form.Item>
                      <Form.Item label="Family Status" name="family_status">
                        <Select>
                          <Select.Option value="middle_class">Middle Class</Select.Option>
                          <Select.Option value="upper_middle_class">Upper Middle Class</Select.Option>
                          <Select.Option value="rich">Rich</Select.Option>
                          <Select.Option value="affluent">Affluent</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="Family Income (Annual ₹)" name="family_income">
                        <Input type="number" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} className={formStyles.submitButtonContainer}>
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            )}

            {activeTab === 'address' && (
              <div className={formStyles.formSection}>
                <Form onFinish={submit} initialValues={obj} layout="vertical">
                  <Row gutter={24}>
                    <Col xs={24} sm={12}>
                      <Form.Item label="House/Flat Number" name="house_number">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Street Address" name="street_address">
                        <Input />
                      </Form.Item>
                      <Form.Item label="City/Village" name="city">
                        <Input />
                      </Form.Item>
                      <Form.Item label="District" name="district">
                        <Input />
                      </Form.Item>
                      <Form.Item label="State" name="state">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Country" name="country">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Pincode / ZIP Code" name="pincode">
                        <Input type="number" />
                      </Form.Item>
                      <Form.Item label="Landmark (Optional)" name="landmark">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Full Address" name="full_address">
                        <Input.TextArea rows={2} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} className={formStyles.submitButtonContainer}>
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            )}

            {activeTab === 'kundli' && (
              <div className={formStyles.formSection}>
                <Form onFinish={submit} initialValues={obj} layout="vertical">
                  <Row gutter={24}>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Full Name" name="name">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Date of Birth" name="date_of_birth">
                        <Input type="date" />
                      </Form.Item>
                      <Form.Item label="Time of Birth" name="time_of_birth">
                        <Input type="time" />
                      </Form.Item>
                      <Form.Item label="Place of Birth" name="place_of_birth">
                        <Input />
                      </Form.Item>
                      <Form.Item label="District" name="district">
                        <Input />
                      </Form.Item>
                      <Form.Item label="State" name="state">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Country" name="country">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Gender" name="gender">
                        <Select>
                          <Select.Option value="male">Male</Select.Option>
                          <Select.Option value="female">Female</Select.Option>
                          <Select.Option value="other">Other</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="Time Zone" name="time_zone">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Ayanamsa" name="ayanamsa">
                        <Select>
                          <Select.Option value="lahiri">Lahiri</Select.Option>
                          <Select.Option value="raman">Raman</Select.Option>
                          <Select.Option value="kp">KP</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="Full Address" name="full_address">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} className={formStyles.submitButtonContainer}>
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            )}

            {activeTab === 'education' && (
              <div className={formStyles.formSection}>
                <Form onFinish={submit} initialValues={obj} layout="vertical">
                  <Row gutter={24}>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Highest Qualification" name="highest_qualification">
                        <Select>
                          <Select.Option value="high_school">High School</Select.Option>
                          <Select.Option value="intermediate">Intermediate</Select.Option>
                          <Select.Option value="bachelor">Bachelor's Degree</Select.Option>
                          <Select.Option value="master">Master's Degree</Select.Option>
                          <Select.Option value="phd">Ph.D.</Select.Option>
                          <Select.Option value="other">Other</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="University/Board Name" name="university_board">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Passing Year" name="passing_year">
                        <Input type="number" min="1900" max="2025" />
                      </Form.Item>
                      <Form.Item label="Occupation" name="occupation">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Annual Income (in ₹)" name="annual_income">
                        <Input type="number" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item label="District" name="district">
                        <Input />
                      </Form.Item>
                      <Form.Item label="State" name="state">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Country" name="country">
                        <Input />
                      </Form.Item>
                      <Form.Item label="Full Address" name="full_address">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} className={formStyles.submitButtonContainer}>
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