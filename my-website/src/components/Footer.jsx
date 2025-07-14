// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-6 bg-yellow-500 text-black text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/mdpaizal" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6 hover:text-gray-400 transition" />
        </a>
        <a href="https://linkedin.com/in/mdpaizal" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 hover:text-gray-400 transition" />
        </a>
        <a href="https://x.com/mohamedpaizal30?s=11&t=WuwIIv3v-S2sQ4w4spXvEw" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="w-6 h-6 hover:text-gray-400 transition" />
        </a>
        <a href="https://www.instagram.com/md_paizall?igsh=Z3ZpamZ4MGRtaTV2" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 hover:text-gray-400 transition" />
        </a>
        <a href="https://wa.me/8681037866" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-6 h-6 hover:text-gray-400 transition" />
        </a>

      </div>
      <p>&copy; 2025 Mohamed Paizal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
