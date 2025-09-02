import SkillsMarquee from './SkillsMarquee';
import dashbordImg from '../assets/Dashbord.jpg';
import Certification from './Certification';
import Articles from './Articles';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone, Star, Zap, Cpu } from 'lucide-react';
import myPhoto from '../assets/my image.png'; 
import ktkImage from '../assets/KTK.png';

//logo import
import reactLogo from '../assets/react-logo.png'; // Updated to use ES module import
import reactNativeLogo from '../assets/react-native-logo.png';
import javaLogo from '../assets/java-logo.png';
import jsLogo from '../assets/js-logo.png';
import htmlcssLogo from '../assets/htmlcss-logo.png';
import phpLogo from '../assets/hp-lpogo.png';
import pythonLogo from '../assets/python-logo.png';
import nodejsLogo from '../assets/nodejs-logo.png';
import firebaseLogo from '../assets/firebase-logo.png';
import mongodbLogo from '../assets/mongodb-logo.png';
import mysqlLogo from '../assets/mysql-logo.png';
import gitLogo from '../assets/git-logo.png';
import figmaLogo from '../assets/figma-logo.png';
//import qaManualLogo from '../assets/qam-logo.png';
import qaAutomationLogo from '../assets/qaa-logo.png';
import baLogo from '../assets/ba-logo.png';
import cloudaiLogo from '../assets/cloudai-logo.png';



