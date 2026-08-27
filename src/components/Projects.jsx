import { IconExternal, IconGitHub } from "./Icons";

const PROJECTS = [
  {
    title: "HIIIPE",
    kicker: "Agency",
    year: "2025",
    description:
      "Digital agency website for HIIIPE — brand, services, process, and a conversion-focused contact flow. Designed and built in-house.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://hiiipe.vercel.app/",
    github: "https://github.com/muzzz2308/Hiiipe",
    domain: "hiiipe.vercel.app",
    accent: "from-gold/25 via-transparent to-gold-soft/10",
  },
  {
    title: "Scrub King",
    kicker: "E-commerce",
    year: "2025",
    description:
      "Client storefront for Scrub King Pakistan — a product-led e-commerce site for smiley scrubbers, built to look clear and sell online.",
    tags: ["React", "JavaScript", "CSS"],
    live: "https://www.scrubkingpakistan.com/",
    github: "https://github.com/muzzz2308/Scrub-King",
    domain: "scrubkingpakistan.com",
    accent: "from-gold-soft/20 via-transparent to-gold/10",
  },
  {
    title: "EV House",
    kicker: "Sample work",
    year: "2025",
    description:
      "Marketing site for an industrial valves brand — product-focused layout, clear hierarchy, and a professional B2B feel.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    live: "https://evhouse.vercel.app/",
    github: "https://github.com/muzzz2308/Evphouse",
    domain: "evhouse.vercel.app",
    accent: "from-gold/15 via-transparent to-transparent",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="reveal mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
          Selected work
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Live projects
        </h2>
        <p className="mt-4 text-muted-foreground">
          Agency, e-commerce, and product sites I designed and shipped. Each
          one is live — open them and click around.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <article
            key={project.title}
            className={`reveal glass-card group flex flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 ${
              i === 0 ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <div
              className={`relative isolate overflow-hidden bg-linear-to-br ${project.accent}`}
            >
              <div className="flex items-center gap-1.5 border-b border-border/80 px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-gold/50" />
                <span className="h-2 w-2 rounded-full bg-gold/30" />
                <span className="h-2 w-2 rounded-full bg-gold/15" />
                <span className="ml-2 truncate font-mono text-[11px] text-muted-foreground">
                  {project.domain}
                </span>
              </div>
              <div
                className={`relative flex min-h-32 items-end justify-between px-5 py-5 ${
                  i === 0 ? "sm:min-h-44" : ""
                }`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--gold) 35%, transparent), transparent 42%), radial-gradient(circle at 80% 80%, color-mix(in oklab, var(--gold-soft) 25%, transparent), transparent 50%)",
                  }}
                />
                <span className="relative font-display text-2xl font-semibold text-gold-gradient sm:text-3xl">
                  {project.title}
                </span>
                <span className="relative text-xs tracking-widest text-muted-foreground">
                  {project.year}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-gold">
                {project.kicker}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-soft"
                >
                  View live
                  <IconExternal />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
                >
                  GitHub
                  <IconGitHub className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
