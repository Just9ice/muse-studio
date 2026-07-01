"use client";

import { Reveal } from "@/components/reveal";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="w-full bg-cream py-20">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Text Column */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <h2 className="text-6xl font-semibold tracking-tight text-ink sm:text-[60px]">
                Make an enquiry
              </h2>
              <p className="mt-4 max-w-lg text-sm text-ink/70 flex items-end gap-4">
                To work with us on a project and more details on The Albalat
                Estate and Saplaya Projects, please fill the form by the side.
                <ArrowRight className="w-8 h-8" />
              </p>
            </Reveal>
          </div>

          {/* Right Form Column */}
          <Reveal delay={0.1} from="right">
            <div className="bg-[#242424] p-8 sm:p-12">
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fullName"
                    className="text-[10px] font-medium uppercase tracking-widest text-white/70"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[10px] font-medium uppercase tracking-widest text-white/70"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-[10px] font-medium uppercase tracking-widest text-white/70"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+234 00000067680"
                    className="w-full bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] font-medium uppercase tracking-widest text-white/70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us more....."
                    className="w-full resize-none bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full bg-gold py-4 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#242424]"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
