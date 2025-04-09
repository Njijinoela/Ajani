import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using FormSubmit.co service (free) or your own backend
      const response = await fetch(
        "https://formsubmit.co/ajax/ajanicentre@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "New Contact Form Submission",
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const openDonationPage = () => {
    // Replace with your actual donation link
    window.open("https://example.com/donate", "_blank");
  };

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-center">
          Get in Touch
        </h2>

        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-100 text-red-800 rounded">
            Error sending message. Please try again or contact us directly.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center mb-3">
              <Mail className="mr-2 text-cyan-900" size={20} />
              <a
                href="mailto:ajanicentre@gmail.com"
                className="hover:text-blue-800"
              >
                ajanicenter@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-3">
              <Phone className="mr-2 text-cyan-900" size={20} />
              <span>+254 710 64 60 50</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-cyan-500"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-cyan-500"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-cyan-500 h-32"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-cyan-900 text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">Support Our Cause</h3>
          <p className="mb-4 text-gray-700">
            Your donations help us provide legal and psychosocial support to
            survivors of sexual and gender-based violence.
          </p>
          <button
            onClick={openDonationPage}
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
