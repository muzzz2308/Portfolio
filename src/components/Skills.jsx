import { SKILL_GROUPS } from "../data/site";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="reveal mb-12 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
          Skills
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          What I work with
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          A focused stack I use to design, build, and ship client websites.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="reveal glass-card rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-gold">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
