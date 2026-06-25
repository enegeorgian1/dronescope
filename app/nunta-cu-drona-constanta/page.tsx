import LandingPageView from "@/components/landing/LandingPageView";
import LandingStructuredData from "@/components/landing/LandingStructuredData";
import { nuntaCuDronaConstanta } from "@/lib/landing-pages/nunta-cu-drona-constanta";
import { generateLandingMetadata } from "@/lib/landing-metadata";

export const metadata = generateLandingMetadata(nuntaCuDronaConstanta);

export default function NuntaCuDronaConstantaPage() {
  return (
    <>
      <LandingStructuredData landing={nuntaCuDronaConstanta} />
      <LandingPageView landing={nuntaCuDronaConstanta} />
    </>
  );
}