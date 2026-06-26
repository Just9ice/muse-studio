import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const projects = [
  {
    id: "albalat",
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
    id: "saplaya",
    eyebrow: "PRIVATE RESIDENCE",
    title: "The Saplaya Project",
    year: "2026",
    location: "Lagos, Nigeria",
    tag: "02 / LAGOS / NIGERIA",
    image: "/images/saplaya.jpeg",
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
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-5xl">
              Invest in Spaces
              <br />
              That Create Lasting
              <br />
              Value
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex items-end">
            <p className="text-xl leading-relaxed text-ink/70">
              Muse Studio identifies and develops opportunities where
              exceptional design, premium finishes, and strategic execution come
              together to create long-term value.
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
              {/* Scroll anchor placed here for precise targeting */}
              <div
                id={project.id}
                className="relative aspect-[4/4] w-full overflow-hidden group"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500 ease-in-out" />
                <span className="absolute left-4 top-4 text-xs uppercase tracking-wide text-cream/90 bg-ink/10 backdrop-blur-md border border-white/5 shadow-lg p-2">
                  {project.tag}
                </span>
                {/* Caption that fades in on hover */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-gradient-to-t from-ink/80 to-transparent p-5">
                  <p className="text-sm text-cream/90 font-medium">
                    {project.title}
                  </p>
                  <p className="text-xs text-cream/60 mt-1">
                    {project.location}
                  </p>
                </div>
              </div>

              <div>
                {/* "Private Residence" in Times New Roman italic as specified */}
                <span
                  className="text-xs uppercase tracking-wide text-ink/50"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                    fontStyle: "italic",
                    letterSpacing: "0.05em",
                  }}
                >
                  {project.eyebrow}
                </span>
                <h3 className="mt-3 text-5xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-5xl">
                  {project.title}
                </h3>
                <dl className="mt-5 max-w-xs space-y-2 border-t border-line pt-5 text-sm">
                  <div className="flex justify-between">
                    <dt className="uppercase tracking-wide text-ink/40">
                      Year
                    </dt>
                    <dd className="text-ink/70">{project.year}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="uppercase tracking-wide text-ink/40">
                      Location
                    </dt>
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
