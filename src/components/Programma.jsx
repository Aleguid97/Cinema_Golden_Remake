import { useState } from "react";

const GIORNO = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

const WEBTIC = "https://www.webtic.it/#/shopping?action=loadLocal&localId=5353";

const films = [
  { title: "Film1", times: ["18:30", "21:30"] },
  { title: "Film2", times: ["19:30", "22:00"] },
  { title: "Film3", times: ["18:00", "21:30"] },
  {
    title: "Film4",
    times: ["20:00"],
  } /* qui definiamo tutta la lista dei film in programmazione con i relativi orari */,
  {
    title: "Film5",
    times: ["19:00", "22:30"],
  } /* gli stessi attraverso il metodo map vengono poi visualizzati nella sezione del programma */,
  { title: "Film6", times: ["18:30", "21:00"] },
  { title: "Film7", times: ["19:30", "22:00"] },
  { title: "Film8", times: ["18:00", "21:30"] },
];

function padNumber(num) {
  return String(num).padStart(2, "0"); /* Questa funzione serve a formattare i numeri con due cifre */
} /* quando la cifra è minore di 10 mette lo 0 davanti*/

/* Questa è la funzione più complessa. 
La prima parte si ricava il giorno corrente e gli assegna un numero
in base alla numerazione degli array.
Poi il metodo slice lo taglia tenedo 3 lettere soltanto (LUN, MAR, MER)
Se poi la posizione nell'Array è 0 (LUN) restituisce chiuso e lo stile CSS abbinato
se è 1 (MAR) il scatta promo e quindi "RIDOTTO"
anche il giorno corrente avra uno stile CSS dedicato che lo metterà in evidenza sempre */

function getWeek(today = new Date()) {
  const offset = (today.getDay() + 6) % 7;
  const monday = new Date(today);
  monday.setDate(today.getDate() - offset);

  return GIORNO.map((day, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return {
      key: day.slice(0, 3).toLowerCase(),
      n: day,
      d: padNumber(date.getDate()),
      m: padNumber(date.getMonth() + 1),
      closed: i === 0,
      promo: i === 1,
    };
  });
}

const days = getWeek();
const todayIndex = (new Date().getDay() + 6) % 7;
const first = days[0];
const last = days[6];

function dayClasses(day, isSelected, isToday) {
  if (isToday && isSelected) return "border-gold bg-ink text-surface-0 ring-2 ring-inset ring-gold";
  if (isToday) return "border-ink bg-ink text-surface-0";
  if (isSelected && day.closed) return "border-alert bg-alert text-on-alert";
  if (isSelected) return "border-gold bg-gold text-on-gold";
  return "border-line-strong bg-surface-1 text-ink";
}

function smallClasses(day, isSelected, isToday) {
  if (isToday) return "text-surface-0";
  if (isSelected && day.closed) return "text-on-alert";
  if (isSelected) return "text-on-gold";
  if (day.closed) return "text-alert";
  return "text-ink-muted";
}

function subLabel(day, isToday) {
  if (day.closed) return "Chiuso";
  if (isToday) return "Oggi";
  if (day.promo) return "Ridotto";
  return null;
}

function PosterPlaceholder() {
  return <div className="aspect-[2/3] w-full rounded-sm bg-surface-0" />;
}

function Programma() {
  const [selected, setSelected] = useState(todayIndex);
  const day = days[selected];

  return (
    <section id="programma" className="border-t border-line py-8 md:py-16">
      <div className="mx-auto max-w-[1120px] px-4 md:px-8">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3 md:mb-6">
          <h2 className="text-[clamp(34px,10vw,48px)] leading-none text-ink md:text-[clamp(40px,6vw,56px)]">
            In programmazione
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-md bg-velvet px-4 py-3 text-on-velvet md:rounded-lg md:px-6 md:py-4">
          <h3 className="text-2xl leading-none text-on-velvet md:text-[32px]">
            Da {first.n.toLowerCase()} {first.d}/{first.m} a {last.n.toLowerCase()} {last.d}/{last.m}
          </h3>
        </div>

        <div
          role="group"
          aria-label="Scegli il giorno"
          className="-mx-4 mb-4 mt-3 flex items-start gap-2 overflow-x-auto px-4 py-1 md:mx-0 md:mb-6 md:mt-5 md:px-0"
        >
          {days.map((item, i) => {
            const isSelected = i === selected;
            const isToday = i === todayIndex;
            const sub = subLabel(item, isToday);
            return (
              <button
                key={item.key}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelected(i)}
                className={`flex aspect-square w-[72px] shrink-0 cursor-pointer flex-col items-center justify-center rounded-sm border p-1 ${dayClasses(item, isSelected, isToday)}`}
              >
                <small
                  className={`text-[10px] font-semibold uppercase leading-[14px] tracking-[0.08em] ${smallClasses(item, isSelected, isToday)}`}
                >
                  {item.n.slice(0, 3)}
                </small>
                <b className="font-display text-[26px] font-normal leading-none tracking-[0.04em]">{item.d}</b>
                {sub && (
                  <small
                    className={`text-[10px] font-semibold uppercase leading-[14px] tracking-[0.08em] ${smallClasses(item, isSelected, isToday)}`}
                  >
                    {sub}
                  </small>
                )}
              </button>
            );
          })}
        </div>

        {day.closed ? (
          <div className="rounded-md border border-dashed border-line-strong px-6 py-8 text-center">
            <h3 className="text-[40px] leading-none text-alert">{day.n} chiuso</h3>
            <p className="mx-auto mt-2 max-w-[46ch] text-ink-muted">Il lunedì il cinema riposa. Ci vediamo martedì.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {films.map((film) => (
              <article key={film.title} className="flex flex-col rounded-md border border-line bg-surface-1 p-4">
                <PosterPlaceholder />
                <h3 className="mt-4 text-[26px] leading-[1.05] text-ink">{film.title}</h3>
                <div className="mt-4 flex gap-2">
                  {film.times.map((time) => (
                    <a
                      key={time}
                      href={WEBTIC}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${film.title}, ore ${time}, acquista su Webtic`}
                      className="inline-flex min-w-16 items-center justify-center rounded-sm border border-line-strong bg-surface-0 px-3 py-2 font-display text-2xl leading-none tracking-[0.04em] text-ink no-underline hover:border-gold hover:bg-gold hover:text-on-gold"
                    >
                      {time}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Programma;
