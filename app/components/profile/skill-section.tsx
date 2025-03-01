import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Skill {
  name: string;
  endorsedBy: string;
  companyLogo: string;
}

const SkillSection: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([
    {
      name: "RESTful WebServices",
      endorsedBy: "test demo",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo-placeholder.svg",
    },
    {
      name: "JSON",
      endorsedBy: "test demo",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo-placeholder.svg",
    },
  ]);

  return (
    <Card className="p-4 md:p-6 rounded-lg shadow-sm border">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Skills</h2>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Plus className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Pencil className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex gap-3 items-center">
            <Avatar className="w-8 h-8">
              <AvatarImage src={skill.companyLogo} alt="Company Logo" />
              <AvatarFallback>👨‍💻</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-sm font-semibold">{skill.name}</h3>
              <p className="text-xs text-gray-500">{skill.endorsedBy}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SkillSection;
