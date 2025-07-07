import React, { useState } from 'react';
import { Menu, X, Camera, Users, User, Briefcase, Mail, HelpCircle, Handshake } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', icon: Camera },
    { name: 'Team', icon: Users },
    { name: 'Funkaars', icon: User },
    { name: 'Portfolio', icon: Briefcase },
    { name: 'Contact', icon: Mail },
    { name: 'FAQs', icon: HelpCircle },
    { name: 'Partners', icon: Handshake },
  ];

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-lg text-[#333333] hover:text-[#095373] hover:bg-gray-100 transition-all duration-200"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-[#095373] p-2 rounded-xl shadow-lg">
                <Camera className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-[#095373]">
                FunkaarHub
              </span>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <button className="text-[#333333] hover:text-[#095373] transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gray-100">
                Login
              </button>
              <button className="bg-[#E77C25] text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Overlay - Now works on all screen sizes */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed left-0 top-0 bottom-0 w-80 bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-out">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="bg-[#095373] p-2 rounded-xl shadow-lg">
                  <Camera className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold text-[#095373]">
                  FunkaarHub
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-[#333333] hover:text-[#095373] hover:bg-gray-100 transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="py-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center space-x-4 px-6 py-4 text-[#333333] hover:bg-gray-100 hover:text-[#095373] transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={20} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;