import React, { useState } from "react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Inquiry from ARMB Website";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nMessage:\n${formData.message}`;

    const mailtoLink = `mailto:akashbanerjee2779@gmail.com,rm46770@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const headingColor = darkMode ? "text-yellow-100" : "text-[#7B2D26]";
  const textColor = darkMode ? "text-yellow-100" : "text-[#7B2D26]";
  const inputBg = darkMode ? "bg-black" : "bg-white";
  const inputBorder = darkMode ? "border-yellow-100/40" : "border-[#7B2D26]/40";

  const buttonStyle = darkMode
    ? "bg-yellow-100 text-black hover:bg-yellow-200"
    : "bg-[#7B2D26] text-white hover:bg-[#5a1f1a]";

  return (
    <section
      className={`py-20 px-6 transition-colors duration-500 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className={`text-4xl font-bold text-center mb-8 ${headingColor}`}>
          Contact Us
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`p-8 rounded-xl space-y-6 transition-colors duration-500 ${inputBg} border ${inputBorder}`}
        >

          {/* Name */}
          <div>
            <label className={`block mb-2 font-semibold ${textColor}`}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className={`w-full p-3 rounded border ${inputBorder} ${inputBg} ${textColor} focus:outline-none focus:border-[#7B2D26] dark:focus:border-yellow-100`}
            />
          </div>

          {/* Email */}
          <div>
            <label className={`block mb-2 font-semibold ${textColor}`}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className={`w-full p-3 rounded border ${inputBorder} ${inputBg} ${textColor} focus:outline-none focus:border-[#7B2D26] dark:focus:border-yellow-100`}
            />
          </div>

          {/* Company */}
          <div>
            <label className={`block mb-2 font-semibold ${textColor}`}>
              Company / Institution
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Company"
              className={`w-full p-3 rounded border ${inputBorder} ${inputBg} ${textColor} focus:outline-none focus:border-[#7B2D26] dark:focus:border-yellow-100`}
            />
          </div>

          {/* Message */}
          <div>
            <label className={`block mb-2 font-semibold ${textColor}`}>
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your requirements..."
              className={`w-full p-3 rounded border ${inputBorder} ${inputBg} ${textColor} focus:outline-none focus:border-[#7B2D26] dark:focus:border-yellow-100`}
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full p-3 rounded font-semibold transition-all duration-300 ${buttonStyle}`}
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;