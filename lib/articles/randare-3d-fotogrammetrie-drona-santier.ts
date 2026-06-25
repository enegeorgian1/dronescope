import type { BlogArticle } from "@/lib/blog";

export const randare3dArticol: BlogArticle = {
  slug: "randare-3d-fotogrammetrie-drona-santier",
  title: "Randare 3D și fotogrammetrie cu dronă pe șantier: ghid 2026",
  metaTitle: "Randare 3D Dronă Șantier 2026 • Fotogrammetrie & Point Cloud | Drone Scope",
  metaDescription:
    "Cum funcționează randarea 3D și fotogrammetria cu dronă pe șantier? Ortofoto, DSM, point cloud, măsurători volum. Ghid complet DJI Matrice 4T, Constanța și România.",
  keywords: [
    "randare 3D dronă șantier",
    "fotogrammetrie dronă",
    "point cloud dronă",
    "ortofoto dronă șantier",
    "măsurători volum dronă",
    "modelare 3D dronă Constanța",
  ],
  excerpt:
    "Ghid complet despre randare 3D și fotogrammetrie cu dronă — de la captură pe șantier la point cloud, mesh 3D, ortofoto și măsurători de volum. Pentru ingineri, dezvoltatori și diriginți de șantier.",
  intro: [
    [
      { type: "text", content: "Randarea 3D cu dronă (fotogrammetrie aeriană) reconstruiește forma reală a unui șantier, teren sau clădire din sute de fotografii georeferențiate. Obții modele 3D, hărți ortofoto, curbe de nivel și măsurători de volum — fără echipă la sol pe suprafețe întinse sau zone greu accesibile." },
    ],
    [
      { type: "text", content: "La Drone Scope procesăm date cu DJI Matrice 4T pentru proiecte în Constanța, pe litoral și național. Acest ghid explică fluxul complet, ce fișiere primești și cum integrezi rezultatele în BIM, CAD sau GIS." },
      { type: "link", content: " Vezi serviciile Matrice 4T", href: "/servicii/matrice-4t-termal-3d" },
      { type: "text", content: "." },
    ],
  ],
  publishedAt: "2026-06-28",
  readTime: 13,
  relatedServiceSlug: "matrice-4t-termal-3d",
  images: [
    {
      src: "https://images.pexels.com/photos/162622/pexels-photo-162622.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop",
      alt: "Randare 3D șantier port Constanța fotogrammetrie dronă — Drone Scope",
      caption: "Documentare aeriană pentru șantiere și infrastructură — date georeferențiate.",
    },
    {
      src: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop",
      alt: "Fotogrammetrie dronă dezvoltare rezidențială litoral model 3D — Drone Scope",
      caption: "Modele 3D pentru dezvoltări imobiliare și monitorizare progres.",
    },
    {
      src: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop",
      alt: "Ortofoto șantier construcții fotogrammetrie aeriană România — Drone Scope",
      caption: "Ortofoto și DSM pentru măsurători și rapoarte către investitori.",
    },
  ],
  sections: [
    {
      heading: "Fotogrammetrie vs randare 3D — ce primești",
      paragraphs: [
        [
          { type: "text", content: "Fotogrammetria este procesul tehnic: zbor, captură, aliniere, generare model. Randarea 3D este rezultatul vizual — mesh texturat sau point cloud pe care îl folosești în software de proiectare sau prezentări." },
        ],
      ],
      table: {
        caption: "Livrabile fotogrammetrie dronă",
        headers: ["Livrabil", "Utilizare", "Format tipic"],
        rows: [
          ["Ortofoto", "Plan de situație, măsurători 2D", "GeoTIFF"],
          ["DSM / DTM", "Relief, curbe de nivel", "GeoTIFF, LAS"],
          ["Point cloud", "Referință CAD/BIM", "LAS, LAZ"],
          ["Mesh 3D", "Randare, prezentări", "OBJ, 3MX"],
          ["Raport volum", "Cut & fill, terasamente", "PDF + date GIS"],
        ],
      },
      showCtaAfter: true,
    },
    {
      heading: "Fluxul unei misiuni pe șantier",
      subsections: [
        {
          heading: "1. Evaluare și puncte de control",
          paragraphs: [
            [
              { type: "text", content: "Stabilim precizia necesară. Pentru documentare vizuală, GPS-ul dronei poate fi suficient. Pentru măsurători centimetrice, folosim puncte de control la sol (GCP) sau RTK." },
            ],
          ],
        },
        {
          heading: "2. Captură aeriană",
          paragraphs: [
            [
              { type: "text", content: "Zburăm în pattern grid sau orbital, cu suprapunere 70–80% între imagini. O sesiune tipică pentru un șantier de 2–5 hectare durează 1–4 ore, inclusiv setup." },
            ],
          ],
        },
        {
          heading: "3. Procesare și livrare",
          paragraphs: [
            [
              { type: "text", content: "Procesarea poate dura 1–5 zile în funcție de numărul de imagini. Livrăm fișiere brute procesate + raport vizual. La cerere, integrare în pipeline-ul tău existent (AutoCAD, Revit, QGIS)." },
            ],
          ],
        },
      ],
      list: [
        "Consultație tehnică cu beneficiarul / diriginte",
        "Plan zbor CAA și coordonare șantier",
        "Captură georeferențiată Matrice 4T",
        "Procesare fotogrammetrie",
        "Livrare ortofoto, DSM, point cloud, mesh",
        "Suport pentru import în software-ul tău",
      ],
    },
    {
      heading: "Măsurători de volum (cut & fill)",
      paragraphs: [
        [
          { type: "text", content: "Unul dintre cele mai cerute livrabile pe șantiere: volumul de pământ excavat sau adăugat între două date. Comparăm modele DSM de la vizite diferite și calculăm diferența — esențial pentru terasamente, fundații și rapoarte către beneficiar." },
        ],
        [
          { type: "text", content: "Monitorizarea recurentă (săptămânal/lunar) cu aceleași waypoints oferă time-lapse obiectiv al progresului — folosit frecvent în " },
          { type: "link", content: "Portul Constanța", href: "/portofoliu/extindere-port-constanta" },
          { type: "text", content: " și dezvoltări rezidențiale pe litoral." },
        ],
      ],
      image: {
        src: "https://images.pexels.com/photos/162622/pexels-photo-162622.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop",
        alt: "Monitorizare șantier randare 3D fotogrammetrie dronă Constanța Drone Scope",
      },
      showCtaAfter: true,
    },
    {
      heading: "Integrare BIM și CAD",
      paragraphs: [
        [
          { type: "text", content: "Point cloud-ul aerian se importă în AutoCAD, Revit sau ArchiCAD ca referință as-built. Nu înlocuiește modelul de proiect, dar arată realitatea de pe teren — util la verificarea execuției, clash detection și comunicare cu investitorul." },
        ],
        [
          { type: "text", content: "Pentru dezvoltatori imobiliari, mesh-ul 3D texturat alimentează randări arhitecturale și tururi virtuale înainte de finalizarea construcției." },
        ],
      ],
    },
    {
      heading: "Precizie: ce poți aștepta",
      table: {
        caption: "Niveluri de precizie fotogrammetrie dronă",
        headers: ["Metodă", "Precizie tipică", "Când o folosim"],
        rows: [
          ["GPS dronă (standard)", "2–5 cm horizontal", "Documentare, ortofoto"],
          ["RTK pe dronă", "1–3 cm", "Șantiere cu cerințe stricte"],
          ["GCP la sol", "Sub 2 cm", "Topografie, avize, volumetrie"],
          ["Fără GCP (relativ)", "Proporții corecte", "Prezentări, marketing șantier"],
        ],
      },
    },
    {
      heading: "Cazuri de utilizare în Constanța și pe litoral",
      paragraphs: [
        [
          { type: "text", content: "De la terenuri intravilane pentru ansambluri rezidențiale în Mamaia Nord, la extinderi portuare și parcuri logistice — fotogrammetria aeriană reduce vizitele pe teren și accelerează deciziile. Vezi și pagina dedicată " },
          { type: "link", content: "inspecții termale și randare 3D Constanța", href: "/inspectii-termale-randare-3d-constanta" },
          { type: "text", content: "." },
        ],
      ],
      list: [
        "Șantiere rezidențiale și mixed-use",
        "Terasamente și excavări — volumetrie",
        "Documentare progres pentru investitori",
        "Terenuri extravilane — topografie rapidă",
        "Infrastructură portuară și industrială",
        "Comparare as-built vs proiect",
      ],
    },
    {
      heading: "Concluzie",
      paragraphs: [
        [
          { type: "text", content: "Randarea 3D cu dronă nu e un lux vizual — e un instrument de măsurare și documentare. Cheia e operatorul cu echipament potrivit, precizie declarată clar și livrabile în formate pe care echipa ta le poate folosi." },
        ],
        [
          { type: "link", content: "Solicită ofertă", href: "/#contact" },
          { type: "text", content: " pentru fotogrammetrie pe șantierul tău — răspundem în 2 ore." },
        ],
      ],
    },
  ],
  faqs: [
    {
      question: "Cât durează procesarea pentru un șantier mediu?",
      answer:
        "Captură: o jumătate de zi. Procesare și livrare modele 3D + ortofoto: 3–7 zile lucrătoare pentru șantiere de 1–10 ha. Proiecte mari sau urgențe se discută la ofertă.",
    },
    {
      question: "Ce suprafață maximă puteți acoperi într-o zi?",
      answer:
        "Depinde de rezoluția cerută și de înălțimea de zbor. Pentru documentare standard, 50–100 ha într-o zi e fezabil. Zone mai mari se împart în misiuni multiple.",
    },
    {
      question: "Aveți nevoie de acces pe șantier?",
      answer:
        "Da, pentru setup și eventual plasarea punctelor de control. Coordonăm cu dirigintele de șantier pentru siguranță și zone de zbor.",
    },
    {
      question: "Pot combina randare 3D cu inspecție termică?",
      answer:
        "Da. Matrice 4T face termal + RGB în același deplasament — eficient pentru clădiri, hale și instalații. Vezi ghidul de inspecții termale.",
    },
    {
      question: "Ce software folosiți?",
      answer:
        "Pipeline compatibil DJI Terra și software fotogrammetric standard. Export în formate deschise (GeoTIFF, LAS/LAZ, OBJ) pentru flexibilitate.",
    },
    {
      question: "Cât costă o sesiune de fotogrammetrie?",
      answer:
        "Șantier mic (sub 2 ha): de la 1.500–3.000 lei cu procesare. Proiecte mari, monitorizare recurentă sau precizie RTK: ofertă personalizată. Vezi articolul despre prețuri industriale.",
    },
  ],
  howToSteps: [
    {
      name: "Definire cerințe",
      text: "Stabilim suprafața, precizia necesară (GCP/RTK) și livrabilele (ortofoto, mesh, volum).",
    },
    {
      name: "Captură pe teren",
      text: "Zbor programat cu suprapunere optimă, georeferențiere și verificare acoperire.",
    },
    {
      name: "Procesare fotogrammetrie",
      text: "Generare point cloud, DSM, ortofoto și mesh 3D în software specializat.",
    },
    {
      name: "Livrare și suport",
      text: "Transfer fișiere, raport vizual și asistență la import în CAD/BIM/GIS.",
    },
  ],
};