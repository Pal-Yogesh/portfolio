"use client"
import { useState } from "react";
import { motion } from "framer-motion";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dataToSend = {
      ...formData,
      access_key: "68a9ecea-2579-455e-bc2f-3a249d7bf4a5",
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const result = await response.json();
    if (result.success) {
      setIsSubmitted(true);
    }
  }

  return (
    <section className="bg-black py-24 md:py-10 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#1a1a1a]  to-[#000000]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#4b4c4f] text-center">Get in Touch</h2>
        <p className="text-[#4b4c4f] mt-2 text-center">We would love to hear from you. Fill out the form below!</p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-5 max-w-lg mx-auto  rounded-lg shadow-lg"
      >
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-green-600">Thank you!</h3>
            <p className="text-[#4b4c4f] mt-2">Your message has been sent successfully.</p>
          </motion.div>
        ) : (
          <>
            <motion.div className="mb-4">
              <label htmlFor="name" className="block text-[#4b4c4f] font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-slate-400 bg-transparent border    rounded-md focus:outline-none "
              />
            </motion.div>

            <motion.div className="mb-4">
              <label htmlFor="email" className="block text-[#4b4c4f] font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 text-slate-400 bg-transparent border    rounded-md focus:outline-none "
              />
            </motion.div>

            <motion.div className="mb-4">
              <label htmlFor="message" className="block text-[#4b4c4f] font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}

                required
                className="w-full px-4 py-2 text-slate-400 bg-transparent border resize-none  rounded-md focus:outline-none  "
              ></textarea>
            </motion.div>

            <div className="flex justify-center items-center">

              <motion.button className="flex justify-center items-center m-10 "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >

                <div className="inline-flex  h-14 w-40 text-lg animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-extrabold text-slate-400 transition-colors focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">Submit
                </div>

              </motion.button>
            </div>

          </>
        )}
      </motion.form>
    </section>
  );
}
