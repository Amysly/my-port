import React, { useState } from "react";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Left Side - Writeup */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif text-yellow-400 mb-6">
            Let’s Work Together!
          </h2>
          <p className="text-lg text-yellow-400 mb-6 leading-relaxed">
            I’m open to remote and onsite opportunities whether full-time,
            part-time, or contract roles. If you’d like to discuss a project,
            collaboration, or job opportunity, please reach out!
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-zinc-900 p-6 md:p-10 rounded-lg shadow-lg mt-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 w-full border border-zinc-700 rounded-md bg-transparent text-white"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 w-full border border-zinc-700 rounded-md bg-transparent text-white"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="p-3 w-full border border-zinc-700 rounded-md bg-transparent text-white resize-none"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className="p-3 bg-yellow-400 rounded-md font-serif text-black hover:bg-yellow-500 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
