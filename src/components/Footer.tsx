import React from 'react';
import { Camera, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500 p-2 rounded-xl shadow-lg">
                <Camera className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                FunkaarHub
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Pakistan's premier platform connecting talented artists with leading media houses. 
              We bridge the gap between creativity and opportunity through innovation and dedication.
            </p>
            <div className="flex space-x-3">
              <button className="p-3 bg-sky-600 hover:bg-sky-700 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Facebook size={18} />
              </button>
              <button className="p-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Twitter size={18} />
              </button>
              <button className="p-3 bg-cyan-600 hover:bg-cyan-700 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Instagram size={18} />
              </button>
              <button className="p-3 bg-sky-600 hover:bg-sky-700 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Linkedin size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Artists', 'Portfolio', 'Services'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-sky-600/20 rounded-lg group-hover:bg-sky-600/30 transition-colors duration-200">
                  <Mail className="text-sky-400" size={16} />
                </div>
                <span className="text-slate-400 text-sm">info@funkaarhub.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-200">
                  <Phone className="text-blue-400" size={16} />
                </div>
                <span className="text-slate-400 text-sm">+92 300 1234567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-cyan-600/20 rounded-lg group-hover:bg-cyan-600/30 transition-colors duration-200">
                  <MapPin className="text-cyan-400" size={16} />
                </div>
                <span className="text-slate-400 text-sm">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 FunkaarHub. All rights reserved. Made with ❤️ in Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;