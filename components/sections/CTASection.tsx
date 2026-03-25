import Link from "next/link";

function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple opacity-90" />

      {/* Decorative blur elements */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-[300px] w-[300px] rounded-full bg-white/10 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-white/10 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Join thousands of satisfied customers. Launch your website today.
        </p>
        <Link
          href="/pricing"
          className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-white bg-white px-8 py-3.5 text-base font-semibold text-accent-blue transition-all hover:bg-transparent hover:text-white"
        >
          View Plans
        </Link>
      </div>
    </section>
  );
}

export { CTASection };
