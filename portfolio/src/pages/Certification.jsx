import React from 'react';

const Certification = () => (
  <section id="certification" className="py-20 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-gray-800/50 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto animate-pulse"></div>
      </div>
      {/* Example certification cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-blue-400 transition-all duration-300">
          <h3 className="text-xl font-bold text-blue-400 mb-2">Python in Visual Studio Code</h3>
          <p className="text-gray-300 mb-2">Microsoft Learn | 2025</p>
          <a href="https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272/details/certifications/1742275073365/single-media-viewer?type=IMAGE&profileId=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAQw7AlEnSvu5Pe9Ru1DO8A%3D%3D" className="text-blue-400 hover:underline">View Credential</a>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-purple-400 transition-all duration-300">
          <h3 className="text-xl font-bold text-purple-400 mb-2">Create an Agent with Copilot</h3>
          <p className="text-gray-300 mb-2">Microsoft Learn | 2025</p>
          <a href="https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272/details/certifications/1742016289902/single-media-viewer?type=IMAGE&profileId=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAQw7AlEnSvu5Pe9Ru1DO8A%3D%3D" className="text-purple-400 hover:underline">View Credential</a>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-pink-400 transition-all duration-300">
          <h3 className="text-xl font-bold text-pink-400 mb-2">Master Generative AI</h3>
          <p className="text-gray-300 mb-2">Alison | 2025</p>
          <a href="https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272/details/certifications/1738988211875/single-media-viewer?type=DOCUMENT&profileId=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAQw7AlEnSvu5Pe9Ru1DO8A%3D%3D" className="text-pink-400 hover:underline">View Credential</a>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-blue-400 transition-all duration-300">
          <h3 className="text-xl font-bold text-blue-400 mb-2">Computer Hardware Basics</h3>
          <p className="text-gray-300 mb-2">Cisco  | 2025</p>
          <a href="https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272/details/certifications/1756212439470/single-media-viewer?type=IMAGE&profileId=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BC0Nox8wTTtqrku%2B1PIk6PA%3D%3D" className="text-blue-400 hover:underline">View Credential</a>
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-purple-400 transition-all duration-300">
          <h3 className="text-xl font-bold text-purple-400 mb-2">Introduction to Networks</h3>
          <p className="text-gray-300 mb-2">Cisco | 2025</p>
          <a href="https://www.linkedin.com/in/kithmal-tharinda-kodithuwakku-7b368a272/details/certifications/1756212156734/single-media-viewer?type=IMAGE&profileId=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAQw7AlEnSvu5Pe9Ru1DO8A%3D%3D" className="text-purple-400 hover:underline">View Credential</a>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-pink-400 transition-all duration-300">
          <h3 className="text-xl font-bold text-pink-400 mb-2">UI/UX Workshop</h3>
          <p className="text-gray-300 mb-2">CSSL | 2025</p>
          <a href="https://www.linkedin.com/posts/kithmal-tharinda-kodithuwakku-7b368a272_uiux-userexperience-designthinking-activity-7366111214025736192-ckBp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKp9_cBmmVh48zOpP6tm313g89F8CtWbc4" className="text-pink-400 hover:underline">View Credential</a>
        </div>
      </div>
    </div>
  </section>
);

export default Certification;
