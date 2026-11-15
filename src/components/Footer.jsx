const columns = [
  {
    title: "Biglietti e social",
    links: [
      { label: "Webtic, biglietti online", href: "https://www.webtic.it/#/shopping?action=loadLocal&localId=5353" },
      { label: "Facebook", href: "https://www.facebook.com/multisala.golden/?locale=it_IT" },
      { label: "Cinelumière", href: "https://www.cinelumiere.it/" },
    ],
  },
  {
    title: "Altro",
    links: [
      { label: "Vittoria Peace Film Fest", href: "https://www.vittoriapeacefilmfestival.com" },
      { label: "Link utili", href: "https://www.cinemagolden.it/link" },
      { label: "Trasparenza", href: "https://www.cinemagolden.it/trasparenza" },
    ],
  },
];

const titleClass = "mb-3 font-sans text-xs font-semibold tracking-[0.08em] text-ink-muted";

function Footer() {
  return (
    <footer className="border-t border-line bg-surface-2 pb-8 pt-12">
      <div className="mx-auto max-w-[1120px] px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 min-[720px]:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <h2 className={titleClass}>Telefono</h2>
            <a
              href="tel:+390932981137"
              className="font-display text-[32px] leading-none tracking-[0.03em] text-ink no-underline hover:text-gold-ink"
            >
              0932 981137
            </a>
            <p className="mt-3 text-sm text-ink-muted">Multisala Golden, via Adua (RG). Sala 3 in via Senia s.n.</p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className={titleClass}>{column.title}</h2>
              <ul className="m-0 grid list-none gap-2 p-0">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink underline-offset-4 hover:text-gold-ink hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-2 border-t border-line pt-4 text-sm text-ink-muted">
          <span>© Multisala Golden, Vittoria</span>
          <span>Dal 1913</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
