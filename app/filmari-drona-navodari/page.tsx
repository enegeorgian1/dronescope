import LandingPageView from "@/components/landing/LandingPageView";
import LandingStructuredData from "@/components/landing/LandingStructuredData";
import { filmariDronaNavodari } from "@/lib/landing-pages/filmari-drona-navodari";
import { generateLandingMetadata } from "@/lib/landing-metadata";

export const metadata = generateLandingMetadata(filmariDronaNavodari);

export default function FilmariDronaNavodariPage() {
  return (
    <>
      <LandingStructuredData landing={filmariDronaNavodari} />
      <LandingPageView landing={filmariDronaNavodari} />
    </>
  );
}