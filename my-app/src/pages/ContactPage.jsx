"use client"

import { useState } from "react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Message sent! We'll get back to you shortly.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div>
      {/* Contact Form Section */}
      <section className="py-20" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container">
          <div className="contact-form">
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1e293b", marginBottom: "1rem" }}>
              Get in Touch
            </h1>
            <p style={{ color: "#64748b", marginBottom: "2rem", lineHeight: "1.6" }}>
              Have questions or need to book a service? Fill out the form below, and we'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Regarding a service..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you today?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn" style={{ width: "100%" }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="py-16">
        <div className="container">
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1e293b", marginBottom: "2rem" }}>
              Direct Contact
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                <div style={{ color: "#2563eb" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p style={{ color: "#64748b", margin: 0 }}>Phone Number</p>
                  <p style={{ color: "#1e293b", fontWeight: "600", margin: 0 }}>09753854076</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                <div style={{ color: "#2563eb" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p style={{ color: "#64748b", margin: 0 }}>Email Address</p>
                  <p style={{ color: "#1e293b", fontWeight: "600", margin: 0 }}>vegafriaabby@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
