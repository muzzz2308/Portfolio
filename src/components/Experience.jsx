const TIMELINE = [
  {
    period: "Present",
    role: "Freelance Web Developer",
    org: "Independent",
    description:
      "Building websites and web apps for clients — agency sites, e-commerce, and product landing pages — with React, Tailwind CSS, and Supabase.",
    type: "experience",
  },
  {
    period: "Full-time",
    role: "Web Developer",
    org: "Virtual Dive Studio",
    description:
      "First professional role. Shipped client websites and product UI in a studio setting, working from brief to launch.",
    type: "experience",
  },
  {
    period: "Internship",
    role: "Web Development Intern",
    org: "Fly Rank",
    description:
      "Supported live web projects, learned production workflows, and contributed to client-facing pages.",
    type: "experience",
  },
  {
    period: "Degree",
    role: "BS Computer Science",
    org: "Lahore Garrison University",
    description:
      "Computer science fundamentals with a focus on web technologies and software development.",
    type: "education",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-4xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="reveal mb-12 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
          Journey
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Experience & Education
        </h2>
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="absolute top-2 bottom-2 left-3 w-px md:left-1/2 md:-translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--gold) 35%, transparent) 10%, color-mix(in oklab, var(--gold) 35%, transparent) 90%, transparent)",
          }}
        />

        <ol className="flex flex-col gap-8 md:gap-10">
          {TIMELINE.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <li
                key={item.org}
                className={`reveal relative flex w-full flex-col gap-3 pl-12 md:w-1/2 md:pl-0 ${
                  isLeft
                    ? "md:mr-auto md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute top-1.5 h-6 w-6 rounded-full border-2 border-gold bg-background ${
                    isLeft
                      ? "left-0 md:right-0 md:left-auto md:translate-x-1/2"
                      : "left-0 md:left-0 md:-translate-x-1/2"
                  }`}
                  aria-hidden
                >
                  <span className="absolute inset-1.5 rounded-full bg-gold" />
                </span>

                <div className="glass-card rounded-2xl p-5">
                  <p className="text-xs font-medium uppercase tracking-widest text-gold">
                    {item.type === "education" ? "Education" : "Work"}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="text-sm text-gold">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
