import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

interface AboutSectionProps {
  aboutText: string;
  onEdit: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutText, onEdit }) => {
  return (
    <Card className="p-4 md:p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">About</h2>
        <Button variant="ghost" size="icon" onClick={onEdit}>
          <Pencil className="w-4 h-4" />
        </Button>
      </div>
      <p className=" text-sm mt-2 leading-relaxed">
          {aboutText}
      </p>
    </Card>
  );
};

export default AboutSection;
