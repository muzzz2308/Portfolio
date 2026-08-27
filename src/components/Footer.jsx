import { SOCIALS } from "../data/site";
import { IconGitHub, IconLinkedIn } from "./Icons";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="gold-hairline h-px w-full" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <a href="#home" className="font-display text-lg font-semibold">
          Murtaza Humayun<span className="text-gold">.</span>
        </a>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-gold"
          >
            <IconGitHub />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-gold"
          >
            <IconLinkedIn />
          </a>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
