import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Imobiliare",
    desc: "Fotografii și videoclipuri aeriene care vând proprietăți. Ideal pentru agenții și dezvoltatori care vor să iasă în evidență.",
  },
  {
    title: "Reclame & Marketing",
    desc: "Conținut cinematic pentru campanii, spoturi publicitare și materiale de promovare premium.",
  },
  {
    title: "Nunți & Evenimente",
    desc: "Povești aeriene emoționante care surprind magia momentului din unghiuri imposibil de atins la sol.",
  },
  {
    title: "Industrial & Construcții",
    desc: "Documentare de progres, inspecții, time-lapse și materiale pentru investitori și autorități.",
  },
  {
    title: "Videoclipuri Corporate",
    desc: "Prezentări de companie, tururi de facilități și conținut de brand cu impact vizual puternic.",
  },
];

export default function Services() {
  return (
    <section id="servicii" className="section bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-accent mb-3">CE OFERIM</div>
            <SectionTitle>Servicii premium,<br />rezultate de neuitat.</SectionTitle>
          </div>
          <p className="max-w-sm text-text-secondary mt-4 md:mt-0">
            Fiecare serviciu este adaptat la nevoile tale specifice și livrat la cele mai înalte standarde cinematografice.
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