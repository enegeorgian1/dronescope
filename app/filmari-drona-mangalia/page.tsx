import LandingPageView from "@/components/landing/LandingPageView";
import LandingStructuredData from "@/components/landing/LandingStructuredData";
import { filmariDronaMangalia } from "@/lib/landing-pages/filmari-drona-mangalia";
import { generateLandingMetadata } from "@/lib/landing-metadata";

export const metadata = generateLandingMetadata(filmariDronaMangalia);

export default function FilmariDronaMangaliaPage() {
  return (
    <>
      <LandingStructuredData landing={filmariDronaMangalia} />
      <LandingPageView landing={filmariDronaMangalia} />
    </>
  );
}