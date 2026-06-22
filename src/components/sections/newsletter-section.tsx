"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("[Newsletter Error]:", error);
      setStatus("error");
      setMessage("Failed to subscribe. Please try again later.");
    }
  }

  return (
    <section className="w-full border-t border-line bg-cream py-20">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Join our community
            </h2>
            <p className="mt-3 max-w-sm text-sm text-ink/60">
              Be the first to access exclusive events, curated resources, and
              professional opportunities.
            </p>
          </Reveal>

          <Reveal delay={0.1} from="right">
            <form onSubmit={handleSubmit} className="border-b border-ink/30 pb-2 relative">
              <div className="flex items-center gap-4">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  disabled={status === "loading" || status === "success"}
                  placeholder="your@studio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none disabled:opacity-50"
                />
                <Button 
                  type="submit" 
                  variant="ghost" 
                  size="link" 
                  className="shrink-0 disabled:opacity-50"
                  disabled={status === "loading" || status === "success"}
                >
                  {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed" : "Subscribe"}
                </Button>
              </div>
            </form>
            <div className="mt-2 flex items-center justify-between min-h-[1.5rem]">
              <p className="text-xs uppercase tracking-wide text-ink/40">
                No spam. Unsubscribe in one click.
              </p>
              {message && (
                <p className={`text-xs ${status === "error" ? "text-red-500" : "text-green-600"}`}>
                  {message}
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
