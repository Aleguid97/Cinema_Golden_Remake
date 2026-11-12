import Ticket from "./Ticket";

const links = [
  {
    label: "Acquista su Webtic",
    href: "https://www.webtic.it/#/shopping?action=loadLocal&localId=5353",
    external: true,
    primary: true,
  },
  { label: "Orari della settimana", href: "#programma" },
];

function Hero() {
  return (
    <header className="relative bg-hero bg-cover bg-center bg-no-repeat">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-end gap-8 px-4 pb-4 pt-6 md:px-8 md:pb-8 md:pt-12 min-[880px]:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-ink-muted">Vittoria · dal 1913</p>
          <h1 className="font-display text-[40px] leading-none text-ink tracking-[0.04em] md:text-[128px]">
            Multisala
          </h1>
          <p className="font-display text-[40px] leading-none tracking-[0.04em] text-gold-ink md:text-[128px]">
            Golden
          </p>
          <p className="my-4 max-w-[52ch] text-ink-muted">
            Tre sale, bar interno e parcheggio gratuito. Il cinema della famiglia Gambina, da quattro generazioni sul
            corso di Vittoria.
          </p>
          <div className="flex flex-row flex-wrap items-center gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className={`rounded-md px-6 py-3 text-[15px] font-semibold tracking-[0.02em] no-underline ${
                  link.primary
                    ? "bg-gold text-on-gold hover:brightness-110"
                    : "border border-line-strong text-ink hover:bg-surface-2"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <Ticket />
      </div>
    </header>
  );
}

export default Hero;
