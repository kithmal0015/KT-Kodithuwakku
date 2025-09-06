import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-gray-800/50 backdrop-blur-sm py-12 border-t border-gray-700/50 relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5 animate-gradient-x"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Kithmal Tharinda Kodithuwakku
            </h3>
          </div>
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/kithmal0015" 
              className="group bg-gray-700/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272/" 
              className="group bg-gray-700/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a 
              href="mailto:kithmaltharinda7078@gmail.com" 
              className="group bg-gray-700/50 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
          {/* Quick Links */}
          <div className="font-bold flex justify-center space-x-2 mb-6 text-sm">
            {['Home', 'About', 'Skills', 'Projects',  'Certificats', 'Articles','Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
          {/* Copyright */}
          <div className="border-t border-gray-700/50 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 K T Kodithuwakku.Built with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> React </span>
              & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> Tailwind CSS</span>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Designed to provide a digitally connected experience for me
            </p>
          </div>
        </div>
      </div>
      {/* Floating decoration */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-50"></div>
      <div className="absolute top-10 right-10 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

