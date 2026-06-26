import { RevealGroup, Reveal } from "@/components/reveal";

const pillars = [
  {
    number: "1",
    title: "Design Consultancy",
    body: "We work with you to understand your vision and select the right materials before anything's ordered.",
  },
  {
    number: "2",
    title: "Order Procurement",
    body: "We source directly from top European supliers and handle all freight, customs, and logistics.",
  },
  {
    number: "3",
    title: "Delivery to Site",
    body: "Materials are coordinated and delivered around your build timeline.",
  },
  {
    number: "4",
    title: "Onsite Installation",
    body: "Our technical team installs everything, ensuring the results match the design's intent.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="flex min-h-screen w-full items-center bg-ink py-24">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
        <Reveal>
          <h4 className="text-6xl font-semibold tracking-tight text-cream sm:text-[60px]">
            Why clients choose Muse Studio
          </h4>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-10 border-t border-line-dark sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 0.08}
              className="border-l border-line-dark pt-8 pl-6 first:border-l-0 first:pl-0 lg:pl-8"
            >
              <span className="text-sm text-cream/70">{pillar.number}</span>
              <h3 className="mt-6 text-xl font-medium text-cream">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
