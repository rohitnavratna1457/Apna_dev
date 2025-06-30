
import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { SubscriberPost } from "../Api/CoreApi";

const Footer = () => {
  //  Feedback subscribe logics
  const handlesubscribe = async (values) => {
    const res = await SubscriberPost(values);

    console.log(res);
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Helping Hearts Neet Since . We Connect Individuals Seeking
            Meaningful Relationships And Lifelong Companionship.
          </p>
        </div>
        {/*   footer section  */}
        {/* Partners */}
        <div className="footer-section">
          <h3>Our Partners</h3>
          <div className="partners-grid">
            {/* <img src="/partners/shaadisecure.png" alt="ShaadiSecure" />
            <img src="/partners/lovematchai.png" alt="LoveMatch AI" />
            <img src="/partners/bharatconnect.png" alt="BharatConnect" />
            <img src="/partners/verifiedprofiles.png" alt="VerifiedProfiles" /> */}
          </div>
          <Link to="/Staff_Login" className="staff-link">
          Become Staff
          </Link>
        </div>

        {/* Stay Connected */}
        <div className="footer-section">
          <h3>Stay Connected</h3>
          <div className="social-icons1">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/company/yourcompany"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <Form onFinish={handlesubscribe}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                {
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input placeholder="Your email" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Subscribe
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📧 communityrishtey@gmail.com</p>
          <p>☎ +91-8962813719</p>
          <p>📍 address -  community rishtey dot com , near bank of india , beside of Mannapuram gold loan , G.E.road power house bhilai</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 YourMatrimony. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
