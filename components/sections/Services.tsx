import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Filmări Imobiliare cu Dronă",
    desc: "Fotografii și videoclipuri aeriene care vând proprietăți mai rapid. Ideal pentru agenții imobiliare, dezvoltatori și proprietari din Constanța, Mamaia, Năvodari sau Eforie — tururi aeriene, vedere la mare și prezentări premium.",
  },
  {
    title: "Reclame & Marketing Aerial",
    desc: "Spoturi publicitare și conținut video aerian pentru campanii de marketing, turism pe litoral, lansări de produse și promovare pe social media. Filmări cu dronă cu impact vizual puternic.",
  },
  {
    title: "Nunți & Evenimente cu Dronă",
    desc: "Filmări aeriene la nuntă, botez sau eveniment corporate — surprindem emoția momentului din unghiuri imposibil de atins la sol. Experiență vastă pe litoral: Mamaia, Vama Veche, locații private.",
  },
  {
    title: "Industrial & Construcții",
    desc: "Documentare de progres șantier, inspecții aeriene, time-lapse și materiale pentru investitori. Filmări cu dronă pentru porturi, parcuri industriale, turbine eoliene și proiecte de infrastructură.",
  },
  {
    title: "Videoclipuri Corporate",
    desc: "Prezentări de companie, tururi aeriene de facilități și conținut de brand profesional. Videoclipuri aeriene adaptate pentru site-uri web, LinkedIn și materiale de vânzare B2B.",
  },
];

export default function Services() {
  return (
    <section id="servicii" className="section bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-accent mb-3">CE OFERIM</div>
            <SectionTitle>Servicii de filmări cu dronă<br />în Constanța și România.</SectionTitle>
          </div>
          <p className="max-w-sm text-text-secondary mt-4 md:mt-0">
            Fotografii și videoclipuri aeriene adaptate nevoilor tale — de la o sesiune rapidă pentru imobiliare la producții cinematografice complete. Piloți autorizați CAA, echipament DJI profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="card group">
              <div className="text-accent text-sm tracking-widest mb-4">0{i + 1}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}