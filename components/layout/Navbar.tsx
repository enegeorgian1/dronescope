"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DroneLogo from "@/components/ui/DroneLogo";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/#despre", label: "Despre noi" },
  { href: "/servicii", label: "Servicii" },
  { href: "/#proces", label: "Procesul nostru" },
  { href: "/portofoliu", label: "Portofoliu" },
  { href: "/blog", label: "Blog" },
  { href: "/#testimoniale", label: "Testimoniale" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.slice(1);
      if (isHome) {
        const element = document.querySelector(id);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition - bodyRect - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      } else {
        window.location.href = href;
      }
    }
    setIsOpen(false);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Bună ziua! Sunt interesat de serviciile Drone Scope. Aș dori o ofertă.");
    window.open(`https://wa.me/40729626932?text=${message}`, "_blank");
  };

  const callPhone = () => {
    window.location.href = "tel:+40729626932";
  };

  return (
    <nav
      aria-label="Navigare principală"
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/15 bg-bg/95 backdrop-blur-2xl shadow-lg shadow-black/20"
          : "border-white/10 bg-bg/80 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link
          href="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center pr-2 md:pr-4"
          aria-label="Drone Scope — mergi la începutul paginii"
        >
          <span className="sr-only">Drone Scope</span>
          <DroneLogo size={28} />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <button
                type="button"
                key={link.href}
                onClick={() => navigate(link.href)}
                className="nav-link text-sm"
              >
                {link.label}
              </button>
            ) : (
              <Link key={link.href} href={link.href} className="nav-link text-sm">
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button type="button" onClick={callPhone} className="btn-ghost flex items-center gap-2">
            <Phone className="w-4 h-4" aria-hidden="true" />
            0729 626 932
          </button>
          <button type="button" onClick={openWhatsApp} className="btn-primary">
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            WhatsApp
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-secondary"
          aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`md:hidden border-t border-white/10 bg-bg overflow-hidden transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-8 flex flex-col gap-6 text-lg">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <button
                type="button"
                key={link.href}
                onClick={() => navigate(link.href)}
                className="text-left text-text-secondary active:text-text"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-left text-text-secondary active:text-text"
              >
                {link.label}
              </Link>
            )
          )}

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button type="button" onClick={callPhone} className="btn-secondary justify-center">
              <Phone className="w-4 h-4" aria-hidden="true" /> 0729 626 932
            </button>
            <button type="button" onClick={openWhatsApp} className="btn-primary justify-center">
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> Scrie-ne pe WhatsApp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}