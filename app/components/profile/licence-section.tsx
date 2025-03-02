import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, ExternalLink, BadgeCheck } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface License {
  title: string;
  issuer: string;
  issuedDate: string;
  credentialUrl: string;
  logo: string;
  skills: string[];
}

const LicenseSection: React.FC = () => {
  const [licenses, setLicenses] = useState<License[]>([
    {
      title: "Full-Stack Web Development with React",
      issuer: "Coursera",
      issuedDate: "May 2022",
      credentialUrl: "https://coursera.org",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Coursera-Logo.svg",
      skills: ["MongoDB", "REST API", "+7 skills"],
    },
    {
      title: "Server-side Development with Node.js, Express, and MongoDB",
      issuer: "Coursera",
      issuedDate: "May 2022",
      credentialUrl: "https://coursera.org",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Coursera-Logo.svg",
      skills: ["NoSQL", "Git", "+2 skills"],
    },
  ]);

  return (
    <Card className="p-4 md:p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Licenses & Certifications</h2>
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
        {licenses.map((license, index) => (
          <div key={index} className="flex gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={license.logo} alt={license.issuer} />
              <AvatarFallback>
                <BadgeCheck className="w-6 h-6" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-sm font-semibold">{license.title}</h3>
              <p className="text-xs">{license.issuer}</p>
              <p className="text-xs text-gray-500">Issued {license.issuedDate}</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2 flex items-center gap-2"
                onClick={() => window.open(license.credentialUrl, "_blank")}
              >
                Show credential <ExternalLink className="w-4 h-4" />
              </Button>
              <p className="text-xs mt-2">
                {license.skills.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default LicenseSection;
