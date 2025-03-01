import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, GraduationCap } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  activities: string;
  logo: string;
  skills: string[];
}

const EducationSection: React.FC = () => {
  const [educationList, setEducationList] = useState<Education[]>([
    {
      institution: "MIT",
      degree: "Bachelor of Science - Computer Science",
      duration: "2018 - 2022",
      grade: "3.9/4.0 GPA",
      activities: "AI Research Group, Coding Club",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/44/MIT_Seal.svg",
      skills: ["Machine Learning", "Python", "+5 skills"],
    },
    {
      institution: "Harvard University",
      degree: "Master of Science - Data Science",
      duration: "2022 - 2024",
      grade: "4.0/4.0 GPA",
      activities: "Data Science Club, Hackathons",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg",
      skills: ["Big Data", "Statistics", "+3 skills"],
    },
  ]);

  return (
    <Card className="p-4 md:p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Education</h2>
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
        {educationList.map((edu, index) => (
          <div key={index} className="flex gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={edu.logo} alt={edu.institution} />
              <AvatarFallback>
                <GraduationCap className="w-6 h-6" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-sm font-semibold">{edu.institution}</h3>
              <p className="text-xs">{edu.degree}</p>
              <p className="text-xs text-gray-500">{edu.duration}</p>
              <p className="text-xs mt-1">Grade: {edu.grade}</p>
              <p className="text-xs mt-1">
                Activities: {edu.activities}
              </p>
              <p className="text-xs mt-1">
                {edu.skills.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default EducationSection;
