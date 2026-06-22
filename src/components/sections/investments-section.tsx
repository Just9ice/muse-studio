import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const projects = [
  {
    eyebrow: "PRIVATE RESIDENCE",
    title: "The Albalat Estate",
    year: "2026",
    location: "Valencia, Spain",
    tag: "01 / VALENCIA / SPAIN",
    image: "/images/project-albalat.png",
    alt: "Modern minimalist residence with cantilevered upper floor, The Albalat Estate in Valencia, Spain",
    align: "left" as const,
  },
  {
    eyebrow: "PRIVATE RESIDENCE",
    title: "The Saplaya Project",
    year: "2026",
    location: "Lagos, Nigeria",
    tag: "02 / LAGOS / NIGERIA",
    image: "/images/project-saplaya.png",
    alt: "Contemporary multi-storey residential building, The Saplaya Project in Lagos, Nigeria",
    align: "right" as const,
  },
];

export function InvestmentsSection() {
  return (
    <section className="flex min-h-screen w-full items-center bg-cream py-24">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Invest in Spaces
              <br />
              That Create Lasting
              <br />
              Value
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex items-end">
            <p className="text-base leading-relaxed text-ink/70">
              Muse Studio identifies and develops opportunities where
              exceptional design, premium finishes, and strategic execution
              come together to create long-term value.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col gap-12 lg:mt-16 lg:gap-16">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.1}
              from={project.align === "left" ? "left" : "right"}
              className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                project.align === "right" ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 text-xs uppercase tracking-wide text-cream/90">
                  {project.tag}
                </span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wide text-ink/50">
                  {project.eyebrow}
                </span>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {project.title}
                </h3>
                <dl className="mt-5 max-w-xs space-y-2 border-t border-line pt-5 text-sm">
                  <div className="flex justify-between">
                    <dt className="uppercase tracking-wide text-ink/40">Year</dt>
                    <dd className="text-ink/70">{project.year}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="uppercase tracking-wide text-ink/40">Location</dt>
                    <dd className="text-ink/70">{project.location}</dd>
                  </div>
                </dl>
                <button className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-gold">
                  Download Brief
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
