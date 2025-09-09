"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-teal-400">IVY Health</h3>
            <p className="text-gray-300">
              Providing quality healthcare services and vaccinations to keep our
              communities safe and healthy.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/vaccinations"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Vaccinations
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Routine Vaccinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Travel Vaccinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Health Screenings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Wellness Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Corporate Health
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-teal-400 mt-1" />
                <p className="text-gray-300">
                  123 Health Street, Medical District, City, 10001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-teal-400" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-teal-400" />
                <p className="text-gray-300">info@ivyhealth.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-gray-300">
                Get the latest health tips and updates
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full md:w-64 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800"
              />
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} IVY Health. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
