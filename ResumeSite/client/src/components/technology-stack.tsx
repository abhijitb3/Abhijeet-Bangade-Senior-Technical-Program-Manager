import { Cloud, Settings, BarChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function TechnologyStack() {
  const techStacks = [
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Oracle Exadata"],
      color: "bg-blue-50 text-blue-700"
    },
    {
      icon: Settings,
      title: "Development & DevOps",
      technologies: ["Java Spring Boot", "Microservices", "Jenkins", "GitLab CI", "Maven", "SonarQube", "Kafka"],
      color: "bg-green-50 text-green-700"
    },
    {
      icon: BarChart,
      title: "Project Management",
      technologies: ["JIRA", "Confluence", "Rally", "Clarity", "ServiceNow", "SAFe Agile", "EVM"],
      color: "bg-purple-50 text-purple-700"
    }
  ];

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-bold font-inter text-primary mb-8">Technology Stack & Tools</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {techStacks.map((stack, index) => {
          const IconComponent = stack.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold text-secondary mb-4">
                <IconComponent className="w-5 h-5 mr-2 inline" />
                {stack.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} className={`${stack.color} text-sm px-3 py-1 rounded-full`}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}