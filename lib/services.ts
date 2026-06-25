import { siteConfig } from "@/lib/seo";

import { matrice4tService } from "@/lib/services/matrice-4t-termal-3d";
import type { ServicePage } from "@/lib/services/types";

export type { ServiceCategory, ServiceFAQ, ServicePage } from "@/lib/services/types";

export const servicePages: ServicePage[] = [
  {
    slug: "filmari-imobiliare",
    cardTitle: "Filmări Imobiliare cu Dronă",
    title: "Filmări Imobiliare cu Dronă în Constanța",
    metaTitle: "Filmări Imobiliare cu Dronă Constanța | Fotografii Aeriene",
    metaDescription:
      "Fotografii și videoclipuri aeriene pentru imobiliare în Constanța, Mamaia și Năvodari. Tururi cu dronă, vedere la mare, prezentări premium. Piloți autorizați CAA, livrare rapidă.",
    keywords: [
      "filmări imobiliare dronă",
      "fotografii aeriene imobiliare",
      "tur virtual dronă imobiliare",
      "filmări dronă Constanța imobiliare",
      "video aerian apartament",
      "fotografii aeriene vilă Mamaia",
    ],
    eyebrow: "IMOBILIARE • LITORAL • NAȚIONAL",
    intro: [
      "Proprietățile se vând mai repede când cumpărătorul vede întreaga imagine — literal. Filmările imobiliare cu dronă oferă perspective aeriene care evidențiază locația, vecinătățile, accesul, vederea la mare și potențialul real al unui teren sau clădiri.",
      "Lucrăm cu agenții imobiliare, dezvoltatori și proprietari din Constanța, Mamaia, Năvodari, Eforie și în toată România. Fiecare sesiune include planificare, zbor autorizat CAA și livrare de materiale gata de publicat pe portaluri, social media sau în broșuri.",
    ],
    benefits: [
      {
        title: "Vânzare mai rapidă",
        desc: "Anunțurile cu fotografii și video aerian primesc de 3–5× mai multe vizualizări decât cele standard.",
      },
      {
        title: "Context complet",
        desc: "Arătăm proximitatea la mare, parcuri, școli, drumuri principale — informații pe care o poză la sol nu le poate transmite.",
      },
      {
        title: "Calitate cinematografică",
        desc: "Mavic 4 Pro și Mini 5 Pro pentru calitate Hasselblad și sesiuni rapide. Color grading și stabilizare pentru un look premium.",
      },
      {
        title: "Livrare rapidă",
        desc: "Materiale optimizate pentru Imobiliare.ro, Storia, Facebook și site-uri web în 3–5 zile lucrătoare.",
      },
    ],
    includes: [
      "Plan de zbor personalizat pentru proprietate",
      "Fotografii aeriene RAW + JPEG optimizat web",
      "Videoclip aerian 4K (30–90 secunde, montaj inclus)",
      "2 runde de revizii la montaj",
      "Drepturi de utilizare comercială complete",
      "Autorizații CAA și asigurare incluse",
    ],
    useCases: [
      "Apartamente și vile pe litoral (Mamaia, Năvodari, Eforie)",
      "Ansambluri rezidențiale și dezvoltări noi",
      "Terenuri intravilane și extravilane",
      "Hoteluri, pensiuni și unități de cazare",
      "Spații comerciale și hale industriale de vânzare",
    ],
    faqs: [
      {
        question: "Cât costă o filmare imobiliară cu dronă în Constanța?",
        answer:
          "O sesiune standard pentru o proprietate (apartament, vilă sau teren) începe de la 450–650 lei, în funcție de locație, complexitate și numărul de unghiuri. Pentru ansambluri rezidențiale sau proiecte cu mai multe clădiri, oferim pachete personalizate.",
      },
      {
        question: "Cât durează o sesiune pe locație?",
        answer:
          "De obicei 1–2 ore, suficient pentru a captura toate unghiurile necesare. Pentru dezvoltări mari sau ansambluri, putem extinde la o jumătate de zi.",
      },
      {
        question: "Pot folosi materialele pe Imobiliare.ro și Storia?",
        answer:
          "Da. Livrăm fișiere în formate și rezoluții optimizate pentru portaluri imobiliare, rețele sociale și print.",
      },
    ],
    relatedSlugs: ["marketing-aerial", "videoclipuri-corporate"],
  },
  {
    slug: "marketing-aerial",
    cardTitle: "Reclame & Marketing Aerial",
    title: "Reclame & Marketing Aerial cu Dronă",
    metaTitle: "Reclame & Marketing Aerial cu Dronă | Constanța & Litoral",
    metaDescription:
      "Spoturi publicitare și conținut video aerian pentru campanii de marketing, turism pe litoral și social media. Filmări cu dronă cinematografice în Constanța, Mamaia și România.",
    keywords: [
      "marketing aerial",
      "reclame cu dronă",
      "spot publicitar dronă",
      "filmări dronă turism litoral",
      "video aerian marketing",
      "conținut social media dronă",
    ],
    eyebrow: "MARKETING • TURISM • SOCIAL MEDIA",
    intro: [
      "Într-o lume în care atenția se măsoară în secunde, filmările aeriene cu dronă sunt unul dintre cele mai puternice instrumente de marketing vizual. Cu Mavic 4 Pro livrăm cinematic clasic; cu Avata 360 adăugăm FPV dinamic și filmări 360° imersive — conținut imposibil de replicat cu telefonul.",
      "Colaborăm cu branduri din turism, HoReCa, retail și evenimente din Constanța și pe tot litorul românesc. Producem materiale adaptate fiecărui canal: 16:9 pentru YouTube, 9:16 pentru Reels, 360° pentru VR și formate personalizate pentru campanii plătite.",
    ],
    benefits: [
      {
        title: "FPV & 360° cu Avata 360",
        desc: "Shot-uri dinamice first-person, treceri creative și video imersiv VR-ready — impact viral pe TikTok, Reels și campanii premium.",
      },
      {
        title: "Versatilitate multi-canal",
        desc: "Livrăm în formate pentru TV, web, social media, ecrane digitale și materiale print.",
      },
      {
        title: "Storytelling cinematic",
        desc: "Montaj profesional cu muzică, tranziții și color grading care transformă o locație într-o poveste de brand.",
      },
      {
        title: "Flexibilitate de producție",
        desc: "De la o singură zi de filmare la proiecte multi-locație pe tot litoralul sau la nivel național.",
      },
    ],
    includes: [
      "Brief creativ și plan de filmare",
      "Filmări 4K cinematic + opțional FPV/360° cu Avata 360",
      "Filmări la sol complementare (opțional)",
      "Montaj profesional cu muzică licențiată",
      "Export multi-format (16:9, 9:16, 1:1)",
      "2 runde de revizii incluse",
    ],
    useCases: [
      "Promovare hoteluri și stațiuni pe litoral",
      "Spoturi FPV și 360° pentru branduri creative",
      "Lansări de produse și evenimente de brand",
      "Campanii de turism pentru primării și agenții",
      "Tururi virtuale imersive HoReCa",
      "Conținut viral pentru social media",
    ],
    faqs: [
      {
        question: "Puteți livra spoturi gata de difuzat?",
        answer:
          "Da. Livrăm videoclipuri montate complet, cu muzică, text on-screen și export în rezoluția cerută — gata pentru campanii plătite sau difuzare TV/web.",
      },
      {
        question: "Filmați în mai multe locații pe litoral într-o singură zi?",
        answer:
          "Da, planificăm rute eficiente între locații (Mamaia, Năvodari, Eforie etc.) pentru a maximiza conținutul dintr-o zi de producție.",
      },
      {
        question: "Oferiți conținut vertical pentru Reels și TikTok?",
        answer:
          "Absolut. Exportăm în 9:16 și 1:1, optimizat pentru platforme mobile, cu hook vizual în primele 3 secunde.",
      },
    ],
    relatedSlugs: ["filmari-imobiliare", "videoclipuri-corporate"],
  },
  {
    slug: "nunti-evenimente",
    cardTitle: "Nunți & Evenimente cu Dronă",
    title: "Nunți & Evenimente cu Dronă",
    metaTitle: "Nunți & Evenimente cu Dronă Constanța | Filmări Aeriene",
    metaDescription:
      "Filmări aeriene la nuntă, botez și evenimente corporate pe litoral. Nuntă cu dronă în Mamaia, Constanța, Vama Veche. Piloți discreti, materiale cinematografice, peste 10 ani experiență.",
    keywords: [
      "nunți cu dronă",
      "nuntă cu dronă Constanța",
      "filmări dronă evenimente",
      "filmare aeriană nuntă Mamaia",
      "botez cu dronă",
      "video aerian eveniment",
    ],
    eyebrow: "NUNȚI • BOTEZURI • EVENIMENTE CORPORATE",
    intro: [
      "Cele mai frumoase momente ale vieții merită să fie surprinse din fiecare unghi — inclusiv de la înălțime. Filmările cu dronă la nuntă adaugă o dimensiune cinematică pe care niciun cameraman la sol nu o poate reproduce: panorama locației, sosirea mirilor, dansul de sub cerul deschis.",
      "Avem experiență vastă pe litoralul românesc — Mamaia, Vama Veche, locații private pe plajă, restaurante cu vedere la mare. Operăm discret, respectăm timeline-ul evenimentului și coordonăm cu fotograful și videograful principal.",
    ],
    benefits: [
      {
        title: "Perspective unice",
        desc: "Planuri generale ale locației, sosire, exterior, dans — unghiuri imposibil de capturat altfel.",
      },
      {
        title: "Discreție totală",
        desc: "Zburăm la distanță sigură, fără a deranja invitații sau a interfera cu ceremonia.",
      },
      {
        title: "Integrare cu echipa",
        desc: "Coordonăm cu fotograful și videograful pentru un material final coerent și complet.",
      },
      {
        title: "Experiență pe litoral",
        desc: "Cunoaștem restricțiile de zbor, autorizațiile și cele mai spectaculoase locații de pe coastă.",
      },
    ],
    includes: [
      "Consultație pre-eveniment și plan de zbor",
      "Filmări aeriene pe durata evenimentului",
      "Montaj cinematic cu muzică la alegere",
      "Clip highlight 2–5 minute + versiune scurtă social",
      "Livrare în 7–14 zile (urgent disponibil)",
      "Autorizații CAA și asigurare incluse",
    ],
    useCases: [
      "Nunți pe plajă sau în grădini pe litoral",
      "Recepții la hoteluri și restaurante în Mamaia",
      "Botezuri și petreceri private",
      "Evenimente corporate outdoor",
      "Concerte, festivaluri și lansări",
    ],
    faqs: [
      {
        question: "Este sigur să zburăm cu drona la o nuntă?",
        answer:
          "Da. Respectăm distanțele legale față de oameni, avem autorizație CAA și asigurare de 2 milioane euro. Zburăm discret, la înălțimi care nu deranjează invitații.",
      },
      {
        question: "Coordonați cu fotograful de nuntă?",
        answer:
          "Da, este standard în workflow-ul nostru. Stabilim împreună momentele cheie (sosire, exterior, dans) pentru a nu dubla și a completa materialul.",
      },
      {
        question: "Puteți filma și la apus pe plajă?",
        answer:
          "Absolut — apusurile pe litoral sunt printre cele mai spectaculoase cadre. Planificăm zborul în funcție de oră și condițiile meteo.",
      },
    ],
    relatedSlugs: ["marketing-aerial", "videoclipuri-corporate"],
  },
  {
    slug: "industrial-constructii",
    cardTitle: "Industrial & Construcții",
    title: "Filmări Industriale & Construcții cu Dronă",
    metaTitle: "Filmări Industriale & Construcții cu Dronă | Inspecții Aeriene",
    metaDescription:
      "Inspecții termale, randare 3D, fotogrammetrie și documentare șantier cu DJI Matrice 4T în Constanța. Port, turbine, construcții. Piloți autorizați CAA.",
    keywords: [
      "filmări industriale dronă",
      "inspecții termale dronă",
      "randare 3D dronă",
      "fotogrammetrie dronă",
      "DJI Matrice 4T",
      "documentare șantier dronă",
      "filmări port Constanța",
    ],
    eyebrow: "INDUSTRIAL • TERMAL • RANDARE 3D",
    intro: [
      "Proiectele industriale și de construcții cer mai mult decât video frumos — cer date precise. Cu DJI Matrice 4T oferim imagistică termică, fotogrammetrie, modele 3D, hărți ortofoto și inspecții la distanță sigură. Eliminăm riscurile echipelor la înălțime și livrăm materiale pentru BIM, rapoarte investitori și autorități.",
      "Operăm în Portul Constanța, parcuri industriale, șantiere, parcuri eoliene și infrastructură critică. Pentru detalii complete despre randare 3D, scanări termice, topografie și inspecții industriale, vezi pagina dedicată Matrice 4T.",
    ],
    benefits: [
      {
        title: "Imagistică termică (thermal)",
        desc: "Detectăm pierderi de căldură, defecte la panouri solare, infiltrații pe acoperișuri și puncte fierbinți la instalații electrice — fără acces fizic la înălțime.",
      },
      {
        title: "Randare 3D & fotogrammetrie",
        desc: "Modele point cloud, mesh 3D, ortofoto și măsurători de volum (cut & fill) pentru șantiere, terenuri și proiecte de dezvoltare.",
      },
      {
        title: "Inspecții industriale la distanță",
        desc: "Zoom optic puternic pentru turbine eoliene, linii electrice, coșuri și structuri metalice — fără oprirea producției.",
      },
      {
        title: "Monitorizare & time-lapse",
        desc: "Zboruri programate (waypoints) repetabile pentru progres șantier documentat obiectiv, cu date georeferențiate.",
      },
    ],
    includes: [
      "Evaluare locație și plan de zbor autorizat CAA",
      "Captură RGB + termală cu Matrice 4T",
      "Procesare fotogrammetrie și modele 3D (la cerere)",
      "Rapoarte vizuale și termice de progres",
      "Time-lapse multi-vizită (opțional)",
      "Livrare arhivă + web + formate CAD/BIM compatibile",
    ],
    useCases: [
      "Randare 3D șantiere și măsurători de volum",
      "Inspecții termice panouri solare și acoperișuri",
      "Monitorizare parcuri eoliene și linii electrice",
      "Cartografiere terenuri și ortofoto",
      "Documentare portuară și infrastructură",
      "Rapoarte tehnice pentru investitori și autorități",
    ],
    faqs: [
      {
        question: "Puteți filma în Portul Constanța?",
        answer:
          "Da, avem experiență cu autorizațiile necesare pentru zone portuare și industriale. Planificăm zborul în avans cu toate părțile implicate.",
      },
      {
        question: "Oferiți documentare recurentă de șantier?",
        answer:
          "Da. Programe săptămânale sau lunare cu aceleași unghiuri, ideale pentru time-lapse și rapoarte de progres către beneficiar.",
      },
      {
        question: "Materialele pot fi folosite în rapoarte oficiale?",
        answer:
          "Da. Livrăm fișiere cu metadata, dată și rezoluție potrivite pentru documentație tehnică și prezentări formale.",
      },
      {
        question: "Oferiți inspecții termale și randare 3D?",
        answer:
          "Da. Cu DJI Matrice 4T realizăm captură termică, fotogrammetrie, modele 3D, ortofoto și măsurători de volum. Toate capabilitățile sunt detaliate pe pagina dedicată Servicii Matrice 4T — termal, randare 3D, topografie și inspecții industriale.",
      },
    ],
    relatedSlugs: ["matrice-4t-termal-3d", "videoclipuri-corporate"],
  },
  matrice4tService,
  {
    slug: "videoclipuri-corporate",
    cardTitle: "Videoclipuri Corporate",
    title: "Videoclipuri Corporate Aeriene",
    metaTitle: "Videoclipuri Corporate Aeriene | Prezentări Companie cu Dronă",
    metaDescription:
      "Prezentări de companie, tururi aeriene de facilități și conținut de brand profesional. Videoclipuri aeriene corporate în Constanța și România pentru site, LinkedIn și vânzări B2B.",
    keywords: [
      "videoclipuri corporate aeriene",
      "prezentare companie dronă",
      "tur aerian facilități",
      "video aerian corporate",
      "filmări dronă B2B",
      "brand video aerian",
    ],
    eyebrow: "CORPORATE • B2B • BRAND",
    intro: [
      "Prima impresie contează — mai ales în B2B. Un videoclip corporate aerian arată scale-ul, profesionalismul și investiția companiei tale într-un mod pe care filmarea la sol nu îl poate egala. De la sedii și fabrici la parcuri logistice și stațiuni turistice.",
      "Producem materiale adaptate pentru site-uri web, LinkedIn, prezentări de vânzare, târguri și onboarding angajați. Stilul variază de la corporate curat la cinematic aspirational, în funcție de brandul tău.",
    ],
    benefits: [
      {
        title: "Credibilitate instant",
        desc: "Imaginile aeriene transmit profesionalism, scară și încredere — esențiale în decizii B2B.",
      },
      {
        title: "Versatilitate de utilizare",
        desc: "Un singur material, multiple formate: site hero, LinkedIn, prezentări PowerPoint, ecrane la târguri.",
      },
      {
        title: "Integrare cu brandul",
        desc: "Respectăm ghidul de brand, culorile și tonul comunicării tale.",
      },
      {
        title: "Producție completă",
        desc: "De la concept la livrare — scenariu, filmare, montaj, voice-over opțional.",
      },
    ],
    includes: [
      "Brief și scenariu video",
      "Filmări aeriene și la sol (opțional)",
      "Montaj profesional cu grafică de brand",
      "Voice-over în română sau engleză (opțional)",
      "Export multi-format și subtitrări",
      "2 runde de revizii incluse",
    ],
    useCases: [
      "Prezentări sediu central și fabrici",
      "Tururi aeriene parcuri logistice și depozite",
      "Materiale pentru târguri și conferințe",
      "Onboarding și employer branding",
      "Rapoarte anuale și comunicare investitori",
    ],
    faqs: [
      {
        question: "Puteți include interviuri cu echipa de management?",
        answer:
          "Da. Combinăm filmările aeriene cu interviuri la sol, b-roll și grafică pentru un material complet de prezentare.",
      },
      {
        question: "Livrați versiuni scurte pentru LinkedIn?",
        answer:
          "Da. Pe lângă versiunea completă, livrăm clipuri de 30–60 secunde optimizate pentru social media B2B.",
      },
      {
        question: "Lucrați cu companii din afara Constanței?",
        answer:
          "Da. Acoperim toată România — Constanța, București, Cluj și alte orașe. Deplasarea se discută în ofertă.",
      },
    ],
    relatedSlugs: ["marketing-aerial", "industrial-constructii"],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicePages.map((s) => s.slug);
}

export function getServiceUrl(slug: string): string {
  return `${siteConfig.url}/servicii/${slug}`;
}