import DroneLogo from "@/components/ui/DroneLogo";

const footerLinks = {
  companie: [
    { href: "#despre", label: "Despre noi" },
    { href: "#servicii", label: "Servicii" },
    { href: "#portofoliu", label: "Portofoliu" },
    { href: "#proces", label: "Proces" },
    { href: "#faq", label: "Întrebări frecvente" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-y-10">
        <div>
          <a href="#" aria-label="Drone Scope - Acasă">
            <DroneLogo size={24} />
          </a>
          <p className="mt-4 max-w-sm text-text-secondary text-sm">
            Filmări și fotografii aeriene premium cu dronă.
            Viziune de la înălțime pentru proiecte care merită să fie văzute altfel.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold mb-3">Companie</div>
            <div className="space-y-2 text-text-secondary">
              {footerLinks.companie.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block underline-offset-2 hover:text-accent-light hover:underline transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <div className="space-y-2 text-text-secondary">
              <a href="tel:+40729626932" className="block underline-offset-2 hover:text-accent-light hover:underline transition-colors">0729 626 932</a>
              <a href="https://wa.me/40729626932" target="_blank" rel="noopener noreferrer" className="block underline-offset-2 hover:text-accent-light hover:underline transition-colors">WhatsApp</a>
              <a href="mailto:contact@dronescope.ro" className="block underline-offset-2 hover:text-accent-light hover:underline transition-colors">contact@dronescope.ro</a>
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

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-xs text-text-secondary flex flex-col md:flex-row justify-between gap-2">
        <div>© {new Date().getFullYear()} Drone Scope. Toate drepturile rezervate.</div>
        <div className="flex gap-4">
          <a href="#contact" className="link-accessible">Contact</a>
          <a href="https://wa.me/40729626932" target="_blank" rel="noopener noreferrer" className="link-accessible">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}