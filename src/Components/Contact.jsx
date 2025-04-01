import React from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-900 mb-8 text-center">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center mb-3">
              <Mail className="mr-2 text-cyan-900" size={20} />
              <a
                href="mailto:ajanicentre@gmail.com"
                className="hover:text-blue-800"
              >
                ajanicentre@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-3">
              <Phone className="mr-2 text-cyan-900" size={20} />
              <span>+254 710 64 60 50</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-cyan-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-cyan-500"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-cyan-500 h-32"
                required
              />
              <button
                type="submit"
                className="bg-cyan-900 text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
              >
                Submit
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
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
