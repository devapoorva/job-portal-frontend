import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BadgeCheck, Camera, Edit2, Pencil } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  title: string;
  location: string;
  company: string;
  university: string;
  followers: number;
  connections: number;
  profileImage: string;
  companyLogo: string;
  universityLogo: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  title,
  location,
  company,
  university,
  followers,
  connections,
  profileImage,
  companyLogo,
  universityLogo,
}) => {
  return (
    <Card className="relative w-full rounded-lg shadow-lg">
      <div className="relative w-full h-32 bg-gray-300 flex justify-end p-2">
        <Button variant="ghost" size="icon">
          <Camera className="w-5 h-5 text-gray-700" />
        </Button>
      </div>
      <div className="absolute top-16 left-6">
        <div className="relative w-40 h-40">
          <Avatar className="w-full h-full border-4 border-white shadow-md">
            <AvatarImage src={profileImage} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <button
            className="absolute bottom-2 right-3 bg-white p-1 rounded-full shadow-md hover:bg-gray-200"
            onClick={() => alert("Edit Profile Picture")}
          >
            <Pencil className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-6 pt-20 mt-10">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">{name}</h1>
          <BadgeCheck className="text-blue-500 w-5 h-5" />
        </div>
        <p>{title}</p>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src={companyLogo} alt="Company Logo" />
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <p className="text-sm">{company}</p>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src={universityLogo} alt="University Logo" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <p className="text-sm">{university}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-blue-600 text-sm">
          <p>{followers} followers</p>
          <p>{connections}+ connections</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="default">Open to</Button>
          <Button variant="outline">
            <Edit2 className="w-4 h-4 mr-1" /> Edit Profile
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProfileHeader;
