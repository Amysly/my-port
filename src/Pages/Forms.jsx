import React, { useState } from "react";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [showModal, setShowModal] = useState({ show: false, success: false, message: "" });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);

    emailjs
      .send(
        "service_p1n92qn", // EmailJS Service ID
        "template_2dn6ubx", // your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "fB1Ojhat7RcH-5d0L" // Public Key
      )
      .then(() => {
        setShowModal({
          show: true,
          success: true,
          message: "Message sent! Thank you — I’ll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setShowModal({
          show: true,
          success: false,
          message: "Failed to send message. Please try again.",
        });
      })
      .finally(() => {
        setSending(false);
        setTimeout(() => setShowModal({ show: false }), 3000);
      });
  };

  // Text Animation
  const text = "Let’s Work Together!";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };
  const letterVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 500, damping: 12 },
    },
    hover: {
      scale: 1.3,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center md:min-h-0 md:block md:justify-normal px-6 py-12">
      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 w-full p-4 lg:p-10">
        
        {/* Left Side */}
        <div className="mt-3 lg:mt-8">
          <motion.h2
            className="text-2xl lg:text-5xl font-serif text-center mt-2 lg:mb-5 sm:mt-16 mb-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                whileHover="hover"
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
          <p className="text-lg lg:text-xl mb-6 md:mb-2 leading-relaxed">
            I’m open to remote and onsite opportunities whether full-time,
            part-time, or contract roles. If you’d like to discuss a project,
            collaboration, or job opportunity, please reach out!
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div
          className="bg-zinc-950 p-6 md:p-10 rounded-lg shadow-lg mt-4 sm:mt-8 lg:mt-16"
          data-aos="zoom-in-up"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Mary Joe"
              className="p-3 w-full border border-zinc-700 rounded-md bg-transparent text-white"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              className="p-3 w-full border border-zinc-700 rounded-md bg-transparent text-white"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="How can I help?"
              rows="5"
              className="p-3 w-full border border-zinc-700 rounded-md bg-transparent text-white resize-none"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              disabled={sending}
              className={`p-3 rounded-md font-sans transition ${
                sending
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Modal (Success/Fail Message) */}
          {showModal.show && (
            <div
              className={`mt-4 text-center p-3 rounded-md ${
                showModal.success ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {showModal.message}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Form;
