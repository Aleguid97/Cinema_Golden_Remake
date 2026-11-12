# Cinema Golden - Remake

Remake del sito del Multisala Golden di Vittoria, con un frontend moderno.

## Stack

- React con Vite
- Tailwind CSS
- Oxlint per il controllo del codice
- Font Bebas Neue e Inter, palette Zagara

## Avvio

```bash
mise install
npm install
npm run dev
```

Per controllare il codice:

```bash
npm run lint
```

## Flusso di lavoro

Il progetto segue il Git Flow:

- `main` contiene il codice pubblicato
- `develop` raccoglie il lavoro in corso
- ogni funzionalità vive in un branch `feature/glb<numero>-<nome>`, che parte da `develop`, dove il numero è quello del ticket su Linear

Ogni modifica entra tramite Pull Request, con il ticket nel titolo (per esempio `GLB-19 Aggiunge Navbar`).

## Stato

In sviluppo.
