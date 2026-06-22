import { RevealGroup, Reveal } from "@/components/reveal";

const testimonials = [
  {
    quote:
      "Muse Studio brought a calibre of craft to Lagos that we had only seen abroad. The detailing is faultless.",
    attribution: "Principal, Lagos Studio of Architecture",
  },
  {
    quote:
      "They understand that a finish is not a surface, it is a contract with time.",
    attribution: "Developer, Royal Waterfront",
  },
  {
    quote:
      "The most rigorous procurement team we have worked with on the continent.",
    attribution: "Director, European Stone Group",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
            On the record
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.attribution}
              delay={i * 0.1}
              className="flex flex-col border-t border-line pt-6"
            >
              <span aria-hidden className="font-serif text-4xl italic text-gold">
                &ldquo;
              </span>
              <p className="mt-2 text-base leading-relaxed text-ink/80">
                {t.quote}
              </p>
              <p className="mt-6 text-xs uppercase tracking-wide text-ink/45">
                — {t.attribution}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
