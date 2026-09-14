---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["tarife.html","wer-sind-wir.html","kontakt.html"]
---

# Surface Brief — Jordi Räumungen Website (4 Seiten)

## Scope & Mode

Statistische Mehrseiten-Site (index / tarife / wer-sind-wir / kontakt), Modus **Persuade**. Erfolg = Anfrage (Anruf, E-Mail, Formular).

## Audience, Job, Action, Proof

Zuschauer: Hausbesitzer, Mieter, Verwalter, Hinterbliebene in der Schweiz, die eine Räumung planen und innerhalb von Sekunden verstehen wollen, wer das macht, was es kostet bzw. wie es abläuft, und wie sie Kontakt aufnehmen. Aktion: anrufen oder Anfrage senden. Proof: eigener Fuhrpark (Van-Foto), echte Teamtexte mit Dialekt-Mottos, direkte Kontaktdaten, Schweizer Kreuz-Signal. Keine erfundenen Kundenstimmen, Preise oder Geschichte.

## Constraints

Statisch, kein Build-Step, deutsch (Schweiz, Copy des Besitzers mit ss/ß wie geliefert), selbst gehostete Schriften, Formular ohne Backend (mailto-Komposition). Tarifinhalte als neutrale «auf Anfrage»-Struktur — Besitzer befüllt selbst. Van-Bild interim aus Screenshot rekonstruiert (Provenienz einbetten); Original vom Besitzer ausstehend.

## Direction (code-led)

THESIS: Die Site ist eine Fahrzeugbeklebung als Webseite — kondensierte Strassen-Typografie (Barlow Condensed) auf warmem Weiss, kompromissloses Ziegelrot als Fläche (Committed), grungy Textur wie die bestehende Marke. Refused: Bauträger-Template mit Karten-Raster.

OWN-WORLD: Rau weisser Grund #FAF8F5, Tinte #1C1713, Ziegelrot #BE3A2E (Flächen) / #93291F (tief), feine Linien #E6DED7. Display: Barlow Condensed 700/800, gross und eng; Body: Barlow 400–700. Korn-Textur (SVG feTurbulence) auf roten Flächen. Grammatik: Flächen wie lackierte Banden, harte Kanten, keine runden Ecken ausser an Piktogrammen.

STORY: Visitor versteht in Sekunden: Jordi Räumungen räumt Häuser und Wohnungen einfach, zuverlässig, unkompliziert — sieht Telefonnummer, scrollt Ablauf, klickt Anfrage.

FIRST VIEWPORT (index): Topbar mit Wortmarke links, Nav + Telefon rechts. Hero 2-spaltig: links Display-Schlagzeile «Wir schaffen Platz.» (Tinte) / «Einfach, zuverlässig und unkompliziert.» (Rot), Fliesstext (Original-Copy), CTA-Paar [Anfrage stellen] (Vollrot) + Telefon-Link; rechts Van-Foto randanschliessend, unter der Hero eine rote Texturbahn mit «Räumungen · Umzüge · Weitergehen». Signatur-Interaktion: Eröffnungs-Moment — rote Bahn wischt hoch, Schlagzeilen-Zeilen staffeln ein, Van gleitet sanft von rechts (ein orchestrated Moment, reduced-motion respektiert).

FORM: Code-led (keine Bildgenerierung verfügbar). Seed: n/a.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Memorable Moment

Die Begegnung Wortmarke/Display-Typo + die klare rote Telefonnummer — die Site fühlt sich an wie der Van, der gerade vor der Tür hält.

## Unresolved

Original Van-Foto + Logo-Datei stehen aus; Tarifpreise liefert Besitzer; Deploy-Ziel offen.
