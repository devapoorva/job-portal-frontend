import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import LoginWithgoogl from "@/components/login-with-google";
import { AuthContextProvider } from "@/lib/context/AuthContext";
import {ClientSection} from "@/components/home/client-section";
import {FeatureSection} from "@/components/home/feature-section";
import {FooterSection} from "@/components/home/footer-section";

export default function Home() {
  return (
    <>
      {/* <AuthContextProvider><LoginWithgoogl /></AuthContextProvider> */}
      <Header />
      <HeroSection />
      <ClientSection />
      <FeatureSection />
        <FooterSection />
    </>
  );
}
