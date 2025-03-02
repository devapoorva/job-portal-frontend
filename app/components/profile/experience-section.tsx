import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Briefcase } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  employmentType: string;
  logo: string;
  skills: string[];
}

const ExperienceSection: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      company: "Google",
      role: "Software Engineer",
      location: "Mountain View, California · Remote",
      duration: "Jan 2023 - Present · 1 yr 2 mos",
      employmentType: "Full-time",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
      skills: ["React", "Node.js", "Cloud Computing", "+15 skills"],
    },
    {
      company: "Microsoft",
      role: "Frontend Developer",
      location: "Redmond, Washington · On-site",
      duration: "Jul 2021 - Dec 2022 · 1 yr 6 mos",
      employmentType: "Full-time",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      skills: ["TypeScript", "Azure", "Redux", "+10 skills"],
    },
    {
      company: "Amazon",
      role: "Software Development Intern",
      location: "Seattle, Washington · Hybrid",
      duration: "May 2020 - Aug 2020 · 4 mos",
      employmentType: "Internship",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      skills: ["AWS", "Python", "Microservices", "+5 skills"],
    },
  ]);

  return (
    <Card className="p-4 md:p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Experience</h2>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Plus className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Pencil className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="mt-4 space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={exp.logo} alt={exp.company} />
              <AvatarFallback>
                <Briefcase className="w-6 h-6" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-sm font-semibold">{exp.company}</h3>
              <p className="text-xs">
                {exp.employmentType} · {exp.duration}
              </p>
              <p className="text-xs text-gray-500">{exp.location}</p>
              <p className="text-xs mt-1">
                {exp.skills.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ExperienceSection;
