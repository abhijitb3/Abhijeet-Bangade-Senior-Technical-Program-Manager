import { useEffect, useRef, useState } from "react";

export default function Competencies() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const leadershipSkills = [
    { name: "Agile Program Management", level: 95 },
    { name: "Stakeholder Engagement", level: 92 },
    { name: "Risk Management", level: 88 },
    { name: "Budget Management", level: 85 }
  ];

  const technicalSkills = [
    { name: "BFSI Domain", level: 95 },
    { name: "Cloud Technologies", level: 88 },
    { name: "Regulatory Compliance", level: 92 },
    { name: "DevOps & CI/CD", level: 85 }
  ];

  return (
    <section ref={sectionRef} className="mb-16">
      <h3 className="text-2xl font-bold font-inter text-primary mb-8">Core Competencies</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-lg font-semibold text-secondary mb-4">Leadership & Management</h4>
          <div className="space-y-3">
            {leadershipSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-600">
                    {skill.level >= 90 ? "Expert" : "Advanced"}
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="skill-bar rounded-full transition-all duration-1000 ease-in-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h4 className="text-lg font-semibold text-secondary mb-4">Technical & Domain</h4>
          <div className="space-y-3">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-600">
                    {skill.level >= 90 ? "Expert" : "Advanced"}
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="skill-bar rounded-full transition-all duration-1000 ease-in-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 200}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}