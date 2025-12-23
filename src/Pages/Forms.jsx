import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
  
const contactText = "Interested in working with me?";

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
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 12,
    },
  },
  hover: {
    scale: 1.3,
    transition: { type: "spring", stiffness: 400 },
  },
};
const Form = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState({
    show: false,
    success: false,
    message: "",
  });
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_p1n92qn",
        "template_pcz9uoj",
        form.current,
        "TyPKlLCJXWxxWTgYs"
      )
      .then(() => {
        setShowModal({
          show: true,
          success: true,
          message: "Message sent! Thank you — I’ll get back to you soon.",
        });
        form.current.reset(); // reset uncontrolled form
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

  return (
    <div className="md:min-h-0">
      <div className="text-center relative z-0 ">
        <motion.p
          className="font-bold text-2xl lg:text-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              whileHover="hover"
              className="inline-block" 
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
        </div>
      <section className=" flex justify-center items-center w-full px-4">
        <div className="p-3 md:p-10 w-full max-w-2xl" data-aos='zoom-in'>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full flex flex-col gap-3  bg-white shadow-2xl p-6"
          >
            <label className="text-sm">Name</label>
            <input
              name="user_name"
              placeholder="Mary Joe"
             className="p-3 border border-gray-200 rounded-md text-sm
              focus:border-amber-800 focus:outline-none"

              required
            />

            <label className="text-sm">Email</label>
            <input
              name="user_email"
              placeholder="email@example.com"
               className="p-3 border border-gray-200 rounded-md text-sm
              focus:border-amber-800 focus:outline-none"

              required
            />

            <label className="text-sm">Message</label>
            <textarea
              name="message"
              placeholder="How can I help?"
              rows="4"
              className="p-2 border border-gray-200 rounded-md text-sm
              focus:border-amber-800 focus:outline-none"

              required
            />

            <button
              type="submit"
              disabled={sending}
              className={`p-2 rounded-md font-writing  text-sm text-white transition w-40 mx-auto ${
                sending ? "bg-gray-500 cursor-not-allowed" : "bg-writing hover:bg-neutral-400"
              }`}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Modal */}
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
