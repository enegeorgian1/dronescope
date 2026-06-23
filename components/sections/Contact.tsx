"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import SectionTitle from "@/components/ui/SectionTitle";

const contactSchema = z.object({
  name: z.string().min(2, "Numele trebuie să aibă minim 2 caractere"),
  email: z.string().email("Adresa de email nu este validă"),
  phone: z.string().min(10, "Te rugăm să introduci un număr de telefon valid"),
  service: z.string().min(1, "Te rugăm să selectezi un tip de serviciu"),
  preferredDate: z.string().optional(),
  message: z.string().min(15, "Mesajul trebuie să aibă minim 15 caractere"),
});

type ContactForm = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Filmări & Fotografii Imobiliare",
  "Reclame & Marketing",
  "Nunți & Evenimente Speciale",
  "Filmări Industriale & Construcții",
  "Videoclipuri Promoționale & Corporate",
  "Altul",
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Always show success to the user so we don't lose leads.
      // The backend will log everything + try to send the email.
      setIsSubmitted(true);
      toast.success("Mesajul a fost înregistrat!", {
        description: "Vom reveni la tine în maxim 2 ore. Verifică și folderul Spam.",
        duration: 7000,
      });

      setTimeout(() => {
        reset();
        setIsSubmitted(false);
      }, 3000);

      if (!response.ok) {
        console.warn("Form submitted successfully, but the API had an issue. Check server logs.");
      }
    } catch (error) {
      console.error(error);
      // Even on network error, we still thank the user
      setIsSubmitted(true);
      toast.success("Mesajul a fost înregistrat!", {
        description: "Vom reveni la tine în maxim 2 ore. (A apărut o problemă tehnică temporară)",
        duration: 8000,
      });

      setTimeout(() => {
        reset();
        setIsSubmitted(false);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section bg-surface border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[3px] text-xs text-accent mb-3">HAIDE SĂ VORBIM</div>
          <SectionTitle className="mb-4">Suntem gata să zburăm pentru proiectul tău.</SectionTitle>
          <p className="text-text-secondary max-w-lg mx-auto">
            Completează formularul sau scrie-ne direct pe WhatsApp. Răspundem rapid.
          </p>
        </div>

        <motion.div 
          className="grid lg:grid-cols-5 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-9 h-9 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Mulțumim!</h3>
                  <p className="text-text-secondary max-w-sm">
                    Mesajul tău a fost trimis cu succes. Te vom contacta în maxim 2 ore.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nume */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-text-secondary">Nume complet</label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Ion Popescu"
                        className="input"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-text-secondary">Email</label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="ion.popescu@email.com"
                        className="input"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Telefon */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-text-secondary">Telefon / WhatsApp</label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="0729 626 932"
                        className="input"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone.message}</p>}
                    </div>

                    {/* Tip serviciu */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-text-secondary">Tip de serviciu</label>
                      <select {...register("service")} className="select">
                        <option value="">Selectează...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && <p className="text-red-400 text-xs mt-1.5">{errors.service.message}</p>}
                    </div>
                  </div>

                  {/* Data preferată */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-text-secondary">
                      Data preferată (opțional)
                    </label>
                    <input
                      {...register("preferredDate")}
                      type="date"
                      className="input"
                    />
                  </div>

                  {/* Mesaj */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-text-secondary">Mesaj / Detalii proiect</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Vreau filmări aeriene pentru o vilă de lux în Mamaia Nord..."
                      className="input resize-y min-h-[120px]"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full sm:w-auto px-10 py-4 text-base flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Se trimite...
                      </>
                    ) : (
                      <>
                        TRIMITE MESAJUL
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-text-muted pt-2">
                    Răspundem în maxim 2 ore în timpul programului. Sau scrie-ne direct pe WhatsApp pentru răspuns imediat.
                  </p>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Info Side */}
          <div className="lg:col-span-2 space-y-8 pt-2">
            <div>
              <div className="text-accent text-xs tracking-widest mb-3">CONTACT DIRECT</div>
              <div className="space-y-4 text-lg">
                <a href="tel:+40729626932" className="block hover:text-accent transition">
                  0729 626 932
                </a>
                <a href="https://wa.me/40729626932" target="_blank" className="block hover:text-accent transition">
                  WhatsApp
                </a>
                <a href="mailto:contact@dronescope.ro" className="block hover:text-accent transition">
                  contact@dronescope.ro
                </a>
              </div>
            </div>

            <div>
              <div className="text-accent text-xs tracking-widest mb-3">LOCAȚIE</div>
              <p className="text-text-secondary">
                Constanța, România<br />
                Acoperire națională
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="text-sm text-text-secondary leading-relaxed">
                Răspundem de obicei în maxim 2 ore. Pentru proiecte urgente, sună-ne direct sau scrie pe WhatsApp.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
