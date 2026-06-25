import LandingPageView from "@/components/landing/LandingPageView";
import LandingStructuredData from "@/components/landing/LandingStructuredData";
import { filmariImobiliareMamaia } from "@/lib/landing-pages/filmari-imobiliare-mamaia";
import { generateLandingMetadata } from "@/lib/landing-metadata";

export const metadata = generateLandingMetadata(filmariImobiliareMamaia);

export default function FilmariImobiliareMamaiaPage() {
  return (
    <>
      <LandingStructuredData landing={filmariImobiliareMamaia} />
      <LandingPageView landing={filmariImobiliareMamaia} />
    </>
  );
}