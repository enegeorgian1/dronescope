import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Consultație & Planificare",
    desc: "Discutăm detaliile proiectului, locația, obiectivele și termenele. Stabilim unghiurile și stilul dorit.",
  },
  {
    number: "02",
    title: "Pregătire & Autorizații",
    desc: "Obținem toate aprobările necesare (CAA, autorități locale) și planificăm zborul în funcție de condițiile meteo.",
  },
  {
    number: "03",
    title: "Captură & Post-producție",
    desc: "Efectuăm filmările cu echipament profesional DJI. Edităm materialul la standarde cinematografice.",
  },
  {
    number: "04",
    title: "Livrare & Revizii",
    desc: "Livrăm fișierele finale în formatul solicitat + 2 runde de revizii incluse pentru perfecțiune.",
  },
];

export default function Process() {
  return (
    <section id="proces" className="section max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="uppercase tracking-[3px] text-xs text-accent mb-3">CUM LUCRĂM</div>
        <SectionTitle>Un proces clar.<br />Rezultate predictibile.</SectionTitle>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="process-step card flex flex-col md:flex-row md:items-center gap-8"
          >
            <div className="text-[72px] md:text-[88px] font-bold tracking-[-2.5px] text-accent/20 tabular-nums shrink-0">
              {step.number}
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">{step.title}</h3>
              <p className="text-text-secondary text-[15px] max-w-2xl">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}