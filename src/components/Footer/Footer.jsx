import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        {/* Brand + Socials (full width, keep it out of the 3-col grid) */}
        <div className="py-8 px-4">
          <h1 className="sm:text-3xl text-xl font-bold mb-3 flex items-center gap-3 font-serif">
            Horizon Wheels
          </h1>
          <p className="text-sm">
            Your road, your choice. Made with passion for people who love to drive.
            Thank you for choosing Horizon Wheels.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <a href="#"><FaInstagram className="text-3xl hover:text-primary duration-300" /></a>
            <a href="#"><FaFacebook className="text-3xl hover:text-primary duration-300" /></a>
            <a href="#"><FaLinkedin className="text-3xl hover:text-primary duration-300" /></a>
          </div>
        </div>

        {/* Three columns: left = Support, middle = Contact, right = Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 pb-8">
          {/* Left: Customer Support */}
          <div className="px-4">
            <h2 className="text-xl font-bold mb-3">Customer Support</h2>
            <ul className="flex flex-col gap-3 text-gray-500 dark:text-gray-200">
              <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary">FAQ</li>
              <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary">Terms & Conditions</li>
              <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary">Privacy Policy</li>
              <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary">Help Center</li>
            </ul>
          </div>

          {/* Middle: Contact Info */}
          <div className="px-4">
            <h2 className="text-xl font-bold mb-3">Contact Us</h2>
            <ul className="flex flex-col gap-3 text-gray-500 dark:text-gray-200">
              <li>📍 123 Main St, New York, NY</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ support@horizonwheels.com</li>
            </ul>
          </div>

          {/* Right: Locations */}
          <div className="px-4">
            <h2 className="text-xl font-bold mb-3">Our Locations</h2>
            <ul className="flex flex-col gap-3 text-gray-500 dark:text-gray-200">
              <li>New York, NY</li>
              <li>Los Angeles, CA</li>
              <li>Chicago, IL</li>
              <li>Houston, TX</li>
              <li>Miami, FL</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;