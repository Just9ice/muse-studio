import { RevealGroup, Reveal } from "@/components/reveal";

const pillars = [
  {
    number: "1",
    title: "Access",
    body: "Gain access to carefully curated finishes from renowned European brands, with the flexibility to customize specifications, colors, sizes, and designs to suit your project's vision.",
  },
  {
    number: "2",
    title: "Experience",
    body: "Explore materials in carefully curated, real-world settings within our showroom, allowing you to make decisions with confidence before committing.",
  },
  {
    number: "3",
    title: "Expertise",
    body: "Receive guidance from experienced professionals who support every stage of your project, from material selection and technical specifications to implementation.",
  },
  {
    number: "4",
    title: "Execution",
    body: "From sourcing and logistics to installation and final delivery, we coordinate every detail to ensure a seamless and exceptional result.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="flex min-h-screen w-full items-center bg-ink py-24">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
            Why clients choose Muse Studio
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-10 border-t border-line-dark sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 0.08}
              className="border-l border-line-dark pt-8 pl-6 first:border-l-0 first:pl-0 lg:pl-8"
            >
              <span className="text-sm text-cream/40">{pillar.number}</span>
              <h3 className="mt-6 text-xl font-medium text-cream">{pillar.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/55">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
