export interface DroneCapability {
  label: string;
}

export interface FleetDrone {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string;
  capabilities: string[];
  idealFor: string[];
}

export const fleetTagline =
  "Matrice 4T • Mavic 4 Pro • Mini 5 Pro • Avata 360";

export const fleetSummary =
  "Flotă DJI profesională — de la inspecții termice și randare 3D cu Matrice 4T, la filmări cinematografice cu Mavic 4 Pro, sesiuni rapide cu Mini 5 Pro și conținut imersiv 360° / FPV cu Avata 360.";

/** Capabilități complete Matrice 4T — enterprise, termal, 3D */
export const matrice4TCapabilities = [
  "Imagistică termică (thermal) — inspecții panouri solare, acoperișuri, instalații electrice",
  "Randare 3D, fotogrammetrie și modele point cloud pentru șantiere și terenuri",
  "Hărți ortofoto, DSM/DTM și măsurători de volum (cut & fill)",
  "Inspecții industriale: turbine eoliene, linii electrice, hale, coșuri",
  "Monitorizare progres șantier cu date georeferențiate",
  "Căutare și localizare termică — pierderi de căldură, puncte fierbinți",
  "Zoom optic puternic pentru detalii la distanță fără apropiere periculoasă",
  "Zbor programat (waypoints) pentru repetabilitate la inspecții recurente",
  "Livrare date pentru BIM, CAD și integrare în fluxuri de randare 3D",
  "Documentare pentru rapoarte tehnice, investitori și autorități",
] as const;

export const fleetDrones: FleetDrone[] = [
  {
    id: "matrice-4t",
    title: "DJI Matrice 4T",
    subtitle: "Enterprise • Termal • Randare 3D",
    description:
      "Platforma noastră principală pentru proiecte complexe. Senzor termal, camere zoom și wide-angle, RTK opțional și software de cartografiere. Ideal pentru industrial, construcții, inspecții tehnice și orice proiect care cere date precise, nu doar imagini frumoase.",
    specs: "Termal + RGB • Zoom • Fotogrammetrie • RTK • Waypoints",
    capabilities: [...matrice4TCapabilities],
    idealFor: [
      "Șantiere și randare 3D",
      "Inspecții termice",
      "Parcuri eoliene și industrial",
      "Cartografiere terenuri",
      "Port și infrastructură",
    ],
  },
  {
    id: "mavic-4-pro",
    title: "DJI Mavic 4 Pro",
    subtitle: "Cinematic • Foto & Video Premium",
    description:
      "Sistem flagship compact pentru calitate Hasselblad. Rezoluție mare, dynamic range excelent și zbor îndelungat. Alegerea noastră pentru imobiliare premium, nunți, marketing aerial și producții care cer detaliu și culoare la nivel cinematografic.",
    specs: "Hasselblad • 4K/120fps • HDR • 45+ min zbor • Obstacole omnidirecțional",
    capabilities: [
      "Fotografii aeriene de înaltă rezoluție",
      "Video 4K cinematic cu profiluri de culoare",
      "Zoom pentru detalii arhitecturale",
      "Zbor silențios pentru evenimente",
      "HDR pentru interior/exterior la imobiliare",
    ],
    idealFor: [
      "Imobiliare și dezvoltări",
      "Nunți și evenimente",
      "Marketing și reclame",
      "Corporate și turism",
    ],
  },
  {
    id: "mini-5-pro",
    title: "DJI Mini 5 Pro",
    subtitle: "Agil • Discret • Rapid deploy",
    description:
      "Dronă compactă cu senzor de calitate profesională. Setup în minute, zbor în spații mai restrânse, transport facil între locații pe litoral. Perfectă pentru sesiuni imobiliare rapide, B-roll, social media și proiecte unde mobilitatea contează.",
    specs: "1-inch CMOS • 4K HDR • Omnidirectional • Sub 250g class • Quick launch",
    capabilities: [
      "Sesiuni imobiliare rapide (apartamente, terenuri mici)",
      "B-roll și conținut social media",
      "Filmări în zone cu acces limitat",
      "Deplasări multiple pe aceeași zi",
      "Cadre de establishing shot complementare",
    ],
    idealFor: [
      "Imobiliare entry & mid",
      "Social media și Reels",
      "Evenimente mici",
      "Complement la Mavic 4 Pro",
    ],
  },
  {
    id: "avata-360",
    title: "DJI Avata 360",
    subtitle: "FPV • Filmări 360° Imersive",
    description:
      "Sistem FPV cu cameră 360° pentru experiențe imersive unice. Zbor din perspectiva pilotului, treceri dinamice prin spații, conținut VR-ready și shot-uri creative imposibil de obținut cu drone clasice. Game-changer pentru reclame, evenimente și tururi virtuale.",
    specs: "360° video • FPV low-latency • 4K • Stabilizare • Prop guards",
    capabilities: [
      "Filmări 360° pentru VR și platforme imersive",
      "Shot-uri FPV dinamice — treceri, urmăriri, reveal",
      "Tururi virtuale interactive",
      "Reclame și spoturi cu impact viral",
      "Evenimente — experiență first-person pentru spectatori",
      "Conținut unic pentru social (TikTok, Reels, YouTube 360)",
    ],
    idealFor: [
      "Reclame creative și brand",
      "Evenimente și concerte",
      "Tururi virtuale imobiliare/HoReCa",
      "Conținut viral social media",
    ],
  },
];

export const supportEquipment = {
  title: "Echipament suport & post-producție",
  description:
    "Baterii multiple, încărcătoare rapide, filtre ND, stații mobile de backup, transmisie live 4K, software fotogrammetrie (DJI Terra / compatibil), procesare termală și pipeline complet de randare 3D.",
  specs: "Redundanță zbor • ND filters • Live feed 4K • Photogrammetry pipeline",
};