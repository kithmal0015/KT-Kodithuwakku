import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";
import React, { useState } from 'react';

const projects = [
  {
    title: 'Car Rental Admin Dashboard',
    description: '""Speed Cabs is a real-world vehicle rental company project, developed as our second-year group project with a mobile application."',
    tech: ['React', 'Node.js', 'Firebase', 'Material-UI','Chart.js'],
    github: 'https://github.com/kithmal0015/Car-Rental-Admin-Dashboard.git',
    gradient: 'from-blue-600 via-purple-600 to-pink-600'
  },
  {
    title: 'Mail Management System Backend',
    description: '"A RESTful API built with ASP.NET Core Web API to manage university mail, departments, and delivery statuses with full CRUD operations."',
    tech: ['JavaScript', 'HTML/CSS', 'Weather API', 'Chart.js'],
    github: 'https://github.com/kithmal0015/Mail-Management-System-Backend.git',
    gradient: 'from-yellow-400 via-orange-500 to-red-500'
  },
  {
    title: 'E-Market Front End',
    description: '"This project About E-Market Front End, Develop using React"',
    tech: ['React', 'JavaScript', 'HTML/CSS','Node.js'],
    github: 'https://github.com/kithmal0015/E--Market-Front-End.git',
    gradient: 'from-green-400 via-blue-500 to-purple-600'
  },
  {
    title: 'Portfolio Website',
    description: '"As an IT undergraduate, I built my portfolio as a digital CV showcasing my introduction, skills, certifications, projects, and contact details."',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/kithmal0015/My-portfolio.git',
    gradient: 'from-purple-500 via-pink-500 to-red-500'
  },
  {
    title: 'Gym Management System in C#',
    description: '"A comprehensive gym management system developed in C# to manage memberships, workouts, and schedules."',
    tech: ['C#', 'ASP.NET', 'Entity Framework', 'SQL Server'],
    github: 'https://github.com/kithmal0015/Web-Projects.git',
    gradient: 'from-blue-600 via-purple-600 to-pink-600'
  },
  {
    title: 'Mobile-Application-Promotional-Web',
    description: '"A promotional web application for mobile app showcasing features, benefits, and download links."',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/kithmal0015/Mobile-Application-Promotional-Web.git',
    gradient: 'from-yellow-400 via-orange-500 to-red-500'
  },
  {
    title: 'TCP-Communication',
    description: '"This project demonstrates how to build a distributed calculator using .NET Core and gRPC"',
    tech: ['C#', 'gRPC', 'Protobuf'],
    github: 'https://github.com/kithmal0015/TCP-Communication.git',
    gradient: 'from-green-400 via-blue-500 to-purple-600'
  },
  {
    title: 'Remote-Programing---gRPC',
    description: '"About gRPC is a cross-platform, high-performance, open-source framework for Remote Procedure Calls (RPC)."',
    tech: ['C#', 'gRPC', 'ASP.NET', 'Restful API'],
    github: 'https://github.com/kithmal0015/Remote-Programing---gRPC.git',
    gradient: 'from-purple-500 via-pink-500 to-red-500'
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 4;
  const displayedProjects = showAll ? projects : projects.slice(0, initialCount);

  return (
    <section id="projects" className="font-Libertinus-Sans py-20 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group relative overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
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
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 group/link"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-all"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
