import DashboardSidebar from "@/components/layout/DashboardSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#080d1a]">
      <DashboardSidebar isAdmin={true} />
      <main className="lg:pl-64 min-h-screen overflow-y-auto">
        <div className="p-6 md:p-8 pt-16 lg:pt-8">{children}</div>
      </main>
    </div>
  );
}
