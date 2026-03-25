import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah J.",
    role: "Founder, Bloom Studio",
    quote:
      "HostInking transformed our online presence. The speed and reliability are unmatched.",
  },
  {
    name: "Michael R.",
    role: "CTO, NovaTech",
    quote:
      "Best customer support I've ever experienced. They resolved my issue in minutes.",
  },
  {
    name: "Emily T.",
    role: "Freelance Developer",
    quote:
      "Migrated from another host and the difference is night and day. Highly recommend!",
  },
];

function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Don&apos;t just take our word for it — hear from the people who trust us
            with their websites.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass glass-hover rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="mb-6 text-sm leading-relaxed text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div>
                <p className="font-heading text-sm font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TestimonialsSection };
