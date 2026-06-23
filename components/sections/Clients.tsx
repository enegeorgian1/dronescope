import SectionTitle from "@/components/ui/SectionTitle";

const clientCategories = [
  {
    title: "Imobiliare & Dezvoltatori",
    clients: [
      "Engel & Völkers Constanța",
      "Prime Kapital",
      "Impact Developer",
      "Remax România",
      "Agenții imobiliare premium locale",
    ],
  },
  {
    title: "Nunți & Evenimente",
    clients: [
      "Organizatori de nunți de lux",
      "Castelul Peleș & locații istorice",
      "Festivaluri majore de pe litoral (Sea Waves etc.)",
      "Evenimente corporate private",
    ],
  },
  {
    title: "Industrial & Construcții",
    clients: [
      "DP World Constanța",
      "CEZ România",
      "Dezvoltatori de parcuri eoliene",
      "Proiecte de infrastructură portuară",
    ],
  },
  {
    title: "Branduri & Marketing",
    clients: [
      "JYSK România",
      "Mercedes-Benz România",
      "Agenții de publicitate & branding",
      "Campanii naționale de turism",
    ],
  },
];

export default function Clients() {
  return (
    <section id="clienti" className="section bg-bg border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="uppercase tracking-[3px] text-xs text-accent mb-3">ÎNCREDERE</div>
          <SectionTitle>Au ales Drone Scope</SectionTitle>
          <p className="mt-4 max-w-2xl mx-auto text-text-secondary text-[15px]">
            Colaborăm cu agenții imobiliare de top, organizatori de evenimente premium, 
            companii industriale și branduri care înțeleg puterea unei perspective unice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-6 text-accent tracking-tight">
                {category.title}
              </h3>
              <ul className="space-y-3 text-text-secondary">
                {category.clients.map((client, i) => (
                  <li key={i} className="flex items-start gap-2 text-[15px]">
                    <span className="text-accent mt-1.5">•</span>
                    <span>{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Fiecare client primește aceeași atenție la detalii, indiferent de mărimea proiectului.
            Vrei să fii următorul?
          </p>
          <a 
            href="#contact" 
            className="inline-block mt-6 btn-secondary px-8 py-3 text-sm"
          >
            DISCUTĂ PROIECTUL TĂU
          </a>
        </div>
      </div>
    </section>
  );
}
