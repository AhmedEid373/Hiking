import { Shield, Zap, Lock, Headphones, Database, Settings } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "99.9% Uptime Guarantee",
    description:
      "Our robust infrastructure ensures your website stays online around the clock with industry-leading uptime.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Servers",
    description:
      "Powered by NVMe SSD storage and optimized server configurations for blazing-fast page load speeds.",
  },
  {
    icon: Lock,
    title: "Free SSL Certificates",
    description:
      "Every plan includes free SSL certificates to keep your visitors' data secure and boost your SEO rankings.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description:
      "Our knowledgeable support team is available day and night to help you with any hosting questions or issues.",
  },
  {
    icon: Database,
    title: "Daily Backups",
    description:
      "Automatic daily backups ensure your data is always safe. Restore with a single click whenever you need.",
  },
  {
    icon: Settings,
    title: "Easy Control Panel",
    description:
      "Manage your hosting with an intuitive control panel. No technical expertise required to get started.",
  },
];

function FeaturesSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            Why Choose <span className="gradient-text">HostInking</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Everything you need to power your online presence, all in one place.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass glass-hover rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { FeaturesSection };
