import React from "react";
import "./style.scss";
import Section from "../Shared/Section";
import ContactInfo from "./contact-info";
import Form from "./form";

const Contact = () => {
  return (
    <Section id="Contact" title="Feel Free And Contact us" background="light">
      <div className="contact-content-wrapper">
        <ContactInfo />
        <Form />
      </div>
    </Section>
  );
};

export default Contact;
