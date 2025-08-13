export default function Achievements() {
  const achievements = [
    { metric: "30%", description: "Downtime Reduction" },
    { metric: "25%", description: "Faster Release Cycles" },
    { metric: "40%", description: "Reduction in Production Defects" },
    { metric: "100M", description: "Cards Scalability (Mastercard)" }
  ];

  return (
    <section className="mb-16">
      <h3 className="text-2xl font-bold font-inter text-primary mb-8">
        Key Achievements & Impact
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold achievement-metric mb-2">
              {achievement.metric}
            </div>
            <p className="text-gray-600">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}