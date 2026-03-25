import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import bcrypt from "bcryptjs";
import { users, plans } from "./schema";

async function seed() {
  const connectionString = process.env.DATABASE_URL!;
  const sql = postgres(connectionString, { max: 1 });
  const db = drizzle(sql);

  console.log("Seeding database...");

  // Create admin user
  const passwordHash = await bcrypt.hash("Admin123!", 12);
  await db
    .insert(users)
    .values({
      name: "Admin",
      email: "admin@hostinking.com",
      passwordHash,
      role: "admin",
    })
    .onConflictDoNothing();

  // Create hosting plans
  const hostingPlans = [
    {
      name: "Shared Hosting",
      slug: "shared-hosting",
      description: "Affordable hosting for small websites and blogs",
      monthlyPrice: 399,
      yearlyPrice: 299,
      category: "shared",
      features: JSON.stringify([
        "10GB SSD Storage",
        "Free SSL Certificate",
        "5 Email Accounts",
        "cPanel Access",
        "99.9% Uptime",
      ]),
    },
    {
      name: "WordPress Hosting",
      slug: "wordpress-hosting",
      description: "Optimized hosting for WordPress websites",
      monthlyPrice: 699,
      yearlyPrice: 499,
      category: "wordpress",
      features: JSON.stringify([
        "25GB SSD Storage",
        "Free SSL Certificate",
        "1-Click WordPress Install",
        "Auto Updates",
        "Staging Environment",
      ]),
    },
    {
      name: "VPS Starter",
      slug: "vps-starter",
      description: "Virtual private server for growing websites",
      monthlyPrice: 1299,
      yearlyPrice: 999,
      category: "vps",
      features: JSON.stringify([
        "2 vCPU Cores",
        "4GB RAM",
        "80GB SSD Storage",
        "3TB Transfer",
        "Full Root Access",
      ]),
    },
    {
      name: "VPS Pro",
      slug: "vps-pro",
      description: "High-performance VPS for demanding applications",
      monthlyPrice: 2499,
      yearlyPrice: 1999,
      category: "vps",
      features: JSON.stringify([
        "4 vCPU Cores",
        "8GB RAM",
        "160GB SSD Storage",
        "5TB Transfer",
        "Full Root Access",
        "DDoS Protection",
      ]),
    },
    {
      name: "Dedicated Server",
      slug: "dedicated-server",
      description: "Enterprise-grade dedicated hardware",
      monthlyPrice: 8999,
      yearlyPrice: 6999,
      category: "dedicated",
      features: JSON.stringify([
        "Intel Xeon Processor",
        "32GB RAM",
        "1TB SSD Storage",
        "10TB Transfer",
        "IPMI Access",
        "99.99% Uptime SLA",
      ]),
    },
    {
      name: "Email Hosting",
      slug: "email-hosting",
      description: "Professional email for your domain",
      monthlyPrice: 299,
      yearlyPrice: 199,
      category: "email",
      features: JSON.stringify([
        "Custom Domain Email",
        "10GB Mailbox",
        "Spam Protection",
        "IMAP/POP3/SMTP",
        "Webmail Access",
      ]),
    },
  ];

  for (const plan of hostingPlans) {
    await db.insert(plans).values(plan).onConflictDoNothing();
  }

  console.log("Seeding complete!");
  await sql.end();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
