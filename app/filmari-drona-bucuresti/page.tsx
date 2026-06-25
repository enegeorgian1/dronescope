import LandingPageView from "@/components/landing/LandingPageView";
import LandingStructuredData from "@/components/landing/LandingStructuredData";
import { filmariDronaBucuresti } from "@/lib/landing-pages/filmari-drona-bucuresti";
import { generateLandingMetadata } from "@/lib/landing-metadata";

export const metadata = generateLandingMetadata(filmariDronaBucuresti);

export default function FilmariDronaBucurestiPage() {
  return (
    <>
      <LandingStructuredData landing={filmariDronaBucuresti} />
      <LandingPageView landing={filmariDronaBucuresti} />
    </>
  );
}