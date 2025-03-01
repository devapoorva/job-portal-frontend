"use client";
import logoImg from "../../../public/logo.png";
import Image from "next/image";
import { LoginForm } from "@/components/login-form";
import { Header } from "@/components/home/header";
import ProfileHeader from "@/components/profile/profile-header";

export default function Login() {
  return (
    <>
      <Header />
      <div className="flex justify-center p-4">
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
      </div>
    </>
  );
}
