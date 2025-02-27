"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"


interface CustomDialogProps {
  title: string
  description?: string
  open:boolean
  children: React.ReactNode
  footerContent?: React.ReactNode
  onOpenChange?: (open: boolean) => void
}

export function CustomDialog({
  title,
  description,
  open,
  children,
  footerContent,
  onOpenChange
}: CustomDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="py-1">
          {children}
        </div>
        {footerContent && (
          <DialogFooter>
            {footerContent}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}