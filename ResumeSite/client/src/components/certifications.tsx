import { Cloud, Infinity, Users, TrendingUp, Settings } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      icon: Cloud,
      title: "AWS SAA-C02®",
      subtitle: "Solutions Architect",
      color: "text-secondary"
    },
    {
      icon: Infinity,
      title: "DevOps-PM®",
      subtitle: "DevOps Architect",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "CSM®",
      subtitle: "Scrum Master",
      color: "text-success"
    },
    {
      icon: TrendingUp,
      title: "CSSBB®",
      subtitle: "Six Sigma Black Belt",
      color: "text-primary"
    },
    {
      icon: Settings,
      title: "ITIL®",
      subtitle: "ITIL Certified",
      color: "text-secondary"
    }
  ];

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-bold font-inter text-primary mb-8 text-center">
        Professional Certifications
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {certifications.map((cert, index) => {
          const IconComponent = cert.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center min-w-[140px]">
              <IconComponent className={`w-8 h-8 ${cert.color} mb-2 mx-auto`} />
              <div className="font-semibold text-sm">{cert.title}</div>
              <div className="text-xs text-gray-600">{cert.subtitle}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}