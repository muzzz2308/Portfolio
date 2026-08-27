import portrait from "/MuzzzDp.webp";
import { SKILLS } from "../data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-x-clip px-4 pt-24 pb-20 sm:px-6 sm:pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[min(42rem,100vw)] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold) 28%, transparent), transparent 65%)",
          animation: "float-glow 9s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 hidden h-72 w-72 rounded-full opacity-30 blur-[90px] sm:block"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold-soft) 40%, transparent), transparent 70%)",
          animation: "float-glow 12s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 text-center">
        <p className="reveal mb-3 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-muted-foreground sm:text-xs sm:tracking-[0.4em]">
          Web Developer · Lahore
        </p>
        <h1 className="reveal text-[2.35rem] font-bold leading-[1.05] sm:text-6xl md:text-7xl">
          Murtaza <span className="text-gold-gradient">Humayun</span>
        </h1>
        <p className="reveal mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:mt-5 sm:text-lg">
          I build clean, conversion-focused websites with React and Tailwind CSS
          — for agencies, storefronts, and growing brands.
        </p>
      </div>

      <div className="relative z-10 mt-10 flex flex-col items-center md:hidden">
        <div className="h-40 w-40 overflow-hidden rounded-full border-2 border-[color-mix(in_oklab,var(--gold)_45%,transparent)] shadow-[0_0_60px_-10px_color-mix(in_oklab,var(--gold)_40%,transparent)] sm:h-48 sm:w-48">
          <img
            src={portrait}
            alt="Portrait of Murtaza Humayun"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-8 flex max-w-md flex-wrap justify-center gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="glass-card rounded-full px-3 py-1.5 text-xs font-medium text-foreground"
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-12 hidden items-center justify-center md:flex">
        <div className="relative h-[32rem] w-[32rem]">
          <div
            aria-hidden
            className="absolute inset-0 rounded-full border border-[color-mix(in_oklab,var(--gold)_22%,transparent)]"
            style={{ animation: "orbit-spin 40s linear infinite" }}
          />
          <div
            aria-hidden
            className="absolute inset-[8%] rounded-full border border-dashed border-[color-mix(in_oklab,var(--gold)_14%,transparent)]"
            style={{ animation: "orbit-counter 32s linear infinite" }}
          />

          <div className="absolute top-1/2 left-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 lg:h-56 lg:w-56">
            <div className="h-full w-full overflow-hidden rounded-full border-2 border-[color-mix(in_oklab,var(--gold)_45%,transparent)] shadow-[0_0_60px_-10px_color-mix(in_oklab,var(--gold)_40%,transparent)]">
              <img
                src={portrait}
                alt="Portrait of Murtaza Humayun"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {SKILLS.map((skill, i) => {
            const angle = (i / SKILLS.length) * 360;
            const radius = 190;
            return (
              <div
                key={skill}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px)`,
                }}
              >
                <div style={{ transform: `rotate(${-angle}deg)` }}>
                  <div
                    className="glass-card flex items-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-foreground"
                    style={{
                      animation: `orbit-pulse ${6 + (i % 4)}s ease-in-out infinite`,
                    }}
                  >
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                    {skill}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="reveal relative z-10 mt-10 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
        <a
          href="#projects"
          className="rounded-full bg-linear-to-r from-gold to-gold-soft px-6 py-3 text-center text-sm font-semibold text-primary-foreground shadow-lg shadow-[color-mix(in_oklab,var(--gold)_30%,transparent)] transition-transform hover:scale-105"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-6 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
