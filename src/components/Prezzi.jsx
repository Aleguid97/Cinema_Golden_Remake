const tariffe = [
  {
    label: "Intero",
    note: "Prezzo regolare",
    prezzo2d: 8,
    prezzo3d: 9,
  },
  {
    label: "Ridotto",
    note: "Militari, ragazzi fino a 10 anni, over 65",
    prezzo2d: 6.5,
    prezzo3d: 7.5,
  },
  {
    label: "Io studio",
    note: "Con la carta dello studente",
    prezzo2d: 5.5,
    prezzo3d: 7,
  },
];

const cineCard = [
  {
    film: 3,
    prezzo: 18,
  },
  {
    film: 5,
    prezzo: 27.5,
  },
  {
    film: 10,
    prezzo: 50,
  },
];

function formatPrice(value) {
  return value.toLocaleString("it-IT", { style: "currency", currency: "EUR" });
}

const thClass = "px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em]";
const rowHeadClass = "px-4 py-3 text-left align-top font-normal text-ink";
const priceClass = "whitespace-nowrap px-4 py-3 text-right align-top font-bold tabular-nums";
const noteClass = "block text-[13px] leading-[18px] text-ink-muted";

function Prezzi() {
  return (
    <section id="prezzi" className="border-t border-line py-8 md:py-16">
      <div className="mx-auto max-w-[1120px] px-4 md:px-8">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3 md:mb-6">
          <h2 className="text-[clamp(34px,10vw,48px)] leading-none text-ink md:text-[clamp(40px,6vw,56px)]">
            Prezzi e promozioni
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 min-[880px]:grid-cols-[1.4fr_1fr]">
          <div className="overflow-x-auto rounded-md border-2 border-gold bg-surface-1">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gold text-on-gold">
                <tr>
                  <th scope="col" className={`${thClass} text-left`}>
                    Biglietto
                  </th>
                  <th scope="col" className={`${thClass} text-right`}>
                    2D
                  </th>
                  <th scope="col" className={`${thClass} text-right`}>
                    3D
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {tariffe.map((riga) => (
                  <tr key={riga.label}>
                    <th scope="row" className={rowHeadClass}>
                      {riga.label}
                      {riga.note && <small className={noteClass}>{riga.note}</small>}
                    </th>
                    <td className={`${priceClass} text-gold-ink`}>{formatPrice(riga.prezzo2d)}</td>
                    <td className={`${priceClass} text-gold-ink`}>{formatPrice(riga.prezzo3d)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto rounded-md border-2 border-ink bg-surface-1">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-ink text-surface-0">
                <tr>
                  <th scope="col" className={`${thClass} text-left`}>
                    Cinecard
                  </th>
                  <th scope="col" className={`${thClass} text-right`}>
                    Prezzo
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {cineCard.map((riga) => (
                  <tr key={riga.film}>
                    <th scope="row" className={rowHeadClass}>
                      {riga.film} film
                      <small className={noteClass}>{formatPrice(riga.prezzo / riga.film)} a film</small>
                    </th>
                    <td className={`${priceClass} text-ink`}>{formatPrice(riga.prezzo)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prezzi;
