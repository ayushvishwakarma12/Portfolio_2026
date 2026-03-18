import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import { profile } from "../data/profile";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [formValidation, setFormValidation] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
  });

  const checkForm = (event) => {
    setFormValidation((prevValidation) => ({
      ...prevValidation,
      [event.target.name]: event.target.value === "",
    }));
  };

  const onFormUpdate = (category, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [category]: value,
    }));
  };

  const isButtonDisable = Object.values(formDetails).some((value) => value === "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setStatus({});

    emailjs
      .sendForm(
        "service_ieq6qdy",
        "template_trlyqn6",
        e.target,
        "RPo_D_xDrFgNKYNaX"
      )
      .then(() => {
        setButtonText("Message Sent");
        setStatus({
          success: true,
          message: "Thanks for reaching out. Your message has been sent successfully.",
        });
        setFormDetails(formInitialDetails);
      })
      .catch((error) => {
        setButtonText("Send");
        setStatus({
          success: false,
          message: "Something went wrong while sending the message. Please try again.",
        });
        console.log(error);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={`contact-visual ${
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }`}
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                  alt="Contact Ayush"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`contact-card glass-card ${
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }`}
                >
                  <span className="eyebrow">Let's connect</span>
                  <h2>Let’s build something meaningful</h2>
                  <p className="section-copy">
                    I am open to strong product teams and interesting
                    opportunities where I can contribute with modern frontend,
                    full stack foundations, and a growing enterprise skill set.
                  </p>
                  <div className="contact-links">
                    <a
                      href={profile.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link-card"
                    >
                      LinkedIn Profile
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link-card"
                    >
                      GitHub Projects
                    </a>
                    <a href={profile.resumeFile} download className="contact-link-card">
                      Download Resume Summary
                    </a>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          name="firstName"
                          onChange={(e) => onFormUpdate("firstName", e.target.value)}
                          onBlur={checkForm}
                        />
                        {formValidation.firstName && (
                          <p className="field-error">Please enter your first name</p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          name="lastName"
                          onChange={(e) => onFormUpdate("lastName", e.target.value)}
                          onBlur={checkForm}
                        />
                        {formValidation.lastName && (
                          <p className="field-error">Please enter your last name</p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          name="email"
                          onChange={(e) => onFormUpdate("email", e.target.value)}
                          onBlur={checkForm}
                        />
                        {formValidation.email && (
                          <p className="field-error">Please enter your email address</p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          name="phone"
                          onChange={(e) => onFormUpdate("phone", e.target.value)}
                          onBlur={checkForm}
                        />
                        {formValidation.phone && (
                          <p className="field-error">Please enter your phone number</p>
                        )}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          name="message"
                          onChange={(e) => onFormUpdate("message", e.target.value)}
                          onBlur={checkForm}
                        ></textarea>
                        {formValidation.message && (
                          <p className="field-error">Please enter your message</p>
                        )}
                        <button type="submit" disabled={isButtonDisable}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={`form-status ${status.success ? "success" : "danger"}`}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
