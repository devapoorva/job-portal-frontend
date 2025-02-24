import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import {ClientSection} from "@/components/home/client-section";
import {FeatureSection} from "@/components/home/feature-section";
import {FooterSection} from "@/components/home/footer-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ClientSection />
      <FeatureSection />
        <FooterSection />
    </>
  );
}
