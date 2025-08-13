import { MoreHorizontal } from "lucide-react";

export default function EmploymentTimeline() {
  const timelineEntries = [
    {
      year: "2024",
      role: "Senior Program Delivery Manager",
      company: "Synechron Technologies • Mastercard Project",
      description: "Oracle Exadata Implementation & Migration",
      current: true
    },
    {
      year: "2023",
      role: "Delivery Manager",
      company: "Synechron Technologies • Citi Project",
      description: "Client Transaction Reporting Platform Modernization",
      current: false
    },
    {
      year: "2022",
      role: "Program Manager",
      company: "Synechron Technologies • HSBC Project",
      description: "ISO 20022 Migration & Payment Systems Modernization",
      current: false
    },
    {
      year: "...",
      role: "16+ Years at Synechron",
      company: "2008 - 2024 • Multiple BFSI Client Engagements",
      description: "Progressive leadership roles across Transaction Banking, Payments, and Capital Markets",
      current: false,
      isOverview: true
    }
  ];

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-bold font-inter text-primary mb-8">Employment History</h3>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary"></div>
        
        {timelineEntries.map((entry, index) => (
          <div key={index} className="relative flex items-center mb-8">
            <div className={`${entry.current ? 'bg-success' : 'bg-secondary'} text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mr-6 z-10`}>
              {entry.isOverview ? (
                <MoreHorizontal className="w-6 h-6" />
              ) : (
                entry.year
              )}
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex-1">
              <h4 className="text-lg font-semibold text-primary">{entry.role}</h4>
              <p className="text-secondary font-medium">{entry.company}</p>
              <p className="text-gray-600 text-sm">{entry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}