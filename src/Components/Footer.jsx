import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-orange-200 text-primary py-12 px-4">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-800">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-800">
                About Us
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-blue-800">
                Our Team
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-800">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-800">
                Donate
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 mb-6">
            <a href="https://www.facebook.com" className="hover:text-blue-800">
              <Facebook />
            </a>
            <a href="https://www.twitter.com" className="hover:text-blue-800">
              <Twitter />
            </a>
            <a href="https://www.linkedin.com" className="hover:text-blue-800">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com" className="hover:text-blue-800">
              <Instagram />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="mr-2" size={20} />
            Business Hours
          </h4>
          <p className="ml-7">
            Monday - Friday: 9:00 AM - 5:00 PM
            <br />
            Saturday: 10:00 AM - 3:00 PM
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
