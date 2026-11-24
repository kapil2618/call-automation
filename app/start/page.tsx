"use client";

import { useState } from "react";
import Link from "next/link";

export default function StartPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "40947110-69b0-4831-b30a-0cc6fbc7c491");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-4">
          <h1 className="text-2xl font-bold">You&apos;re on the list.</h1>
          <p className="text-muted-foreground">
            We&apos;ll reach out within a few hours to set up your 2-week missed-call test.
          </p>
          <Link href="/" className="inline-block underline text-sm">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Start Your 2-Week Trial</h1>
          <p className="text-sm text-muted-foreground">
            Test Synq on your missed calls for two weeks before paying anything.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Smith"
              className="w-full rounded-md border px-3 py-2 text-sm bg-background"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Septic Company Name</label>
            <input
              type="text"
              name="company"
              required
              placeholder="Smith Septic Pumping"
              className="w-full rounded-md border px-3 py-2 text-sm bg-background"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="(555) 234-5678"
              className="w-full rounded-md border px-3 py-2 text-sm bg-background"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@smithseptic.com"
              className="w-full rounded-md border px-3 py-2 text-sm bg-background"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary text-primary-foreground py-2.5 text-sm font-medium hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Request 2-Week Test"}
          </button>
        </form>
      </div>
    </main>
  );
}