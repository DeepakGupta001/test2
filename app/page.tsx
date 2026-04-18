import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Differentiators } from "@/components/sections/differentiators";
import { Manifesto } from "@/components/sections/manifesto";
import { CoreServices } from "@/components/sections/core-services";
import { Modalities } from "@/components/sections/modalities";
import { Process } from "@/components/sections/process";
import { Quality } from "@/components/sections/quality";
import { ComplianceStrip } from "@/components/sections/compliance-strip";
import { FooterCTA } from "@/components/sections/footer-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <SocialProof />
        <Differentiators />
        <Manifesto />
        <CoreServices />
        <Modalities />
        <Process />
        <Quality />
        <ComplianceStrip />
        <FooterCTA />
      </main>
      <SiteFooter />
    </>
  );
}
