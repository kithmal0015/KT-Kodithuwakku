import React from "react";
import { Code, Database, Globe } from "react-feather";
import myPhoto from "../assets/my image.png";

// ...existing code...

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-81 h-81 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full mx-auto flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-spin-slow opacity-20"></div>
                <div className="w-76 h-76 bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                    src={myPhoto}
                    alt="K T Kodithuwakku"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              <div className="absolute top-10 left-10 text-blue-400 animate-bounce">
                <Code className="w-6 h-6" />
              </div>
              <div className="absolute top-20 right-10 text-purple-400 animate-bounce" style={{animationDelay: '0.5s'}}>
                <Database className="w-6 h-6" />
              </div>
              <div className="absolute bottom-20 left-20 text-pink-400 animate-bounce" style={{animationDelay: '1s'}}>
                <Globe className="w-6 h-6" />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed relative">
                I'm a passionate IT undergraduate with a strong foundation in software development 
                and a keen interest in emerging technologies. My journey in technology began with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> curiosity </span>
                and has evolved into a dedication to creating meaningful digital solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I enjoy working on both frontend and backend development, always striving to learn 
                new technologies and improve my skills. My goal is to contribute to 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> innovative projects </span>
                that make a positive impact on people's lives.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group">
                  <h3 className="font-semibold text-blue-400 mb-2 group-hover:text-blue-300\">Education</h3>
                  <p className="text-gray-300"> Bachelor of Information Technology - KDU </p>
                  <p className="text-sm text-gray-400">2023 to 2026 (Expected) </p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 group">
                  <h3 className="font-semibold text-purple-400 mb-2 group-hover:text-purple-300">Focus Areas</h3>
                  <p className="text-gray-300">Web Development</p>
                  <p className="text-sm text-gray-400">Frontend Development</p>
                  <p className="text-sm text-gray-400">QA Engineering</p>
                  <p className="text-sm text-gray-400">Business Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

