
import React from "react";
import "./About.css";
import {
  Heart,
  Shield,
  Users,
  Star,
  CheckCircle,
  Award,
  Lock,
  Sparkles,
} from "lucide-react";
// import Galary from "../../src/Galary/Galary"
import Testmonial from "../Testimonials/Testmonial"
function About() {
  const features = [
    {
      icon: <Shield className="icon-feature" />,
      title: "Verified Profiles",
      description:
        "Every profile is thoroughly verified to ensure authenticity and safety for all members.",
    },
    {
      icon: <Lock className="icon-feature" />,
      title: "Privacy Protected",
      description:
        "Your personal information is secured with advanced encryption and privacy controls.",
    },
    {
      icon: <Users className="icon-feature" />,
      title: "Smart Matching",
      description:
        "Advanced algorithms help you find compatible partners based on your preferences.",
    },
    {
      icon: <Award className="icon-feature" />,
      title: "Success Stories",
      description:
        "Join thousands of happy couples who found their perfect match through our platform.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah & Michael",
      quote:
        "We found each other through this amazing platform. The journey from strangers to soulmates was beautiful!",
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Heer  & Arjun",
      quote:
        "The verification process gave us confidence, and the matching algorithm was spot on. Couldn't be happier!",
      image:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    {
      name: "Emma & David",
      quote:
        "Professional, secure, and effective. This platform made our search for true love so much easier.",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
  ];

  return (
    <div className="about-wrapper">
      

      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="section-title">What Makes Us Special</h2>
            <p className="section-description">
              We've built our platform with your safety, privacy, and success in
              mind.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-box">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/*   Our howitworks */}

      <section className="howitworks-section">
        <div className="howitworks-container">
          <div className="howitworks-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-description">
              Finding your perfect match is simple with our streamlined process.
            </p>
          </div>
          <div className="timeline-container">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                desc: "Build a comprehensive profile that showcases your personality and preferences.",
              },
              {
                step: "02",
                title: "Get Matched",
                desc: "Our algorithm finds compatible partners based on your criteria and interests.",
              },
              {
                step: "03",
                title: "Connect Safely",
                desc: "Start conversations in our secure environment with verified members.",
              },
              {
                step: "04",
                title: "Find Love",
                desc: "Build meaningful relationships that lead to lasting happiness.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`timeline-step ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div className="timeline-step-number">{item.step}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                  </div>
                  <p className="timeline-description">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/*   Our mission */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-header">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-description">
              To create a safe, trustworthy, and innovative platform where
              individuals can find their life partners through meaningful
              connections built on compatibility, shared values, and genuine
              intentions.
            </p>
          </div>

          <div className="mission-content">
            <div className="mission-text">
              <h3 className="mission-subtitle">Why Choose Us?</h3>
              <div className="mission-points">
                <div className="point-item">
                  <CheckCircle className="icon-check" />
                  <div>
                    <h4 className="point-title">Authentic Connections</h4>
                    <p className="point-description">
                      We prioritize quality over quantity, ensuring every match
                      has potential.
                    </p>
                  </div>
                </div>
                <div className="point-item">
                  <CheckCircle className="icon-check" />
                  <div>
                    <h4 className="point-title">Expert Support</h4>
                    <p className="point-description">
                      Our relationship experts guide you through your journey to
                      find love.
                    </p>
                  </div>
                </div>
                <div className="point-item">
                  <CheckCircle className="icon-check" />
                  <div>
                    <h4 className="point-title">Proven Results</h4>
                    <p className="point-description">
                      Thousands of success stories speak to our effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-image-wrapper">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Happy couple"
                className="mission-image"
              />
              <div className="mission-icon">
                <Sparkles className="icon-sparkles" />
              </div>
            </div>
          </div>
        </div>
      </section>


  {/* <Galary/> */}

{/*   Our testimonials */}

      
      <Testmonial/>
    </div>
  );
}

export default About;
