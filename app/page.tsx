import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import SectionFallback from "@/components/ui/SectionFallback";
import FloatingButtonsLoader from "@/components/ui/FloatingButtonsLoader";

const WhyUs = dynamic(() => import("@/components/sections/WhyUs"), {
  loading: () => <SectionFallback />,
});
const Equipment = dynamic(() => import("@/components/sections/Equipment"), {
  loading: () => <SectionFallback />,
});
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"), {
  loading: () => <SectionFallback />,
});
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => <SectionFallback />,
});
const Clients = dynamic(() => import("@/components/sections/Clients"), {
  loading: () => <SectionFallback />,
});
const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <SectionFallback />,
});
const CTA = dynamic(() => import("@/components/sections/CTA"), {
  loading: () => <SectionFallback />,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <SectionFallback />,
});

export default function DroneScopeWebsite() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Equipment />
      <Process />
      <Portfolio />
      <Testimonials />
      <Clients />
      <FAQ />
      <CTA />
      <Contact />
      <FloatingButtonsLoader />
    </main>
  );
}