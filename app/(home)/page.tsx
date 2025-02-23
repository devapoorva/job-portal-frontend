import LoginWithgoogl from "@/components/login-with-google";
import { AuthContextProvider } from "@/lib/context/AuthContext";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AuthContextProvider><LoginWithgoogl /></AuthContextProvider>
    </div>
  );
}
