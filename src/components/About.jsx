export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="reveal">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.4em] text-gold">
          About
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Websites that look sharp and ship on time.
        </h2>
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-start">
        <div className="reveal space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I&apos;m Murtaza Humayun, a web developer based in Lahore. I
            currently freelance, building React sites for agencies, local
            brands, and product teams.
          </p>
          <p>
            Before that I worked as a web developer at Virtual Dive Studio and
            interned at Fly Rank. I care about clean layouts, fast pages, and
            handing over work that a client can actually use.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 gap-3 sm:gap-4">
          {[
            { k: "1+", v: "Years experience" },
            { k: "10+", v: "Projects shipped" },
            { k: "5+", v: "Happy clients" },
            { k: "BSCS", v: "Lahore Garrison University" },
          ].map((s) => (
            <div key={s.v} className="glass-card rounded-2xl p-4 text-center sm:p-5">
              <p className="text-2xl font-bold text-gold-gradient sm:text-3xl">
                {s.k}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
