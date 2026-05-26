import DroneLogo from "@/components/ui/DroneLogo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-y-10">
        <div>
          <DroneLogo size={24} />
          <p className="mt-4 max-w-sm text-text-secondary text-sm">
            Filmări și fotografii aeriene premium cu dronă. 
            Viziune de la înălțime pentru proiecte care merită să fie văzute altfel.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold mb-3">Companie</div>
            <div className="space-y-2 text-text-secondary">
              <div>Despre noi</div>
              <div>Portofoliu</div>
              <div>Proces</div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <div className="space-y-2 text-text-secondary">
              <a href="tel:+40729626932" className="block hover:text-accent">0729 626 932</a>
              <a href="https://wa.me/40729626932" target="_blank" className="block hover:text-accent">WhatsApp</a>
              <a href="mailto:service@dronedoctor.ro" className="block hover:text-accent">service@dronedoctor.ro</a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3">Locație</div>
            <div className="text-text-secondary">
              Constanța, România<br />
              Acoperire națională
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-xs text-text-muted flex flex-col md:flex-row justify-between gap-2">
        <div>© {new Date().getFullYear()} Drone Scope. Toate drepturile rezervate.</div>
        <div className="flex gap-4">
          <span>Politica de confidențialitate</span>
          <span>Termeni și condiții</span>
        </div>
      </div>
    </footer>
  );
}
