"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Simulate a brief delay for UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080d1a] px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-white">
          Reset Your Password
        </h1>
        <p className="mb-8 text-center text-sm text-gray-400">
          Enter your email and we&apos;ll send you a reset link.
        </p>

        {submitted ? (
          <div className="space-y-6">
            <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
              If an account with that email exists, we&apos;ve sent a password
              reset link. Please check your inbox.
            </div>
            <Link
              href="/auth/login"
              className="block text-center text-sm text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Back to sign in
            </Link>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Remember your password?{" "}
              <Link
                href="/auth/login"
                className="text-indigo-400 transition-colors hover:text-indigo-300"
              >
                Sign in
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
