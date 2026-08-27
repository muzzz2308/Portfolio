import { useEffect, useState } from "react";
import { SOCIALS } from "../data/site";
import { IconGitHub, IconLinkedIn } from "./Icons";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean,
    );
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={close}
          className="font-display text-lg font-semibold tracking-tight"
        >
          MH<span className="text-gold">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active === link.href
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:text-gold"
          >
            <IconGitHub />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:text-gold"
          >
            <IconLinkedIn />
          </a>
          <a
            href="#contact"
            className="rounded-full bg-linear-to-r from-gold to-gold-soft px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            aria-hidden
            className={`absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            aria-hidden
            className={`absolute h-0.5 w-4 rounded-full bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            aria-hidden
            className={`absolute h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>
    </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 md:hidden ${
          open ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
        aria-hidden={!open}
        inert={!open || undefined}
      >
        <div
          className={`h-full bg-background/95 backdrop-blur-xl transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="flex h-full flex-col gap-1 overflow-y-auto px-6 py-8">
            {LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`transition-all duration-300 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                <a
                  href={link.href}
                  onClick={close}
                  className={`block rounded-2xl px-4 py-4 font-display text-2xl ${
                    active === link.href ? "text-gold" : "text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-6 flex gap-3 px-4">
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm"
              >
                <IconGitHub />
                GitHub
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm"
              >
                <IconLinkedIn />
                LinkedIn
              </a>
            </li>
            <li className="mt-4">
              <a
                href="#contact"
                onClick={close}
                className="block rounded-full bg-linear-to-r from-gold to-gold-soft px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
