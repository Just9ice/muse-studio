import { Reveal } from "@/components/reveal";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-ink py-20 text-cream">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-6xl font-semibold leading-tight tracking-tight sm:text-[60px]">
            Let&apos;s build something
            <br />
            that outlasts us.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 border-t border-line-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="mailto:musestudio@impactogrupo.com"
            className="text-sm text-cream/80 transition-colors hover:text-gold"
          >
            musestudio@impactogrupo.com
          </a>

          <a
            href="https://www.instagram.com/musestudiong?igsh=MXh2c3BoZ2p3anAzZg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-gold"
          >
            Follow us on
            <InstagramIcon className="h-4 w-4" />
            @musestudiong
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line-dark pt-6 text-xs uppercase tracking-wide text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <span>musestudio.es</span>
          <div className="flex gap-2">
            <span>Finishing</span>
            <span aria-hidden>/</span>
            <span>Procurement</span>
            <span aria-hidden>/</span>
            <span>Project Execution</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
