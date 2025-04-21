"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false); // Added state for showing message

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formDataToSend = new FormData(event.currentTarget);
    formDataToSend.append("access_key", "c68c7db3-7a67-49f1-996f-69140065103f");

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", surname: "", email: "", subject: "", message: "" });
    } else {
      setStatus("❌ Failed to send message. Try again.");
    }

    setShowMessage(true); // Show message after form submission

    setTimeout(() => {
      setShowMessage(false); // Hide message after 3 seconds
    }, 3000);
  }

  return (
    <div id="contact" className=" bg-black text-white flex items-center justify-center p-6 space-y-10 font-serif">
      <div className="w-full max-w-4xl bg-black p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
        {/* Left Section - Contact Form */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Surname Fields */}
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-3 rounded-md w-1/2 bg-white text-black"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                className="p-3 rounded-md w-1/2 bg-white text-black"
                required
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
              />
            </div>

            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Mail Address"
              className="p-3 rounded-md w-full bg-white text-black"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            {/* Subject Field */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-3 rounded-md w-full bg-white text-black"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />

            {/* Message Field */}
            <textarea
              name="message"
              placeholder="Message"
              className="p-3 rounded-md w-full bg-white text-black h-32"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md w-full md:w-auto hover:bg-blue-600 transition"
            >
              Send Message
            </button>

            {/* Status Message */}
            {showMessage && (
              <p className={`mt-4 text-center text-sm ${status?.includes("Failed") ? "text-red-500" : "text-green-500"}`}>
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Right Section - Contact Details */}
        <div className="w-full md:w-1/3 flex flex-col gap-6 text-lg lg:mt-40 text-center md:text-left">
  <div className="flex items-center justify-center md:justify-start gap-3">
    <FaPhoneAlt className="text-blue-400" size={24} />
    <span className="text-sm sm:text-base lg:text-lg">+92 3012229525</span>
  </div>
  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
  <FaEnvelope className="text-blue-400" size={20} />
  <span className="text-xs sm:text-sm md:text-base lg:text-lg">alishafaqat4473@gmail.com</span>
</div>

  <div className="flex items-center justify-center md:justify-start gap-3">
    <FaMapMarkerAlt className="text-blue-400" size={24} />
    <span className="text-sm sm:text-base lg:text-lg">144 Sector 31 D P&T society Koranghi, Karachi</span>
  </div>
</div>

      </div>
    </div>
  );
}
