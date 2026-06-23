"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const locations = [
  { label: "lagos", href: "/lagos" },
  { label: "valencia", href: "/valencia" },
];

const navLinks = [
  { label: "home", href: "/" },
  { label: "about us", href: "/about" },
  { label: "investments", href: "/investments" },
  { label: "contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-40 w-full border-b border-ink/10 bg-tan"
      >
        <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 lg:px-10">
          <ul className="hidden items-center gap-6 text-base uppercase tracking-wide text-ink/80 sm:flex">
            {locations.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-ink/50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-transform duration-300 hover:rotate-12 hover:scale-110 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:shadow-xs"
            aria-label="Muse Studio home"
          >
            <Image
              src="/logos/muse_logo.png"
              alt="Muse Logo"
              width={100}
              height={60}
            />
          </Link>

          <ul className="hidden items-center gap-7 text-base uppercase tracking-wide text-ink/80 sm:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-ink/50"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="sm:hidden text-ink transition-opacity hover:opacity-70 p-1"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col bg-ink text-cream"
          >
            <div className="flex h-16 items-center justify-between px-6 border-b border-line-dark">
              <Link href="/" onClick={closeMenu} className="flex items-center">
                <Image
                  src="/logos/muse_logo.png"
                  alt="Muse Logo"
                  width={100}
                  height={60}
                  className="brightness-0 invert"
                />
              </Link>
              <button
                className="text-cream transition-opacity hover:opacity-70 p-1"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-8 p-6 bg-gradient-to-b from-ink to-ink-soft">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={closeMenu}
                  className="text-3xl font-serif tracking-widest uppercase transition-colors hover:text-gold"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {l.label}
                </Link>
              ))}
              <div className="h-px w-24 bg-line-dark my-4" />
              {locations.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={closeMenu}
                  className="text-sm tracking-widest uppercase text-cream/70 transition-colors hover:text-cream"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
