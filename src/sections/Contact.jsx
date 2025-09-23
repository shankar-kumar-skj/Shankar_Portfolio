// src/sections/Contact.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function validateForm(data) {
    let newErrors = {};

    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!data.subject.trim()) newErrors.subject = "Subject is required";
    if (!data.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      subject: e.target.subject.value.trim(),
      message: e.target.message.value.trim(),
    };

    // Validate before sending
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false);
      return;
    }
    setErrors({});

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxel_ryaMh-IF3S-2ppQRnMAvWjI0yTweoURKxXWNo77Wbm9nogSAl1ZNfN1uNmkno/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );

      setLoading(false);
      setStatus("SUCCESS");
      e.target.reset();
    } catch (error) {
      setLoading(false);
      setStatus("ERROR");
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 relative inline-block">
          Get in Touch
          <span className="absolute left-0 bottom-0 w-full h-[3px] bg-sky-600 rounded-full"></span>
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Have a question, collaboration idea, or feedback? Fill out the form
          below — I’ll personally get back to you.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-6 md:p-8 border border-slate-200"
        >
          <div className="grid gap-5">
            <div>
              <input
                name="name"
                placeholder="Your Name"
                className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 outline-none w-full"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 outline-none w-full"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="subject"
                placeholder="Subject"
                className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 outline-none w-full"
                required
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 outline-none resize-none w-full"
                required
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold shadow-md hover:shadow-lg hover:bg-sky-700 transition-all ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status Messages */}
            <AnimatePresence>
              {status === "SUCCESS" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-green-600 text-sm mt-2"
                >
                  ✅ Your message has been sent successfully!
                </motion.p>
              )}
              {status === "ERROR" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-red-600 text-sm mt-2"
                >
                  ❌ Oops! Something went wrong. Please try again later.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </section>
  );
}





// YOUR_GOOGLE_SCRIPT_WEB_APP_URL
// https://script.google.com/macros/s/AKfycbxel_ryaMh-IF3S-2ppQRnMAvWjI0yTweoURKxXWNo77Wbm9nogSAl1ZNfN1uNmkno/exec

// google excel sheet
// https://docs.google.com/spreadsheets/d/1oE10wzGRNZWWRoKdDh5sUMx74HxKktTm3UPbMf1weM8/edit?gid=0#gid=0