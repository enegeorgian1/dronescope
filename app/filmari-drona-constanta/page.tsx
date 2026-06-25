import LandingPageView from "@/components/landing/LandingPageView";
import LandingStructuredData from "@/components/landing/LandingStructuredData";
import { filmariDronaConstanta } from "@/lib/landing-pages/filmari-drona-constanta";
import { generateLandingMetadata } from "@/lib/landing-metadata";

export const metadata = generateLandingMetadata(filmariDronaConstanta);

export default function FilmariDronaConstantaPage() {
  return (
    <>
      <LandingStructuredData landing={filmariDronaConstanta} />
      <LandingPageView landing={filmariDronaConstanta} />
    </>
  );
}