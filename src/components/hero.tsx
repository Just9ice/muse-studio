"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrandMarquee } from "@/components/brand-marquee";
import Link from "next/link";

const headingWords = [
  "Your",
  "one",
  "stop",
  "for",
  "quality",
  "building",
  "finishes.",
];

export function Hero() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <section className="relative flex flex-1 items-center overflow-hidden py-32">
        {/* Background photo — replace /public/images/landing1.jpg with the real
            architectural photo (1920x1080 or larger) referenced in the Figma hero frame. */}
        <Image
          src="/images/hero-image.png"
          alt="Sculptural red steel architectural detail against a clear sky, representing Muse Studio's material craftsmanship"
          fill
          priority
          sizes="100vw"
          className="object-cover bg-gradient-to-b from-black/90 via-black/80 to-black/50"
        />
        <div className="absolute inset-0 bg-ink/10" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-10">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-[60px] lg:text-[80px]">
            {headingWords.map((word, i) => (
              <motion.span
                key={word + i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-2xl text-white sm:text-2xl"
          >
            We source premium materials, provide expert guidance, and deliver
            professional installation for a seamless experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8"
          >
            <Button
              asChild
              size="default"
              className="text-white"
            >
              <Link href="#contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <BrandMarquee />
    </div>
  );
}