const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Contact form state
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState('');

    const handleContactChange = (e) => {
      const { name, value } = e.target;
      setContactForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleContactSubmit = (e) => {
      e.preventDefault();
      setFormStatus('Sending...');
        emailjs.send(
          'service_59sisvb',
          'template_jtnfvln',
          {
            from_name: contactForm.name,
            from_email: contactForm.email,
            message: contactForm.message,
          },
          'prWynF6MLefTLNOL8'
        )
      .then(
        () => {
          setFormStatus('Message sent!');
          setContactForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setFormStatus('Failed to send. Please try again.');
        }
      );
    };

  

  /* Track mouse position for interactive effects
  //useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);*/


  // Smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating particles component
  const FloatingParticles = () => {
    const particles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s infinite linear`
            }}
          />
        ))}
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.3; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }
        `}</style>
      </div>
    );
  };


  // Animated gradient orbs
  const GradientOrbs = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );


  // Matrix rain effect
  const MatrixRain = () => {
    const [drops, setDrops] = useState([]);

    useEffect(() => {
      const characters = '01';
      const columns = Math.floor(window.innerWidth / 20);
      const newDrops = [];

      for (let i = 0; i < columns; i++) {
        newDrops.push({
          id: i,
          x: i * 20,
          characters: Array.from({ length: 15 }, () => 
            characters[Math.floor(Math.random() * characters.length)]
          ),
          speed: Math.random() * 3 + 1
        });
      }
      setDrops(newDrops);
    }, []);

    return (
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0">
        {drops.map((drop) => (
          <div
            key={drop.id}
            className="absolute text-green-400 text-sm font-mono"
            style={{
              left: `${drop.x}px`,
              animation: `matrixRain ${20 / drop.speed}s linear infinite`
            }}
          >
            {drop.characters.map((char, index) => (
              <div key={index} className="leading-5">
                {char}
              </div>
            ))}
          </div>
        ))}
        <style jsx>{`
          @keyframes matrixRain {
            0% { transform: translateY(-100vh); }
            100% { transform: translateY(100vh); }
          }
        `}</style>
      </div>
    );
  };

  const skills = [
    // { name: 'React.js', level: 85, icon: <Zap className="w-6 h-6" />, color: 'from-blue-400 to-cyan-500', logo: require('../assets/react-logo.png') },
    { name: 'React.js', color: 'from-blue-400 to-cyan-500', icon: <Zap className="w-6 h-6" />, logo: reactLogo },
    { name: 'React Native', color: 'from-blue-400 to-cyan-500', icon: <Zap className="w-6 h-6" />, logo: reactNativeLogo },
    { name: 'Java', color: 'from-blue-400 to-cyan-500', icon: <Cpu className="w-6 h-6" />, logo: javaLogo },
    { name: 'JavaScript', color: 'from-blue-400 to-cyan-500', icon: <Code className="w-6 h-6" />, logo: jsLogo },
    { name: 'HTML/CSS', color: 'from-blue-400 to-cyan-500', icon: <Globe className="w-6 h-6" />, logo: htmlcssLogo },
    { name: 'PHP', color: 'from-blue-400 to-cyan-500', icon: <Code className="w-6 h-6" />, logo: phpLogo },
    { name: 'Python', color: 'from-blue-400 to-cyan-500', icon: <Cpu className="w-6 h-6" />, logo: pythonLogo },
    { name: 'Node.js', color: 'from-blue-400 to-cyan-500', icon: <Database className="w-6 h-6" />, logo: nodejsLogo },
    { name: 'MySQL', color: 'from-blue-400 to-cyan-500', icon: <Database className="w-6 h-6" />, logo: mysqlLogo },
    { name: 'Git', color: 'from-blue-400 to-cyan-500', icon: <Code className="w-6 h-6" />, logo: gitLogo },
    { name: 'Figma Design', color: 'from-blue-400 to-cyan-500', icon: <Star className="w-6 h-6" />, logo: figmaLogo },
    { name: 'QA Testing', color: 'from-blue-400 to-cyan-500', icon: <Star className="w-6 h-6" />, logo: qaAutomationLogo },
    { name: 'Business Analysis', color: 'from-blue-400 to-cyan-500', icon: <Cpu className="w-6 h-6" />, logo: baLogo },
    { name: 'Cloud & AI Basics', color: 'from-blue-400 to-cyan-500', icon: <Zap className="w-6 h-6" />, logo: cloudaiLogo },
    { name: 'Firebase', color: 'from-blue-400 to-cyan-500', icon: <Cpu className="w-6 h-6" />, logo: firebaseLogo },
    { name: 'MongoDB', color: 'from-blue-400 to-cyan-500', icon: <Database className="w-6 h-6" />, logo: mongodbLogo }
  ];

  const projects = [
    {
      title: 'Car Rental Admin Dashboard',
      description: '""Speed Cabs is a real-world vehicle rental company project, developed as our second-year group project with a mobile application."',
      tech: ['React', 'Node.js', 'Firebase', 'Material-UI','Chart.js'],
      github: 'https://github.com/kithmal0015/Car-Rental-Admin-Dashboard.git',
      //demo: '#',
      gradient: 'from-blue-600 via-purple-600 to-pink-600'
    },
   
    {
      title: 'Mail Management System Backend',
      description: '"A RESTful API built with ASP.NET Core Web API to manage university mail, departments, and delivery statuses with full CRUD operations."',
      tech: ['JavaScript', 'HTML/CSS', 'Weather API', 'Chart.js'],
      github: 'https://github.com/kithmal0015/Mail-Management-System-Backend.git',
      //demo: '#',
      gradient: 'from-yellow-400 via-orange-500 to-red-500'
    },

     {
      title: 'E-Market Front End',
      description: '"This project About E-Market Front End, Develop using React"',
      tech: ['React', 'JavaScript', 'HTML/CSS','Node.js'],
      github: 'https://github.com/kithmal0015/E--Market-Front-End.git',
      //demo: '#',
      gradient: 'from-green-400 via-blue-500 to-purple-600'
    },

    {
      title: 'Portfolio Website',
      description: '"As an IT undergraduate, I built my portfolio as a digital CV showcasing my introduction, skills, certifications, projects, and contact details."',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/kithmal0015/My-portfolio.git',
      //demo: '#',
      gradient: 'from-purple-500 via-pink-500 to-red-500'
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Animated Backgrounds */}
      <MatrixRain />
      <GradientOrbs />
      
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
        K T K Digital Hub
      </div>
            
             {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
      {['Home', 'About', 'Skills', 'Projects',  'Certification', 'Articles', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className={`relative hover:text-blue-400 transition-all duration-300 group ${
              activeSection === item.toLowerCase() ? 'text-blue-400' : ''
            }`}
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

       {/* Mobile Navigation */}
  {isMenuOpen && (
    <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-gray-700/50">
      <div className="px-2 pt-2 pb-3 space-y-1">
  {['Home', 'About', 'Skills', 'Projects', 'Articles', 'Certification', 'Contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="block w-full text-left px-3 py-2 text-base font-medium hover:text-blue-400 hover:bg-gray-700/50 rounded-lg transition-all duration-300"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )}
      </nav>


      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
        <FloatingParticles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            {/* Animated Avatar */}
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto relative">
                {/* SVG Stroke Animation */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
      <circle
        cx="64" cy="64" r="60"
        fill="none"
        stroke="url(#avatarGradient)"
        strokeWidth="4"
        strokeDasharray="377"
        strokeDashoffset="377"
        className="avatar-stroke-animate"
      />
      <defs>
        <linearGradient id="avatarGradient" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" />
          <stop offset="0.5" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
    
                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={ktkImage} alt="KTK" className="w-27 h-27 object-cover rounded-full" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                K T Kodithuwakku
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              IT Undergraduate passionate about creating 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> innovative solutions </span>
              and Frontend Developer | QA Engineer | Business Analyst | Figma Designer | Web Developer 
            </p>
            
            <div className="flex justify-center space-x-4 mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="relative border-2 border-gray-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 group overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/kithmal0015" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:kithmaltharinda7078@gmail.com" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
                <Mail className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes gradient-x {
            0%, 100% { background-size: 200% 200%; background-position: left center; }
            50% { background-size: 200% 200%; background-position: right center; }
          }
          .animate-gradient-x {
            animation: gradient-x 3s ease infinite;
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          @keyframes avatarStroke {
            to { stroke-dashoffset: 0; }
          }
          .avatar-stroke-animate {
            animation: avatarStroke 2s cubic-bezier(0.4,0,0.2,1) forwards;
          }
        `}</style>
      </section>




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
                  <h3 className="font-semibold text-blue-400 mb-2 group-hover:text-blue-300">Education</h3>
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

 

  {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto animate-pulse"></div>
          </div>

          <SkillsMarquee skills={skills} />
        </div>
      </section>





      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group relative overflow-hidden"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                
                {/* Glowing border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-lg blur-sm opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400/20 hover:bg-blue-600/30 hover:border-blue-400/40 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 group/link"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 group/link"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                      Demo
                    </a>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



 {/* Certification Section */}
  <Certification />

 {/* Articles Section */}
  <Articles />


      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto animate-pulse"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Let's Connect
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed justify-center">
                  I am open to new projects and working partnerships. All you have to do is enter your name, email & your message and click the send message button to get your work done as you wish.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="group-hover:text-blue-400 transition-colors duration-300">kithmaltharinda7078@gmail.com</span>
                  </div>
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-5 h-5" />
                    </div>
                    <span className="group-hover:text-purple-400 transition-colors duration-300">github.com/kithmal0015</span>
                  </div>
                  <div className="flex items-center group hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-pink-600 to-red-600 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span className="group-hover:text-pink-400 transition-colors duration-300">linkedin.com/in/kithmal-tharinda-kodithuwakku</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleContactSubmit} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700/50 hover:border-gray-600 transition-all duration-300 relative overflow-hidden group">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-gray-700/70 transition-all duration-300 hover:border-gray-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-gray-700/70 transition-all duration-300 hover:border-gray-500"
                      placeholder="youremail@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 focus:bg-gray-700/70 transition-all duration-300 hover:border-gray-500 resize-none"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  {formStatus && (
                    <p className="text-green-400 mt-4 text-center">{formStatus}</p>
                  )}
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </form>
            </div>
          </div>
        </div>
      </section>





      {/* Footer */}
      <footer className="bg-gray-800/50 backdrop-blur-sm py-12 border-t border-gray-700/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5"></div>
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
          <div className="flex justify-center space-x-5 mb-8 text-sm">
            {['Home', 'About', 'Skills', 'Projects',  'Certification', 'Articles','Contact'].map((item) => (
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
                Crafted with for amazing experiences
              </p>
            </div>
          </div>
        </div>

        {/* Floating decoration */}
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-10 right-10 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 group"
      >
        <svg className="w-6 h-6 text-white group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Mouse follower effect */}
      <div 
        className="fixed pointer-events-none z-0 mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transition: 'all 0.1s ease'
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full opacity-30"></div>
      </div>
    </div>
  );
};

export default Portfolio;

