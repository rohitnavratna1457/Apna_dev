import React, { useState } from "react";
import { Pagination ,Image} from "antd";
import "antd/dist/reset.css";
import "../Testimonials/Testmonial.css";
import img1 from "../Profile_Images/img1.jpg";
import img2 from "../Profile_Images/img2.jpg";
import img3 from "../Profile_Images/img3.jpg";

const testimonialsData = [
  {
    name: "Rahul Verma & Sneha Joshi",
    img: img1,
    dob: "",
    text: "Meeting Sneha was a turning point in my life. We connected over shared values and dreams, and today we begin a beautiful new chapter—all thanks to communityrishtey.com.",
  },
  {
    name: "Amit Kapoor & Nisha Mehra",
    img: img2,
    dob: "",
    text: "From strangers to soulmates, our journey has been truly special. We owe our bond of trust and companionship to the platform that brought us together: communityrishtey.com.",
  },
  {
    name: "Raghav Singh & Tanya Bhatnagar",
    img: img3,
    dob: "",
    text: "Our first conversation sparked something real. That spark turned into love, and communityrishtey.com was the bridge that made it happen.",
  },
];


const ITEMS_PER_PAGE = 3;

const Testimonials = () => {
  const [page, setPage] = useState(1);

  const paginatedData = testimonialsData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">Success Stories - Year 2025</h2>

      <div className="testimonial-grid">
        {paginatedData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3 className="testimonial-name">{item.name}</h3>
            <h3 className="testimonial-name">{item.dob}</h3>
            <p className="testimonial-text">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <Pagination
          current={page}
          pageSize={ITEMS_PER_PAGE}
          total={testimonialsData.length}
          onChange={(p) => setPage(p)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Testimonials;
