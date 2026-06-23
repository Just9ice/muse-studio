import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function MaterialsSection() {
  return (
    <section className="flex min-h-screen w-full items-center bg-cream py-24">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal
          from="left"
          className="relative aspect-[3/2] w-full overflow-hidden"
        >
          {/* Replace with the real showroom feature-wall photo (carved wood fins
              with words like "BELIEVE", "DESIGN", "USER EXPERIENCE" routed into them). */}
          <Image
            src="/images/materials-wall.png"
            alt="Muse Studio showroom feature wall made of carved wood fins"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal from="right" delay={0.1} className="max-w-xl">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            Materials <em className="font-serif font-normal italic">define</em>
            <br />
            the outcome
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            We are a subsidiary of Impacto Grupo Spain, our parent company that
            has been active in Nigeria since 2000.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            We&apos;ve seen the gap in the market, and we&apos;re bringing
            together global expertise to give you better options, better
            service, and better results.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
