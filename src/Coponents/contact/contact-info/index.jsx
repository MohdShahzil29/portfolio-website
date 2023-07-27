import React from "react";
import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
      <h4>Thank you for taking the time to explore my portfolio website</h4>
      <div className="contact-option">
        <FaPhoneAlt />
        <span className="Text"> +91 9027800636 </span>
      </div>
      <div className="contact-option">
        <MdEmail />
        <span className="Text"> Mohdshahzil59@gmail.com </span>
      </div>
    </div>
  );
};

export default ContactInfo;
