const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "50,000+", label: "Websites Hosted" },
  { value: "24/7", label: "Support" },
  { value: "15+", label: "Data Centers" },
];

function StatsSection() {
  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl font-bold sm:text-5xl">
                <span className="gradient-text">{stat.value}</span>
              </p>
              <p className="mt-2 text-sm font-medium text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { StatsSection };
