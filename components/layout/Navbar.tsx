"use client";

import React, { useState } from "react";
import DroneLogo from "@/components/ui/DroneLogo";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#despre", label: "Despre noi" },
  { href: "#servicii", label: "Servicii" },
  { href: "#proces", label: "Procesul nostru" },
  { href: "#portofoliu", label: "Portofoliu" },
  { href: "#testimoniale", label: "Testimoniale" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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
  className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
    scrolled
      ? "border-white/15 bg-bg/95 backdrop-blur-2xl shadow-lg shadow-black/20"
      : "border-white/10 bg-bg/80 backdrop-blur-xl"
  }`}
>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center pr-2 md:pr-4">
          <DroneLogo size={28} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="nav-link text-sm"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={callPhone}
            className="btn-ghost flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            0729 626 932
          </button>
          <button onClick={openWhatsApp} className="btn-primary">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-secondary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-bg"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-text-secondary active:text-text"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={callPhone}
                  className="btn-secondary justify-center"
                >
                  <Phone className="w-4 h-4" /> 0729 626 932
                </button>
                <button onClick={openWhatsApp} className="btn-primary justify-center">
                  <MessageCircle className="w-4 h-4" /> Scrie-ne pe WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
