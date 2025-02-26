"use client"

import { CustomDialog } from "@/components/shard/custom-dialog";
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/context/AuthContext"
import { useState } from "react";
export default function Page() {
  const {user} = useAuth();
const [open,setOpen] = useState(false);
const openDialog =()=>{
  setOpen(true)
}

  return (
    <div className="text-xl">Admin dashboard{user?.displayName}
    <Button  size={"sm"} onClick={openDialog}>Open dialog</Button>
    <CustomDialog
          open={open}
          title="Form Dialog"
        
          onOpenChange={setOpen}
        >
          <div >
            vhkdjfhkdjfgkjdfhgkjdhfkj
          </div>
        </CustomDialog>
    </div>
  )
}
