"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 bg-grid">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent-blue/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-purple/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Have a question, feedback, or need help? Our team is here to assist
            you. Fill out the form and we&apos;ll get back to you within 24
            hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white">
                  Contact Information
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Reach out through any of the channels below or use the contact
                  form.
                </p>
              </div>

              <div className="space-y-6">
                <div className="glass rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-white">
                        Email
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">
                        support@hostinking.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-white">
                        Phone
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">
                        +1 (800) 555-HOST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-white">
                        Address
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">
                        123 Cloud Avenue, Suite 456
                        <br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-white">
                        Business Hours
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">
                        24/7 Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-purple">
                      <Send className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      Message Sent!
                    </h3>
                    <p className="mt-3 max-w-sm text-sm text-gray-400">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-heading text-xl font-bold text-white">
                      Send Us a Message
                    </h3>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <Input
                        label="Full Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Input
                      label="Subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                    />

                    <div className="w-full">
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-gray-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="w-full rounded-lg border border-navy-700 bg-navy-900 px-3.5 py-2.5 text-sm text-white placeholder-gray-500 transition-colors duration-200 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
