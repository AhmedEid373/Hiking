import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-grid">
      {/* Decorative glow elements */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-blue/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-purple/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full bg-accent-blue/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-heading text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          <span className="gradient-text">Lightning-Fast</span>{" "}
          Web Hosting
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
          Reliable, secure, and blazing fast hosting solutions for businesses of
          all sizes. Starting at just $2.99/mo.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/pricing"
            className="btn-gradient inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
          >
            Get Started
          </Link>
          <Link
            href="/shared-hosting"
            className="inline-flex items-center justify-center rounded-lg border border-indigo-500/50 bg-transparent px-8 py-3.5 text-base font-semibold text-indigo-300 transition-all hover:border-indigo-400 hover:bg-indigo-500/10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
