import LandingPageView from "@/components/landing/LandingPageView";
import LandingStructuredData from "@/components/landing/LandingStructuredData";
import { filmariDronaOvidiu } from "@/lib/landing-pages/filmari-drona-ovidiu";
import { generateLandingMetadata } from "@/lib/landing-metadata";

export const metadata = generateLandingMetadata(filmariDronaOvidiu);

export default function FilmariDronaOvidiuPage() {
  return (
    <>
      <LandingStructuredData landing={filmariDronaOvidiu} />
      <LandingPageView landing={filmariDronaOvidiu} />
    </>
  );
}