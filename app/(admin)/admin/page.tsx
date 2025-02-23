"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/context/AuthContext"
export default function Page() {
  const {user} = useAuth();
  console.log(JSON.stringify(user))
  return (
    <div className="text-xl">Admin dashboard{user?.displayName}
    <Button  size={"sm"}>Hello</Button>
    </div>
  )
}
