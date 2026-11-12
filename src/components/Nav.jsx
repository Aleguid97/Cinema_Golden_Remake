const links = [
  { label: "Programma", href: "#programma" },
  { label: "Prossimamente", href: "#prossimamente" },
  { label: "Cineclub", href: "#eventi" },
  { label: "Prezzi", href: "#prezzi" },
  { label: "Sale", href: "#sale" },
  { label: "Storia", href: "#storia" },
];

const WEBTIC = "https://www.webtic.it/#/shopping?action=loadLocal&localId=5353";

function Nav() {
  return (
    <nav aria-label="Principale" className="sticky top-0 z-10 border-b border-line bg-surface-2">
      <div className="mx-auto grid max-w-[1120px] grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 px-4 pb-1.5 pt-2.5 md:grid-cols-[auto_1fr_auto] md:gap-6 md:px-8 md:py-3">
        <a
          href="#programma"
          className="whitespace-nowrap font-display text-[28px] leading-none tracking-[0.04em] text-gold-ink no-underline"
        >
          Multisala Golden
        </a>

        <ul className="order-3 col-span-2 m-0 grid list-none grid-cols-3 gap-x-2 p-0 md:order-none md:col-span-1 md:flex md:justify-center md:gap-x-6 md:gap-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block whitespace-nowrap border-b-2 border-transparent py-1.5 text-center text-xs font-semibold uppercase tracking-[0.08em] text-ink no-underline hover:border-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WEBTIC}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-gold px-4 py-2 text-[15px] font-semibold tracking-[0.02em] text-on-gold no-underline hover:brightness-110"
        >
          Biglietti
        </a>
      </div>
    </nav>
  );
}

export default Nav;
