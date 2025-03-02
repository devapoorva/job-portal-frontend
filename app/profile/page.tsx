"use client";
import logoImg from "../../../public/logo.png";
import Image from "next/image";
import { LoginForm } from "@/components/login-form";
import { Header } from "@/components/home/header";
import ProfileHeader from "@/components/profile/profile-header";
import AboutSection from "@/components/profile/about-section";
import ExperienceSection from "@/components/profile/experience-section";
import EducationSection from "@/components/profile/education-section";
import LicenseSection from "@/components/profile/licence-section";
import SkillSection from "@/components/profile/skill-section";

export default function Login() {
  return (
    <>
      <Header />
      <div className="justify-center p-4 flex flex-col gap-4">
        <ProfileHeader
          name="Demo"
          title="React • Angular • React Native • Javascript"
          location="Bihar"
          company="Company"
          university="University"
          followers={444}
          connections={420}
          profileImage="https://github.com/shadcn.png"
          companyLogo="https://github.com/shadcn.png"
          universityLogo="https://github.com/shadcn.png"
        />
        <AboutSection
          aboutText="I am a Software Engineer with a strong foundation in full-stack development, focusing on creating efficient and scalable applications..."
          onEdit={() => alert("Edit About Section")}
        />
        <ExperienceSection />
        <EducationSection />
        <LicenseSection />
        <SkillSection />
      </div>
    </>
  );
}
