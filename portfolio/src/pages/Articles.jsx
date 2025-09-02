import React from 'react';

const articles = [
  {
    title: 'Would you also like to know about authentication and authorization?',
    date: 'February 15, 2025',
    summary: 'Simply about Authentication & Authorization in web applications.',
    link: 'https://www.linkedin.com/pulse/%E0%B7%83%E0%B6%AD%E0%B6%BA%E0%B6%B4%E0%B6%B1%E0%B6%BA-%E0%B7%83%E0%B7%84-%E0%B6%85%E0%B7%80%E0%B7%83%E0%B6%BB-%E0%B6%AF%E0%B6%B8-%E0%B6%9C%E0%B6%B1-%E0%B6%94%E0%B6%B6%E0%B6%AD-%E0%B6%AF%E0%B6%B1%E0%B6%9C%E0%B6%B1%E0%B6%B1-%E0%B6%9A%E0%B6%B8%E0%B6%AD%E0%B6%AF-would-you-also-kodithuwakku-bvbqc'
  },
  {
    title: 'DeepSeek-V3 හෙවත් නුතන ලොවේ AI පෙරලි කාරයා.',
    date: 'February 5, 2025',
    summary: 'කොහොමද DeepSeek-V3 වැඩ කරනේ?',
    link: 'https://www.linkedin.com/pulse/deepseek-v3-%E0%B7%84%E0%B7%80%E0%B6%AD-%E0%B6%B1%E0%B6%AD%E0%B6%B1-%E0%B6%BD%E0%B7%80-ai-%E0%B6%B4%E0%B6%BB%E0%B6%BD-%E0%B6%9A%E0%B6%BB%E0%B6%BA-kithmal-tharinda-kodithuwakku-krnpc'
  },
  {
    title: 'What are these inner classes in Java?',
    date: 'January 30, 2025',
    summary: 'An overview of inner classes in Java and their use cases.',
    link: 'https://www.linkedin.com/pulse/%E0%B6%B8%E0%B6%B1%E0%B7%80%E0%B6%AF-%E0%B6%B8-%E0%B6%A2%E0%B7%80-%E0%B7%80%E0%B6%BD-%E0%B6%AD%E0%B6%BA%E0%B6%B1-%E0%B7%84-%E0%B6%85%E0%B6%B7%E0%B6%BA%E0%B6%B1%E0%B6%AD%E0%B6%BB-%E0%B6%B4%E0%B6%B1%E0%B6%AD-what-inner-classes-java-kodithuwakku-7yjgc'
  },
  {
    title: "A Beginner's Guide to Application Programming Interfaces",
    date: 'January 26, 2025',
    summary: 'Learn the basics of APIs, how they work, and why they are essential for modern software development.',
    link: 'https://www.linkedin.com/pulse/beginners-guide-application-programming-interfaces-kodithuwakku-zmnvc?trackingId=tcYkQvpXQCaN9OB%2FB8d0mg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BowiPThouSGWvX7jfw5xquw%3D%3D'
  },
  {
    title: 'Understanding Object-Oriented Programming with Java',
    date: 'January 25, 2025',
    summary: 'An introduction to the principles of object-oriented programming using Java.',
    link: 'https://www.linkedin.com/pulse/understanding-object-oriented-programming-java-kodithuwakku-cxzuc'
  },
  {
    title: 'Cloud and Mobile Computing: The Perfect Duo for Business Transformation',
    date: 'January 13, 2025',
    summary: 'Exploring the synergy between cloud computing and mobile technology in driving business innovation.',
    link: 'https://www.linkedin.com/pulse/cloud-mobile-computing-perfect-duo-business-transformationhttps://www.linkedin.com/pulse/cloud-mobile-computing-perfect-duo-business-kodithuwakku-m2lrc?trackingId=tcYkQvpXQCaN9OB%2FB8d0mg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3B%2F39wnDY5Rt6jMbYvSSWi7A%3D%3D-kodithuwakku-m2lrc'
  },
];

const Articles = () => (
  <section id="articles" className="py-20 bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-gray-800/60 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Articles</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.slice(0, 3).map((article, idx) => (
          <div key={idx} className="bg-gray-900/80 border border-gray-800 rounded-xl px-10 py-6 shadow-lg hover:shadow-blue-400/30 transition-shadow duration-300 group flex flex-col justify-between min-h-[220px] max-w-[400px] w-full" style={{height: '200px'}}>
            <div>
              <h3 className="text-md font-semibold mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:text-blue-400 transition-colors duration-300">{article.title}</h3>
              <small className="text-gray-400 mb-1 block">{article.date}</small>
              <p className="text-gray-300 mb-1 line-clamp-2">{article.summary}</p>
            </div>
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 self-end">Read more</a>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {articles.slice(3, 6).map((article, idx) => (
          <div key={idx} className="bg-gray-900/80 border border-gray-800 rounded-xl px-10 py-6 shadow-lg hover:shadow-blue-400/30 transition-shadow duration-300 group flex flex-col justify-between min-h-[220px] max-w-[400px] w-full" style={{height: '200px'}}>
            <div>
              <h3 className="text-md font-semibold mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:text-blue-400 transition-colors duration-300">{article.title}</h3>
              <small className="text-gray-400 mb-1 block">{article.date}</small>
              <p className="text-gray-300 mb-1 line-clamp-2">{article.summary}</p>
            </div>
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 self-end">Read more</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Articles;
