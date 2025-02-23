"use client";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";
import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from 'next/navigation'

export default function LoginWithgoogl() {
  const { handleSignWithEmailPasssword, user } = useAuth();
  const router = useRouter()
  if(user){
    router.push('/admin')
  }
  return (
    <Button onClick={handleSignWithEmailPasssword}>
      <MailIcon /> Login with Google
    </Button>
  );
}
