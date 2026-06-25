import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  HeadingLevel,
  AlignmentType,
  LevelFormat,
  BorderStyle,
  WidthType,
  ShadingType,
  ExternalHyperlink,
} from "docx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "docs");
const outFile = path.join(outDir, "template-articol-blog-dronescope.docx");

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };

function h1(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] });
}
function h2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });
}
function h3(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(text)] });
}
function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({ text, size: 22, ...opts })],
  });
}
function bullet(ref, text) {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { after: 120 },
    children: [new TextRun({ text, size: 22 })],
  });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 36, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 },
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 200, after: 160 }, outlineLevel: 1 },
      },
      {
        id: "Heading3",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 160, after: 120 }, outlineLevel: 2 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
      {
        reference: "numbers",
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: "%1.",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: [
        h1("Template articol blog — dronescope.ro"),
        p("Folosește acest document ca șablon pentru fiecare articol nou. Completează secțiunile marcate cu [PARANTEZE]. Șterge instrucțiunile gri după publicare."),
        p("Site: https://dronescope.ro | Contact: contact@dronescope.ro | WhatsApp: 0729 626 932", { italics: true, color: "666666" }),

        h2("1. Cercetare înainte de scriere (30–40% din timp)"),
        bullet("bullets", "Cuvânt-cheie principal: [ex: filmări aeriene Constanța 2026]"),
        bullet("bullets", "Cuvinte secundare (4–6): [ex: preț filmare dronă Mamaia, nuntă cu dronă]"),
        bullet("bullets", "Analiză top 3 Google: [notează ce au competitorii și cum facem mai bine]"),
        bullet("bullets", "Lungime țintă: 1.800–3.500 cuvinte"),
        bullet("bullets", "URL propus: /blog/[slug-scurt-cu-keyword]"),

        h2("2. Metadata SEO (completează înainte de scriere)"),
        new Table({
          width: { size: 9026, type: WidthType.DXA },
          columnWidths: [2800, 6226],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  borders,
                  width: { size: 2800, type: WidthType.DXA },
                  shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun({ text: "Title Tag", bold: true })] })],
                }),
                new TableCell({
                  borders,
                  width: { size: 6226, type: WidthType.DXA },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun("[Keyword] • Drone Scope — sub 60 caractere]")] })],
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  borders,
                  width: { size: 2800, type: WidthType.DXA },
                  shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun({ text: "Meta Description", bold: true })] })],
                }),
                new TableCell({
                  borders,
                  width: { size: 6226, type: WidthType.DXA },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun("[150–160 caractere + keyword + CTA: Solicită ofertă gratuită!]")] })],
                }),
              ],
            }),
            new TableRow({
              children: [
                new TableCell({
                  borders,
                  width: { size: 2800, type: WidthType.DXA },
                  shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun({ text: "H1", bold: true })] })],
                }),
                new TableCell({
                  borders,
                  width: { size: 6226, type: WidthType.DXA },
                  margins: { top: 80, bottom: 80, left: 120, right: 120 },
                  children: [new Paragraph({ children: [new TextRun("[Titlul articolului — identic cu H1 pe site]")] })],
                }),
              ],
            }),
          ],
        }),

        h2("3. Structura articolului"),
        h3("Introducere (100–150 cuvinte)"),
        p("[Răspunde DIRECT la întrebarea din titlu în prima propoziție. Include cuvântul-cheie principal. Adaugă o propoziție cu beneficii + CTA mic: „Solicită ofertă gratuită”.]"),

        h3("Autor (E-E-A-T)"),
        p("Articol scris de Echipa Drone Scope — Piloți dronă autorizați CAA, 450+ proiecte, 10+ ani experiență în Constanța și pe litoral."),
        p("[Adaugă 1–2 propoziții personale: „În proiectul pentru [client/locație] am folosit…”]"),

        h3("H2 — [Secțiune 1 cu keyword secundar]"),
        p("[Conținut 300–500 cuvinte. Include date reale, prețuri 2026, statistici.]"),
        p("[INSEREAZĂ TABEL sau listă bullet dacă e cazul]"),
        p("CTA intermediar: Solicită ofertă gratuită → /#contact sau WhatsApp 0729 626 932"),

        h3("H2 — [Secțiune 2]"),
        h3("H3 — [Subsecțiune]"),
        p("[Conținut…]"),

        h3("H2 — [Secțiune 3 — comparație pachete / tabel prețuri]"),
        new Table({
          width: { size: 9026, type: WidthType.DXA },
          columnWidths: [2500, 2175, 2175, 2176],
          rows: [
            new TableRow({
              children: ["Caracteristică", "Pachet A", "Pachet B", "Pachet C"].map(
                (text) =>
                  new TableCell({
                    borders,
                    width: { size: 2256, type: WidthType.DXA },
                    shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
                    margins: { top: 80, bottom: 80, left: 120, right: 120 },
                    children: [new Paragraph({ children: [new TextRun({ text, bold: true, size: 20 })] })],
                  })
              ),
            }),
            new TableRow({
              children: ["[Rând 1]", "[Valoare]", "[Valoare]", "[Valoare]"].map(
                (text) =>
                  new TableCell({
                    borders,
                    width: { size: 2256, type: WidthType.DXA },
                    margins: { top: 80, bottom: 80, left: 120, right: 120 },
                    children: [new Paragraph({ children: [new TextRun({ text, size: 20 })] })],
                  })
              ),
            }),
          ],
        }),

        h3("Imagini (minimum 3–8 per articol)"),
        bullet("bullets", "Nume fișier optimizat: filmare-drona-nunta-mamaia-dronescope.jpg"),
        bullet("bullets", "Alt text: [descriere + keyword + Drone Scope Constanța]"),
        bullet("bullets", "Caption sub imagine"),
        bullet("bullets", "[ÎNLOCUIEȘTE pozele Pexels cu poze reale din portofoliu când sunt disponibile]"),

        h3("Linkuri interne (minimum 5–7 în text)"),
        bullet("bullets", "/servicii/filmari-imobiliare"),
        bullet("bullets", "/servicii/nunti-evenimente"),
        bullet("bullets", "/servicii/marketing-aerial"),
        bullet("bullets", "/blog/[alt-articol-relevant]"),
        bullet("bullets", "/#contact"),

        h3("Linkuri externe (2–4 către surse de încredere)"),
        new Paragraph({
          spacing: { after: 120 },
          children: [
            new ExternalHyperlink({
              children: [new TextRun({ text: "Autoritatea Aeronautică Civilă Română (CAA)", style: "Hyperlink", size: 22 })],
              link: "https://www.caa.ro/",
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [
            new ExternalHyperlink({
              children: [new TextRun({ text: "DJI — echipament profesional", style: "Hyperlink", size: 22 })],
              link: "https://www.dji.com/",
            }),
          ],
        }),

        h3("FAQ — 6–8 întrebări (Google rich results)"),
        bullet("numbers", "Întrebare 1: [cu keyword] → Răspuns 2–4 propoziții"),
        bullet("numbers", "Întrebare 2: …"),
        bullet("numbers", "Întrebare 3: …"),
        bullet("numbers", "Întrebare 4: …"),
        bullet("numbers", "Întrebare 5: …"),
        bullet("numbers", "Întrebare 6: …"),

        h3("Concluzie + CTA final"),
        p("[Rezumat 2–3 propoziții + îndemn clar: Solicită ofertă gratuită, WhatsApp 0729 626 932, link /#contact]"),

        h2("4. Checklist înainte de publicare"),
        bullet("bullets", "Lungime: 1.800+ cuvinte verificată"),
        bullet("bullets", "Keyword principal în titlu, H1, intro, 1–2 H2"),
        bullet("bullets", "Meta description 150–160 caractere"),
        bullet("bullets", "5–10 linkuri interne"),
        bullet("bullets", "2–4 linkuri externe"),
        bullet("bullets", "6–8 FAQ completate"),
        bullet("bullets", "3+ imagini cu alt text"),
        bullet("bullets", "CTA la fiecare ~600 cuvinte"),
        bullet("bullets", "Verificare ortografică + ton expert (nu generic AI)"),

        h2("5. După publicare"),
        bullet("bullets", "Google Search Console → Request Indexing"),
        bullet("bullets", "Verifică sitemap.xml include URL-ul nou"),
        bullet("bullets", "Promovare WhatsApp + Facebook grupuri Constanța"),
        bullet("bullets", "Cere share de la clienți / parteneri"),

        h2("6. Exemplu titlu + outline (model)"),
        p("Titlu: Filmări cu Dronă la Nuntă în Constanța 2026: Prețuri, Avantaje & 7 Locații Spectaculoase"),
        bullet("bullets", "H2: Cât costă exact în 2026?"),
        bullet("bullets", "H2: De ce merită să adaugi dronă la pachetul video"),
        bullet("bullets", "H2: Cele mai frumoase locații de filmat pe litoral"),
        bullet("bullets", "H2: Checklist autorizații (ca să nu iei amendă)"),
        bullet("bullets", "H2: FAQ"),

        p("— Template Drone Scope © 2026. Pentru întrebări: contact@dronescope.ro", { italics: true, color: "888888" }),
      ],
    },
  ],
});

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const buffer = await Packer.toBuffer(doc);
fs.writeFileSync(outFile, buffer);
console.log(`Created: ${outFile}`);