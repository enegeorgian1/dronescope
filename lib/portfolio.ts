import { siteConfig } from "@/lib/seo";

export type Category = "Imobiliare" | "Nunți" | "Evenimente" | "Industrial" | "Reclame";

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: Category;
  location: string;
  description: string;
  image: string;
  videoUrl?: string;
  client?: string;
  year?: string;
}

export const categoryToServiceSlug: Record<Category, string> = {
  Imobiliare: "filmari-imobiliare",
  Nunți: "nunti-evenimente",
  Evenimente: "nunti-evenimente",
  Industrial: "industrial-constructii",
  Reclame: "marketing-aerial",
};

export function getProjectAlt(project: Project): string {
  const type = project.videoUrl ? "Videoclip dronă" : "Filmare dronă";
  return `${type} ${project.category.toLowerCase()} — ${project.title}, ${project.location} — Drone Scope`;
}

export function getProjectsByIds(ids: number[]): Project[] {
  return ids
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectUrl(slug: string): string {
  return `${siteConfig.url}/portofoliu/${slug}`;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "vila-de-lux-mamaia-nord",
    title: "Vila de Lux Mamaia Nord",
    category: "Imobiliare",
    location: "Mamaia Nord, Constanța",
    description:
      "Filmare și fotografie aeriană completă pentru o vilă de lux cu piscină infinită și acces direct la plajă.",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
    client: "Engel & Völkers",
    year: "2025",
  },
  {
    id: 2,
    slug: "complex-rezidential-aurora",
    title: "Complex Rezidențial Aurora",
    category: "Imobiliare",
    location: "Eforie Nord",
    description: "Sesiune aeriană pentru un complex rezidențial premium cu 120 de apartamente.",
    image:
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1600",
    client: "Impact Developer",
    year: "2024",
  },
  {
    id: 3,
    slug: "penthouse-vedere-mare-constanta",
    title: "Penthouse cu vedere la mare",
    category: "Imobiliare",
    location: "Constanța",
    description: "Fotografii aeriene dramatice pentru un penthouse exclusivist la apus.",
    image:
      "https://images.pexels.com/photos/2102376/pexels-photo-2102376.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2025",
  },
  {
    id: 4,
    slug: "teren-vila-premium-costinesti",
    title: "Teren & Vilă Premium Costinești",
    category: "Imobiliare",
    location: "Costinești",
    description: "Documentare aeriană pentru un teren de 2500mp cu vilă în construcție.",
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2024",
  },
  {
    id: 5,
    slug: "casa-vacanta-siutghiol",
    title: "Casă de vacanță la Siutghiol",
    category: "Imobiliare",
    location: "Lacul Siutghiol",
    description: "Imagini aeriene pentru o proprietate de vacanță cu acces la lac.",
    image:
      "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2023",
  },
  {
    id: 6,
    slug: "nunta-castelul-peles",
    title: "Nuntă la Castelul Peleș",
    category: "Nunți",
    location: "Sinaia",
    description: "Filmare cinematică a unei nunți de vis într-o locație istorică emblematică.",
    image:
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2024",
  },
  {
    id: 7,
    slug: "ceremonie-plaja-apus-mamaia",
    title: "Ceremonie pe plajă la apus",
    category: "Nunți",
    location: "Mamaia",
    description: "Acoperire aeriană emoționantă a unei nunți intime direct pe malul mării.",
    image:
      "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2025",
  },
  {
    id: 8,
    slug: "nunta-crama-premium",
    title: "Nuntă în cramă premium",
    category: "Nunți",
    location: "Murfatlar",
    description: "Filmare și fotografie aeriană pentru o nuntă elegantă într-o cramă istorică.",
    image:
      "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2024",
  },
  {
    id: 9,
    slug: "festival-sea-waves",
    title: "Festival Sea Waves",
    category: "Evenimente",
    location: "Vama Veche",
    description: "Imagini aeriene spectaculoase de la cel mai mare festival de pe litoral.",
    image:
      "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2024",
  },
  {
    id: 10,
    slug: "lansare-mercedes-benz",
    title: "Lansare Mercedes-Benz",
    category: "Evenimente",
    location: "București",
    description: "Acoperire aeriană pentru evenimentul privat de lansare al unui model premium.",
    image:
      "https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2025",
  },
  {
    id: 11,
    slug: "extindere-port-constanta",
    title: "Extindere Port Constanța",
    category: "Industrial",
    location: "Portul Constanța",
    description:
      "Documentare lunară de progres pentru un proiect major de infrastructură portuară.",
    image:
      "https://images.pexels.com/photos/162622/pexels-photo-162622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2025",
  },
  {
    id: 12,
    slug: "parc-eolian-fantanele",
    title: "Parc Eolian Fântânele",
    category: "Industrial",
    location: "Fântânele",
    description: "Filmare aeriană pentru un parc eolian de mare amploare.",
    image:
      "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2024",
  },
  {
    id: 13,
    slug: "campanie-jysk",
    title: "Campanie JYSK",
    category: "Reclame",
    location: "Constanța & București",
    description: "Spot publicitar aerian pentru lanțul de magazine JYSK.",
    image:
      "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2024",
  },
  {
    id: 14,
    slug: "campanie-lansare-apartamente",
    title: "Campanie Lansare Apartamente",
    category: "Reclame",
    location: "Ovidiu",
    description: "Material video aerian care a generat un număr mare de lead-uri de vânzare.",
    image:
      "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2025",
  },
  {
    id: 15,
    slug: "promovare-turism-litoral",
    title: "Promovare Turism Litoral",
    category: "Reclame",
    location: "Mamaia & Vama Veche",
    description: "Seria de videoclipuri promoționale pentru atragerea turiștilor pe litoral.",
    image:
      "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1600",
    year: "2024",
  },
  {
    id: 16,
    slug: "filmare-cinematica-coasta",
    title: "Filmare cinematică de coastă",
    category: "Reclame",
    location: "Vama Veche",
    description:
      "Videoclip promoțional cinematic filmat deasupra litoralului la răsărit. Atmosferă premium pentru campanii de turism.",
    image:
      "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "https://assets.mixkit.co/videos/preview/456/456-small.mp4",
    year: "2025",
  },
  {
    id: 17,
    slug: "inspectie-aeriana-industriala",
    title: "Inspecție aeriană industrială",
    category: "Industrial",
    location: "Portul Constanța",
    description:
      "Videoclip documentar cu zboruri multiple deasupra unui terminal portuar. Folosit pentru rapoarte și prezentări investitori.",
    image:
      "https://images.pexels.com/photos/162622/pexels-photo-162622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    videoUrl: "https://assets.mixkit.co/videos/preview/456/456-small.mp4",
    client: "DP World",
    year: "2024",
  },
];