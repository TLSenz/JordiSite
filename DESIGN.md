# DESIGN.md — Jordi Räumungen

Das visuelle System der statischen Website (5 Seiten, kein Build-Step). Quelle der Welt: die Fahrzeugbeklebung des eigenen Transpoters — kondensierte Strassen-Typografie, Ziegelrot als Fläche, rauwe warme Hölle.

## Welt

«Livery»-Grammatik: grosse enge Condensed-Display-Typo wie auf einem Fahrzeug, rote Flächen mit feiner Korn-Textur (SVG feTurbulence), harte Kanten (keine Border-Radius ausser Brand-Mark und Favicon), feine warme Linien als Trenner. Keine Karten-Raster; Listen mit Linien, grosse Titel, grosse Telefonnummern als Vertrauenselement.

## Tokens

### Farben
| Token | Wert | Verwendung |
|---|---|---|
| `--red` | #BE3A2E | Primärflächen, Akzente, aktive Zustände, Buttons |
| `--red-deep` | #93291F | Footer, Hover, Gradient-Ende |
| `--red-dark` | #751F16 | Hover tief, Fehler-Rahmen im Formular |
| `--paper` | #FAF8F5 | Seitenhintergrund (warmes Weiss) |
| `--ink` | #1C1713 | Textfarbe |
| `--muted` | #4F4640 | Sekundärtext (#4F4640, nie reines Grau) |
| `--line` | #E6DED7 | Trennlinien, Kartenrahmen |
| Weiss | #FFFFFF | Text auf Rot, Buttons invertiert |

Kontraste: Weiss auf --red 5.5:1, --red auf --paper 5.3:1, --muted auf --paper >7:1. Weisse Buttons im CTA-Band tragen --red-deep Text.

### Typografie
Selbst gehostet (assets/fonts, latin, woff2, font-display swap):

- **Display/UI-Akzente:** Barlow Condensed 600/700/800 — h1–h3, Buttons, Telefonnummern, Livery-Band, Monogramme, Labels (uppercase, letter-spacing 0.05–0.24em).
- **Body:** Barlow 400/500/600/700 — Fliesstext 1.0625rem/1.65, Lead 1.125rem.

Skalen: h1 clamp(2.9rem,6vw,5rem) (Seitenköpfe), Hero h1 clamp(2.7rem,4.5vw,4rem), h2 clamp(2.3rem,4.5vw,3.6rem), h3 im Listenkontext clamp(1.7rem,3vw,2.5rem). Headings line-height 1.15, text-wrap balance.

### Abstände & Layout
- `.wrap`: min(1200px, 100% − clamp(2.5rem,8vw,6rem)), zentriert.
- Sektionen: padding-block clamp(3.5rem,8vw,6.5rem); mehr Raum über als unter Headings.
- Hero: Desktop-Grid 1.05fr/1fr, Text links mit padding-left clamp(2.5rem,8vw,6rem), Bild full-bleed rechts (object-position 72%). Mobil (≤880px): einstellig, Text und Bild mit margin-inline clamp(1.4rem,5vw,2.5rem) — nichts klebt am Rand.
- Breakpoints: 1020px (Steps einspaltig, Footer 2spaltig), 880px (Hero/Services/Kontakt/Team einspaltig, Bild-Ränder), 640px (Formular einspaltig, Topbar wickelt).

### Komponenten
- **Topbar:** sticky, blur, Wortmarke mit rotem Kreuz-Mark, Nav mit rotem Unterstrich aktiv (`aria-current`), Telefonnummer rechts.
- **Hero:** Wipe-Overlay + gestaffelte Zeilen-Animation + Van-Gleiten (nur mit `.js`, einmalig, `prefers-reduced-motion` respektiert).
- **Livery-Band:** rote Textur-Bahn, uppercase Condensed 600, letter-spacing 0.24em, Wiederholung des Claims.
- **Service-Liste:** Zeilen mit Top-Line, grosser Titel links, Beschreibung rechts; Hover färbt Titel rot.
- **Steps:** ol mit Zählern 01–03, rote 3px-Top-Linie (Sequenz trägt Information).
- **CTA-Band:** rote Textur-Fläche, invertierter Button, weisse Telefonnummer.
- **Footer:** --red-deep mit Textur, 3 Spalten, Basiszeile.
- **Formular:** rote Textur-Fläche, weisse Felder ohne Radius, Labels Condensed, Pflicht-Asterisk #FFD9D2, Inline-Fehler (role=alert), Absenden öffnet Mail-Programm (kein Backend).
- **Team:** Foto 7.5rem quadratisch (object-fit cover) + Name h2 + Rolle uppercase rot + Bio + Dialekt-Motto mit roten Anführungszeichen.
- **Tarife:** Zeilenliste Objekt / «Preis auf Anfrage» (rot, Condensed) / Beschreibung; Hinweisbox mit 1px-Vollrahmen.

### Browser-Oberflächen
Selection: Rot/Weiss. Focus-visible: 3px --red, offset 2 (im roten Formular: Ink-Outline). Tabular-nums für Telefonnummern (`.telefon`).

## Bilder
- assets/img/van.jpg — Hero (680×692, interim aus Screenshot rekonstruiert, Provenienz im JPEG; ersetzen durch Original).
- assets/img/team-*.jpg — Team (Provenienz eingebettet; team-manuel.jpg niedrig aufgelöst).
- assets/img/favicon.svg — rotes Rounded-Square mit weissem Kreuz.

## Regeln
1. Keine erfundenen Inhalte: keine Preise, Kundenstimmen, Geschichte. Tarifpreise und Impressum-Felder gehören dem Besitzer.
2. Copy in Schweizer Schreibweise, Dialekt-Mottos unverändert.
3. Neue rote Flächen erhalten die Korn-Textur (`--noise`); neue grosser Text in Barlow Condensed.
4. Motion nur der eine Eröffnungsmoment + sanfte Reveals; reduced-motion schaltet alles ab; Inhalte ohne JS sichtbar (`.js`-Gate).
