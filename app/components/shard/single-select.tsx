"use client"

import { Check, ChevronsUpDown } from "lucide-react"
import { Control } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface ComboboxFieldProps<T extends Record<string, any>> {
  control: Control<any>
  options: T[]
  name: string
  label: string
  valueKey?: keyof T
  labelKey?: keyof T
  description?: string
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  buttonWidth?: string
}

export default function SingleSelect<T extends Record<string, any>>({
  control,
  options,
  name,
  label,
  valueKey = "value" as keyof T,
  labelKey = "label" as keyof T,
  description,
  placeholder = "Select an option",
  searchPlaceholder = "Search...",
  emptyMessage = "No option found.",
  buttonWidth = "w-full",
}: ComboboxFieldProps<T>) {
  return (
    <div className="w-full">
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    buttonWidth + " justify-between",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value
                    ? options.find(
                        (option) => String(option[valueKey]) === String(field.value)
                      )?.[labelKey]
                    : placeholder}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent align="start" className="min-w-[var(--radix-popover-trigger-width)] p-0">
              <Command>
                <CommandInput placeholder={searchPlaceholder} />
                <CommandList>
                  <CommandEmpty>{emptyMessage}</CommandEmpty>
                  <CommandGroup>
                    {options.map((option, index) => (
                      <CommandItem
                        value={String(option[labelKey])}
                        key={index}
                        onSelect={() => {
                          field.onChange(option[valueKey])
                        }}
                      >
                        {String(option[labelKey])}
                        <Check
                          className={cn(
                            "ml-auto",
                            String(option[valueKey]) === String(field.value)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
       
      )}
    />
     </div>
  )
}