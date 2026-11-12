const holes = [36, 56, 76, 96, 116, 136, 156, 176];

function Ticket() {
  return (
    <svg
      viewBox="0 0 440 220"
      role="img"
      aria-label="Biglietto del Multisala Golden"
      className="hidden h-auto w-full max-w-[440px] justify-self-end min-[720px]:block"
    >
      <rect className="fill-velvet" x="0" y="20" width="96" height="180" rx="8" />
      <rect className="fill-gold" x="112" y="0" width="328" height="220" rx="8" />

      <g className="fill-surface-0">
        <circle cx="216" cy="0" r="16" />
        <circle cx="216" cy="220" r="16" />
        {holes.map((cy) => (
          <circle key={cy} cx="216" cy={cy} r="5" />
        ))}
      </g>

      <text
        x="164"
        y="118"
        textAnchor="middle"
        fontSize="44"
        transform="rotate(-90 164 110)"
        className="fill-on-gold font-display"
      >
        1913
      </text>
      <text x="240" y="70" fontSize="11" className="fill-on-gold font-sans font-semibold tracking-[0.08em]">
        INGRESSO
      </text>
      <text x="240" y="130" fontSize="64" className="fill-on-gold font-display">
        GOLDEN
      </text>
      <text x="240" y="170" fontSize="11" className="fill-on-gold font-sans font-semibold tracking-[0.08em]">
        SALA 1 · 2 · 3
      </text>
    </svg>
  );
}

export default Ticket;
