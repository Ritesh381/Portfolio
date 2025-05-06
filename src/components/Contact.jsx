import React, { useContext, useState } from "react";
import { ModeContext } from "./ModeContext";
import { useNavigate } from 'react-router-dom';
import emailjs from "@emailjs/browser";

function Contact() {
  const navigate = useNavigate();
  const { darkMode } = useContext(ModeContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "N/A",
          message: formData.message,
          to_email: "prajapatiritesh381@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Mail sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
        navigate("/");
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send mail. Try again later.");
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div
      className={`card p-4 rounded-4 shadow-lg w-100`}
      style={{
        maxWidth: '600px',
        border: '1px solid',
        borderColor: darkMode ? '#0dcaf0' : '#0d6efd',
        backgroundColor: darkMode ? '#212529' : '#ffffff',
        color: darkMode ? '#f8f9fa' : '#212529',
      }}
    >
      <h2
        className="mb-4 text-center"
        style={{ color: darkMode ? '#0dcaf0' : '#0d6efd' }}
      >
        Contact Me
      </h2>
  
      <form onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label">Name*</label>
          <input
            type="text"
            className="form-control"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
  
        <div className="mb-3">
          <label className="form-label">Phone (Optional)</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
  
        <div className="mb-3">
          <label className="form-label">Email*</label>
          <input
            type="email"
            className="form-control"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
  
        <div className="mb-3">
          <label className="form-label">Message*</label>
          <textarea
            className="form-control"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
  
        <div className="text-center">
          <button
            type="submit"
            className={`btn ${darkMode ? 'btn-info' : 'btn-primary'}`}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
}

export default Contact;
