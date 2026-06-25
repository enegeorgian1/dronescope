import LandingPageView from "@/components/landing/LandingPageView";
import LandingStructuredData from "@/components/landing/LandingStructuredData";
import { filmariDronaEforie } from "@/lib/landing-pages/filmari-drona-eforie";
import { generateLandingMetadata } from "@/lib/landing-metadata";

export const metadata = generateLandingMetadata(filmariDronaEforie);

export default function FilmariDronaEforiePage() {
  return (
    <>
      <LandingStructuredData landing={filmariDronaEforie} />
      <LandingPageView landing={filmariDronaEforie} />
    </>
  );
}