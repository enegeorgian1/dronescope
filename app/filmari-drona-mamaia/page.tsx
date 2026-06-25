import LandingPageView from "@/components/landing/LandingPageView";
import LandingStructuredData from "@/components/landing/LandingStructuredData";
import { filmariDronaMamaia } from "@/lib/landing-pages/filmari-drona-mamaia";
import { generateLandingMetadata } from "@/lib/landing-metadata";

export const metadata = generateLandingMetadata(filmariDronaMamaia);

export default function FilmariDronaMamaiaPage() {
  return (
    <>
      <LandingStructuredData landing={filmariDronaMamaia} />
      <LandingPageView landing={filmariDronaMamaia} />
    </>
  );
}