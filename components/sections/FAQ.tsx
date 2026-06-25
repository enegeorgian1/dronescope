import SectionTitle from "@/components/ui/SectionTitle";
import { faqs } from "@/lib/faq";

export default function FAQ() {
  return (
    <section id="faq" className="section bg-surface border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[3px] text-xs text-accent mb-3">ÎNTREBĂRI FRECVENTE</div>
          <SectionTitle>Întrebări frecvente despre filmări cu dronă</SectionTitle>
          <p className="mt-4 max-w-lg mx-auto text-text-secondary">
            Răspunsuri la cele mai comune întrebări despre prețuri, autorizații, termene și servicii de filmări aeriene în Constanța și pe litoral.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-white/10 rounded-2xl bg-bg overflow-hidden"
              open={index === 0}
            >
              <summary className="cursor-pointer px-6 py-5 text-lg font-medium list-none flex items-center justify-between gap-4 hover:bg-white/5 transition-colors [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  className="text-accent text-xl shrink-0 group-open:rotate-45 transition-transform motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-text-secondary leading-relaxed text-[15px]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-text-secondary">
          Ai o întrebare care nu apare aici?{" "}
          <a href="#contact" className="link-accessible">
            Scrie-ne direct
          </a>{" "}
          sau sună-ne la{" "}
          <a href="tel:+40729626932" className="link-accessible">0729 626 932</a>.
        </div>
      </div>
    </section>
  );
}