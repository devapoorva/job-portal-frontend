"use client"
import logoImg from '../../../public/logo.png'
import Image from "next/image";
import {LoginForm} from "@/components/login-form";
import {useAuth} from "@/lib/context/AuthContext";

export default function Login(){
 const {loading} = useAuth();
 if(loading)return <div className="flex justify-center items-center h-screen">Loading...</div>;
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium">
                    <Image src={logoImg} className="h-8 mr-3 sm:h-9" width={150} alt="Landwind Logo" />

                </a>
                <LoginForm />
            </div>
        </div>
    )
}