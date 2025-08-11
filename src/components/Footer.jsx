import React from 'react';
import { footerData } from '../data';
import logo from '../assets/Vector.png'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-[#EFF7FF] border-t border-blue-500 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Left Side - Logo and Description */}
          <div className="space-y-4">
        {/* Logo */}
        <div className="flex items-center space-x-4 cursor-pointer">
          <img src={logo} alt="Softovia Logo" className="h-12 w-16" />
          <span className="text-blue-600 text-3xl font-semibold tracking-wide">
            SOFTOVIA
          </span>
        </div>
            
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              {footerData.description}
            </p>
          </div>
          
          {/* Right Side - Navigation Links */}
          <div className="lg:flex lg:justify-end">
            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {footerData.navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-500 transition-colors duration-200 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        {/* Bottom Section - Copyright and Legal Links */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            {/* Copyright */}
            <p className="text-gray-600 text-sm">
              {footerData.copyright}
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerData.legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;