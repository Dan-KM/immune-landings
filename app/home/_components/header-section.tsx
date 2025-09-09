"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Logo from '@/app/home/assets/logo.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar when scrolling down
      } else {
        setIsVisible(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full bg-[#F8F8FF] z-50 shadow-md flex justify-between items-center px-6 py-4 transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100 shadow-lg"
          : "-translate-y-full opacity-0"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="z-10">
        <Image
          src={Logo} // Update this path to your actual logo location
          alt="IVY Logo"
          width={80}
          height={80}
          className="w-12 sm:w-16 md:w-18 lg:w-20"
        />
      </Link>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-2xl bg-transparent border-none cursor-pointer text-[#121212]"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        &#9776;
      </button>

      {/* Navigation Links */}
      <div
        className={`
          md:flex md:items-center md:static absolute top-full left-0 w-full bg-[#F8F8FF] md:w-auto md:shadow-none shadow-md
          ${isOpen ? "flex flex-col" : "hidden"}
        `}
      >
        <Link
          href="/"
          className="text-[#121212] hover:text-[#04A699] text-sm md:ml-6 md:my-0 py-2.5 px-5 border-b border-[#02343B] md:border-none"
        >
          Home
        </Link>
        <Link
          href="/about-us"
          className="text-[#121212] hover:text-[#04A699] text-sm md:ml-6 md:my-0 py-2.5 px-5 border-b border-[#02343B] md:border-none"
        >
          About Us
        </Link>
        <Link
          href="/contact-us"
          className="text-[#121212] hover:text-[#04A699] text-sm md:ml-6 md:my-0 py-2.5 px-5 border-b border-[#02343B] md:border-none"
        >
          Contact Us
        </Link>
        <Link
          href="/vaccinations"
          className="text-[#121212] hover:text-[#04A699] text-sm md:ml-6 md:my-0 py-2.5 px-5 border-b border-[#02343B] md:border-none"
        >
          Vaccinations
        </Link>
        <Link
          href="/clinics"
          className="text-[#121212] hover:text-[#04A699] text-sm md:ml-6 md:my-0 py-2.5 px-5 border-b border-[#02343B] md:border-none"
        >
          Clinics Near You
        </Link>
        <Link
          href="/questions"
          className="text-[#121212] hover:text-[#04A699] text-sm md:ml-6 md:my-0 py-2.5 px-5 border-b border-[#02343B] md:border-none"
        >
          FAQ
        </Link>
      </div>
    </nav>
  );
}
