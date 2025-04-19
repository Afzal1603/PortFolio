import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { div } from "motion/react-client";
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formUrl = "https://formspree.io/f/xvgzqkdr";

    try {
      const response = await axios.post(formUrl, formData);

      if (response.status === 200) {
        toast.success("Success! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error(
        "An error occurred while submitting the form. Please try again."
      );
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ x: -50, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ type: "tween", duration: 0.7 }}
      className="bg-zinc-900/50 p-6 rounded-lg flex flex-col justify-center mb-4"
    >
      <h1 className="max-w-sm text-teal-500 font-bold text-4xl font-mono mx-auto md:mx-0 mb-6">
        Contact me
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mb-6 font-mono mx-auto md:mx-0"
      >
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="text-md rounded-sm w-full  p-2.5 bg-transparent border-2 border-teal-500 text-teal-300 font-bold placeholder:text-teal-500 mb-2"
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="text-md rounded-sm w-full  p-2.5 bg-transparent border-2 border-teal-500 text-teal-300 font-bold placeholder:text-teal-500 mb-2"
        />

        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="blocktext-md text-md rounded-sm w-full  p-2.5 bg-transparent border-2 border-teal-500 text-teal-300 font-bold placeholder:text-teal-500 mb-2 "
          placeholder="Your Message..."
        ></textarea>
        <button
          type="submit"
          className="relative mx-auto border hover:cursor-pointer px-6 py-2 rounded-sm text-teal-500 font-mono border-teal-500 group overflow-hidden border-2"
        >
          <span className="relative z-20 font-bold">Send</span>
          <span className="absolute z-10 left-0 bottom-0 w-0 h-full bg-gradient-to-r from-teal-700 to-zinc-800 group-hover:w-full transition-all duration-300 ease-out  "></span>
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
      />
    </motion.section>
  );
};

export default Contact;
