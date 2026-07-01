import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function ForArchitectsSection() {
  return (
    <section className="flex min-h-screen w-full items-center bg-cream-deep py-24">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal from="left" className="max-w-lg">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            For architects,{" "}
            <em className="font-serif font-normal italic">designers</em> and
            developers.
          </h2>
          <p className="mt-6 text-base justify-center leading-relaxed text-ink/70">
            Are you an interior designer? Architect? Or in a similar field? We
            invite you to use our showroom as an extension of your studio.
          </p>
          <p className="mt-4 text-base justify-center leading-relaxed text-ink/70">
            We have created a dedicated space within our showroom tailored to
            your professional needs.
          </p>
        </Reveal>

        <Reveal
          from="right"
          delay={0.1}
          className="relative aspect-[5/5] w-full overflow-hidden"
        >
          {/* Replace with the real showroom interior photo at 2 Bash Drive. */}
          <Image
            src="/images/showroom.jpg"
            alt="Muse Studio showroom with material display panels, dedicated to architects and designers"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
            <p className="text-xs uppercase tracking-wide text-cream/70">
              Showroom
            </p>
            <p className="mt-1 text-sm text-cream">
              2 Bash Drive, Lekki Epe Expressway
            </p>
            <button className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-cream transition-colors hover:text-gold">
              Book a visit
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
