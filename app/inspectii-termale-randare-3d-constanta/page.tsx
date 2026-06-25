import LandingPageView from "@/components/landing/LandingPageView";
import LandingStructuredData from "@/components/landing/LandingStructuredData";
import { inspectiiTermaleConstanta } from "@/lib/landing-pages/inspectii-termale-constanta";
import { generateLandingMetadata } from "@/lib/landing-metadata";

export const metadata = generateLandingMetadata(inspectiiTermaleConstanta);

export default function InspectiiTermaleConstantaPage() {
  return (
    <>
      <LandingStructuredData landing={inspectiiTermaleConstanta} />
      <LandingPageView landing={inspectiiTermaleConstanta} />
    </>
  );
}