import { siteConfig } from "@/lib/seo";

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  publishedAt: string;
  readTime: number;
  relatedServiceSlug?: string;
  sections: BlogSection[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "cat-costa-filmare-cu-drona-constanta",
    title: "Cât costă o filmare cu dronă în Constanța?",
    metaTitle: "Cât Costă o Filmare cu Dronă în Constanța? | Ghid Prețuri 2026",
    metaDescription:
      "Ghid complet de prețuri pentru filmări cu dronă în Constanța și pe litoral. Imobiliare de la 450 lei, nunți, marketing și industrial. Ce influențează costul.",
    keywords: [
      "preț filmare dronă",
      "cât costă filmare cu dronă",
      "filmare dronă Constanța preț",
      "preț fotografii aeriene",
      "filmări cu dronă tarife",
    ],
    excerpt:
      "Ghid practic de prețuri pentru filmări cu dronă în Constanța — de la sesiuni imobiliare la nunți și proiecte industriale. Ce factori influențează costul final.",
    publishedAt: "2026-06-25",
    readTime: 6,
    relatedServiceSlug: "filmari-imobiliare",
    sections: [
      {
        heading: "Prețuri orientative în 2026",
        paragraphs: [
          "Costul unei filmări cu dronă depinde de tipul proiectului, durata pe locație, complexitatea montajului și distanța față de Constanța. Iată o orientare realistă bazată pe piața locală:",
        ],
        list: [
          "Filmări imobiliare (apartament, vilă, teren): 450–650 lei",
          "Ansamblu rezidențial sau multiple clădiri: 800–1.500 lei",
          "Nuntă sau eveniment (half-day): 1.200–2.000 lei",
          "Spot publicitar / marketing aerial: 1.500–3.500 lei",
          "Documentare șantier (vizită unică): 600–900 lei",
          "Proiect industrial complex: ofertă personalizată",
        ],
      },
      {
        heading: "Ce influențează prețul",
        paragraphs: [
          "Locația contează — zborurile în zone aglomerate sau cu restricții speciale (port, aeroport, zone militare) necesită autorizații suplimentare care pot adăuga timp și cost.",
          "Durata montajului este un factor major. Un clip simplu de 60 de secunde pentru imobiliare costă semnificativ mai puțin decât un spot de 2 minute cu muzică, text on-screen și multiple formate de export.",
          "Numărul de runde de revizii, livrarea urgentă (24–48h) și drepturile de utilizare extinsă pot modifica oferta finală.",
        ],
      },
      {
        heading: "Ce este inclus de obicei",
        paragraphs: [
          "La Drone Scope, prețul standard include planificarea zborului, autorizațiile CAA, asigurarea de răspundere civilă, filmarea cu echipament DJI profesional, montaj de bază și 2 runde de revizii. Nu există costuri ascunse — primești o ofertă clară înainte de confirmare.",
        ],
      },
      {
        heading: "Cum obții cea mai bună ofertă",
        paragraphs: [
          "Trimite-ne locația (sau adresa exactă), tipul proiectului și termenul dorit. Răspundem în maxim 2 ore cu o ofertă personalizată, fără obligații. Pentru agenții imobiliare sau dezvoltatori cu volume recurente, oferim pachete cu preț preferențial.",
        ],
      },
    ],
  },
  {
    slug: "filmari-cu-drona-mamaia",
    title: "Filmări cu dronă în Mamaia: ghid complet",
    metaTitle: "Filmări cu Dronă în Mamaia | Locații, Prețuri & Sfaturi",
    metaDescription:
      "Ghid complet pentru filmări cu dronă în Mamaia și Mamaia Nord. Locații spectaculoase, restricții de zbor, prețuri și sfaturi de la piloți cu experiență pe litoral.",
    keywords: [
      "filmări dronă Mamaia",
      "filmări cu dronă Mamaia Nord",
      "fotografii aeriene Mamaia",
      "video aerian stațiune Mamaia",
      "dronă Mamaia preț",
    ],
    excerpt:
      "Tot ce trebuie să știi despre filmări cu dronă în Mamaia — cele mai spectaculoase locații, restricții de zbor și cum să obții materiale cinematografice pe litoral.",
    publishedAt: "2026-06-25",
    readTime: 7,
    relatedServiceSlug: "marketing-aerial",
    sections: [
      {
        heading: "De ce Mamaia este perfectă pentru filmări aeriene",
        paragraphs: [
          "Mamaia oferă un mix unic de elemente vizuale: plajă lungă, laguna Siutghiol, hoteluri moderne, promenadă și apusuri spectaculoase. Pentru marketing turistic, imobiliare premium sau evenimente, perspectivele aeriene transformă orice material într-un conținut de impact.",
          "Zonele Mamaia Nord și Năvodari completează oferta cu vile private, complexuri rezidențiale și plaje mai liniștite — ideale pentru filmări imobiliare și evenimente exclusive.",
        ],
      },
      {
        heading: "Locații populare pentru filmări",
        list: [
          "Plaja din Mamaia — panorame la apus, aerial beach shots",
          "Laguna Siutghiol — contrast apă dulce/mare",
          "Promenada și hoteluri — marketing HoReCa",
          "Mamaia Nord — vile, ansambluri rezidențiale noi",
          "Complexuri cu piscină și vedere la mare — imobiliare premium",
        ],
        paragraphs: [],
      },
      {
        heading: "Restricții și autorizații pe litoral",
        paragraphs: [
          "Zborurile cu drona în Mamaia necesită respectarea regulamentului CAA și, în anumite zone, coordonare cu autoritățile locale. Piloții Drone Scope sunt autorizați și au experiență cu zboruri pe litoral — inclusiv deasupra mulțimilor (cu distanțe legale) și în zone turistice aglomerate.",
          "Nu încerca să zbori pe cont propriu fără autorizație — amenzile pot ajunge la mii de lei, iar riscurile de siguranță sunt reale.",
        ],
      },
      {
        heading: "Sfaturi pentru un rezultat profesional",
        paragraphs: [
          "Planifică filmarea în golden hour (dimineața devreme sau cu 1–2 ore înainte de apus) pentru lumină caldă și umbre dramatice. Evită orele de vârf când plaja este aglomerată, dacă vrei cadre curate.",
          "Pentru imobiliare, combină filmarea aeriană cu interiorul — un clip de 90 de secunde cu ambele perspective vinde semnificativ mai bine decât doar poze la sol.",
        ],
      },
    ],
  },
  {
    slug: "fotografii-aeriene-imobiliare-avantaje",
    title: "De ce fotografiile aeriene vând proprietăți mai repede",
    metaTitle: "Fotografii Aeriene Imobiliare | De Ce Vând Mai Repede",
    metaDescription:
      "Studii și argumente concrete: fotografiile și videoclipurile aeriene pentru imobiliare cresc vizualizările cu 300%+. Ghid pentru agenți și proprietari din Constanța.",
    keywords: [
      "fotografii aeriene imobiliare",
      "filmări imobiliare dronă",
      "tur virtual dronă imobiliare",
      "fotografii aeriene apartament",
      "video aerian vilă",
    ],
    excerpt:
      "Argumente concrete și date din industrie despre cum fotografiile și videoclipurile aeriene accelerează vânzarea proprietăților în Constanța și pe litoral.",
    publishedAt: "2026-06-25",
    readTime: 5,
    relatedServiceSlug: "filmari-imobiliare",
    sections: [
      {
        heading: "Cifre care conving",
        paragraphs: [
          "Anunțurile imobiliare cu fotografii și video aerian primesc de 3–5 ori mai multe vizualizări decât cele cu imagini standard la sol. Cumpărătorii petrec mai mult timp pe pagină și solicită mai des vizionări.",
          "Pentru proprietăți pe litoral — unde contextul (mare, plajă, vecinătăți) este un factor decisiv de cumpărare — filmarea cu dronă nu este un lux, ci o necesitate competitivă.",
        ],
      },
      {
        heading: "Ce transmite o fotografie aeriană",
        paragraphs: [
          "O poză la sol arată camerele. O fotografie aeriană arată experiența de viație: proximitatea la mare, accesul, parcarea, grădina, vecinătățile, potențialul terenului. Cumpărătorul înțelege instant dacă proprietatea i se potrivește — fără să piardă timp cu vizionări inutile.",
        ],
        list: [
          "Locație și context geografic complet",
          "Dimensiunea reală a terenului și a construcției",
          "Acces, parcare, drumuri de apropiere",
          "Vedere la mare, lac sau zone verzi",
          "Vecinătăți și infrastructură din zonă",
        ],
      },
      {
        heading: "ROI pentru agenții imobiliare",
        paragraphs: [
          "O sesiune de filmări imobiliare cu dronă (450–650 lei) se amortizează la prima proprietate vândută mai rapid. Agențiile care folosesc conținut aerian constant își construiesc un brand premium și atrag proprietari cu listări de valoare mare.",
          "Materialele se reutilizează pe Imobiliare.ro, Storia, Facebook, Instagram și în prezentări PDF — un singur investițiu, multiple canale.",
        ],
      },
    ],
  },
  {
    slug: "nunta-cu-drona-pe-litoral",
    title: "Nuntă cu dronă pe litoral: ce trebuie să știi",
    metaTitle: "Nuntă cu Dronă pe Litoral | Ghid Complet Mamaia & Constanța",
    metaDescription:
      "Planifici o nuntă cu dronă pe litoral? Află despre costuri, siguranță, coordonare cu fotograful, cele mai frumoase locații și ce să ceri de la echipa de filmare aeriană.",
    keywords: [
      "nuntă cu dronă Constanța",
      "nunți cu dronă",
      "filmare dronă nuntă Mamaia",
      "video aerian nuntă plajă",
      "filmări evenimente dronă litoral",
    ],
    excerpt:
      "Ghid practic pentru cupluri care vor filmări aeriene la nuntă pe litoral — costuri, siguranță, locații și cum se integrează drona cu echipa foto/video.",
    publishedAt: "2026-06-25",
    readTime: 6,
    relatedServiceSlug: "nunti-evenimente",
    sections: [
      {
        heading: "De ce merită o dronă la nuntă",
        paragraphs: [
          "Nunta pe litoral are un decor natural spectaculos — plajă, mare, apus. O dronă captează dimensiunea evenimentului, panorama locației și momentele cheie (sosire, exterior, dans) din unghiuri pe care niciun cameraman la sol nu le poate reproduce.",
          "Rezultatul este un clip cinematic care devine amintirea centrală a evenimentului — partajat pe social media, trimis rudelor, revăzut ani la rând.",
        ],
      },
      {
        heading: "Planificare și coordonare",
        paragraphs: [
          "Cheia succesului este coordonarea cu fotograful și videograful principal. Stabilim împreună timeline-ul: când are sens zborul (de obicei exterior, sosire, dans), ce momente sunt prioritare și cum evităm suprapunerea.",
          "Recomandăm rezervarea cu 2–4 săptămâni înainte, mai ales în sezonul de vârf (iunie–august) când locațiile de pe litoral sunt foarte solicitate.",
        ],
      },
      {
        heading: "Siguranță și legalitate",
        paragraphs: [
          "Zborul deasupra invitaților este posibil în condiții legale — la distanțe aprobate, cu pilot autorizat CAA și asigurare activă. Nu improviza cu un prieten care „are o dronă\" — riscurile legale și de siguranță nu merită.",
          "La Drone Scope, toți piloții sunt certificați, avem asigurare de 2 milioane euro și experiență cu zeci de nunți pe litoral.",
        ],
      },
      {
        heading: "Buget orientativ",
        paragraphs: [
          "O filmare cu dronă la nuntă pe litoral pornește de la 1.200–2.000 lei, în funcție de durata evenimentului, numărul de locații și complexitatea montajului. Include consultație, filmare, montaj cinematic și livrare în 7–14 zile.",
        ],
      },
    ],
  },
  {
    slug: "autorizatii-filmari-drona-romania",
    title: "Autorizații legale pentru filmări cu dronă în România",
    metaTitle: "Autorizații Filmări cu Dronă România | Pilot Autorizat CAA",
    metaDescription:
      "Ce autorizații sunt necesare pentru filmări cu dronă în România? Reglementări CAA, zone restricționate, asigurări și de ce să alegi un pilot autorizat pentru proiectul tău.",
    keywords: [
      "pilot dronă autorizat CAA",
      "autorizații filmări dronă",
      "lege dronă România",
      "filmări cu dronă legal",
      "reglementări zbor dronă",
    ],
    excerpt:
      "Ghid despre reglementările pentru zboruri cu drona în România — autorizații CAA, zone restricționate, asigurări și de ce contează să lucrezi cu profesioniști.",
    publishedAt: "2026-06-25",
    readTime: 5,
    relatedServiceSlug: "industrial-constructii",
    sections: [
      {
        heading: "Cadrul legal în România",
        paragraphs: [
          "Zborurile cu drona în România sunt reglementate de Autoritatea Aeronautică Civilă Română (CAA). Operatorii comerciali trebuie să dețină certificare, să înregistreze dronele și să respecte restricțiile de spațiu aerian.",
          "Filmările pentru clienți — fie imobiliare, evenimente sau industrial — sunt operațiuni comerciale care necesită un operator autorizat. Utilizarea unui pilot neautorizat poate atrage amenzi și poate invalida asigurarea în caz de incident.",
        ],
      },
      {
        heading: "Zone restricționate pe litoral",
        paragraphs: [
          "Constanța și litorul au zone sensibile: proximitatea aeroportului Mihail Kogălniceanu, zone portuare, instalații militare și anumite perimetre turistice cu restricții temporare. Un pilot profesionist verifică spațiul aerian înainte de fiecare zbor și obține derogările necesare.",
        ],
        list: [
          "Aeroporturi și zone CTR (Control Zone)",
          "Porturi și zone industriale",
          "Instalații militare și obiective critice",
          "Adunări publice mari (cu condiții speciale)",
          "Zboruri nocturne (necesită derogare)",
        ],
      },
      {
        heading: "Asigurare și responsabilitate",
        paragraphs: [
          "Drone Scope deține asigurare de răspundere civilă de 2 milioane euro — protecție pentru client, locație și terți. În cazul unui incident, clientul este acoperit legal și financiar.",
          "Când alegi un furnizor de filmări aeriene, cere întotdeauna: certificat CAA, dovada asigurării și referințe de proiecte anterioare.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return blogArticles.map((a) => a.slug);
}

export function getArticleUrl(slug: string): string {
  return `${siteConfig.url}/blog/${slug}`;
}

export function formatArticleDate(isoDate: string): string {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}