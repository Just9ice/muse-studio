import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function MaterialsSection() {
  return (
    <section className="flex min-h-screen w-full items-center bg-cream py-24">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal
          from="left"
          className="relative aspect-[5/4] w-full overflow-hidden"
        >
          {/* Replace with the real showroom feature-wall photo (carved wood fins
              with words like "BELIEVE", "DESIGN", "USER EXPERIENCE" routed into them). */}
          <Image
            src="/images/impacto-building.png"
            alt="Muse Studio showroom feature wall made of carved wood fins"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal from="right" delay={0.1} className="max-w-3xl">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-5xl">
            Built on <em className="font-serif font-normal italic">30 Years</em>
            <br />
            of Expertise
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-ink/70">
            Muse Studio is the end-to-end finishing partner for architects,
            interior designers, and developers building quality spaces in
            Nigeria.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-ink/70">
            We are part of Impacto Grupo; a Spanish-Nigerian group with 30 years
            of experience in the Nigerian construction and finishing market,
            which gives us direct access to premium European tiles and
            finishings, in-housed stone fabrication, and a technical team
            capable of taking a project from specification through to
            installation.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-ink/70">
            One point of contact. No gap between design intent and finished
            space.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
