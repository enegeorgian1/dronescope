export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andrei Popescu",
    role: "Agent Imobiliar Senior",
    company: "Engel & Völkers Constanța",
    location: "Constanța",
    quote:
      "Colaborarea cu Drone Scope a schimbat complet modul în care prezentăm proprietățile premium. Imaginile aeriene au crescut rata de conversie cu peste 40%. Profesionalism de top.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria & Alexandru Ionescu",
    role: "Mirii",
    company: "Nuntă privată",
    location: "Mamaia",
    quote:
      "Filmarea cu dronă a fost momentul care a făcut diferența. Imaginile de la apus deasupra mării sunt pur și simplu de vis. Nu ne imaginam că nunta noastră va arăta atât de cinematografic.",
    rating: 5,
  },
  {
    id: 3,
    name: "Daniel Marin",
    role: "Director Tehnic",
    company: "DP World Constanța",
    location: "Portul Constanța",
    quote:
      "Aveam nevoie de documentare lunară de progres pe un șantier foarte mare. Drone Scope ne-a livrat imagini clare, consistente și la timp, de fiecare dată. Recomand cu încredere.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ioana Radu",
    role: "Creative Director",
    company: "BrandVibe Agency",
    location: "București",
    quote:
      "Pentru campania JYSK am avut nevoie de conținut aerian de înaltă calitate în mai multe orașe. Echipa Drone Scope a fost extrem de profesionistă, rapidă și a livrat exact ce am cerut.",
    rating: 5,
  },
  {
    id: 5,
    name: "Cristian Dumitrescu",
    role: "Dezvoltator Imobiliar",
    company: "Prime Kapital",
    location: "Ovidiu",
    quote:
      "Am lucrat cu mai multe echipe de drone înainte. Drone Scope este clar deasupra. Imaginile au ajutat enorm la vânzarea apartamentelor din faza de pre-lansare. Calitate premium.",
    rating: 5,
  },
];

export function getAggregateRating() {
  const count = testimonials.length;
  const average =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / count;

  return {
    ratingValue: average.toFixed(1),
    reviewCount: count,
    bestRating: 5,
    worstRating: 1,
  };
}