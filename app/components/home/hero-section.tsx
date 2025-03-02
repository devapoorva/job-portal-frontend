import Image from "next/image";
import heroImg from "../../../public/hero.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
export function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl dark:text-white">
            Find Your Dream Job Now.
          </h1>
          <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full max-w-3xl mx-auto">
            <Input
              placeholder="Enter skills / designations / companies"
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-[150px]"
            />
            <span className="h-6 w-px bg-gray-300 mx-2" />
            <Select
              placeholder="Select Experience"
              items={[
                { value: "1", label: "1 Year" },
                { value: "2", label: "2 Years" },
                { value: "3", label: "3+ Years" },
              ]}
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <span className="h-6 w-px bg-gray-300 mx-2" />
            <Input
              placeholder="Enter location"
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-[150px]"
            />
            <Button className="bg-blue-600 text-white rounded-full px-5 py-2 ml-2 hover:bg-blue-700">
              Search
            </Button>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={heroImg} alt="hero image" />
        </div>
      </div>
    </section>
  )
}