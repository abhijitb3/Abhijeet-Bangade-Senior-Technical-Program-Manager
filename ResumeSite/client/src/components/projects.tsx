import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Oracle Exadata Implementation",
      company: "Mastercard",
      duration: "Jan 2024 - Present",
      status: "Current Project",
      statusColor: "bg-success",
      description: "Led high-performance Agile team of 65+ professionals for migration of bare-metal Oracle Production DB to Exadata Production, enabling scalability for 100 million active cards over the next 4 years.",
      metrics: [
        { value: "65+", label: "Team Members" },
        { value: "100M", label: "Cards Capacity" },
        { value: "4", label: "Years Scalability" },
        { value: "Q1 2025", label: "Prod Cutover" }
      ],
      technologies: ["Oracle Exadata", "Agile SAFe", "Performance Testing", "RAID Management"],
      techColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Client Transaction Reporting Platform",
      company: "Citi",
      duration: "Jan 2023 - Dec 2023",
      status: "Completed",
      statusColor: "bg-primary",
      description: "Modernized Citi's institutional reporting platform with secure, cloud-native solution using Java Spring Boot microservices, Docker containerization, and AWS deployment with full CI/CD automation.",
      metrics: [
        { value: "98%", label: "On-Time Delivery" },
        { value: "40%", label: "Defect Reduction" },
        { value: "Real-Time", label: "Reporting" },
        { value: "Global", label: "Deployment" }
      ],
      technologies: ["Spring Boot", "AWS", "Docker", "Jenkins CI/CD", "Compliance"],
      techColor: "bg-green-100 text-green-800"
    },
    {
      title: "ISO 20022 Migration Program",
      company: "HSBC Global Banking & Markets",
      duration: "Jan 2022 - Dec 2022",
      status: "Completed",
      statusColor: "bg-primary",
      description: "Led strategic migration from ISO 8583 to ISO 20022 messaging, aligning with global regulatory mandates (SWIFT CBPR+, SEPA, UK CHAPS) across HSBC's payment processing systems.",
      metrics: [
        { value: "Global", label: "Banking Ops" },
        { value: "Cross-Border", label: "Payments" },
        { value: "SWIFT", label: "Compliance" },
        { value: "RTGS", label: "Integration" }
      ],
      technologies: ["ISO 20022", "SWIFT", "Regulatory Compliance", "Message Translation"],
      techColor: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-bold font-inter text-primary mb-8">Major Project Portfolio</h3>
      
      {projects.map((project, index) => (
        <div key={index} className="project-card bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
            <div>
              <h4 className="text-xl font-bold text-primary">{project.title}</h4>
              <p className="text-secondary font-medium">{project.company} • {project.duration}</p>
            </div>
            <div className={`${project.statusColor} text-white px-3 py-1 rounded-full text-sm font-medium mt-2 lg:mt-0`}>
              {project.status}
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">{project.description}</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {project.metrics.map((metric, metricIndex) => (
              <div key={metricIndex} className="text-center">
                <div className="text-2xl font-bold text-secondary">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} className={`${project.techColor} text-xs px-2 py-1 rounded`}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}