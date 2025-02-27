"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Globe } from "lucide-react";
import { useState } from "react";
export function HeroSection() {
  const [query, setQuery] = useState("");
  return (
    <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-[80vh]">
      <div className="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <h1 className="max-w-2xl mb-10 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-5xl dark:text-white">
          Find Your Dream Job Now.
        </h1>
        <Tabs defaultValue="candidate" className="mx-auto mb-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="candidate">Candidate</TabsTrigger>
            <TabsTrigger value="employer">Employer</TabsTrigger>
          </TabsList>
          <TabsContent value="candidate">
            <div className="flex items-center space-x-2 p-3 rounded-xl w-full max-w-xl">
              <Input
                type="text"
                placeholder="Ask anything..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-20 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                variant="secondary"
                className="bg-blue-600 text-white rounded-full px-5 py-2 ml-2 hover:bg-blue-700"
              >
                <Globe size={18} className="mr-1" />
                Search
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="employer">
            <div className="flex items-center space-x-2 p-3 rounded-xl w-full max-w-xl">
              <Input
                type="text"
                placeholder="Ask anything..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-20 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                variant="secondary"
                className="bg-blue-600 text-white rounded-full px-5 py-2 ml-2 hover:bg-blue-700"
              >
                <Globe size={18} className="mr-1" />
                Search
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
