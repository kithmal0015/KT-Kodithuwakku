import React from 'react';

const MarqueeRow = ({ skills, reverse }) => (
  <div className="overflow-hidden w-full py-2">
    <div
      className={`flex gap-6 animate-marquee ${reverse ? 'animate-marquee-reverse' : ''}`}
      style={{ animationDuration: '15s' }}
    >
      {skills.map((skill, idx) => (
        <div
          key={skill.name + idx}
          className={
            `bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden flex flex-col items-center justify-center min-w-[180px] min-h-[160px]`
          }
          style={{
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `linear-gradient(90deg, var(--tw-gradient-from, #3b82f6), var(--tw-gradient-to, #8b5cf6))`;
            if (skill.color) {
              // Use skill.color for gradient
              const colors = skill.color.split(' ');
              if (colors.length === 2) {
                e.currentTarget.style.background = `linear-gradient(90deg, ${colors[0].replace('from-', '')}, ${colors[1].replace('to-', '')})`;
              }
            }
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '';
          }}
        >
          <img src={skill.logo} alt={skill.name + ' logo'} className="w-16 h-16 object-contain mb-2 mx-auto" />
          <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-300 text-center">{skill.name}</h3>
        </div>
      ))}
      {/* Duplicate for seamless loop */}
      {skills.map((skill, idx) => (
        <div
          key={skill.name + idx + '-dup'}
          className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 flex flex-col items-center justify-center min-w-[180px] min-h-[160px] opacity-40"
        >
          <img src={skill.logo} alt={skill.name + ' logo'} className="w-16 h-16 object-contain mb-2 mx-auto" />
          <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
        </div>
      ))}
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-reverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .animate-marquee {
        animation: marquee linear infinite;
      }
      .animate-marquee-reverse {
        animation: marquee-reverse linear infinite;
      }
    `}</style>
  </div>
);

const SkillsMarquee = ({ skills }) => {
  const mid = Math.ceil(skills.length / 2);
  const rows = [skills.slice(0, mid), skills.slice(mid)];
  return (
    <div className="space-y-8">
      <MarqueeRow skills={rows[0]} reverse={false} />
      <MarqueeRow skills={rows[1]} reverse={true} />
    </div>
  );
};

export default SkillsMarquee;
